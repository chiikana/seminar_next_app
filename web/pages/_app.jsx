import "../styles/globals.css"
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider } from "@supabase/auth-helpers-react"
import { ChakraProvider, Button } from "@chakra-ui/react"
import { supabase } from "../src/libs/supabaseClient"
import { useRouter } from "next/router"
import { useState } from "react"
import { Layout } from "../components/Layout/Layout"

const MyApp = ({ Component, pageProps }) => {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  const router = useRouter()

  return (
    <ChakraProvider>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider>
    </ChakraProvider>
  )
}
export default MyApp
