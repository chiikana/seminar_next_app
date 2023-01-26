import React, { useState } from "react"
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Flex,
  HStack,
} from "@chakra-ui/react"
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import useAuthUser from "../src/hooks/useAuthUser"

export const AccountInfo = (props) => {
  const CA = () => {
    alert("アラート表示")
  }
  const supabase = useSupabaseClient()
  const { user } = useAuthUser()

  return (
    <>
      <Card left="10px" width="60vw" border="3mm ridge rgba(211, 220, 50, .6)">
        <CardHeader>
          <Heading size="md"> アカウント情報 </Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Flex dir={"row"} justifyContent={"space-between"}>
              <Heading size="xs" textTransform="uppercase">
                名前
              </Heading>
              <HStack>
                <Text pt="2" fontSize="sm">
                  {user?.user_metadata.lastname}
                </Text>
                <Text pt="2" fontSize="sm">
                  {user?.user_metadata.firstname}
                </Text>
              </HStack>
              <Button
                align="right"
                id="aaaa"
                border={"1px"}
                borderColor={"gray.50"}
                _hover={{ bg: "teal.50", border: "1px", borderColor: "teal.300" }}
                onClick={() => CA()}
              >
                編集
              </Button>
            </Flex>
            <Flex dir={"row"} justifyContent={"space-between"}>
              <Heading size="xs" textTransform="uppercase">
                学科
              </Heading>
              <HStack>
                <Text pt="2" fontSize="sm">
                  {user?.user_metadata.course}
                </Text>
                <Text pt="2" fontSize="sm">
                  {user?.user_metadata.department}
                </Text>
              </HStack>
              <Button
                align="right"
                id="aaaa"
                border={"1px"}
                borderColor={"gray.50"}
                _hover={{ bg: "teal.50", border: "1px", borderColor: "teal.300" }}
                onClick={() => CA()}
              >
                編集
              </Button>
            </Flex>
            <Flex dir={"row"} justifyContent={"space-between"}>
              <Heading size="xs" textTransform="uppercase">
                出席番号
              </Heading>
              <Text pt="2" fontSize="sm">
                {user?.user_metadata.student_id}
              </Text>
              <Button
                align="right"
                id="aaaa"
                border={"1px"}
                borderColor={"gray.50"}
                _hover={{ bg: "teal.50", border: "1px", borderColor: "teal.300" }}
                onClick={() => CA()}
              >
                編集
              </Button>
            </Flex>
            <Flex dir={"row"} justifyContent={"space-between"}>
              <Heading size="xs" textTransform="uppercase">
                生年月日
              </Heading>
              <Text pt="2" fontSize="sm">
                {user?.user_metadata.date_of_birth}
              </Text>
              <Button
                align="right"
                id="aaaa"
                border={"1px"}
                borderColor={"gray.50"}
                _hover={{ bg: "teal.50", border: "1px", borderColor: "teal.300" }}
                onClick={() => CA()}
              >
                編集
              </Button>
            </Flex>
            <Flex dir={"row"} justifyContent={"space-between"}>
              <Heading size="xs" textTransform="uppercase">
                メアド
              </Heading>
              <Text pt="2" fontSize="sm">
                {user?.email}
              </Text>
              <Button
                align="right"
                id="aaaa"
                border={"1px"}
                borderColor={"gray.50"}
                _hover={{ bg: "teal.50", border: "1px", borderColor: "teal.300" }}
                onClick={() => CA()}
              >
                編集
              </Button>
            </Flex>
            <Flex dir={"row"} justifyContent={"space-between"}>
              <Heading size="xs" textTransform="uppercase">
                パスワード
              </Heading>
              <Text pt="2" fontSize="sm">
                {user?.password}
              </Text>
              <Button
                align="right"
                id="aaaa"
                border={"1px"}
                borderColor={"gray.50"}
                _hover={{ bg: "teal.50", border: "1px", borderColor: "teal.300" }}
                onClick={() => CA()}
              >
                編集
              </Button>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}
