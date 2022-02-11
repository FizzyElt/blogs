import { Box, Flex, Spacer } from '@chakra-ui/react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default function PageContainer({ children }) {
  return (
    <Flex minH='100vh' direction='column' bgColor='gray.800'>
      <Header />
      <Box>{children}</Box>
      <Spacer />
      {/* <Footer /> */}
    </Flex>
  );
}
