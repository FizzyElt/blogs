import {
  VStack,
  Heading,
  Text,
  Image,
  AspectRatio,
  Container,
} from '@chakra-ui/react';

import { profile } from '~/profileData';

export default function Profile() {
  return (
    <Container maxW='container.sm'>
      <VStack spacing={8}>
        <AspectRatio ratio={1} w='150px'>
          <Image
            alt={profile.name}
            borderRadius='full'
            src={profile.avatarLink}
          />
        </AspectRatio>
        <Heading size='lg'>{profile.name}</Heading>
        <Text>{profile.description}</Text>
      </VStack>
    </Container>
  );
}
