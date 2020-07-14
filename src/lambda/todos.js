const axios = require("axios");

exports.handler = function(event, context, callback) {
  axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.data)
    .then(data => {
      return callback(null, {
	statusCode: 200,
	body: JSON.stringify(data)
      });
    })
}
