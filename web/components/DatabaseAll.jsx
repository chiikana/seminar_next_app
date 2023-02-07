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

export const DatabaseAll = (props) => {  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user } = useAuthUser()

  const [sdata,setSdata] = useState()
  const [department,setDepartment] = useState()
  const [sclass,setSclass] = useState()
  const [corp,setCorp] = useState()
  // const [pdata,setPdata] = useState()
  // const [cdata,setCdata] = useState()

  global.cnt1 = 0
  global.cnt2 = 0
  global.pdata = 0
  global.cdata = 0

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

  const handleClick = (e) => {
    // setPdata(e.currentTarget.getAttribute("parent-data"))
    // setCdata(e.currentTarget.getAttribute("child-data"))
    pdata = e.currentTarget.getAttribute("parent-data")
    cdata = e.currentTarget.getAttribute("child-data")
  }

  return (
    <>
    <VStack>
      {/* <Text>{department + sclass + "組"}</Text> */}
      <TableContainer minW={"70vw"} overflowY={"auto"}>
      <Table variant={"simple"} border={"solid 1px"} mt={"20px"} mb={"30px"} background={"white"}>
          <Thead>
            <Tr>
              <Th border={"solid 1px"} background={"#66cdaa"}>番号</Th>
              <Th border={"solid 1px"} background={"#66cdaa"}>名前</Th>
            </Tr>
          </Thead>
          <Tbody >
            {sdata?.map(mdata1 => {return (
              <Tr>
                <Td border={"solid 1px"}>{mdata1.class_number}</Td>
                <Td border={"solid 1px"}>{mdata1.lastname + " " + mdata1.firstname}</Td>
                <Td border={"solid 1px"}>
                  <Table>
                    <Thead>
                      <Tr>
                        <Th border={"solid 1px"} background={"#66cdaa"}>会社名</Th>
                        <Th border={"solid 1px"} background={"#66cdaa"}>活動内容</Th>
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
                          <Button parent-data={cnt1} child-data={cnt2} colorScheme="teal" variant="outline" onClick={(e) => {handleClick(e); onOpen();}}>
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
        <Modal isOpen={isOpen} onClose={onClose} size="full">
          <ModalOverlay />
          <ModalContent width="auto" mt="10px" mb="10px">
            <ModalHeader>
              【活動内容】
               {/* {sdata[0].class_number + sdata[0].lastname + " " + sdata[0].firstname + "企業名"} */}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <TableContainer border={"solid 1px"}>
                <Table variant="simple">
                  <Thead>
                    <Tr background={"#66cdaa"} >
                      <Th border={"solid 1px"}>活動内容</Th>
                      <Th border={"solid 1px"}>場所</Th>
                      <Th border={"solid 1px"}>実施日</Th>
                      <Th border={"solid 1px"}>公欠提出日</Th>
                      <Th border={"solid 1px"}>公欠状態</Th>
                      <Th border={"solid 1px"}>結果</Th>
                      <Th border={"solid 1px"}>報告受領日</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr background={"white"}>
                      <Td border={"solid 1px"}></Td>
                      <Td border={"solid 1px"}></Td>
                      <Td border={"solid 1px"}></Td>
                      <Td border={"solid 1px"}></Td>
                      <Td border={"solid 1px"}></Td>
                      <Td border={"solid 1px"}></Td>
                      <Td border={"solid 1px"}></Td>
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
