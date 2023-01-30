import React, { useState } from "react"
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
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import useAuthUser from "../src/hooks/useAuthUser"
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

// ページ
// export
const DatabaseAll = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const supabase = useSupabaseClient()
  const { user } = useAuthUser()
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
      <TableContainer minW={"70vw"} overflowY={"auto"}>
      <Table variant="simple">
          <Thead>
            <Tr>
              <Th>number</Th>
              <Th>name</Th>
              <Th>enterprise</Th>
              <Th>progress</Th>
              <Th>detail</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>{user?.user_metadata.lastname}</Td>
              <Td>ヤクルト</Td>
              <Td></Td>
              <Td>
                <Button id="button" colorScheme="teal" variant="outline" onClick={onOpen}>
                  活動内容
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td>侍</Td>
              <Td>二次面接</Td>
              <Td>
                <Button id="button" colorScheme="teal" variant="outline" onClick={onOpen}>
                  活動内容
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>青木</Td>
              <Td>ヤクルト</Td>
              <Td></Td>
              <Td>
                <Button id="button" colorScheme="teal" variant="outline" onClick={onOpen}>
                  活動内容
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>山田</Td>
              <Td>ヤクルト</Td>
              <Td></Td>
              <Td>
                <Button id="button" colorScheme="teal" variant="outline" onClick={onOpen}>
                  活動内容
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td>侍</Td>
              <Td>一次面接</Td>
              <Td>
                <Button id="button" colorScheme="teal" variant="outline" onClick={onOpen}>
                  活動内容
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>4</Td>
              <Td>村上</Td>
              <Td>ヤクルト</Td>
              <Td></Td>
              <Td>
                <Button id="button" colorScheme="teal" variant="outline" onClick={onOpen}>
                  活動内容
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td>侍</Td>
              <Td>内定済み</Td>
              <Td>
                <Button id="button" colorScheme="teal" variant="outline" onClick={onOpen}>
                  活動内容
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>5</Td>
              <Td>オスナ</Td>
              <Td>ヤクルト</Td>
              <Td></Td>
              <Td>
                <Button id="button" colorScheme="teal" variant="outline" onClick={onOpen}>
                  活動内容
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td>侍</Td>
              <Td>内定辞退</Td>
              <Td>
                <Button id="button" colorScheme="teal" variant="outline" onClick={onOpen}>
                  活動内容
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>6</Td>
              <Td>サンタナ</Td>
              <Td>ヤクルト</Td>
              <Td></Td>
              <Td>
                <Button id="button" colorScheme="teal" variant="outline" onClick={onOpen}>
                  活動内容
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td>侍</Td>
              <Td>受験せず</Td>
              <Td>
                <Button id="button" colorScheme="teal" variant="outline" onClick={onOpen}>
                  活動内容
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>7</Td>
              <Td>中村</Td>
              <Td>ヤクルト</Td>
              <Td></Td>
              <Td>
                <Button id="button" colorScheme="teal" variant="outline" onClick={onOpen}>
                  活動内容
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td>侍</Td>
              <Td>最終面接</Td>
              <Td>
                <Button id="button" colorScheme="teal" variant="outline" onClick={onOpen}>
                  活動内容
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>8</Td>
              <Td>長岡</Td>
              <Td>ヤクルト</Td>
              <Td></Td>
              <Td>
                <Button id="button" colorScheme="teal" variant="outline" onClick={onOpen}>
                  活動内容
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>9</Td>
              <Td>奥川</Td>
              <Td>ヤクルト</Td>
              <Td></Td>
              <Td>
                <Button id="button" colorScheme="teal" variant="outline" onClick={onOpen}>
                  活動内容
                </Button>
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>number</Th>
              <Th>name</Th>
              <Th>enterprise</Th>
              <Th>progress</Th>
              <Th>detail</Th>
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
                  {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
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
export default DatabaseAll
