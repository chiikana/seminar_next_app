import "../styles/globals.css"
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider } from "@supabase/auth-helpers-react"
import { useState } from "react"
import { ChakraProvider, Button } from "@chakra-ui/react"
import { supabase } from "../src/libs/supabaseClient"
import { useRouter } from "next/router"
import { ScrollContext } from "../src/contexts/UserContext"

const MyApp = ({ Component, pageProps }) => {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  const router = useRouter()
  const [isScrolled, onScrolled] = useState(false)

  return (
    <ChakraProvider>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <ScrollContext.Provider value={{ isScrolled, onScrolled }}>
          <Button
            onClick={async () => {
              await supabase.auth.signOut()
              router.push("/")
            }}
          >
            Logout
          </Button>
          <Button
            onClick={() => {
              router.push("/profilePage")
            }}
          >
            profile
          </Button>
          <Component {...pageProps} />
        </ScrollContext.Provider>
      </SessionContextProvider>
    </ChakraProvider>
  )
}
export default MyApp
