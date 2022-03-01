import {
  VStack,
  Text,
  Heading,
  Tag,
  HStack,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";

import format from "date-fns/format";

export default function PostCard({ title, description, id, tags, editTime }) {
  return (
    <VStack spacing={4} align="stretch">
      <Flex align="center">
        <Link href={`/posts/${id}`} passHref>
          <Heading size="lg" cursor="pointer">
            {title}
          </Heading>
        </Link>
        <Spacer />
        <Text fontSize="sm" bgColor="gray.700" p={1} borderRadius="3px">
          {format(editTime, "yyyy/MM/dd")}
        </Text>
      </Flex>
      <HStack>
        {tags.map((tag, index) => (
          <Tag key={`${tag}_${index}`} variant="outline" color="yellow.300">
            {tag}
          </Tag>
        ))}
      </HStack>
      <Text isTruncated>{description}</Text>
    </VStack>
  );
}
