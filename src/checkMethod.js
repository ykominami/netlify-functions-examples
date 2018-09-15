function createReponse(status, body) {
  return {
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode: status,
    body: JSON.stringify(body)
  }
}

exports.handler = function(event, context, callback) {
  if (event.httpMethod !== "GET") {
    callback(null, createReponse(400, {
      message: "This request is invalid"
    }))
  }
  callback(null, createReponse(200, {
    message: "This request is valid"
  }))
}
