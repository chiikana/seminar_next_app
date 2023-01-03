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

const Sidebar = () => {
  return (
    <>
      <Box h={"full"} bgColor={"cyan.500"}>
        <VStack w={"30vw"}>
          <HStack align={"center"} justify={"center"}>
            <Icon></Icon>
            <Text>PROFILE</Text>
          </HStack>
        </VStack>
      </Box>
    </>
  )
}
export default Sidebar
