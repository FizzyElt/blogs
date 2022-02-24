import 'github-markdown-css/github-markdown-dark.css';
import 'highlight.js/styles/atom-one-dark.css';
import { getPostData, getAllPostsId } from '~/lib/post';

import {
  Box,
  Container,
  Tag,
  Heading,
  Text,
  HStack,
  VStack,
} from '@chakra-ui/react';

import PageContainer from '~/containers/PageContainer';

import Head from 'next/head';

import { profile } from '~/profileData';

export default function PostPage(props) {
  return (
    <>
      <Head>
        <title>{props.postData.title}</title>
        <meta name='author' content={profile.name} />
        <meta name='description' content={props.postData.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <PageContainer>
        <Container maxW='container.lg' py={10}>
          <VStack align='stretch' mb={10}>
            <Heading>{props.postData.title}</Heading>
            <HStack>
              {props.postData.tags.map((tag, index) => (
                <Tag key={index} variant='outline' color='yellow.300'>
                  {tag}
                </Tag>
              ))}
            </HStack>
            <Text color='gray.400' fontWeight='bold'>
              {props.postData.editTime}
            </Text>
          </VStack>
          <Box
            className='markdown-body'
            bgColor='transparent'
            dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }}
          />
        </Container>
      </PageContainer>
    </>
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
