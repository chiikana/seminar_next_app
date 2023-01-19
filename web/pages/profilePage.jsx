import { HStack, Flex, Center, Divider, Spacer } from "@chakra-ui/react"
import { Auth, ThemeSupa } from "@supabase/auth-ui-react"
import Account from "../components/Account"
import Multistep from "../components/MultiStepSignUp"
import Profile from "../components/Profile"
import Sidebar from "../components/sidebar"
import SideNav from "../components/SideNav"
import SearchBox from "../components/SerchBox"
import { FaBell } from "react-icons/fa"

const profilePage = () => {
  return (
    <>
      {/* <HStack>
          <Sidebar />
          <Profile />
        </HStack> */}
      <Flex maxW="2000px" direction="row" overflow="hidden">
        <SideNav />
        <Center my="10" mr="8">
          <Divider orientation="vertical" />
        </Center>
        <Profile />
      </Flex>
    </>
  )
}

export default profilePage
