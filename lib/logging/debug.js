const winston = require('winston')
const path = require('path')

const config = global.__require('config')

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({
      name: 'debug-log',
      filename: path.join(global.__base, '/logs/debug.log'),
      level: 'debug'
    })
  ]
})

module.exports = (...args) => {
  // Safety check
  if (config.get('env') !== 'development') {
    return
  }

  logger.debug(args)
}
