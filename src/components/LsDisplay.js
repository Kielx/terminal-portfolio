import React from "react"
import ItemsList from "../components/ItemsList"
import "../styles/winbox.scss"
import "../styles/mainTerminalWindow.scss"

const LsDisplay = ({ text }) => {
  const isBrowser = typeof window !== "undefined"

  return (
    <div className="LsDisplayWindow">
      <div className="LsDisplayTaskbar">Cmd</div>
      <h2>
        {text}
        <div className="break"></div>
      </h2>
      {isBrowser ? <ItemsList></ItemsList> : ""}
    </div>
  )
}

export default LsDisplay
