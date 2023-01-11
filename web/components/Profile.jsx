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

const Profile = () => {
  return (
    <>
      <Container>
        <VStack>
          <HStack align={"center"} justify={"center"}>
            <Text>lastname</Text>
            <Text>firstname</Text>
          </HStack>
          <HStack>
            <Text>IDIDIDID</Text>
            <Text>YYYY/MM/DD</Text>
          </HStack>
        </VStack>
      </Container>
    </>
  )
}
export default Profile
