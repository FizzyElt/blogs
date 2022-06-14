import { Button } from '@chakra-ui/react';
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
import Script from 'next/script';

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

        <meta name="og:title" content={`${profile.name} resume`} />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="zh-tw" />
        <meta name="og:site_name" content={profile.name} />
      </Head>

      <Box bgColor="white">
        <Container id="resume" maxW="container.md" py={4}>
          <Flex>
            <Heading size="md" color="black">
              索柏銓
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
              接觸前端約四年，喜歡從工具找想法，從想法找靈感，對新事物抱持開放態度 ，<br />
              近期以學習 <b>Rust</b> 拓展知識廣度及研究 <b>Functional Programming</b>{' '}
              來撰寫乾淨整潔的程式碼為主。
            </Text>
          </Center>

          <Flex>
            <Box flex="1">
              <VStack align="stretch" spacing={6}>
                <Box>
                  <Text color="black" fontSize="2xl" fontWeight="bold">
                    經歷
                  </Text>
                  <VStack align="flex-start">
                    <HStack align="flex-end">
                      <Text color="black" fontSize="xl">
                        Stark Tech 鷹翔有限公司
                      </Text>
                      <Text color="gray.500" fontSize="md">
                        2020.10 ~ now
                      </Text>
                    </HStack>
                    <Box pl={4}>
                      <UnorderedList>
                        <ListItem fontSize="md">
                          使用 <b>Typescript</b> 開發及設計前端專案架構
                        </ListItem>
                        <ListItem fontSize="md">
                          導入 <b>Chakra-UI</b> 及 <b>recoil</b> 到公司專案中，建立專案樣式規範。
                        </ListItem>
                        <ListItem fontSize="md">設計可共用前端組件，減少重複程式碼。</ListItem>
                        <ListItem fontSize="md">
                          協助 UI 設計師建立基本設計規範，以利於前端開發。
                        </ListItem>
                        <ListItem fontSize="md">引導實習生完成前端頁面及功能。</ListItem>
                        <ListItem fontSize="md">與後端討論資料結構及 API 設計。</ListItem>
                        <ListItem fontSize="md">code review，維持程式碼品質</ListItem>
                      </UnorderedList>
                      <Text color="teal.700" fontSize="lg" fontWeight="bold">
                        專案
                      </Text>
                      <UnorderedList>
                        <ListItem fontSize="md">
                          <Text color="green.500" fontWeight="bold">
                            misseco 餐飲平台
                          </Text>
                          與實習生共同協作，負責設計使用者網站、平台管理後台及店家管理後台專案架構跟路由設計，使用
                          <b>Typescript、React、Chakra-UI、recoil</b> 開發，沿用{' '}
                          <b>VO-2 舒氧 餐飲平台</b> 約 70％ 的組件。
                        </ListItem>
                        <ListItem fontSize="md">
                          <Text color="green.500" fontWeight="bold">
                            VO2 舒氧 餐飲平台
                          </Text>
                          與實習生共同協作，負責設計使用者網站、平台管理後台及店家管理後台專案架構跟路由設計，使用{' '}
                          <b>Typescript、React、Chakra-UI、recoil</b> 開發，同時與 UI
                          設計師討論跟設計 <b>misseco 餐飲平台</b>可共用組件，利用{' '}
                          <b>react-hook-form</b> 控制複雜表單。
                        </ListItem>
                        <ListItem fontSize="md">
                          <Text color="green.500" fontWeight="bold">
                            weserve 餐飲外送平台使用者端翻新
                          </Text>
                          翻新舊版使用者網站，使用 <b>Typescript</b> 開發，導入{' '}
                          <b>Chakra-UI、recoil</b>
                          作為公司主要技術棧，與 UI
                          設計師建立基礎樣式規範，減少反覆確認樣式細節的時間。
                        </ListItem>
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
              <VStack align="stretch" spacing={6}>
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
                      <Text color="gray.600">Mac OS</Text>
                      <Text color="gray.600">Linux(Ubuntu)</Text>
                    </SimpleGrid>
                    <Text color="gray.800" fontSize="lg">
                      語言
                    </Text>
                    <Text color="gray.600">中文（母語）</Text>
                    <Text color="gray.600">英文（閱讀）</Text>
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
