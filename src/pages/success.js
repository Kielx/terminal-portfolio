import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LsDisplay from "../components/LsDisplay"

export default function sucess() {
  return (
    <Layout>
      <Seo title="Successfuly sent a message" />
      <div className="container">
        <LsDisplay text="Successfully sent a contact message. Thank you!"></LsDisplay>
      </div>
    </Layout>
  )
}
