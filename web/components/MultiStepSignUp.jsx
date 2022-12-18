import React, { useState } from "react"
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  HStack,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react"

import { useToast } from "@chakra-ui/react"

import { supabase } from "../service/supabaseClient"
import { User } from "@supabase/supabase-js"

import Data from "./tos.json"

const Form1 = (props) => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        新規登録
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            性
          </FormLabel>
          <Input
            id="last-name"
            placeholder="田中"
            onChange={(e) =>
              props.setFieldValues({ ...props.fieldValues, firstName: e.target.value })
            }
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            名
          </FormLabel>
          <Input
            id="first-name"
            placeholder="実"
            onChange={(e) =>
              props.setFieldValues({ ...props.fieldValues, lastName: e.target.value })
            }
          />
        </FormControl>
      </Flex>

      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="date of birth" fontWeight={"normal"}>
            生年月日
          </FormLabel>
          <Input
            id="dateOfBirth"
            type="date"
            onChange={(e) =>
              props.setFieldValues({ ...props.fieldValues, dateOfBirth: e.target.value })
            }
          />
        </FormControl>
      </Flex>

      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          メールアドレス
        </FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="メールアドレスを入力"
          onChange={(e) => props.setFieldValues({ ...props.fieldValues, email: e.target.value })}
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
            onChange={(e) => props.setFieldValues({ ...props.fieldValues, pass: e.target.value })}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  )
}

const Form2 = (props) => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        新規登録
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="depertment"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          学科
        </FormLabel>
        <Select
          id="depertment"
          name="depertment"
          autoComplete="depertment"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={(e) =>
            props.setFieldValues({ ...props.fieldValues, depertment: e.target.value })
          }
        >
          <option>情報総合学科</option>
          <option>情報システム科</option>
          <option>情報処理学科</option>
          <option>AIシステム科</option>
          <option>情報セキュリティ学科</option>
          <option>高度情報学科</option>
          <option>IT技術研究科</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="studentId"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          学籍番号
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={(e) =>
            props.setFieldValues({ ...props.fieldValues, studentId: e.target.value })
          }
        />
      </FormControl>
    </>
  )
}

const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        利用規約
      </Heading>
      <Textarea isDisabled value={Data.tos}></Textarea>
    </>
  )
}

const Multistep = () => {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)

  const defaultValues = {
    email: "",
    pass: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    depertment: "",
    studentId: "",
  }
  const [fieldValues, setFieldValues] = useState(defaultValues)

  const handleSignUp = async (e) => {
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp({
        email: fieldValues.email,
        password: fieldValues.pass,
      })
      console.log(data)
      if (error) throw error
      alert("success for signup!")
    } catch (error) {
      alert(error.error_description || error.message)
    }
  }

  const handleSignOut = async (e) => {
    e.preventDefault()
    supabase.auth.signOut()
  }

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        {step === 1 ? (
          <Form1 setFieldValues={setFieldValues} fieldValues={fieldValues} />
        ) : step === 2 ? (
          <Form2 setFieldValues={setFieldValues} fieldValues={fieldValues} />
        ) : (
          <Form3 />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={(e) => {
                  setStep(step - 1)
                  setProgress(progress - 33.33)
                  handleSignOut(e)
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1)
                  if (step === 3) {
                    setProgress(100)
                  } else {
                    setProgress(progress + 33.33)
                  }
                  console.log(fieldValues)
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={(e) => {
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  })
                  handleSignUp(e)
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  )
}
export default Multistep
