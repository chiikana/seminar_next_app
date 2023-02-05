import { supabase } from "@/libs/utils/supabaseClient"
import { useCallback, useEffect, useState } from "react"

export const useCorps = (userId) => {
  const [corps, setCorps] = useState([])

  const fetchCorps = async (userId) => {
    const { data, error, status } = await supabase.from("corps").select("*").eq("user_id", userId)
    if (data && data !== null) {
      setCorps(data)
    }
  }

  useEffect(() => {
    fetchCorps(userId)
  }, [userId])

  return corps
}
