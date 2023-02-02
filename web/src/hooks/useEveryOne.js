import useProfile from "./useProfile"
import useSWR from "swr"
import { fetcher } from "@/libs/utils/useSWR"

export const useEveryOne = () => {
  const { profile } = useProfile()
  const { data: everyone, error } = useSWR(
    `/api/everyone?class=${profile?.class}&start_year=${profile?.start_year}`,
    fetcher
  )

  return { everyone, error }
}
