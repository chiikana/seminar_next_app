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
        <Flex direction="column" h="100vh" w="75%">
          <Flex direction="row" justify="space-between" my="10" align="center">
            <SearchBox />
            <Spacer />
            <FaBell size="2rem" color="#fcba03" />
          </Flex>
          {/* <ProfileCard /> */}
          <Flex mt="4" mr="6" templateColumns="repeat(6, 1fr)">
            <Flex direction="column" w="30%" mx="auto">
              {/* <BlogPostWithImage />
              <BlogPostWithImage /> */}
            </Flex>
            <Flex direction="column" w="70%">
              {/* <CompanyCard /> */}
              {/* <JobDescription /> */}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default profilePage
