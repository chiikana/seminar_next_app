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
      <Flex flexDir={"column"} w={"60vw"} h={"full"} justify={"space-around"}>
        <Flex flexDir={"row"} justify={"space-around"}>
          <EditableContainer value={"lastname"} />
          <EditableContainer value={"firstname"} />
        </Flex>
        <EditableContainer value={"date_of_birth"} />
        <EditableContainer value={"student_id"} />
        <Flex flexDir={"row"} jjustify={"space-around"}>
          <EditableContainer value={"corse"} />
          <EditableContainer value={"department"} />
        </Flex>
        <Flex flexDir={"row"} justify={"space-around"}>
          <EditableContainer value={"firstname"} />
          <EditableContainer value={"firstname"} />
          <EditableContainer value={"firstname"} />
        </Flex>
        <EditableContainer value={"firstname"} />
      </Flex>
    </>
  )
}
