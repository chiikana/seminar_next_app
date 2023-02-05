// import { EditActiveModal } from "@/components/common/Modal/EditActiveModal"
import { ActiveClass } from "@/libs/active"
import { Tr, Td, useDisclosure } from "@chakra-ui/react"
import { ToggleTheme } from "@/libs/utils/themes"

export const ActiveRecieve = (props) => {
  const { active, corp, isSelfAccount } = props
  const { toggleHoverBgColor } = ToggleTheme()
  const {
    isOpen: isOpenEditActive,
    onOpen: onOpenEditActive,
    onClose: onCloseEditActive,
  } = useDisclosure()
  return (
    <>
      <Tr
        key={active.id}
        _hover={{ bg: toggleHoverBgColor, transition: "0.2s" }}
        onClick={() => {
          isSelfAccount && onOpenEditActive()
        }}
        cursor={"pointer"}
      >
        <Td>{active.active_name}</Td>
        <Td>{active.active_at.toString()}</Td>
        <Td>{active.active_place}</Td>
        <Td>{active.absence_submit_at?.toString()}</Td>
        <Td>{ActiveClass.selectionResult[active.selection_result]}</Td>
      </Tr>
      {/* <EditActiveModal
        isOpen={isOpenEditActive}
        onClose={onCloseEditActive}
        corp={corp}
        active={active}
      /> */}
    </>
  )
}
