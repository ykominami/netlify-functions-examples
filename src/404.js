exports.handler = function(event, context, callback) {
  callback(null, {
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode: 404,
    body: JSON.stringify({
      message: "This is 404"
    })
  })
}