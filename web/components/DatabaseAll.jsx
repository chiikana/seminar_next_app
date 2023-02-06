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

  const [sdata,setSdata] = useState()
  const [department,setDepartment] = useState()
  const [sclass,setSclass] = useState()
  const [corp,setCorp] = useState()

  const [mnum,setMnum] = useState()

  global.cnt1 = 0
  global.cnt2 = 0

  useEffect(() => {
    if (user) GetProfile()
  }, [user])
  
  const GetProfile = async () => {
    let { data } = await supabase.from("profiles")
      .select("class_number,firstname,lastname,department,class,corps(corp_name)")
      .order("class_number")

    if (data) {
      setSdata(data)
      setDepartment(data[0].department)
      setSclass(data[0].class)
      setCorp(data[0].corps)
    }
  }
  return (
    <>
    <VStack>
      {/* <Text>{department + sclass + "組"}</Text> */}
      <TableContainer minW={"70vw"} overflowY={"auto"}>
      <Table variant={"simple"} border={"solid 1px"} mt={"20px"} mb={"30px"}>
          <Thead>
            <Tr>
              <Th border={"solid 1px"}>番号</Th>
              <Th border={"solid 1px"}>名前</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sdata?.map(mdata1 => {return (
              <Tr>
                <Td border={"solid 1px"}>{mdata1.class_number}</Td>
                <Td border={"solid 1px"}>{mdata1.lastname + " " + mdata1.firstname}</Td>
                <Td border={"solid 1px"}>
                  <Table>
                    <Thead>
                      <Tr>
                        <Th border={"solid 1px"}>会社名</Th>
                        <Th border={"solid 1px"}>活動内容</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                    {sdata[cnt1].corps?.map(mdata2 => {return (
                      <Tr>
                        {(()=> {
                          if(cnt2 < sdata[cnt1].corps.length){
                            return(
                                <Td border={"solid 1px"}>{sdata[cnt1].corps[cnt2].corp_name}</Td>
                              )
                        }
                        })()}
                        <Td border={"solid 1px"}>
                          <Button id="button" colorScheme="teal" variant="outline" onClick={onOpen}>
                            活動内容
                          </Button>
                        </Td>
                        {(()=> {
                          cnt2++
                        })()}
                      </Tr>
                    )})}
                    {(()=> {
                      cnt1++
                      cnt2=0
                    })()}
                    </Tbody>
                  </Table>
                </Td>
              </Tr>
            )})}            
          </Tbody>
          <Tfoot>
            <Tr>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </VStack>
    <>
        {/* 活動内容（モーダルウィンドウ） */}
        <Modal isOpen={isOpen} onClose={onClose} size="full">
          <ModalOverlay />
          <ModalContent width="auto" mt="10px" mb="10px">
            <ModalHeader>
              {/* 番号、氏名などの情報を表示 */}
              {/* 【活動内容】 4 村上 侍 内定済み */}
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
