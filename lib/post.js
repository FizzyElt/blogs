import path from 'path';

import matter from 'gray-matter';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

import fs from 'fs';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
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

  const matterData = matterResult.data;
  return {
    id,
    contentHtml,
    matterData,
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
