const winston = require('winston')
const path = require('path')

const errorLogger = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({
      name: 'error-log',
      filename: path.join(global.__base, '/logs/error.log'),
      level: 'error'
    })
  ]
})

module.exports = errorLogger.error
