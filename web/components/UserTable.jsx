import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tag,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { ToggleTheme } from "@/libs/utils/themes"

export const UserTable = (props) => {
  const { everyone } = props
  const router = useRouter()
  const { toggleMainAccentColor, subAccentColor } = ToggleTheme()

  useEffect(() => {
    console.log(everyone)
  }, [])
  return (
    // <TableContainer w={"90%"}>
    //   <Table size={"sm"}>
    //     <Thead>
    //       <Tr>
    //         <Th w={"20%"}>名前</Th>
    //         <Th>企業一覧</Th>
    //       </Tr>
    //     </Thead>
    //     <Tbody>
    //       {everyone &&
    //         everyone.map((e) => (
    //           <Tr
    //             key={e.id}
    //             _hover={{ bg: "gray.200", transition: "0.2s" }}
    //             onClick={() => {
    //               router.push(`active/${e.id}`)
    //             }}
    //             cursor={"pointer"}
    //           >
    //             <Td>
    //               {e.lastname} {e.firstname}
    //             </Td>
    //             <Td>
    //               {e.corps.map((corp) => (
    //                 <Tag key={corp.corp_id} mr={2}>
    //                   {corp.corp_name}
    //                 </Tag>
    //               ))}
    //             </Td>
    //           </Tr>
    //         ))}
    //     </Tbody>
    //   </Table>
    // </TableContainer>
    <Box w={"70%"} overflowY={"auto"}>
      <Accordion allowMultiple={true}>
        {everyone &&
          everyone.map((e, index) => (
            <AccordionItem key={e.id} cursor={"pointer"}>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"3xl"}>
                  {e.lastname} {e.firstname}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <Box
                _hover={{
                  // bg: "gray.200",
                  border: "1px",
                  borderColor: toggleMainAccentColor,
                  transition: "0.2s",
                }}
                onClick={() => {
                  router.push(`active/${e.id}`)
                  // router.push(`active/${corp.corp_id}`)
                }}
              >
                {e.corps.map((corp) => (
                  <AccordionPanel
                    key={corp.corp_id}
                    pl={10}
                    // pb={4}
                    fontSize={"xl"}
                  >
                    {corp.corp_name}
                  </AccordionPanel>
                ))}
              </Box>
            </AccordionItem>
          ))}
      </Accordion>
    </Box>
  )
}
