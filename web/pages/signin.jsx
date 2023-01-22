import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { useState } from "react"

const SignIn = async () => {
  const defaultValues = {
    email: "",
    pass: "",
  }
  const [fieldValues, setFieldValues] = useState(defaultValues)
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: fieldValues.email,
      password: fieldValues.pass,
    })
    console.log(data)
    if (error) throw error
    alert("success for signin!")
  } catch (error) {
    alert(error.error_description || error.message)
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} minW={"25vw"}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>サインイン</Heading>
        </Stack>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email アドレス</FormLabel>
              <Input
                type="email"
                onChange={(e) => {
                  setFieldValues({ ...fieldValues, email: e.target.value })
                }}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>パスワード</FormLabel>
              <Input
                type="password"
                onChange={(e) => {
                  setFieldValues({ ...fieldValues, password: e.target.value })
                }}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>ログインを維持する</Checkbox>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                サインイン
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
export default SignIn
