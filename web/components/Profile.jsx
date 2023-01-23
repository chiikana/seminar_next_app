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
import { FaCheck, FaEdit, FaTimes } from "react-icons/fa"
import { EditableContainer } from "./Editable"

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
      <SimpleGrid columns={2} columnGap={300}>
        {/* <EditableContainer props={"lastname"} /> */}
        <Editable
          textAlign="center"
          defaultValue="lastname"
          fontSize="2xl"
          isPreviewFocusable={false}
        >
          <HStack>
            <EditablePreview />
            <Input as={EditableInput} />
            <EditableControls />
          </HStack>
        </Editable>
        <Editable
          textAlign="center"
          defaultValue="lastname"
          fontSize="2xl"
          isPreviewFocusable={false}
        >
          <HStack>
            <EditablePreview />
            <Input as={EditableInput} />
            <EditableControls />
          </HStack>
        </Editable>
        <Editable
          textAlign="center"
          defaultValue="lastname"
          fontSize="2xl"
          isPreviewFocusable={false}
        >
          <HStack>
            <EditablePreview />
            <Input as={EditableInput} />
            <EditableControls />
          </HStack>
        </Editable>
        <Editable
          textAlign="center"
          defaultValue="lastname"
          fontSize="2xl"
          isPreviewFocusable={false}
        >
          <HStack>
            <EditablePreview />
            <Input as={EditableInput} />
            <EditableControls />
          </HStack>
        </Editable>
        <Editable
          textAlign="center"
          defaultValue="lastname"
          fontSize="2xl"
          isPreviewFocusable={false}
        >
          <HStack>
            <EditablePreview />
            <Input as={EditableInput} />
            <EditableControls />
          </HStack>
        </Editable>
        <Editable
          textAlign="center"
          defaultValue="lastname"
          fontSize="2xl"
          isPreviewFocusable={false}
        >
          <HStack>
            <EditablePreview />
            <Input as={EditableInput} />
            <EditableControls />
          </HStack>
        </Editable>
        <Editable
          textAlign="center"
          defaultValue="lastname"
          fontSize="2xl"
          isPreviewFocusable={false}
        >
          <HStack>
            <EditablePreview />
            <Input as={EditableInput} />
            <EditableControls />
          </HStack>
        </Editable>
        <Editable
          textAlign="center"
          defaultValue="lastname"
          fontSize="2xl"
          isPreviewFocusable={false}
        >
          <HStack>
            <EditablePreview />
            <Input as={EditableInput} />
            <EditableControls />
          </HStack>
        </Editable>
        <Editable
          textAlign="center"
          defaultValue="lastname"
          fontSize="2xl"
          isPreviewFocusable={false}
        >
          <HStack>
            <EditablePreview />
            <Input as={EditableInput} />
            <EditableControls />
          </HStack>
        </Editable>
        <Editable
          textAlign="center"
          defaultValue="lastname"
          fontSize="2xl"
          isPreviewFocusable={false}
        >
          <HStack>
            <EditablePreview />
            <Input as={EditableInput} />
            <EditableControls />
          </HStack>
        </Editable>
        <Editable
          textAlign="center"
          defaultValue="lastname"
          fontSize="2xl"
          isPreviewFocusable={false}
        >
          <HStack>
            <EditablePreview />
            <Input as={EditableInput} />
            <EditableControls />
          </HStack>
        </Editable>
        <Editable
          textAlign="center"
          defaultValue="lastname"
          fontSize="2xl"
          isPreviewFocusable={false}
        >
          <HStack>
            <EditablePreview />
            <Input as={EditableInput} />
            <EditableControls />
          </HStack>
        </Editable>
        <Editable
          textAlign="center"
          defaultValue="lastname"
          fontSize="2xl"
          isPreviewFocusable={false}
        >
          <HStack>
            <EditablePreview />
            <Input as={EditableInput} />
            <EditableControls />
          </HStack>
        </Editable>
      </SimpleGrid>
    </>
  )
}
