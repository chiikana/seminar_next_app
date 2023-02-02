import { useState, useEffect } from "react"
import { supabase } from "../libs/utils/supabaseClient"

export const useProfileFromUserId = (userId) => {
  const [userProfile, setUserProfile] = useState()

  const getProfile = async () => {
    const { data } = await supabase.from("profiles").select("*").eq("id", userId).single()
    return setUserProfile(data)
  }

  useEffect(() => {
    userId && getProfile()
  }, [userId])

  return userProfile
}
