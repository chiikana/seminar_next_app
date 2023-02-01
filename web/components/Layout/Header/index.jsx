import { toggleTheme } from "@/libs/utils/themes"
import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Navbar } from "./NavBar"

export const Header = () => {
  const { toggleBorderColor } = toggleTheme()
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
      <Box pos={"sticky"} top={0} w={"full"} h={"60px"} zIndex={50}>
        <title>NKC就活状況アプリ</title>
        <Navbar />
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
