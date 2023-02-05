import { useState, useEffect } from "react"
import { supabase } from "../libs/utils/supabaseClient"

export const useActivesFromCorpId = (corpId) => {
  const [actives, setActives] = useState([])

  const getActives = async () => {
    const { data } = await supabase.from("actives").select("*").eq("corp_id", corpId)

    data && setActives(data)
  }

  useEffect(() => {
    corpId && getActives()
  }, [])

  return actives
}
