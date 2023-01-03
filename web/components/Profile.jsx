import React, { useState } from "react"
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  HStack,
  VStack,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  Text,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Switch,
  useToast,
  Icon,
} from "@chakra-ui/react"

const Profile = () => {
  return (
    <>
      <VStack w={"full"} h={"full"}>
        <HStack align={"center"} justify={"center"}>
          <Text>lastname</Text>
          <Text>firstname</Text>
        </HStack>
        <HStack></HStack>
      </VStack>
    </>
  )
}
export default Profile
