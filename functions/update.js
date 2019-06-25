const simpleGit = require('simple-git')()

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: 'No worries, all is working fine!',
  }
}
