import { Container, VStack, StackDivider, Box } from '@chakra-ui/react';
import { getAllPostsInfo } from '~/lib/post';

import PageContainer from '~/containers/PageContainer';

import Profile from '~/components/Profile';
import PostCard from '~/components/PostCard';
import GAScript from '~/components/GAScript';

import Head from 'next/head';
import Script from 'next/script';

import { profile } from '~/profileData';

export default function Home({ posts = [] }) {
  console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID);

  return (
    <>
      <Head>
        <title>{profile.name} blogs</title>
        <meta name="author" content={profile.name} />
        <meta name="description" content={profile.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="og:title" content={`${profile.name} blogs`} />
        <meta name="og:description" content={profile.description} />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="zh-tw" />
        <meta name="og:site_name" content={profile.name} />
      </Head>

      <PageContainer hideHeader>
        <Box bgColor="teal.600">
          <Container maxW="container.sm" py={10}>
            <Profile />
          </Container>
        </Box>
        <Container m="auto" maxW="container.sm" py={8}>
          <VStack align="stretch" maxW="container.sm" spacing={5} divider={<StackDivider />}>
            {posts.map(({ id, title, description, tags, editTime }) => (
              <PostCard
                key={id}
                id={id}
                title={title}
                description={description}
                tags={tags}
                editTime={editTime}
              />
            ))}
          </VStack>
        </Container>
      </PageContainer>
      <GAScript />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPostsInfo();

  return {
    props: {
      posts,
    },
  };
}
