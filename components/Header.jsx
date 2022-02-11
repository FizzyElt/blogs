import {
  Box,
  Flex,
  Spacer,
  Text,
  Container,
  Avatar,
  HStack,
  Icon,
  Link,
} from '@chakra-ui/react';

import { IoLogoGithub } from 'react-icons/io5';

export default function Header() {
  return (
    <Box bgColor='gray.600'>
      <Container maxW='container.lg'>
        <Flex py={4} align='center'>
          <HStack>
            <Avatar
              size='sm'
              src='https://avatars.githubusercontent.com/u/43887006?v=4'
              name='FizzyElt'
            />
            <Text fontSize='lg' fontWeight='bold'>
              FizzyElt
            </Text>
          </HStack>

          <Spacer />
          <Link href='https://github.com/FizzyElt' target='_blank'>
            <Icon as={IoLogoGithub} color='white' boxSize='2rem' />
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
