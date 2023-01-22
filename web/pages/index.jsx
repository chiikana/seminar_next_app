import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react"
import Account from "../components/Account"
import { Multistep } from "../components/MultiStepSignUp"
import { Layout } from "../components/Layout/Layout"
import { Box } from "@chakra-ui/react"

const Home = () => {
  const session = useSession()
  // const supabase = useSupabaseClient()
  // const router = useRouter()

  return (
    <>
      {!session ? (
        <Layout hasHeader={false}>
          <Multistep />
        </Layout>
      ) : (
        <Layout>
          <Account session={session} />
        </Layout>
      )}
      {/* <Multistep /> */}
    </>
  )
}
export default Home
