import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react"
import Account from "../components/Account"
import Multistep from "../components/MultiStepSignUp"
import { Layout } from "../components/Layout/Layout"
import Profile from "../components/Profile"
import { useRouter } from "next/router"
import { Box } from "@chakra-ui/react"

const Home = () => {
  // const session = useSession()
  // const supabase = useSupabaseClient()
  // const router = useRouter()

  return (
    <Layout>
      {/* {!session ? <Multistep /> : <Account session={session} />} */}
      <Multistep />
    </Layout>
  )
}

export default Home
