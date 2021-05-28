import React from "react"
import ReactDOM from "react-dom"
//importing winbox https://github.com/nextapps-de/winbox/issues/1
import WinBox from "winbox/src/js/winbox"
import "winbox/dist/css/winbox.min.css"

import PopupTerminalWindow from "../components/PopupTerminalWindow"

export default function ItemsList() {
  const myItems = [
    {
      listName: "/About",
      popupHeader: "About me",
      popupImageSrc: "mojephotoASCII.png",
      popupImageAlt: "Photo of myself rendered with ASCII characters",
      popupText:
        "Software Developer currently working on finishing my CS Degree while also being a Law Enforcer, EULEX Peacekeeping Mission in Kosovo Veteran, Strength Coach and a family man. Based in 🇵🇱 Poland.",
    },
    {
      listName: "→ Projects",
    },
    {
      nameOfClass: "projects-items",
      listName: "/📈 Expenses Analyzer",
      popupHeader: "Expenses Analyzer",
      popupImageSrc: "expenses-analyzer-ascii.png",
      popupImageAlt: "Expenses analyzer ASCII icon",
      popupText:
        "Expenses analyzer is a React-based app, that allows the user to analyze bank statements from (at the moment) polish Mbank bank accounts.",
    },
    {
      nameOfClass: "projects-items",
      listName: "/🎓 Politechnika",
      popupHeader: "Various C/C++ Assignments",
      popupImageSrc: "cppASCII.png",
      popupImageAlt: "C++ ASCII icon",
      popupText:
        "This repository contains all of my coursework from second semester in C and C++ also including a project where I compare naive implementations of Timsort and Quicksort.",
    },
  ]

  const checkScreenWidth = () => {
    return window.screen.width > 1000 ? "60%" : "100%"
  }

  const listItems = myItems.map(item =>
    item.popupHeader ? (
      <li className={item.nameOfClass}>
        <button
          className="popupWindowLinkButton"
          style={{ cursor: "pointer" }}
          onClick={() => {
            const win = new WinBox({
              title: item.popupHeader,
              width: checkScreenWidth(),
              height: checkScreenWidth(),
              x: "center",
              y: "center",
              onfocus: function () {
                this.setBackground("#00aa00")
              },
              onblur: function () {
                this.setBackground("#777")
              },
            })
            ReactDOM.render(
              React.createElement(PopupTerminalWindow, {
                popupHeader: item.popupHeader,
                popupImageSrc: item.popupImageSrc,
                popupImageAlt: item.popupImageAlt,
                popupText: item.popupText,
              }),
              win.body
            )
          }}
        >
          {item.listName}
        </button>
      </li>
    ) : (
      <li className="projects">{item.listName}</li>
    )
  )

  return <ul>{listItems}</ul>
}
