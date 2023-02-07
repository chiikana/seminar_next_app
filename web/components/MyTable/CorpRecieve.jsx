import { FaTrashAlt, FaEdit, FaBars } from "react-icons/fa"
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Button,
  Box,
  Text,
  HStack,
  Spacer,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
  useDisclosure,
  Editable,
  EditableInput,
  EditablePreview,
  Td,
  Center,
  CircularProgress,
  Divider,
} from "@chakra-ui/react"
import { supabase } from "@/libs/utils/supabaseClient"
// import { DeleteConfirm } from "@/components/common/Modal/DeleteModal"
// import { AddActiveModal } from "@/components/common/Modal/AddActiveModal"
// import { EditConfirm } from "@/components/common/Modal/EditCorpModal"
import router from "next/router"
import useAuthUser from "@/hooks/useAuthUser"
// import { useProfileFromUserId } from "@/hooks/useProfileFromUserId"
// // import { isTrue } from "@/libs/util"
// import { useActivesFromCorpId } from "@/hooks/useActivesFromCorpId"
// import { useEffect, useState } from "react"
// import { ActiveClass } from "@/libs/active"
import useSWR from "swr"
import { fetcher } from "@/libs/utils/useSWR"
// import { EditActiveModal } from "@/components/common/Modal/EditActiveModal"
import { ActiveRecieve } from "@/components/MyTable/ActiveRecieve"
import { AddActiveModal } from "@/components/Modal/AddActiveModal"
import { ToggleTheme } from "@/libs/utils/themes"

export const CorpRecieve = (props) => {
  const { corp } = props
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isActiceOpen, onOpen: onActiveOpen, onClose: onActiveClose } = useDisclosure()
  const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()

  const { toggleSubBgColor } = ToggleTheme()

  const { user } = useAuthUser()
  const { id } = router.query
  const userId = { id }.id

  const isSelfAccount = user && userId === user.id

  const { data: actives, error } = useSWR(`/api/actives/${corp.corp_id}`, fetcher)

  if (!actives) return <></>

  return (
    <Box w={"60vw"} p={5} bg={toggleSubBgColor} my={5}>
      {/* <Text textAlign="center" defaultValue={corp?.corp_name}>
          <EditablePreview />
          <EditableInput />
        </Text> */}
      {isSelfAccount ? (
        <HStack mb={"20px"}>
          <Text fontWeight={"bold"} fontSize={"xl"} px={3}>
            {corp?.corp_name}
          </Text>
          <Spacer></Spacer>
          <Menu>
            <MenuButton as={IconButton} aria-label="Options" icon={<FaBars />} />
            <MenuList>
              <MenuItem onClick={onEditOpen} icon={<FaEdit />}>
                編集する
                {/* <EditConfirm
                corp_id={corp.corp_id}
                corp_name={corp.corp_name}
                isOpen={isEditOpen}
                onClose={onEditClose}
              ></EditConfirm> */}
              </MenuItem>
              <MenuItem color={"red.600"} onClick={onOpen} icon={<FaTrashAlt />}>
                削除する
                {/* <DeleteConfirm
                corp_id={corp.corp_id}
                isOpen={isOpen}
                onClose={onClose}
              ></DeleteConfirm> */}
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      ) : (
        <HStack mb={"20px"} justify={"flex-start"}>
          <Text fontWeight={"bold"} fontSize={"xl"} px={3}>
            {corp?.corp_name}
          </Text>
        </HStack>
      )}

      {actives && actives.length > 0 ? (
        <TableContainer w={"100%"}>
          <Table size={"sm"}>
            <Thead>
              <Tr>
                <Th fontSize={"md"}>活動種類</Th>
                <Th fontSize={"md"}>参加日</Th>
                <Th fontSize={"md"}>実施場所</Th>
                <Th fontSize={"md"}>公欠提出日</Th>
                <Th fontSize={"md"}>結果</Th>
                <Th fontSize={"md"}>公欠許可</Th>
                <Th fontSize={"md"}>報告書受領日</Th>
              </Tr>
            </Thead>
            <Tbody>
              {actives.length > 0 ? (
                <>
                  {actives.map((active) => {
                    return <ActiveRecieve key={active.id} active={active} corp={corp} />
                  })}
                </>
              ) : (
                <Text pl={4} py={3} fontSize={"md"} textAlign={"left"}>
                  活動はありません
                </Text>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Text pl={4} py={3} fontSize={"sm"} textAlign={"left"}>
          活動はありません
        </Text>
        // <Center w={'100%'} h={'100%'}>
        //   <CircularProgress isIndeterminate color="green.300" />
        // </Center>
      )}

      {isSelfAccount && (
        <>
          <Divider />
          <HStack justify={"flex-end"}>
            <Button
              width={"170px"}
              variant={"outline"}
              colorScheme={"teal"}
              mt={3}
              onClick={onActiveOpen}
            >
              活動を追加
            </Button>
          </HStack>
        </>
      )}

      <AddActiveModal isOpen={isActiceOpen} onClose={onActiveClose} corp={corp} />
    </Box>
  )
}
