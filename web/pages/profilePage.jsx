import { HStack, Flex, Center, Divider, Spacer } from "@chakra-ui/react"
import { Profile } from "../components/Profile.1"
import { Sidebar } from "../components/sidebar"
import { SideNav } from "../components/SideNav"
import { SearchBox } from "../components/SerchBox"
import { Layout } from "../components/Layout/Layout"

const profilePage = () => {
  return (
    <Layout>
      <Flex maxW="2000px" direction="row" overflow="hidden">
        <SideNav />
        <Center my="10" mr="8">
          <Divider orientation="vertical" />
        </Center>
        <Profile />
      </Flex>
    </Layout>
  )
}

export default profilePage
