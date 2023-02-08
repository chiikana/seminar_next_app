import { ToggleTheme } from "@/libs/utils/themes"
import {
  Box,
  Button,
  Container,
  HStack,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"

export const Footer = () => {
  const { toggleTextColor, toggleBgColor, toggleBorderColor } = ToggleTheme()
  const router = useRouter()
  return (
    <Box
      bg={toggleBgColor}
      color={toggleTextColor}
      borderTop={1}
      borderStyle={"solid"}
      borderColor={toggleBorderColor}
      top={"100vh"}
      h={"60px"}
    >
      {/* <Container as={Stack} maxW={"6xl"} py={4} spacing={4} justify={"center"} align={"center"}>
        <Stack direction={"row"} spacing={6}>
          <Link href={"/profilePage/"} passHref replace>
            <Text>PP</Text>
          </Link>
          <Link href={"/profileEditPage/"} passHref replace>
            <Text>PE</Text>
          </Link>
          <Link href={"/databaseAll"} passHref replace>
            <Text>DA</Text>
          </Link>
          <Link href={"/MyDatabase"} passHref replace>
            <Text>MD</Text>
          </Link>
          <Link href={"/accountPage/"} passHref replace>
            <Text>AP</Text>
          </Link>
          <Link href={"/signin/"} passHref replace>
            <Text>SI</Text>
          </Link>
          <Link href={"/signup/"} passHref replace>
            <Text>SU</Text>
          </Link>
          <Link href={"/"} passHref replace>
            <Text>Start</Text>
          </Link>
        </Stack>
      </Container> */}
      <HStack>
        <Box>
          <Text>©CTB20-TEAM2 all rights reserved</Text>
        </Box>
        <Spacer />
        <HStack>
          <Text>発表用みんなが頑張ったけど時間が足りず不採用になったページリンク</Text>
          <Button
            onClick={() => {
              router.push("/databaseAll")
            }}
          >
            みんなの就活状況
          </Button>
          <Button
            onClick={() => {
              router.push("/myData/")
            }}
          >
            自分の就活状況
          </Button>
          {/* <Link href={"/profilePage/"} passHref replace>
            <Text></Text>
          </Link>
          <Link href={"/databaseAll"} passHref replace>
            <Text>みんなの就活状況</Text>
          </Link>
          <Link href={"/myData/"} passHref replace>
            <Text>自分の就活状況</Text>
          </Link> */}
        </HStack>
      </HStack>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      ></Box>
    </Box>
  )
}
