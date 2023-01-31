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
   Input 
  } from '@chakra-ui/react'
import {ChevronDownIcon,} from "@chakra-ui/icons"
import React,{ useEffect,useCallback,useState,useRef }  from 'react';

    const Fuga = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
      <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th><Button id= "button" colorScheme= 'teal' variant= 'outline' onClick={onOpen}>登録</Button></Th>
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
            <Td><Button colorScheme= 'teal' variant= 'outline'>活動内容</Button></Td>
            <Td isNumeric><Button>変更</Button></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td>株式会社B</Td>
            <Td>22222</Td>
            <Td>合否</Td>
            <Td>M/D</Td>
            <Td>NULL</Td>
            <Td><Button colorScheme= 'teal' variant= 'outline'>活動内容</Button></Td>
            <Td isNumeric><Button>変更</Button></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td>株式会社C</Td>
            <Td>33333</Td>
            <Td>合否</Td>
            <Td>M/D</Td>
            <Td>NULL</Td>
            <Td><Button colorScheme= 'teal' variant= 'outline'>活動内容</Button></Td>
            <Td isNumeric><Button>変更</Button></Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>

    <Modal
    initialFocusRef={initialRef}
    finalFocusRef={finalRef}
    isOpen={isOpen}
    onClose={onClose}
    >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>新規登録</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
      <FormControl>
              <FormLabel>企業名</FormLabel>
              <Input ref={initialRef} placeholder='企業名を入力してください' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>企業番号</FormLabel>
              <Input placeholder='数字を入力してください' />
            </FormControl>
      </ModalBody>

      <ModalFooter>
      <Button colorScheme='blue' mr={3}>
        決定
      </Button>
        <Button onClick={onClose}>
          閉じる
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>

  </>
    )
   }
    export default Fuga
  
