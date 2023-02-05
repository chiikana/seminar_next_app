import { supabase } from "@/libs/utils/supabaseClient"

export class CorpService {
  static insertCorps = async ({ corp_name, user_id }) => {
    const { error } = await supabase
      .from("corps")
      .insert([{ corp_name: corp_name, user_id: user_id }])

    return { error }
  }
}
