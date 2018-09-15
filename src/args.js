// import URLSearchParams from 'url-search-params'

exports.handler = function(event, context, callback) {
  console.log(JSON.stringify(event, null, 4))
  console.log(event.body)
  const params = new URLSearchParams(event.body)
  for (let [key, value] of params.entries()) {
    console.log(key, value)
  }
  callback(null, {
    statusCode: 200,
    body: "pong",
  });
}
