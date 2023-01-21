import { Box, useColorModeValue } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Navbar from "./navbar"

export const Header = () => {
  const toggleBorderColor = useColorModeValue("gray.200", "gray.500")
  const [isScrolled, onScrolled] = useState(false)
  const toggleVisibility = () => {
    window.scrollY > 0 ? onScrolled(true) : onScrolled(false)
  }
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  })
  return (
    <>
      <Box pos={"sticky"} top={0} left={0} w={"full"} h={"60px"} zIndex={100}>
        <title></title>
        {/* <Text>へっだー上だよ</Text> */}
        <Navbar />
        {/* <Text>へっだー下だよ</Text> */}
        {isScrolled ? (
          <Box
            borderBottom={"1px"}
            borderBottomStyle={"solid"}
            borderBottomColor={toggleBorderColor}
          ></Box>
        ) : (
          <Box></Box>
        )}
      </Box>
    </>
  )
}
export default Header
