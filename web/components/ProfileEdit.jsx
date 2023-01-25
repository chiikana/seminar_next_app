import {
  ButtonGroup,
  Container,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  HStack,
  IconButton,
  Input,
  SimpleGrid,
  useEditableControls,
  VStack,
} from "@chakra-ui/react"
import { EditableContainer } from "./Editable"

export const ProfileEdit = () => {
  return (
    <>
      <Flex flexDir={"column"}>
        <Flex flexDir={"row"}>
          <EditableContainer value={"lastname"} />
          <EditableContainer value={"firstname"} />
        </Flex>
        <EditableContainer value={"date_of_birth"} />
        <EditableContainer value={"student_id"} />
        <Flex flexDir={"row"}>
          <EditableContainer value={"corse"} />
          <EditableContainer value={"department"} />
        </Flex>
        <Flex flexDir={"row"}>
          <EditableContainer value={"firstname"} />
          <EditableContainer value={"firstname"} />
          <EditableContainer value={"firstname"} />
        </Flex>
        <EditableContainer value={"firstname"} />
      </Flex>
    </>
  )
}
