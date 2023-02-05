import { useState, useEffect } from "react"
import { supabase } from "../libs/utils/supabaseClient"

export const useCorpsFromCorpid = (corpId) => {
  const [userCorps, setUserCorps] = useState([])

  const getCorps = async () => {
    const { data } = await supabase.from("corps").select("*").eq("corp_id", corpId)

    data && setUserCorps(data)
  }

  useEffect(() => {
    corpId && getCorps()
  }, [])

  return userCorps
}
