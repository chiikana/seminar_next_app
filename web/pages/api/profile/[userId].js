import { supabase } from "@/libs/utils/supabaseClient"

const profileApi = async (req, res) => {
  if (req.method === "GET") {
    const userId = req.query.userId
    if (!userId) return
    const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()

    if (error) {
      return res.status(500).json({ message: error })
    }

    return res.status(200).json(data)
  }
}
export default profileApi
