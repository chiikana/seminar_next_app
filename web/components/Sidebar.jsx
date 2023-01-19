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
  Container,
} from "@chakra-ui/react"

const Sidebar = () => {
  return (
    <>
      <Container centerContent={"false"} maxW={"md"} bg={"cyan.500"}>
        <HStack>
          <Icon></Icon>
          <Text>PROFILE</Text>
        </HStack>
      </Container>
    </>
  )
}
export default Sidebar
