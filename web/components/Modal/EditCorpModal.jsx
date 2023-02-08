import useAuthUser from "@/hooks/useAuthUser"
import { CorpService } from "@/libs/services/corp-service"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  VStack,
  Button,
  FormControl,
  Input,
  ModalFooter,
  Text,
  FormLabel,
  IconButton,
  ModalCloseButton,
  ModalHeader,
  useToast,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState } from "react"
import { useSWRConfig } from "swr"

export const EditCorpModal = ({ corp_id, corp_name, isOpen, onClose }) => {
  const [corpName, setCorpName] = useState(corp_name)
  const { user } = useAuthUser()
  const { mutate } = useSWRConfig()
  const toast = useToast()
  const router = useRouter()

  const handleSubmit = async () => {
    try {
      const { data, error } = await supabase
        .from("corps")
        .update({ corp_name: corpName })
        .eq("corp_id", corp_id)
    } catch {
      toast({
        title: "エラー",
        description: "変更に失敗しました。\n 入力項目に間違いがないか確認してください。",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    } finally {
      mutate(`/api/corps/${user?.id}`)
      toast({
        title: "正常に変更されました。",
        status: "success",
        duration: 1500,
        isClosable: true,
      })
      router.reload()
      //
      // onClose()
    }
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"2xl"} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        {/* <ModalButton
          icon={<IoMdClose />}
          onClick={onClose}
          pos="absolute"
          right={"20"}
          top={"10"}
        ></ModalButton> */}
        <ModalHeader>会社情報を編集</ModalHeader>
        <ModalCloseButton></ModalCloseButton>
        <ModalBody>
          {/* <VStack mt={"30px"}>
            <Text fontWeight={"bold"} fontSize={"24px"}>
              新しい会社を追加する
            </Text>
          </VStack> */}

          <VStack justify={"center"} spacing="24px">
            <FormControl width={"auto"}>
              <FormLabel>会社名</FormLabel>
              <Input
                variant="filled"
                defaultValue={corp_name}
                w={"400px"}
                onChange={(e) => setCorpName(e.target.value)}
              />
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter justifyContent="flex-end">
          <Button
            colorScheme="blue"
            mr={3}
            size={"lg"}
            onClick={() => {
              {
                corpName != ""
                  ? handleSubmit()
                  : toast({
                      title: "ERROR!!",
                      description: "会社名を入力してください。",
                      status: "error",
                      duration: 4000,
                      isClosable: true,
                    })
              }
              console.log(corpName, ":", corp_id, ":")
            }}
          >
            変更
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

function ModalButton({ icon, ...rest }) {
  return (
    <IconButton
      w={"60px"}
      h={"60px"}
      fontSize="30px"
      icon={icon}
      bg="white"
      shadow={"4px 4px 10px #bfbfbf"}
      rounded={"full"}
      {...rest}
    />
  )
}
