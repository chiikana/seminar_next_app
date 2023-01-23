import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
  VStack,
  useToast,
} from "@chakra-ui/react"
import { useState } from "react"
import { supabase } from "../src/libs/supabaseClient"
import { FaEyeSlash, FaEye } from "react-icons/fa"
import { useRouter } from "next/router"

export const SignIn = () => {
  const defaultValues = {
    email: "",
    password: "",
  }
  const [fieldValues, setFieldValues] = useState(defaultValues)
  const router = useRouter()
  const toast = useToast()
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const handleSignIn = async (e) => {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: fieldValues.email,
        password: fieldValues.password,
        // email: "pngnka710.dev@gmail.com",
        // password: "password",
      })
      console.log(data)
      if (error) throw error
      // alert("success for signin!")
      toast({
        title: "success!",
        description: "ログインに成功しました。",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
      router.push("/profilePage")
    } catch (error) {
      alert(error.error_description || error.message)
    }
  }

  return (
    // <Flex
    //   minH={"100vh"}
    //   align={"center"}
    //   justify={"center"}
    //   bg={useColorModeValue("gray.50", "gray.800")}
    // >
    //   <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} minW={"25vw"}>
    //     <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
    //       <Heading fontSize={"4xl"}>サインイン</Heading>
    //       <Stack spacing={4}>
    //         <FormControl id="email">
    //           <FormLabel>Email アドレス</FormLabel>
    //           <Input
    //             type="email"
    //             onChange={(e) => {
    //               setFieldValues({ ...fieldValues, email: e.target.value })
    //             }}
    //           />
    //         </FormControl>
    //         <FormControl id="password">
    //           <FormLabel>パスワード</FormLabel>
    //           <Input
    //             type="password"
    //             onChange={(e) => {
    //               setFieldValues({ ...fieldValues, password: e.target.value })
    //             }}
    //           />
    //         </FormControl>
    //         <Stack spacing={10}>
    //           <Stack
    //             direction={{ base: "column", sm: "row" }}
    //             align={"start"}
    //             justify={"space-between"}
    //           >
    //             <Checkbox>ログインを維持する</Checkbox>
    //           </Stack>
    //           <Button
    //             bg={"blue.400"}
    //             color={"white"}
    //             _hover={{
    //               bg: "blue.500",
    //             }}
    //             onClick={(e) => {
    //               handleSignIn(e)
    //             }}
    //           >
    //             サインイン
    //           </Button>
    //         </Stack>
    //       </Stack>
    //     </Box>
    //   </Stack>
    // </Flex>
    <Center>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
        minW={"30vw"}
        minH={"56vh"}
        display={"grid"}
        gridTemplateRows={"auto auto-fit auto"}
        gridTemplateColumns={"auto"}
      >
        <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%" mt="7.5%">
          ログイン
        </Heading>
        <VStack spacing={"8"}>
          <FormControl mt="2%">
            <FormLabel htmlFor="email" fontWeight={"normal"}>
              メールアドレス
            </FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="メールアドレスを入力"
              onChange={(e) => setFieldValues({ ...fieldValues, email: e.target.value })}
              value={!fieldValues.email ? "" : fieldValues.email}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
              パスワード
            </FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="パスワードを入力"
                onChange={(e) => setFieldValues({ ...fieldValues, pass: e.target.value })}
                value={!fieldValues.pass ? "" : fieldValues.pass}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {!show ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </VStack>
        <Stack spacing={10} m={"0 0 0 auto"}>
          <Stack
            direction={{ base: "column", sm: "row" }}
            align={"start"}
            justify={"space-between"}
          >
            {/* <Checkbox>ログインを維持する</Checkbox> */}
          </Stack>
          <Button
            // bg={"blue.400"}
            // color={"white"}
            // _hover={{
            //   bg: "red.500",
            // }}
            w="7rem"
            variant="solid"
            colorScheme="red"
            onClick={(e) => {
              handleSignIn(e)
            }}
          >
            サインイン
          </Button>
        </Stack>
      </Box>
    </Center>
  )
}
