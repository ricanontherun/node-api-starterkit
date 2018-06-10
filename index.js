global.__base = require('path').join(__dirname, '/')

global.__require = require('./lib/require')(__dirname)

const server = global.__require('lib/server')
const config = global.__require('config')
const {logInfo, logError} = global.__require('lib/logging')

const port = config.get('server.ports.http')

server.listen(port, (err) => {
  if (err) {
    return logError(`Failed to listen on port ${port}: ${err}`)
  }

  return logInfo(`Server listening on port ${port}`)
})
