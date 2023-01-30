import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react"
import { useState, useEffect } from "react"

export const UpdateModal = (props) => {
  const {
    children,
    labelValue,
    idValue,
    isFullname = false,
    isCourseDepartment = false,
    isStudentId = false,
    isDateOfBirth = false,
    isMailAddress = false,
  } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [metadataValue, setMetadataValue] = useState("")
  const [userValue, setUserValue] = useState()
  const [fullName, setFullName] = useState("")
  const [course, setCourse] = useState("")
  const [department, setDepartment] = useState("")
  const [classes, setClasses] = useState("")
  const [studentId, setStudentId] = useState("")
  const toast = useToast()

  const updateProfile = async ({ fullName, course, department, classes, student_id, user_id }) => {
    try {
      if (!user_id) throw new Error("No user")

      const updates = {
        id: user_id,
        full_name: fullName,
        course: course,
        department: department,
        class: classes,
        student_id: student_id,
      }

      let { error } = await supabase.from("profiles").upsert(updates).eq("id", user_id)
      if (error) throw error
      toast({
        title: "SUCCESS!!",
        description: "Profileを更新しました",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
      Router.reload()
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

  const onUpsert = async ({ metadataValue, user_id }) => {
    try {
      if (!user_id) throw new Error("No user")

      const updates = {
        metadataValue: userValue,
      }

      let { error } = await supabase.from("profiles").upsert(updates).eq("id", user_id)
      if (error) throw error
      toast({
        title: "SUCCESS!!",
        description: "Profileを更新しました",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
      Router.reload()
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
  useEffect(() => {
    console.log("metadataValue => ", metadataValue)
    console.log("userValue => ", userValue)
  }, [metadataValue, userValue])
  return (
    <>
      <Button
        align="right"
        id="aaaa"
        border={"1px"}
        borderColor={"gray.50"}
        _hover={{ bg: "teal.50", border: "1px", borderColor: "teal.300" }}
        onClick={() => {
          setMetadataValue(idValue), onOpen()
        }}
      >
        変更
      </Button>
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent width="30vw">
            <ModalHeader>ユーザー情報変更</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              {isFullname && (
                <FormControl mr="5%">
                  <FormLabel htmlFor={metadataValue} fontWeight={"normal"}>
                    新しい{labelValue}
                  </FormLabel>
                  <Input
                    id={idValue}
                    onChange={(e) => setUserValue(e.target.value)}
                    value={!userValue ? "" : userValue}
                  />
                </FormControl>
              )}
              {isCourseDepartment && (
                <FormControl mr="5%">
                  <FormLabel htmlFor={idValue} fontWeight={"normal"}>
                    新しい{labelValue}
                  </FormLabel>
                  <Input
                    id={idValue}
                    onChange={(e) => setUserValue(e.target.value)}
                    value={!userValue ? "" : userValue}
                  />
                </FormControl>
              )}
              {isStudentId && (
                <FormControl mr="5%">
                  <FormLabel htmlFor={idValue} fontWeight={"normal"}>
                    新しい{labelValue}
                  </FormLabel>
                  <Input
                    id={idValue}
                    onChange={(e) => setUserValue(e.target.value)}
                    value={!userValue ? "" : userValue}
                  />
                </FormControl>
              )}
              {isDateOfBirth && (
                <FormControl mr="5%">
                  <FormLabel htmlFor={idValue} fontWeight={"normal"}>
                    新しい{labelValue}
                  </FormLabel>
                  <Input
                    id={idValue}
                    onChange={(e) => setUserValue(e.target.value)}
                    value={!userValue ? "" : userValue}
                  />
                </FormControl>
              )}
              {isMailAddress && (
                <FormControl mr="5%">
                  <FormLabel htmlFor={idValue} fontWeight={"normal"}>
                    新しい{labelValue}
                  </FormLabel>
                  <Input
                    id={idValue}
                    onChange={(e) => setUserValue(user?.user_metadata.metadataValue)}
                    value={!userValue ? "" : userValue}
                  />
                </FormControl>
              )}
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" variant="solid" mr={3} onClick={onUpsert}>
                送信
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </>
  )
}
