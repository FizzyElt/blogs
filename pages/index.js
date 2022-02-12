import { Container, VStack, StackDivider, Box } from '@chakra-ui/react';
import { getAllPostsInfo } from '~/lib/post';

import PageContainer from '~/containers/PageContainer';

import Profile from '~/components/Profile';
import PostCard from '~/components/PostCard';

export default function Home({ posts = [] }) {
  return (
    <PageContainer hideHeader>
      <Box bgColor='teal.600'>
        <Container maxW='container.sm' py={10}>
          <Profile />
        </Container>
      </Box>
      <Container m='auto' maxW='container.sm' py={8}>
        <VStack
          align='stretch'
          maxW='container.sm'
          spacing={5}
          divider={<StackDivider />}
        >
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
