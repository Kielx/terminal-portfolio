import React from "react"
import Typewriter from "typewriter-effect"
import { navigate } from "gatsby-link"
import "../styles/styles.scss"
import "../styles/contact.scss"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact({ close }) {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(close)
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <div>
      <div>
        <h1>
          <Typewriter
            onInit={typewriter => {
              typewriter
                .typeString("Contact me")
                .start()
                .callFunction(function (state) {
                  state.elements.cursor.style.display = "none"
                })
            }}
          />
        </h1>
        <form
          name="contact"
          method="post"
          action="/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <input type="hidden" name="form-name" value="contact"></input>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required="true"
            placeholder="Name"
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required={true}
            placeholder="E-Mail adress"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required={true}
            placeholder="Your message"
            rows="3"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}
