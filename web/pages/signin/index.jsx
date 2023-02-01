import React from "react"
import { Layout } from "../../components/Layout"
import { SignIn } from "../../components/SignIn"

const signin = () => {
  return (
    <Layout hasHeader={false}>
      <SignIn />
    </Layout>
  )
}

export default signin
