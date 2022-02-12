import {
  Box,
  Flex,
  Text,
  Container,
  Icon,
  Spacer,
  HStack,
  Link,
} from '@chakra-ui/react';

import { IoMail } from 'react-icons/io5';

import { footer } from '~/profileData';

export default function Footer() {
  return (
    <Box bgColor='gray.700'>
      <Container maxW='container.lg' py={5}>
        <Flex>
          <HStack>
            <Icon boxSize='1.25rem' color='white' as={IoMail} />
            <Text>{footer.email}</Text>
          </HStack>
          <Spacer />
          <HStack spacing={5}>
            {footer.socialLink.map(({ link, icon }) => (
              <Link href={link} key={link} target='_blank'>
                <Icon boxSize='1.25rem' color='white' as={icon} />
              </Link>
            ))}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
