import { Box, calc, useColorModeValue } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { LinklessHeader } from "./LinklessHeader"

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
      <Box
        as={"main"}
        bg={toggleBgColor}
        h={"calc(100vh - 60px - 60px)"}
        minW={"full"}
        display={"flex"}
        justifyContent={"center"}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  )
}