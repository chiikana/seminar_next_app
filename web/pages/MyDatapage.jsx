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
   ModalCloseButton
  } from '@chakra-ui/react'
import {ChevronDownIcon,} from "@chakra-ui/icons"

export default function MyData() {
    return (
      <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th><Button>登録</Button></Th>
            <Th></Th>
            <Th>企業名</Th>
            <Th>企業番号</Th>
            <Th>最終結果</Th>
            <Th>内定承諾提出日</Th>
            <Th isNumeric>求職票</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td><Button>変更</Button></Td>
            <Td><Button>活動内容</Button></Td>
            <Td>A株式会社</Td>
            <Td>11111</Td>
            <Td>合否</Td>
            <Td>M/D</Td>
            <Td isNumeric>NULL</Td>
          </Tr>
          <Tr>
            <Td><Button>変更</Button></Td>
            <Td><Button>活動内容</Button></Td>
            <Td>B株式会社</Td>
            <Td>22222</Td>
            <Td>合否</Td>
            <Td>M/D</Td>
            <Td isNumeric>NULL</Td>
          </Tr>
          <Tr>
            <Td><Button>変更</Button></Td>
            <Td><Button>活動内容</Button></Td>
            <Td>C株式会社</Td>
            <Td>33333</Td>
            <Td>合否</Td>
            <Td>M/D</Td>
            <Td isNumeric>NULL</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
    );
    }
