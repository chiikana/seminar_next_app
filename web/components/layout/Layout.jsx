import { Box, useColorModeValue } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { LinklessHeader } from "./Linkless"

export const Layout = (props) => {
  const { children, hasHeader = true } = props
  const toggleBgColor = useColorModeValue("gray.50", "gray.800")
  return (
    <Box
      display={"grid"}
      gridTemplateRows={"auto 1fr auto"}
      gridTemplateColumns={"100%"}
      minH={"100vh"}
      bg={toggleBgColor}
    >
      {hasHeader ? <Header /> : <LinklessHeader />}
      {/* <Header /> */}
      <Box
        as={"main"}
        bg={toggleBgColor}
        minH={"full"}
        minW={"full"}
        display={"flex"}
        justifyContent={"center"}
        zIndex={0}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  )
}
