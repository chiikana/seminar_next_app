import React, { useState, useEffect } from "react"
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Flex,
  HStack,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Spacer,
} from "@chakra-ui/react"
import useAuthUser from "@/hooks/useAuthUser"
import useProfile from "@/hooks/useProfile"
import { FaEyeSlash, FaEye } from "react-icons/fa"
import { supabase } from "@/libs/utils/supabaseClient"
import { useRouter } from "next/router"
import { UpdateModal } from "./UpdateUsermetadata"
import { UpsertModal } from "./UpsertModal"
import { ChangeDataModal } from "./AccountPageModal"

export const AccountInfo = (props) => {
  const router = useRouter()
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const [loading, setLoading] = useState(false)
  const { isOpen: isChPassOpen, onOpen: onChPassOpen, onClose: onChPassClose } = useDisclosure()
  const { isOpen: isChMailOpen, onOpen: onChMailOpen, onClose: onChMailClose } = useDisclosure()
  const { user } = useAuthUser()
  const { profile } = useProfile()

  const defaultValue = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    date_of_birth: "",
    course: "",
    department: "",
    class: "",
    student_id: "",
  }

  const [fieldValues, setFieldValues] = useState(defaultValue)
  const toast = useToast()

  useEffect(() => {
    if (user) getProfile(user.id)
  }, [user])
  useEffect(() => {
    console.log(fieldValues)
  }, [fieldValues])

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

  const onMailSubmit = async (e) => {
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
        description: "メールアドレスは正常に変更されました！",
        status: "success",
        duration: 1500,
        isClosable: true,
      })
      router.push("/")
    }
  }

  const onPassSubmit = async (e) => {
    e.preventDefault()
    const password = fieldValues.password
    const { error } = await supabase.auth.updateUser({ password: password })

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
  }

  return (
    <>
      <Card w={"60vw"} border="3mm ridge rgba(211, 220, 50, .6)">
        <CardHeader>
          <HStack justify={"space-between"}>
            <Heading size="md"> アカウント情報 </Heading>
            {/* <UpsertModal /> */}
            <ChangeDataModal isUser={true} textValue={"変更"} />
          </HStack>
        </CardHeader>
        <CardBody>
          <Stack
            h={"100%"}
            direction={"column"}
            divider={<StackDivider />}
            spacing="4"
            justify={"space-between"}
          >
            <></>
            <HStack justify={"space-between"}>
              <Heading size="md" textTransform="uppercase" w={"170px"}>
                名前
              </Heading>
              <HStack>
                <Text pt="2" fontSize="xl">
                  {/* {user?.user_metadata.lastname} */}
                  {fieldValues.lastname}
                </Text>
                <Text pt="2" fontSize="xl">
                  {/* {user?.user_metadata.firstname} */}
                  {fieldValues.firstname}
                </Text>
              </HStack>
              {/* <UpdateModal isFullname={true} idValue={"fullname"} labelValue={"名前"} /> */}
              <Box w={"170px"}></Box>
            </HStack>
            <HStack justify={"space-between"}>
              <Heading size="md" textTransform="uppercase" w={"170px"}>
                学科
              </Heading>
              <HStack>
                <Text pt="2" fontSize="xl">
                  {/* {user?.user_metadata.course} */}
                  {fieldValues.course}
                </Text>
                {fieldValues.course !== "教員" && (
                  <Text pt="2" fontSize="xl">
                    {/* {user?.user_metadata.department} */}
                    {fieldValues.department}
                  </Text>
                )}
                {fieldValues.class !== "" && (
                  <Text pt="2" fontSize="sm" _after={{ content: `"組"` }}>
                    {fieldValues.class}
                  </Text>
                )}
              </HStack>
              {/* <UpdateModal
                isCourseDepartment={true}
                idValue={"course_deprtment"}
                labelValue={"学科名"}
              /> */}
              <Box w={"170px"}></Box>
            </HStack>
            <HStack justify={"space-between"}>
              <Heading size="md" textTransform="uppercase" w={"170px"}>
                出席番号
              </Heading>
              <Text pt="2" fontSize="xl">
                {/* {user?.user_metadata.student_id} */}
                {fieldValues.student_id}
              </Text>
              {/* <UpdateModal isStudentId={true} idValue={"student_id"} labelValue={"学籍番号"} /> */}
              <Box w={"170px"}></Box>
            </HStack>
            <HStack justify={"space-between"}>
              <Heading size="md" textTransform="uppercase" w={"170px"}>
                生年月日
              </Heading>
              <Text pt="2" fontSize="xl">
                {/* {user?.user_metadata.date_of_birth} */}
                {fieldValues.date_of_birth}
              </Text>
              {/* <UpdateModal isDateOfBirth={true} idValue={"date_of_birth"} labelValue={"生年月日"} /> */}
              <Box w={"170px"}></Box>
            </HStack>
            <HStack justify={"space-between"}>
              <Heading size="md" textTransform="uppercase" w={"170px"}>
                メールアドレス
              </Heading>
              <Text pt="2" fontSize="xl">
                {/* {user?.email} */}
                {/* {profile?.email} */}
                {fieldValues.email}
              </Text>
              {/* <UpdateModal
                isMailAddress={true}
                idValue={"mail_address"}
                labelValue={"メールアドレス"}
              /> */}
              {/* <Button
                align="right"
                id="aaaa"
                w={"170px"}
                border={"1px"}
                borderColor={"gray.50"}
                _hover={{ bg: "teal.50", border: "1px", borderColor: "teal.300" }}
                onClick={onChMailOpen}
              >
                メールアドレス変更
              </Button> */}
              <ChangeDataModal isEmail={true} textValue={"メールアドレス変更"} />
            </HStack>
            <HStack justify={"space-between"}>
              <Heading size="md" textTransform="uppercase" w={"170px"}>
                パスワード
              </Heading>
              <Text pt="2" fontSize="xl">
                {/* {user?.password} */}
                {/* {profile?.password} */}
              </Text>
              <ChangeDataModal isPass={true} textValue={"パスワード変更"} />
              {/* <Button
                align="right"
                id="aaaa"
                w={"170px"}
                border={"1px"}
                borderColor={"gray.50"}
                _hover={{ bg: "teal.50", border: "1px", borderColor: "teal.300" }}
                onClick={onChPassOpen}
              >
                パスワード変更
              </Button> */}
            </HStack>
            <></>
          </Stack>
        </CardBody>
      </Card>
      {/* <>
        <Modal isOpen={isChMailOpen} onClose={onChMailClose}>
          <ModalOverlay />
          <ModalContent width="30vw">
            <ModalHeader>メールアドレス変更</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <FormControl mr="5%">
                <FormLabel htmlFor={"mail"} fontWeight={"normal"}>
                  新しいメールアドレス
                </FormLabel>
                <Input
                  id={"mail"}
                  onChange={(e) => setFieldValues({ ...fieldValues, email: e.target.value })}
                  value={!fieldValues.email ? "" : fieldValues.email}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" variant="solid" mr={3} onClick={onMailSubmit}>
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
            <ModalHeader>パスワード変更</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <FormControl>
                <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
                  新しいパスワード
                </FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="パスワードを入力"
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
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" variant="solid" mr={3} onClick={onPassSubmit}>
                送信
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </> */}
    </>
  )
}
