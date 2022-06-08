import {
  Box,
  Container,
  Avatar,
  Text,
  Flex,
  VStack,
  List,
  HStack,
  Spacer,
  Heading,
  Link,
  Icon,
  Center,
  UnorderedList,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react';

import Head from 'next/head';

import { IoLogoGithub, IoMailOpenOutline } from 'react-icons/io5';

import { profile } from '~/profileData';

export default function Resume() {
  return (
    <>
      <Head>
        <title>{profile.name} resume</title>
        <meta name="author" content={profile.name} />
        <meta name="description" content={profile.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Box bgColor="white">
        <Container maxW="container.md" py={10}>
          <Flex>
            <Heading size="md" color="black">
              FizzyElt
            </Heading>
            <Spacer />
            <VStack align="stretch">
              <Link href="https://github.com/FizzyElt" target="_blank">
                <HStack>
                  <Icon as={IoLogoGithub} boxSize="1.25rem" />
                  <Text fontSize="sm" color="black">
                    https://github.com/FizzyElt
                  </Text>
                </HStack>
              </Link>

              <Link href="mailto:fizzyelt8786@gmail.com" target="_blank">
                <HStack>
                  <Icon as={IoMailOpenOutline} boxSize="1.25rem" />
                  <Text fontSize="sm" color="black">
                    fizzyelt8786@gmail.com
                  </Text>
                </HStack>
              </Link>
            </VStack>
          </Flex>

          <Center my={4} px={4}>
            <Text color="black" textAlign="center">
              接觸前端約四年，喜歡從工具找想法，從想法找靈感，對新事物抱持開放態度，近期以拓展知識廣度及研究撰寫乾淨整潔程式碼的方法為主。
            </Text>
          </Center>

          <Flex>
            <Box flex="1">
              <VStack align="stretch" spacing={10}>
                <Box>
                  <Text color="black" fontSize="2xl" fontWeight="bold">
                    經歷
                  </Text>
                  <VStack align="flex-start">
                    <HStack align="flex-end">
                      <Text color="black" fontSize="xl">
                        Stark Tech
                      </Text>
                      <Text color="gray.500" fontSize="md">
                        2020.10 ~ now
                      </Text>
                    </HStack>
                    <Box pl={4}>
                      <UnorderedList>
                        <ListItem fontSize="md">
                          使用 Typescript 開發及設計前端專案架構，目前約有 6 ~ 7 個。
                        </ListItem>
                        <ListItem fontSize="md">
                          導入 Chakra-UI 及 recoil 到公司專案中，建立專案樣式規範。
                        </ListItem>
                        <ListItem fontSize="md">設計可共用前端組件，減少重複程式碼。</ListItem>
                        <ListItem fontSize="md">
                          協助設計師建立基本設計規範，以利於前端開發，減少心智負擔。
                        </ListItem>
                        <ListItem fontSize="md">引導實習生完成前端頁面及功能。</ListItem>
                        <ListItem fontSize="md">與後端討論資料結構及 API 設計</ListItem>
                        <ListItem fontSize="md">解答及修正前端各類問題</ListItem>
                        <ListItem fontSize="md">code review</ListItem>
                      </UnorderedList>
                    </Box>
                  </VStack>
                </Box>

                <Box>
                  <Text color="black" fontSize="2xl" fontWeight="bold">
                    學歷
                  </Text>
                  <VStack align="flex-start">
                    <HStack>
                      <Text color="black">樹德科技大學 電腦與通訊系 學士</Text>
                      <Text color="gray.500" fontSize="sm">
                        2016 ~ 2020
                      </Text>
                    </HStack>
                  </VStack>
                </Box>
              </VStack>
            </Box>

            <Box px={2} />

            <Box flex="1">
              <VStack align="stretch" spacing={10}>
                <Box>
                  <Text color="black" fontSize="2xl" fontWeight="bold">
                    個人作品
                  </Text>
                  <VStack align="flex-start">
                    <Box>
                      <Link
                        fontSize="lg"
                        color="blue.500"
                        href="https://github.com/FizzyElt/chakra-datepicker-vite"
                        target="_blank"
                      >
                        DatePicker 核心組件
                      </Link>
                      <Text color="black">
                        將專案中自行設計的 <b>DatePicker</b>{' '}
                        核心想法抽取出來，重新製作一個版本，目的是希望帶給需要自製 DatePicker
                        組件的人一些啟發。
                      </Text>
                    </Box>

                    <Box>
                      <Link
                        fontSize="lg"
                        color="blue.500"
                        href="https://fizzyelt.github.io/blogs"
                        target="_blank"
                      >
                        個人部落格
                      </Link>
                      <Text color="black">
                        使用 <b>Nextjs/Chakra-UI</b> 開發的簡易部落格，並且使用 <b>Github Action</b>{' '}
                        做自動部屬，用於紀錄我的想法跟經驗。
                      </Text>
                    </Box>

                    <Box>
                      <Link
                        fontSize="lg"
                        color="blue.500"
                        href="https://github.com/FizzyElt/discord-message-record-bot"
                        target="_blank"
                      >
                        Discord 文字頻道訊息紀錄機器人
                      </Link>
                      <Text color="black">
                        使用{' '}
                        <Link href="https://discord.js.org/#/" color="blue.500">
                          <b>DiscordJS</b>
                        </Link>{' '}
                        開發紀錄文字頻道內所有文字訊息，可自由增加及刪除想紀錄的文字頻道，部分使用{' '}
                        <b>Functional Programming</b> 手法開發。
                      </Text>
                    </Box>
                  </VStack>
                </Box>
                <Box>
                  <Text color="black" fontSize="2xl" fontWeight="bold">
                    技能
                  </Text>
                  <VStack align="stretch">
                    <Text color="gray.800" fontSize="lg">
                      前端
                    </Text>
                    <SimpleGrid columns={2}>
                      <Text color="gray.600">Javascript</Text>
                      <Text color="gray.600">Typescript</Text>
                      <Text color="gray.600">React</Text>
                      <Text color="gray.600">Chakra-UI</Text>
                      <Text color="gray.600">HTML5</Text>
                      <Text color="gray.600">CSS3</Text>
                      <Text color="gray.600">Recoil</Text>
                    </SimpleGrid>

                    <Text color="gray.800" fontSize="lg">
                      程式語言
                    </Text>
                    <SimpleGrid columns={2}>
                      <Text color="gray.600">Javascript/Typescript</Text>
                      <Text color="gray.600">Rust</Text>
                    </SimpleGrid>

                    <Text color="gray.800" fontSize="lg">
                      開發相關
                    </Text>
                    <SimpleGrid columns={2}>
                      <Text color="gray.600">git</Text>
                      <Text color="gray.600">VSCode</Text>
                    </SimpleGrid>
                    <Text color="gray.800" fontSize="lg">
                      語言
                    </Text>
                    <Text color="gray.600">中文（母語）</Text>
                    <Text color="gray.600">英文（文字訊息）</Text>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
