import { supabase } from "@/libs/utils/supabaseClient"
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useToast,
  VStack,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

export const ResetPassForm = () => {
  const { subAccentColor } = toggleTheme()
  const defaultValues = {
    email: "",
    password_a: "",
    password_b: "",
  }
  const [fieldValues, setFieldValues] = useState(defaultValues)
  const router = useRouter()
  const toast = useToast()
  const [show_a, setShow_a] = useState(false)
  const handleClick_a = () => setShow_a(!show_a)
  const [show_b, setShow_b] = useState(false)
  const handleClick_b = () => setShow_b(!show_b)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newPassword = fieldValues.password_a
      const { error } = await supabase.auth.updateUser({ password: newPassword })
      if (error) {
        setLoading(false)
        toast({
          title: "ERROR!!",
          description: "変更に失敗しました。\n再度お試しください",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      } else {
        toast({
          title: "SUCCESS!!",
          description: "パスワードは正常に変更されました！",
          status: "success",
          duration: 1500,
          isClosable: true,
        })
        router.push("/")
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
          <FormControl>
            <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
              新しいパスワード
            </FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show_a ? "text" : "password"}
                placeholder="パスワードを入力"
                focusBorderColor={subAccentColor}
                onChange={(e) => setFieldValues({ ...fieldValues, password_a: e.target.value })}
                value={!fieldValues.password_a ? "" : fieldValues.password_a}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick_a}>
                  {!show_a ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
              新しいパスワード(再入力)
            </FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show_b ? "text" : "password"}
                placeholder="パスワードを入力"
                focusBorderColor={subAccentColor}
                onChange={(e) => setFieldValues({ ...fieldValues, password_b: e.target.value })}
                value={!fieldValues.password_b ? "" : fieldValues.password_b}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick_b}>
                  {!show_b ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Box />
        </VStack>
        <Stack spacing={10} m={"0 0 0 auto"}>
          <Button
            isDisabled={fieldValues.password_a === "" ? true : false}
            w="7rem"
            variant="solid"
            colorScheme="red"
            onClick={(e) => {
              {
                fieldValues.password_a !== fieldValues.password_b
                  ? toast(
                      {
                        title: "ERROR!!",
                        description: "パスワードが一致しません。\nもう一度入力してください。",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                      },
                      setFieldValues({ ...fieldValues, password_a: "", password_b: "" })
                    )
                  : handleSubmit(e)
              }
            }}
          >
            送信
          </Button>
        </Stack>
      </Box>
    </Center>
  )
}
