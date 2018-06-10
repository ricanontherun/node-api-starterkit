const winston = require('winston')
const path = require('path')

const infoLogger = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({
      name: 'info-log',
      filename: path.join(global.__base, '/logs/info.log'),
      level: 'info'
    })
  ]
})

module.exports = infoLogger.info
