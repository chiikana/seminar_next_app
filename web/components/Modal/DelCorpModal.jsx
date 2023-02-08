import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  VStack,
  Button,
  ModalFooter,
  Text,
  useToast,
  ModalCloseButton,
  ModalHeader,
} from "@chakra-ui/react"
import { supabase } from "@/libs/utils/supabaseClient"
import { mutate } from "swr"
import useAuthUser from "@/hooks/useAuthUser"

export const DelCorpModal = ({ isOpen, onClose, corp_id }) => {
  const toast = useToast()
  const { user } = useAuthUser()

  const onDelete = async () => {
    try {
      const { data, error } = await supabase.from("corps").delete().eq("corp_id", corp_id)
    } catch {
      toast({
        title: "エラー",
        description: "新規登録に失敗しました。\n 入力項目に間違いがないか確認してください。",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    } finally {
      // Router.reload()
      mutate(`/api/corps/${user?.id}`)
      toast({
        title: "正常に削除されました。",
        status: "success",
        duration: 1500,
        isClosable: true,
      })
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"3xl"} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>活動の削除</ModalHeader>
        <ModalCloseButton></ModalCloseButton>
        <ModalBody pb={5}>
          <VStack paddingTop={"3%"} paddingBottom={"2%"}>
            <p>活動情報も消えてしまいます。 本当に削除しますか？</p>
          </VStack>
        </ModalBody>
        <ModalFooter justifyContent="center" paddingBottom={"4%"}>
          <Button
            w={"40%"}
            onClick={onDelete}
            marginRight={"2%"}
            backgroundColor={"red.300"}
            colorScheme={"red"}
          >
            削除
          </Button>
          <Button w={"40%"} onClick={onClose} marginLeft={"2%"}>
            キャンセル
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
