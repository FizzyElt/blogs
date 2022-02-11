import 'github-markdown-css';
import 'highlight.js/styles/atom-one-dark.css';
import { getPostData, getAllPostsId } from '~/lib/post';

import { Box, Container } from '@chakra-ui/react';

import PageContainer from '~/containers/PageContainer';



export default function PostPage(props) {
  return (
    <PageContainer>
      <Container maxW='container.lg' py={10}>
        <Box
          className='markdown-body'
          bgColor='transparent'
          dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }}
        />
      </Container>
    </PageContainer>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostsId();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id || '');

  return {
    props: {
      postData,
    },
  };
}
