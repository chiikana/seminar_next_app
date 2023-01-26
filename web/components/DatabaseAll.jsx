import React, { useState } from "react"

import {
  Button,
  ButtonGroup,
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
} from "@chakra-ui/react"

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
const DatabaseAll = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <>
      <Flex>
        <Input id="sBox" />
        <Button id="sButton" colorScheme="teal" variant="solid" onClick={() => Search()}>
          検索
        </Button>
        <Button id="allButton" colorScheme="teal" variant="outline" onClick={() => ShowAll()}>
          全表示
        </Button>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead position="sticky" top={0} zIndex="docked">
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
              <Td>塩見</Td>
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
      </TableContainer>
      <>
        {/* 活動内容（モーダルウィンドウ） */}
        <Modal isOpen={isOpen} onClose={onClose} size="full">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {/* 番号、氏名などの情報を表示 */}
              【活動内容】 4 村上 侍 内定済み
            </ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <TableContainer>
                <Table variant="simple">
                  {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                  <Thead position="sticky" top={0} zIndex="docked">
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
