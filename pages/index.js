import { Box, Container, Heading } from '@chakra-ui/react';
import { getPostData } from '~/lib/post';

import PageContainer from '~/containers/PageContainer';

export default function Home(props) {
  console.log(props);
  return (
    <PageContainer>
      <Container maxW='container.lg'>
        <Heading>Home</Heading>
      </Container>
    </PageContainer>
  );
}
