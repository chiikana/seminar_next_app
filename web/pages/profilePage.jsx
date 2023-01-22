import { HStack, Flex, Center, Divider, Spacer } from "@chakra-ui/react"
import { Profile } from "../components/Profile"
import { SideNav } from "../components/SideNav"
import { SearchBox } from "../components/SerchBox"
import { Layout } from "../components/Layout/Layout"

const profilePage = () => {
  return (
    <Layout>
      {/* <Flex maxW="2000px" direction="row" overflow="hidden">
        <SideNav />
        <Center my="10" mr="8">
          <Divider orientation="vertical" />
        </Center>
      </Flex> */}
      <Profile />
    </Layout>
  )
}

export default profilePage
