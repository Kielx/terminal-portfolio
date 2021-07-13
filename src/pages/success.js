import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LsDisplay from "../components/LsDisplay"
import Header from "../components/header"

export default function sucess() {
  return (
    <Layout>
      <Seo title="Successfuly sent a message" />
      <Header />
      <div className="container">
        <LsDisplay text="Successfully sent a contact message. Thank you!"></LsDisplay>
      </div>
    </Layout>
  )
}
