import "../styles/globals.css"
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider } from "@supabase/auth-helpers-react"
import { useState } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { supabase } from "../service/supabaseClient"
import { useRouter } from "next/router"

const MyApp = ({ Component, pageProps }) => {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  const router = useRouter()

  return (
    <ChakraProvider>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <button
          onClick={async () => {
            await supabase.auth.signOut()
            router.push("/")
          }}
        >
          Logout
        </button>
        <Component {...pageProps} />
      </SessionContextProvider>
    </ChakraProvider>
  )
}
export default MyApp
