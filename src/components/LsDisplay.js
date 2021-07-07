import React from "react"
import ItemsList from "../components/ItemsList"
import ItemsListMobile from "./ItemsListMobile"
import "../styles/winbox.scss"
import "../styles/mainTerminalWindow.scss"

const LsDisplay = ({ text }) => {
  const checkscreenWidthMobile = () => {
    if (typeof window !== "undefined") {
      return window.screen.width < 1024 ? true : false
    }
  }

  return (
    <div className="LsDisplayWindow">
      <div className="LsDisplayTaskbar">Cmd</div>
      <h2 style={{ color: "inherit", fontSize: "1.1rem", paddingLeft: "4vw" }}>
        {text}
      </h2>
      {checkscreenWidthMobile() ? (
        <ItemsListMobile></ItemsListMobile>
      ) : (
        <ItemsList></ItemsList>
      )}
    </div>
  )
}

export default LsDisplay
