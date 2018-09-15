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
  callback(null, createReponse(404, {
    message: "Content is not found."
  }));
}
