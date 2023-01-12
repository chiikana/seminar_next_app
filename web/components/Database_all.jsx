import React, { useState } from "react"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

// import { supabase } from "../service/supabaseClient"
// import { User } from "@supabase/supabase-js"

// import TOS from "./tos.json"
// import deptData from "./dept.json"

const Testdb = (props) => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
      <>
      {/* 固定 */}
        <TableContainer overflowX="unset" overflowY="unset">
    <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    {/* 固定 */}
    <Thead position="sticky" top={-1} zIndex="docked">
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
    </Table>
    </TableContainer>
      </>
    )
  }
export default Testdb