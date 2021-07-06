import React from "react"
import MainLayout from "../components/MainLayout"
import Seo from "../components/seo"
import LsDisplay from "../components/LsDisplay"

export default function sucess() {
  return (
    <MainLayout>
      <Seo title="Successfuly sent a message" />
      <div className="container">
        <LsDisplay text="Successfully sent a contact message. Thank you!"></LsDisplay>
      </div>
    </MainLayout>
  )
}
