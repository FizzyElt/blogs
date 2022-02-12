import { Box, Flex, Spacer } from '@chakra-ui/react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default function PageContainer({
  children,
  hideHeader = false,
  hideFooter = false,
}) {
  return (
    <Flex minH='100vh' direction='column' bgColor='gray.800'>
      {!hideHeader && <Header />}
      <Box>{children}</Box>
      <Spacer />
      {!hideFooter && <Footer />}
    </Flex>
  );
}
