import '../styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

const MyApp = ({ Component, pageProps }) => {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <ChakraProvider>
      <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
        <Component {...pageProps} />
      </SessionContextProvider>
    </ChakraProvider>
  )
}
export default MyApp
