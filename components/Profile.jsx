import { VStack, Heading, Text, Image, AspectRatio, Container, Link } from '@chakra-ui/react';

import { profile } from '~/profileData';

export default function Profile() {
  return (
    <Container maxW="container.sm">
      <VStack spacing={8}>
        <AspectRatio ratio={1} w="150px">
          <Image alt={profile.name} borderRadius="full" src={profile.avatarLink} />
        </AspectRatio>
        <Heading size="lg">{profile.name}</Heading>
        <Text>{profile.description}</Text>
        <Text color="orange.300" fontWeight="bold">
          此 blogs 已搬家，請到這裡觀看新文章{' '}
          <Link href="https://fizzyelt.github.io/">https://fizzyelt.github.io/</Link>
        </Text>
      </VStack>
    </Container>
  );
}
