const Git = require('nodegit')

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: 'No worries, all is working fine!',
  }
}
