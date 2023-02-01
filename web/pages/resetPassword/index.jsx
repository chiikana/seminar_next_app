import { ResetPassRequest } from "@/components/ResetPassRequest"
import React from "react"
import { Layout } from "@/components/Layout"

const resetPassword = () => {
  return (
    <Layout hasHeader={false}>
      <ResetPassRequest />
    </Layout>
  )
}

export default resetPassword
