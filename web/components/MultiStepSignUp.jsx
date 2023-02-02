import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Progress,
  Select,
  Switch,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

import { supabase } from "@/libs/utils/supabaseClient"

import { ToggleTheme } from "@/libs/utils/themes"
import deptData from "./dept.json"
import TOS from "./tos.json"

const Form1 = (props) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const { subAccentColor } = ToggleTheme()
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
            focusBorderColor={subAccentColor}
            onChange={(e) =>
              props.setFieldValues({ ...props.fieldValues, lastname: e.target.value })
            }
            value={!props.fieldValues.lastname ? "" : props.fieldValues.lastname}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            名
          </FormLabel>
          <Input
            id="first-name"
            placeholder="実"
            focusBorderColor={subAccentColor}
            onChange={(e) =>
              props.setFieldValues({ ...props.fieldValues, firstname: e.target.value })
            }
            value={!props.fieldValues.firstname ? "" : props.fieldValues.firstname}
          />
        </FormControl>
      </Flex>

      <Flex>
        <FormControl>
          <FormLabel htmlFor="date of birth" fontWeight={"normal"}>
            生年月日
          </FormLabel>
          <Input
            id="date_of_birth"
            type="date"
            max={"9999-12-31"}
            focusBorderColor={subAccentColor}
            onChange={(e) =>
              props.setFieldValues({ ...props.fieldValues, date_of_birth: e.target.value })
            }
            value={!props.fieldValues.date_of_birth ? "" : props.fieldValues.date_of_birth}
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
          focusBorderColor={subAccentColor}
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
            placeholder="8桁以上のパスワードを入力"
            focusBorderColor={subAccentColor}
            onChange={(e) =>
              props.setFieldValues({ ...props.fieldValues, password: e.target.value })
            }
            value={!props.fieldValues.password ? "" : props.fieldValues.password}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {!show ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  )
}

const Form2 = (props) => {
  const { subAccentColor } = ToggleTheme()
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        新規登録
      </Heading>
      <VStack>
        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel htmlFor="course" fontSize="sm" fontWeight="md">
            分類
          </FormLabel>
          <Select
            id="course"
            name="course"
            autoComplete="course"
            placeholder="Select option"
            focusBorderColor={subAccentColor}
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
          <FormLabel htmlFor="department" fontSize="sm" fontWeight="md">
            学科
          </FormLabel>
          <Select
            id="department"
            name="department"
            autoComplete="department"
            placeholder="Select option"
            focusBorderColor={subAccentColor}
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

        <HStack w={"100%"} justify={"space-between"}>
          <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
            <FormLabel htmlFor="class" fontSize="sm" fontWeight="md" mt="2%">
              クラス
            </FormLabel>
            <Input
              type="text"
              id="class"
              focusBorderColor={subAccentColor}
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              textTransform="uppercase"
              onChange={(e) =>
                props.setFieldValues({ ...props.fieldValues, class: e.target.value.toUpperCase() })
              }
              value={!props.fieldValues.class ? "" : props.fieldValues.class}
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
            <FormLabel htmlFor="class" fontSize="sm" fontWeight="md" mt="2%">
              出席番号
            </FormLabel>
            <Input
              type="number"
              id="class_number"
              focusBorderColor={subAccentColor}
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              onChange={(e) =>
                props.setFieldValues({ ...props.fieldValues, class_number: e.target.value })
              }
              value={!props.fieldValues.class_number ? "" : props.fieldValues.class_number}
            />
          </FormControl>
        </HStack>

        <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
          <FormLabel htmlFor="student_id" fontSize="sm" fontWeight="md" mt="2%">
            学籍番号
          </FormLabel>
          <Input
            type="number"
            id="student_id"
            focusBorderColor={subAccentColor}
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            onChange={(e) =>
              props.setFieldValues({ ...props.fieldValues, student_id: e.target.value })
            }
            value={!props.fieldValues.student_id ? "" : props.fieldValues.student_id}
          />
        </FormControl>
      </VStack>
    </>
  )
}

const Form3 = (props) => {
  const {
    toggleTextColor,

    subAccentColor,
  } = ToggleTheme()
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        利用規約
      </Heading>
      <Textarea isReadOnly resize="none" value={TOS.tos} rows="10"></Textarea>
      <HStack justify="right">
        <Text color={toggleTextColor}>利用規約に同意します。</Text>
        <Switch
          id="email-alerts"
          focusBorderColor={subAccentColor}
          onChange={() => {
            props.handleAgree(!props.Agree)
          }}
          isChecked={props.Agree}
        />
      </HStack>
    </>
  )
}

export const Multistep = () => {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)

  const defaultValues = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    date_of_birth: "",
    course: "",
    department: "",
    class: "",
    student_id: "",
    start_year: "",
    class_number: 0,
  }
  const [fieldValues, setFieldValues] = useState(defaultValues)
  const [Agree, handleAgree] = useState(false)
  const router = useRouter()

  useEffect(() => {
    console.log(fieldValues)
  }, [fieldValues])

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signUp({
        email: fieldValues.email,
        password: fieldValues.password,
        options: {
          data: {
            firstname: fieldValues.firstname,
            lastname: fieldValues.lastname,
            date_of_birth: fieldValues.date_of_birth,
            course: fieldValues.course,
            department: fieldValues.department,
            class: fieldValues.class,
            student_id: fieldValues.student_id,
            start_year: fieldValues.start_year,
            class_number: fieldValues.class_number,
          },
        },
      })
      if (error) {
        toast({
          title: "ERROR!!",
          description: "アカウント作成に失敗しました。\n再度お試しください",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      } else {
        toast({
          title: "SUCCESS!!",
          description: "アカウントが作成されました！",
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

  const handleSignOut = async (e) => {
    e.preventDefault()
    supabase.auth.signOut()
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
        minW={"50vw"}
        minH={"56vh"}
        display={"grid"}
        gridTemplateRows={"auto auto-fit auto"}
        gridTemplateColumns={"auto"}
      >
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        <>
          {step === 1 ? (
            <Form1 setFieldValues={setFieldValues} fieldValues={fieldValues} />
          ) : step === 2 ? (
            <Form2 setFieldValues={setFieldValues} fieldValues={fieldValues} deptData={deptData} />
          ) : (
            <Form3 handleAgree={handleAgree} Agree={Agree} />
          )}
        </>
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={(e) => {
                  setStep(step - 1)
                  setProgress(progress - 33.33)
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
                  setFieldValues({
                    ...fieldValues,
                    start_year: fieldValues.student_id.substring(0, 4),
                  }),
                    handleSignUp(e)
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </Center>
  )
}
