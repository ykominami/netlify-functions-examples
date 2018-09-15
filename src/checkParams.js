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
  const params = event.queryStringParameters
  console.log(params)
  if (event.httpMethod !== "GET" || !params.hoge) {
    callback(null, createReponse(400, {
      message: "This request is invalid"
    }))
  }
  callback(null, createReponse(200, {
    message: `hoge is ${params.hoge}`
  }))
}
