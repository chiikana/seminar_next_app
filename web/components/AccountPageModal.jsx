import useAuthUser from "@/hooks/useAuthUser"
import { supabase } from "@/libs/utils/supabaseClient"
import {
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Select,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import deptData from "./dept.json"
// import Router from "next/router"
// import { FaEyeSlash, FaEye } from "react-icons/fa"
import { toggleTheme } from "@/libs/utils/themes"

const Form1 = (props) => {
  const { toggleTextColor, subAccentColor } = toggleTheme()
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        ユーザー情報変更
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="last-name" fontWeight={"normal"} color={toggleTextColor}>
            性
          </FormLabel>
          <Input
            id="last-name"
            focusBorderColor={subAccentColor}
            onChange={(e) =>
              props.setFieldValues({ ...props.fieldValues, lastname: e.target.value })
            }
            value={!props.fieldValues.lastname ? "" : props.fieldValues.lastname}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="first-name" fontWeight={"normal"} color={toggleTextColor}>
            名
          </FormLabel>
          <Input
            id="first-name"
            focusBorderColor={subAccentColor}
            onChange={(e) =>
              props.setFieldValues({ ...props.fieldValues, firstname: e.target.value })
            }
            value={!props.fieldValues.firstname ? "" : props.fieldValues.firstname}
          />
        </FormControl>
      </Flex>

      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="date of birth" fontWeight={"normal"} color={toggleTextColor}>
            生年月日
          </FormLabel>
          <Input
            id="date_of_birth"
            type="date"
            focusBorderColor={subAccentColor}
            onChange={(e) =>
              props.setFieldValues({ ...props.fieldValues, date_of_birth: e.target.value })
            }
            value={!props.fieldValues.date_of_birth ? "" : props.fieldValues.date_of_birth}
          />
        </FormControl>
      </Flex>
    </>
  )
}

const Form2 = (props) => {
  const { toggleTextColor, subAccentColor } = toggleTheme()
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        ユーザー情報変更
      </Heading>
      <VStack>
        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel htmlFor="course" fontSize="sm" fontWeight="md" color={toggleTextColor} mt="2%">
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
          <FormLabel htmlFor="department" fontSize="sm" fontWeight="md" color={toggleTextColor}>
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

        <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
          <FormLabel htmlFor="class" fontSize="sm" fontWeight="md" color={toggleTextColor} mt="2%">
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
          <FormLabel
            htmlFor="student_id"
            fontSize="sm"
            fontWeight="md"
            color={toggleTextColor}
            mt="2%"
          >
            学籍番号
          </FormLabel>
          <Input
            type="text"
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

export const ChangeDataModal = (props) => {
  const { isUser = false, isEmail = false, isPass = false, textValue = "" } = props
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(50)
  const { user } = useAuthUser()
  const { toggleTextColor, toggleBorderColor, toggleMainAccentColor, subAccentColor } =
    toggleTheme()
  // const [show, setShow] = useState(false)
  // const handleClick = () => setShow(!show)
  const { isOpen: isChUserOpen, onOpen: onChUserOpen, onClose: onChUserClose } = useDisclosure()
  const { isOpen: isChEmailOpen, onOpen: onChEmailOpen, onClose: onChEmailClose } = useDisclosure()
  const { isOpen: isChPassOpen, onOpen: onChPassOpen, onClose: onChPassClose } = useDisclosure()

  const defaultValues = {
    email: "",
    firstname: "",
    lastname: "",
    date_of_birth: "",
    course: "",
    department: "",
    class: "",
    student_id: "",
  }

  const [fieldValues, setFieldValues] = useState(defaultValues)
  const router = useRouter()

  // useEffect(() => {
  //   console.log(fieldValues)
  // }, [fieldValues])

  useEffect(() => {
    if (user) getProfile(user.id)
  }, [user])

  const getProfile = async (user_id) => {
    let { data } = await supabase
      .from("profiles")
      .select("firstname,lastname,date_of_birth,course,department,class,student_id")
      .eq("id", user_id)
    if (data) {
      setFieldValues({
        ...fieldValues,
        email: user?.email,
        firstname: data[0].firstname,
        lastname: data[0].lastname,
        date_of_birth: data[0].date_of_birth,
        course: data[0].course,
        department: data[0].department,
        class: data[0].class,
        student_id: data[0].student_id,
      })
    }
  }

  const onEmailSubmit = async (e) => {
    e.preventDefault()
    const email = fieldValues.email
    const { data, error } = await supabase.auth.updateUser({ email: email })

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
        description: "変更確認メールが送信されました。\n受信したメールを確認してください",
        status: "success",
        duration: 6000,
        isClosable: true,
      })
      router.push("/")
    }
  }

  const onPassSubmit = async (e) => {
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

  const updateProfile = async ({ user_id }) => {
    try {
      if (!user_id) throw new Error("No user")

      const updates = {
        id: user_id,
        firstname: fieldValues.firstname,
        lastname: fieldValues.lastname,
        date_of_birth: fieldValues.date_of_birth,
        course: fieldValues.course,
        department: fieldValues.department,
        class: fieldValues.class,
        student_id: fieldValues.student_id,
      }
      console.log("updates=> ", updates)

      let { error } = await supabase.from("profiles").upsert(updates).eq("id", user_id)
      if (error) throw error
      toast({
        title: "SUCCESS!!",
        description: "Profileを更新しました",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
      router.reload()
      onClose()
    } catch (error) {
      toast({
        title: "ERROR!!",
        description: "更新に失敗しました。もう一度お試しください",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    } finally {
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const status = {
      user_id: user.id,
    }
    updateProfile(status)
  }

  return (
    <>
      <Button
        sx={!isUser && { width: "170px" }}
        align="right"
        id="aaaa"
        border={"1px"}
        borderColor={toggleBorderColor}
        _hover={{ bg: toggleMainAccentColor, border: "1px", borderColor: subAccentColor }}
        onClick={() => {
          {
            isUser && onChUserOpen()
          }
          {
            isEmail && onChEmailOpen()
          }
          {
            isPass && onChPassOpen()
          }
        }}
      >
        {textValue}
      </Button>
      <>
        <Modal isOpen={isChEmailOpen} onClose={onChEmailClose}>
          <ModalOverlay />
          <ModalContent width="30vw">
            <ModalHeader color={toggleTextColor}>メールアドレス変更</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <FormControl mr="5%">
                <FormLabel htmlFor={"mail"} fontWeight={"normal"}>
                  新しいメールアドレス
                </FormLabel>
                <InputGroup size="md">
                  <Input
                    id={"mail"}
                    focusBorderColor={subAccentColor}
                    onChange={(e) => setFieldValues({ ...fieldValues, email: e.target.value })}
                    value={!fieldValues.email ? "" : fieldValues.email}
                  />
                </InputGroup>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                isDisabled={fieldValues.email === "" ? true : false}
                w="7rem"
                variant="solid"
                colorScheme="red"
                onClick={onEmailSubmit}
              >
                送信
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      <>
        <Modal isOpen={isChPassOpen} onClose={onChPassClose}>
          <ModalOverlay />
          <ModalContent width="30vw">
            <ModalHeader color={toggleTextColor}>パスワード変更リクエスト</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <FormControl>
                <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
                  メールアドレスを入力
                </FormLabel>
                <InputGroup size="md">
                  <Input
                    id={"mail"}
                    focusBorderColor={subAccentColor}
                    onChange={(e) => setFieldValues({ ...fieldValues, email: e.target.value })}
                    value={!fieldValues.email ? "" : fieldValues.email}
                  />
                </InputGroup>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                isDisabled={fieldValues.email === "" ? true : false}
                w="7rem"
                variant="solid"
                colorScheme="red"
                onClick={(e) => {
                  onPassSubmit(e)
                }}
              >
                送信
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      <>
        <Modal isOpen={isChUserOpen} onClose={onChUserClose}>
          <ModalOverlay />
          <ModalContent minW={"40vw"} minH={"56vh"}>
            <ModalCloseButton />
            <ModalBody
              w={"100%"}
              h={"100%"}
              borderWidth="1px"
              rounded="lg"
              shadow="1px 1px 3px rgba(0,0,0,0.3)"
              // maxWidth={800}
              p={6}
              as="form"
              display={"grid"}
              gridTemplateRows={"auto auto-fit auto"}
              gridTemplateColumns={"auto"}
            >
              <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
              <>
                {step === 1 ? (
                  <Form1 setFieldValues={setFieldValues} fieldValues={fieldValues} />
                ) : (
                  <Form2
                    setFieldValues={setFieldValues}
                    fieldValues={fieldValues}
                    deptData={deptData}
                  />
                )}
              </>
            </ModalBody>
            <ModalFooter>
              <ButtonGroup w="100%">
                <Flex w="100%" justifyContent="space-between">
                  <Flex>
                    <Button
                      onClick={(e) => {
                        setStep(step - 1)
                        setProgress(progress - 50)
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
                      isDisabled={step === 2}
                      onClick={() => {
                        setStep(step + 1)
                        if (step === 2) {
                          setProgress(100)
                        } else {
                          setProgress(progress + 50)
                        }
                      }}
                      colorScheme="teal"
                      variant="outline"
                    >
                      Next
                    </Button>
                  </Flex>
                  {step === 2 ? (
                    <Button
                      w="7rem"
                      colorScheme="red"
                      variant="solid"
                      onClick={(e) => {
                        onSubmit(e)
                        // router.reload()
                      }}
                    >
                      送信
                    </Button>
                  ) : null}
                </Flex>
              </ButtonGroup>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </>
  )
}
