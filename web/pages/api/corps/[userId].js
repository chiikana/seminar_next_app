import { supabase } from "@/libs/utils/supabaseClient"

const corpsApi = async (req, res) => {
  if (req.method === "GET") {
    const userId = req.query.userId
    const { data, error } = await supabase.from("corps").select("*").eq("user_id", userId)
    if (error) {
      return res.status(500).json({ message: error })
    }

    return res.status(200).json(data)
  }
}
export default corpsApi
