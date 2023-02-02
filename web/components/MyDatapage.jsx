import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  string,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react"
import React, { useEffect, useCallback, useState, useRef } from "react"

export const MyDatabase = () => {
  //const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isRegisterOpen,
    onOpen: onRegisterOpen,
    onClose: onRegisterClose,
  } = useDisclosure()
  const { isOpen: isWorkOpen, onOpen: onWorkOpen, onClose: onWorkClose } = useDisclosure()
  const { isOpen: isChangeOpen, onOpen: onChangeOpen, onClose: onChangeClose } = useDisclosure()
  const [size] = React.useState("lx")

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>
                <Button id="button" colorScheme="teal" variant="outline" onClick={onRegisterOpen}>
                  登録
                </Button>
              </Th>
              <Th>企業名</Th>
              <Th>企業番号</Th>
              <Th>最終結果</Th>
              <Th>内定承諾提出日</Th>
              <Th>求職票</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td></Td>
              <Td>株式会社A</Td>
              <Td>11111</Td>
              <Td>合否</Td>
              <Td>M/D</Td>
              <Td>NULL</Td>
              <Td>
                <Button colorScheme="teal" variant="outline" onClick={onWorkOpen}>
                  活動内容
                </Button>
              </Td>
              <Td>
                <Button colorScheme="teal" variant="outline" onClick={onChangeOpen}>
                  変更
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td>株式会社B</Td>
              <Td>22222</Td>
              <Td>合否</Td>
              <Td>M/D</Td>
              <Td>NULL</Td>
              <Td>
                <Button colorScheme="teal" variant="outline" onClick={onWorkOpen}>
                  活動内容
                </Button>
              </Td>
              <Td>
                <Button colorScheme="teal" variant="outline" onClick={onChangeOpen}>
                  変更
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td>株式会社C</Td>
              <Td>33333</Td>
              <Td>合否</Td>
              <Td>M/D</Td>
              <Td>NULL</Td>
              <Td>
                <Button colorScheme="teal" variant="outline" onClick={onWorkOpen}>
                  活動内容
                </Button>
              </Td>
              <Td>
                <Button colorScheme="teal" variant="outline" onClick={onChangeOpen}>
                  変更
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isRegisterOpen}
        onClose={onRegisterClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>新規登録</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>企業名</FormLabel>
              <Input ref={initialRef} placeholder="企業名を入力してください" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>企業番号</FormLabel>
              <Input placeholder="数字を入力してください" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              決定
            </Button>
            <Button onClick={onRegisterClose}>閉じる</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isWorkOpen}
        onClose={onWorkClose}
        size={size}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>活動内容</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Td>活動1</Td>
                  </Tr>
                  <Tr>
                    <Td>活動概要</Td>
                    <Td>場所</Td>
                    <Td>実施日</Td>
                    <Td>公欠提出日</Td>
                    <Td>公欠状態</Td>
                    <Td>結果</Td>
                    <Td isNumeric>報告受領日</Td>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>インターンシップ</Td>
                    <Td>Teams</Td>
                    <Td>M/D</Td>
                    <Td>M/D</Td>
                    <Td>無</Td>
                    <Td>NULL</Td>
                    <Td isNumeric>NULL</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onWorkClose}>閉じる</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isChangeOpen}
        onClose={onChangeClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>変更</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>企業名</FormLabel>
              <Input ref={initialRef} placeholder="企業名を入力してください" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>企業番号</FormLabel>
              <Input placeholder="数字を入力してください" />
            </FormControl>

            <FormControl>
              <FormLabel>最終結果</FormLabel>
              <Input placeholder="結果を入力してください" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              変更
            </Button>
            <Button onClick={onChangeClose}>閉じる</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
