import { supabase } from "@/libs/utils/supabaseClient"
import { ToggleTheme } from "@/libs/utils/themes"
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spacer,
  Stack,
  useToast,
  VStack,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

export const SignIn = () => {
  const { subAccentColor } = ToggleTheme()
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
      const { error } = await supabase.auth.signInWithPassword({
        email: fieldValues.email,
        password: fieldValues.password,
      })
      if (error) {
        toast({
          title: "ERROR!!",
          description: "ログインに失敗しました。\n再度お試しください",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      } else {
        toast({
          title: "SUCCESS!!",
          description: "ログインに成功しました！",
          status: "success",
          duration: 1500,
          isClosable: true,
        })
        router.push("/profilePage")
      }
    } catch (error) {
      alert(error.error_description || error.message)
    }
  }

  return (
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
              focusBorderColor={subAccentColor}
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
                focusBorderColor={subAccentColor}
                onChange={(e) => setFieldValues({ ...fieldValues, password: e.target.value })}
                value={!fieldValues.password ? "" : fieldValues.password}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {!show ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Box />
        </VStack>
        <Stack spacing={10} m={"0 0 0 auto"}>
          <HStack
            // direction={{ base: "column", sm: "row" }}
            // align={"start"}
            justify={"space-between"}
          >
            {/* <Checkbox>ログインを維持する</Checkbox> */}
            <Link
              onClick={() => {
                router.replace("/resetPassword/")
              }}
            >
              パスワードを忘れた場合
            </Link>
            <Spacer />
            <Button
              w="7rem"
              variant="solid"
              colorScheme="red"
              onClick={(e) => {
                handleSignIn(e)
              }}
            >
              サインイン
            </Button>
          </HStack>
        </Stack>
      </Box>
    </Center>
  )
}
