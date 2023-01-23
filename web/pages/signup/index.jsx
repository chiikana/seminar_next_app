import React from "react"
import { Layout } from "../../components/layout/Layout"
import { Multistep } from "../../components/MultiStepSignUp"

const signup = () => {
  return (
    <Layout hasHeader={false}>
      <Multistep />
    </Layout>
  )
}

export default signup
