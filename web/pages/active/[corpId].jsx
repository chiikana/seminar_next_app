import { AddCorpModal } from "@/components/Modal/AddCorpModal"
import { CorpRecieve } from "@/components/MyTable/CorpRecieve"
import { Layout } from "@/components/Layout"
import useAuthUser from "@/hooks/useAuthUser"
// import { useCorps } from "@/hooks/useCorps"
// import useProfile from "@/hooks/useProfile"
import { useProfileFromUserId } from "@/hooks/useProfileFromUserId"

// import { supabase } from "@/libs/utils/supabaseClient"
import { fetcher } from "@/libs/utils/useSWR"
import {
  Box,
  Button,
  Center,
  CircularProgress,
  Heading,
  HStack,
  Stack,
  useDisclosure,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"
import useSWR from "swr"
import { useCorpsFromCorpid } from "@/hooks/useCorpsFromCorpid"

const ActivePage = () => {
  // const { id, corps } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user } = useAuthUser()
  const [loading, setLoading] = useState(true)
  const [isMyPage, setIsMyPage] = useState(false)
  const [routerId, setRouterId] = useState("")

  // const { profile } = useProfile()
  const router = useRouter()
  // const routerId = router.query.id
  // const userId = { id }.id
  // const corps = useCorps(routerId)
  // const { data: corps, error } = useSWR(`/api/corps/${routerId}`, fetcher)

  const userCorps = useCorpsFromCorpid(routerId)
  const { data: corp, error1 } = useSWR(`/api/corpsFromCorpsId/${routerId}`, fetcher)
  const { data: profile, error2 } = useSWR(`/api/corps/${corp?.user_id}`, fetcher)
  const userProfile = useProfileFromUserId(corp?.user_id)

  const isSelfAccount = user && routerId === user.id

  useEffect(() => {
    if (router.isReady) {
      const routerId = router.query.id
      setRouterId(routerId)
      console.log("routerId => ", routerId)
    }
  }, [router])
  useEffect(() => {
    console.log("userProfile => ", userProfile)
  }, [userProfile])
  // useEffect(() => {
  //   console.log("isSelfAccount => ", isSelfAccount)
  // })

  return (
    <Layout>
      <Stack>
        <HStack justify={"space-between"} mb={10}>
          {isSelfAccount ? (
            <Heading pl={2} fontSize={"20px"}>
              自分の活動
            </Heading>
          ) : (
            <Heading pl={2} fontSize={"20px"}>
              {profile?.lastname + " " + profile?.firstname + " さんの活動" ?? ""}
            </Heading>
          )}

          {isSelfAccount && (
            <Button
              color={"blue.600"}
              onClick={onOpen}
              borderRadius={"50px"}
              bg={"#ededed"}
              boxShadow={"20px 20px 60px #bebebe,-20px -20px 60px #ffffff"}
            >
              新しい会社を追加する
            </Button>
          )}

          <AddCorpModal isOpen={isOpen} onClose={onClose}></AddCorpModal>
        </HStack>

        {corps ? (
          corps.map((corp) => {
            return <CorpRecieve key={corp.corp_id} corp={corp} />
          })
        ) : (
          <Center w={"100%"} h={"100%"}>
            <CircularProgress isIndeterminate color="green.300" />
          </Center>
        )}
      </Stack>
    </Layout>
  )
}
export default ActivePage
