import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react"
import Link from "next/link"

export const Footer = () => {
  const toggleTextColor = useColorModeValue("gray.800", "white")
  const toggleBgColor = useColorModeValue("gray.50", "gray.800")
  const toggleBorderColor = useColorModeValue("gray.200", "gray.900")
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
      <Container as={Stack} maxW={"6xl"} py={4} spacing={4} justify={"center"} align={"center"}>
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
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      ></Box>
    </Box>
  )
}
