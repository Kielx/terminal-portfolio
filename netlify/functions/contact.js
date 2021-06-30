const axios = require("axios")

exports.handler = async function (event, context) {
  try {
    const response = await axios.post(
      process.env.GATSBY_AWS_CONTACT_FORM_API_URL,
      event.body,
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.GATSBY_AWS_CONTACT_FORM_X_API_KEY,
        },
      }
    )
    return {
      statusCode: 200,
    }
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    }
  }
}
