import { Box } from "@chakra-ui/react"
import { Header } from "./Header"

export const Layout = (props) => {
  const { children, hasHeader = true } = props
  return (
    <Box>
      {hasHeader && <Header />}
      {/* <Header /> */}
      {children}
    </Box>
  )
}
