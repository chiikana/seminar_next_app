import React, { useState, useEffect } from "react"
import {
  Button,
  ButtonGroup,
  Box,
  Fade,
  Flex,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Table,
  Text,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"
import { supabase } from "@/libs/utils/supabaseClient"
import useAuthUser from "@/hooks/useAuthUser"
// import { useSupabaseClient } from "@supabase/auth-helpers-react"
// import {Layout} from "./Layout/Layout"

//検索
const Search = () => {
  if (sBox.value != "") {
    alert(sBox.value + "と一致するデータを表示。")
  } else [alert("データが入力されていません。")]
}

// 全表示
const ShowAll = () => {
  alert("全データ表示。")
}

export const DatabaseAll = (props) => {  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user } = useAuthUser()

  // const defaultValue = {
  //   student_id: "",
  //   firstname: "",
  //   lastname: "",
  //   department: "",
  //   class: "",
  //   // クラスナンバー
  // }

  // const [fieldValues, setFieldValues] = useState(defaultValue)

  useEffect(() => {
    if (user) getProfile()
  }, [user])
  
  const [classnum,setClassnum] = useState()
  const [fname,setFname] = useState()
  const [lname,setLname] = useState()
  const [department,setDepartment] = useState()
  const [sclass,setSclass] = useState()

  const getProfile = async () => {
    let { data } = await supabase.from("profiles")
      .select("class_number,firstname,lastname,department,class")
    if (data) {
      setClassnum(data[0].class_number)
      setFname(data[0].firstname)
      setLname(data[0].lastname)
      setDepartment(data[0].department)
      setSclass(data[0].class)
    }
  }
 
  return (
    <>
    <VStack>
      <Flex mt="10px" mb="5px" w="500px">
        <Input id="sBox" background="white"/>
        <Button id="sButton" margin left="5px" colorScheme="teal" variant="solid" onClick={() => Search()}>
          検索
        </Button>
        <Button id="allButton" margin left="10px" colorScheme="teal" variant="outline" onClick={() => ShowAll()}>
          全表示
        </Button>
      </Flex>
      <Text>{department + sclass + "組"}</Text>
      <TableContainer minW={"70vw"} overflowY={"auto"}>
      <Table variant="simple">
          <Thead>
            <Tr>
              <Th>番号</Th>
              <Th>名前</Th>
              <Th>会社名</Th>
              <Th>進行状況</Th>
              <Th>活動内容</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{classnum}</Td>
              <Td>{lname + fname}</Td>
              <Td>a</Td>
              <Td>a</Td>
              <Td>
                <Button id="button" colorScheme="teal" variant="outline" onClick={onOpen}>
                  活動内容
                </Button>
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>番号</Th>
              <Th>名前</Th>
              <Th>会社名</Th>
              <Th>進行状況</Th>
              <Th>活動内容</Th>
            </Tr>
          </Tfoot>
        </Table>
        {/* 番号ごとにページ遷移 */}
        {/* <Button id="sButton" margin="auto" colorScheme="teal" variant="solid" onClick={() => Search()}>
          a
        </Button>
        <Button id="sButton" margin="auto" colorScheme="teal" variant="solid" onClick={() => Search()}>
          a
        </Button> */}

      </TableContainer>
    </VStack>
    <>
        {/* 活動内容（モーダルウィンドウ） */}
        <Modal isOpen={isOpen} onClose={onClose} size="full">
          <ModalOverlay />
          <ModalContent width="auto" mt="10px" mb="10px">
            <ModalHeader>
              {/* 番号、氏名などの情報を表示 */}
              【活動内容】 4 村上 侍 内定済み
            </ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>detail</Th>
                      <Th>place</Th>
                      <Th>date</Th>
                      <Th>absence date</Th>
                      <Th>absence</Th>
                      <Th>result</Th>
                      <Th>result date</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>最終面接</Td>
                      <Td>東京ドーム</Td>
                      <Td>2023/03/09</Td>
                      <Td>2023/12/20</Td>
                      <Td>一日</Td>
                      <Td>合格</Td>
                      <Td>2023/01/19</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="teal" variant="solid" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </>
  )
}
