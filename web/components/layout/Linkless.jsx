import {
  Box,
  useColorModeValue,
  Flex,
  Button,
  Text,
  Stack,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { FaMoon, FaRegSun } from "react-icons/fa"

export const LinklessHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const toggleTextColor = useColorModeValue("gray.800", "white")
  const toggleBgColor = useColorModeValue("gray.50", "gray.800")
  const toggleBorderColor = useColorModeValue("gray.200", "gray.500")
  const [isScrolled, onScrolled] = useState(false)
  const router = useRouter()
  const toggleVisibility = () => {
    window.scrollY > 0 ? onScrolled(true) : onScrolled(false)
  }
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  })
  return (
    <Box pos={"sticky"} top={0} w={"full"} h={"60px"} zIndex={100}>
      <title></title>
      {/* <Text>へっだー上だよ</Text> */}
      <Box>
        <Flex
          bg={toggleBgColor}
          color={toggleTextColor}
          minW={"full"}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
        >
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }} alignItems={"center"}>
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontSize={useBreakpointValue({
                base: "lg",
                md: "3xl",
              })}
              color={toggleTextColor}
            >
              NKC就活状況
            </Text>
          </Flex>

          <>
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
              alignItems={"center"}
            >
              <Button display={{ base: "none", md: "inline-flex" }} onClick={toggleColorMode}>
                {colorMode === "light" ? <FaMoon /> : <FaRegSun />}
              </Button>

              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={400}
                onClick={() => {
                  router.push("/signin/")
                }}
              >
                ログイン
              </Button>
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={400}
                onClick={() => {
                  router.push("/signup/")
                }}
              >
                新規登録
              </Button>
            </Stack>
          </>
        </Flex>
      </Box>
      {/* <Text>へっだー下だよ</Text> */}
      {isScrolled ? (
        <Box
          borderBottom={"1px"}
          borderBottomStyle={"solid"}
          borderBottomColor={toggleBorderColor}
        ></Box>
      ) : (
        <Box></Box>
      )}
    </Box>
  )
}
