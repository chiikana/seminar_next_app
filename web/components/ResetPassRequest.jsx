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
  HStack,
  useToast,
  Spacer,
} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { supabase } from "@/libs/utils/supabaseClient"
import { useRouter } from "next/router"

export const ResetPassRequest = () => {
  const defaultValues = {
    email: "",
  }
  const [fieldValues, setFieldValues] = useState(defaultValues)
  const router = useRouter()
  const toast = useToast()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let { data, error } = await supabase.auth.resetPasswordForEmail(fieldValues.email, {
        redirectTo: "http://localhost:3000/resetPassword/form/",
      })
      if (error) {
        toast({
          title: "ERROR!!",
          description: "メール送信に失敗しました。\n再度お試しください",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      } else {
        toast({
          title: "SUCCESS!!",
          description: "変更確認メールが送信されました。\n受信したメールを確認してください",
          status: "success",
          duration: 6000,
          isClosable: true,
        })
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
          パスワードをリセット
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

          <Box />
        </VStack>
        <Stack spacing={10} m={"0 0 0 auto"}>
          <Button
            isDisabled={fieldValues.email === "" ? true : false}
            w="7rem"
            variant="solid"
            colorScheme="red"
            onClick={(e) => {
              handleSubmit(e)
            }}
          >
            送信
          </Button>
        </Stack>
      </Box>
    </Center>
  )
}
