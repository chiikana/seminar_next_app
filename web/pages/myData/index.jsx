import { Layout } from "@/components/Layout"
import { MyDatabase } from "@/components/MyDatapage"
import { CorpRecieve } from "@/components/MyTable/CorpRecieve"

const profilePage = () => {
  return (
    <Layout>
      {/* <MyDatabase /> */}
      <CorpRecieve />
    </Layout>
  )
}

export default profilePage
