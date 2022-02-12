import {
  VStack,
  Heading,
  Text,
  Image,
  AspectRatio,
  Container,
} from '@chakra-ui/react';

export default function Profile() {
  return (
    <Container maxW='container.sm'>
      <VStack spacing={8}>
        <AspectRatio ratio={1} w='150px'>
          <Image
            alt='fizzyelt'
            borderRadius='full'
            src='https://avatars.githubusercontent.com/u/43887006?v=4'
          />
        </AspectRatio>
        <Heading size='lg'>FizzyElt</Heading>
        <Text>description</Text>
      </VStack>
    </Container>
  );
}
