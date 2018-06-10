const express = require('express')
const helmet = require('helmet')
const Raven = require('Raven')

const config = global.__require('config')

const app = new express()

let sentryEnabled = false
let sentryDSN = null

if ((sentryDSN = config.get('reporting.sentry.dsn'))) {
  sentryEnabled = true
  Raven.config(sentryDSN).install()
}

/**
 * Middleware
 */

if (sentryEnabled) {
  // NOTE: THIS MUST BE THE FIRST MIDDLEWARE REGISTERED.
  app.use(Raven.requestHandler())
}

app.use(helmet())

/**
 * Routes
 */

const {Ping} = global.__require('lib/controllers')

// Check if the service is available.
app.get('/ping', Ping.handlePing)

// API Routes
app.use('/api', require('../routes'))

if (sentryEnabled) {
  // NOTE: THIS MUST BE THE LAST MIDDLEWARE REGISTERED.
  app.use(Raven.errorHandler())
}

module.exports = app
