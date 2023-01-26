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
} from "@chakra-ui/react"

export const AccountInfo = (props) => {
  const CA = () => {
    alert("アラート表示")
  }

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
              <Text pt="2" fontSize="sm">
                ああああ
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
                学科
              </Heading>
              <Text pt="2" fontSize="sm">
              ああああ
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
                出席番号
              </Heading>
              <Text pt="2" fontSize="sm">
                ああああ
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
                ああああ
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
               ああああ
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
