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

import NextLink from 'next/link';

import { IoLogoGithub } from 'react-icons/io5';

import { header } from '~/profileData';

export default function Header() {
  return (
    <Box bgColor='gray.600'>
      <Container maxW='container.lg'>
        <Flex py={4} align='center'>
          <HStack>
            <Avatar size='sm' src={header.avatarLink} name={header.name} />
            <NextLink href='/'>
              <Text fontSize='lg' fontWeight='bold'>
                {header.name}
              </Text>
            </NextLink>
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
