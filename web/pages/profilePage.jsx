import { HStack } from "@chakra-ui/react"
import { Auth, ThemeSupa } from "@supabase/auth-ui-react"
import Account from "../components/Account"
import Multistep from "../components/MultiStepSignUp"
import Profile from "../components/Profile"
import Sidebar from "../components/sidebar"

const profilePage = () => {
  return (
    <>
      <HStack h={"full"}>
        <Sidebar />
        <Profile />
      </HStack>
    </>
  )
}

export default profilePage
