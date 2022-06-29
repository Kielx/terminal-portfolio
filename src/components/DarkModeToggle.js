import React, { useState, useEffect } from "react"
import Toggle from "react-toggle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

const DarkModeToggle = () => {
  const [isLoaded, setIsLoaded] = useState(
    typeof window !== "undefined"
      ? sessionStorage.getItem("isLoaded") || false
      : false
  )

  const [lightMode, setLightMode] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("lightMode")) || false
      : false
  )

  useEffect(() => {
    sessionStorage.setItem("isLoaded", isLoaded)
  }, [isLoaded])

  useEffect(() => {
    localStorage.setItem("lightMode", lightMode)
    setLightMode(lightMode)
    lightMode
      ? document.documentElement.classList.add("light")
      : document.documentElement.classList.remove("light")
  }, [lightMode])

  return typeof window !== "undefined" ? (
    <Toggle
      defaultChecked={lightMode}
      icons={{
        checked: <FontAwesomeIcon icon={faSun} />,
        unchecked: <FontAwesomeIcon icon={faMoon} />,
      }}
      onChange={() => {
        setLightMode(!lightMode)
      }}
      aria-label="dark mode toggle"
    />
  ) : (
    ""
  )
}

export default DarkModeToggle
