import { Box } from "@chakra-ui/react"
import { Header } from "./Header"

export const Layout = (props) => {
  const { children, hasheader = true } = props
  return (
    <Box>
      {/* {hasheader && <Header />} */}
      <Header />
      {children}
    </Box>
  )
}
