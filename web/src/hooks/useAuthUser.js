import { Session, User } from "@supabase/supabase-js"
import { useState, useEffect } from "react"
import { supabase } from "../libs/supabaseClient"

const useAuthUser = () => {
  const [session, setSession] = useState()
  const [user, setUser] = useState()
  const [userId, setUserId] = useState("")
  const [isLoading, setLoading] = useState()
  const [token, setToken] = useState()
  const [profileId, setProfileId] = useState()
  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    user && setProfileId(user.id)
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session !== null && session !== undefined) {
        setUser(session.user)
        setUserId(session.user.id)
      }
    })

    supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session !== null && session !== undefined) {
        session && setUser(session.user)
        setUserId(session.user.id)
      }
    })
    getUser()
  }, [supabase])

  return {
    user,
    userId,
    isLoading,
    token,
    profileId,
  }
}
export default useAuthUser
