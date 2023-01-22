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
  useEditableControls,
  VStack,
} from "@chakra-ui/react"
import { FaCheck, FaEdit, FaTimes } from "react-icons/fa"

export const Profile = () => {
  const EditableControls = () => {
    const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } =
      useEditableControls()

    return isEditing ? (
      <ButtonGroup justify="center" size="sm">
        <IconButton icon={<FaCheck />} {...getSubmitButtonProps()} />
        <IconButton icon={<FaTimes />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justify="center">
        <IconButton size="sm" icon={<FaEdit />} {...getEditButtonProps()} />
      </Flex>
    )
  }

  return (
    <>
      <Container p={"30px"}>
        <VStack align={"center"} spacing={"5vh"}>
          <HStack spacing={"5vw"}>
            <Editable
              textAlign="center"
              defaultValue="lastname"
              fontSize="2xl"
              isPreviewFocusable={false}
            >
              <HStack>
                <EditablePreview />
                {/* Here is the custom input */}
                <Input as={EditableInput} />
                <EditableControls />
              </HStack>
            </Editable>
            <Editable
              textAlign="center"
              defaultValue="firstname"
              fontSize="2xl"
              isPreviewFocusable={false}
            >
              <HStack>
                <EditablePreview />
                {/* Here is the custom input */}
                <Input as={EditableInput} />
                <EditableControls />
              </HStack>
            </Editable>
          </HStack>
          <HStack spacing={"5vw"}>
            <Editable
              textAlign="center"
              defaultValue="IDIDIDID"
              fontSize="2xl"
              isPreviewFocusable={false}
            >
              <HStack>
                <EditablePreview />
                {/* Here is the custom input */}
                <Input as={EditableInput} />
                <EditableControls />
              </HStack>
            </Editable>
            <Editable
              textAlign="center"
              defaultValue="YYYY/MM/DD"
              fontSize="2xl"
              isPreviewFocusable={false}
            >
              <HStack>
                <EditablePreview />
                {/* Here is the custom input */}
                <Input as={EditableInput} />
                <EditableControls />
              </HStack>
            </Editable>
          </HStack>
        </VStack>
      </Container>
    </>
  )
}
