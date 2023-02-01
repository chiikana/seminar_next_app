import { toggleTheme } from "@/libs/utils/themes"
import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { LinklessHeader } from "./LinklessHeader"

export const Layout = (props) => {
  const { children, hasHeader = true } = props
  const { toggleBgColor } = toggleTheme()
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
