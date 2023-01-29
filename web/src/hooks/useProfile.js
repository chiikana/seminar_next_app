import { useState, useEffect } from "react"
import { supabase } from "@/libs/utils/supabaseClient"
import useAuthUser from "./useAuthUser"
import useSWR from "swr"
import { fetcher } from "@/libs/utils/useSWR"

const useProfile = () => {
  const { profileId } = useAuthUser()
  const { data: profile, error } = useSWR(`/api/profile/${profileId}`, fetcher)
  return {
    profile,
  }
}
export default useProfile
