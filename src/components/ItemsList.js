import React from "react"
import ReactDOM from "react-dom"
//importing winbox https://github.com/nextapps-de/winbox/issues/1
import WinBox from "winbox/src/js/winbox"
import "winbox/dist/css/winbox.min.css"
import { useStaticQuery, graphql } from "gatsby"

import PopupTerminalWindow from "../components/PopupTerminalWindow"

export default function ItemsList() {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark {
        frontmatter {
          listName
          nameOfClass
          popupGithubLink
          popupHeader
          popupImageAlt
          popupImageSrc
          popupLiveLink
          popupText
          techIcons
          title
        }
        html
      }
    }
  `)
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
      popupGithubLink: "https://github.com/Kielx/expenses-analyzer",
      popupLiveLink: "https://kielx.github.io/expenses-analyzer/",
      techIcons: ["React", "HTML5", "CSS3", "GitHub"],
    },
    {
      nameOfClass: "projects-items",
      listName: "/🎓 Politechnika",
      popupHeader: "Various C/C++ Assignments",
      popupImageSrc: "cppASCII.png",
      popupImageAlt: "C++ ASCII icon",
      popupText:
        "This repository contains all of my coursework from second semester in C and C++ also including a project where I compare naive implementations of Timsort and Quicksort.",
      popupGithubLink: "https://github.com/Kielx/Politechnika",
      techIcons: ["C++", "C", "GitHub"],
    },
    {
      nameOfClass: "projects-items",
      listName: "/☎️ Phonebook",
      popupHeader: "Phonebook",
      popupImageSrc: "phonebook-ASCII.png",
      popupImageAlt: "Phonebook app",
      popupText:
        "The project is a part 3 of Fullstackopen course held by The University of Helsinki which is the oldest and largest science university in Finland, with an international scientific community of 40,000 people. Part3 summarizes work from previous parts with a Phonebook project. It's a RESTful API for phonebook, with build scripts that allow to integrate React frontend from Part2 of the course. RESTful API can be acessed separateley from frontend.",
      popupLiveLink: "https://fullstackopen-phonebook-api.herokuapp.com/",
      popupGithubLink: "https://github.com/Kielx/fullstackopen-part3",
      techIcons: [
        "MongoDB",
        "Express",
        "React",
        "node-dot-js",
        "HTML5",
        "CSS3",
      ],
    },
  ]

  const checkScreenWidth = () => {
    return window.screen.width > 1000 ? "60%" : "100%"
  }

  const listItems = [data.markdownRemark].map(item =>
    item.frontmatter.popupHeader ? (
      <li className={item.frontmatter.nameOfClass}>
        <button
          className="popupWindowLinkButton"
          style={{ cursor: "pointer" }}
          onClick={() => {
            const win = new WinBox({
              title: item.frontmatter.popupHeader,
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
                popupHeader: item.frontmatter.popupHeader,
                popupImageSrc: item.frontmatter.popupImageSrc,
                popupImageAlt: item.frontmatter.popupImageAlt,
                popupText: item.frontmatter.popupText,
                popupGithubLink: item.frontmatter.popupGithubLink,
                popupLiveLink: item.frontmatter.popupLiveLink,
                techIcons: item.frontmatter.techIcons,
                html: item.html,
              }),
              win.body
            )
          }}
        >
          {item.frontmatter.listName}
        </button>
      </li>
    ) : (
      <li className="projects">{item.frontmatter.listName}</li>
    )
  )

  return <ul className="mappedItemsList">{listItems}</ul>
}
