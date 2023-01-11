import React, { useState, useEffect } from "react"
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
  Text,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Switch,
  useToast,
} from "@chakra-ui/react"

import { supabase } from "../service/supabaseClient"
import { User } from "@supabase/supabase-js"

import TOS from "./tos.json"
import deptData from "./dept.json"

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
              props.setFieldValues({ ...props.fieldValues, lastName: e.target.value })
            }
            value={!props.fieldValues.lastName ? "" : props.fieldValues.lastName}
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
              props.setFieldValues({ ...props.fieldValues, firstName: e.target.value })
            }
            value={!props.fieldValues.firstName ? "" : props.fieldValues.firstName}
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
            value={!props.fieldValues.dateOfBirth ? "" : props.fieldValues.dateOfBirth}
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
          value={!props.fieldValues.email ? "" : props.fieldValues.email}
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
            value={!props.fieldValues.pass ? "" : props.fieldValues.pass}
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
          htmlFor="course"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          分類
        </FormLabel>
        <Select
          id="course"
          name="course"
          autoComplete="course"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={(e) => props.setFieldValues({ ...props.fieldValues, course: e.target.value })}
          value={!props.fieldValues.course ? "" : props.fieldValues.course}
        >
          {props.deptData["course"].map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            )
          })}
        </Select>
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="department"
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
          id="department"
          name="department"
          autoComplete="department"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={(e) =>
            props.setFieldValues({ ...props.fieldValues, department: e.target.value })
          }
          value={!props.fieldValues.department ? "" : props.fieldValues.department}
        >
          {props.fieldValues.course
            ? props.deptData[props.fieldValues.course].map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                )
              })
            : null}
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
          value={!props.fieldValues.studentId ? "" : props.fieldValues.studentId}
        />
      </FormControl>
    </>
  )
}

const Form3 = (props) => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        利用規約
      </Heading>
      <Textarea isReadOnly resize="none" value={TOS.tos}></Textarea>
      <HStack justify="right">
        <Text>利用規約に同意します。</Text>
        <Switch
          id="email-alerts"
          onChange={() => {
            props.handleAgree(!props.Agree)
          }}
          isChecked={props.Agree}
        />
      </HStack>
    </>
  )
}

const Multistep = (props) => {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)

  const defaultValues = {
    email: "",
    pass: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    course: "",
    department: "",
    studentId: "",
  }
  const [fieldValues, setFieldValues] = useState(defaultValues)
  const [Agree, handleAgree] = useState(false)

  useEffect(() => {
    console.log(fieldValues)
  }, [fieldValues])

  const handleSignUp = async (e) => {
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: fieldValues.email,
          password: fieldValues.pass,
        }
        // },
        // {
        //   data: {
        //     firstName: fieldValues.firstName,
        //     lastName: fieldValues.lastName,
        //     // dateOfBirth: fieldValues.dateOfBirth,
        //     course: fieldValues.course,
        //     department: fieldValues.department,
        //     studentId: fieldValues.firstName,
        //   },
        // }
      )
      console.log(data)
      if (error) throw error
      alert("success for signup!")
    } catch (error) {
      alert(error.error_description || error.message)
    }

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

    try {
      const { data, error } = await supabase.from("profiles").insert(
        [
          { lastName: fieldValues.lastName },
          { firstName: fieldValues.firstName },
          // {dateOfBirth: fieldValues.dateOfBirth},
          { course: fieldValues.course },
          { department: fieldValues.department },
          { studentId: fieldValues.firstName },
        ],
        { upsert: true }
      )
      console.log(data)
      if (error) throw error
      alert("success for insert!")
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
          <Form2 setFieldValues={setFieldValues} fieldValues={fieldValues} deptData={deptData} />
        ) : (
          <Form3 handleAgree={handleAgree} Agree={Agree} />
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
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                disabled={!Agree}
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
