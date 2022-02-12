import path from 'path';

import matter from 'gray-matter';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

import format from 'date-fns/format';
import compareDesc from 'date-fns/compareDesc';

import * as R from 'ramda';

import fs from 'fs';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const fileStatus = fs.statSync(fullPath);

  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .use(rehypeHighlight)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title || '',
    description: matterResult.data.description || '',
    tags: (matterResult.data.tags || '')
      .split(',')
      .map(R.trim)
      .filter(R.pipe(R.isEmpty, R.not)),

    editTime: format(fileStatus.mtime, 'yyyy/MM/dd'),
  };
}

export function getAllPostsId() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((filename) => ({
    params: {
      id: filename.replace(/\.md$/, ''),
    },
  }));
}

export function getAllPostsInfo() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);

      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const fileStatus = fs.statSync(fullPath);

      const matterResult = matter(fileContents);
      return {
        id: fileName.replace(/\.md$/, ''),
        title: matterResult.data.title || '',
        description: matterResult.data.description || '',
        tags: (matterResult.data.tags || '')
          .split(',')
          .map(R.trim)
          .filter(R.pipe(R.isEmpty, R.not)),

        editTime: fileStatus.mtime.getTime(),
      };
    })
    .sort((a, b) => compareDesc(a.editTime, b.editTime));
}
