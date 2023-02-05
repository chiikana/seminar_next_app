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
  const { data: corps, error } = useSWR(`/api/corps/${routerId}`, fetcher)

  const userProfile = useProfileFromUserId(routerId)

  const isSelfAccount = user && routerId === user.id

  useEffect(() => {
    if (router.isReady) {
      const routerId = router.query.id
      setRouterId(routerId)
      console.log("routerId => ", routerId)
    }
  }, [router])
  // useEffect(() => {
  //   console.log("isSelfAccount => ", isSelfAccount)
  // })

  return (
    <Layout>
      <Stack>
        <HStack justify={"space-between"} my={10}>
          {isSelfAccount ? (
            <Heading pl={2} fontSize={"2xl"}>
              自分の活動
            </Heading>
          ) : (
            <Heading pl={2} fontSize={"2xl"}>
              {userProfile?.lastname + " " + userProfile?.firstname + " さんの活動" ?? ""}
            </Heading>
          )}

          {isSelfAccount && (
            <Button colorScheme={"teal"} onClick={onOpen}>
              新しい会社を追加する
            </Button>
          )}

          <AddCorpModal isOpen={isOpen} onClose={onClose}></AddCorpModal>
        </HStack>

        <Box overflowY={"auto"}>
          {corps ? (
            corps.map((corp) => {
              return <CorpRecieve key={corp.corp_id} corp={corp} />
            })
          ) : (
            <Center w={"100%"} h={"100%"}>
              <CircularProgress isIndeterminate color="green.300" />
            </Center>
          )}
        </Box>
      </Stack>
    </Layout>
  )
}
export default ActivePage
