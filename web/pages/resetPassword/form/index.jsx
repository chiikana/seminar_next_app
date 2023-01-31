import { ResetPassForm } from "@/components/ResetPassForm"
import React from "react"
import { Layout } from "@/components/Layout"

const resetPassword = () => {
  return (
    <Layout hasHeader={false}>
      <ResetPassForm />
    </Layout>
  )
}

export default resetPassword
