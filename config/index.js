const convict = require('convict')

// Define a config schema.
const config = convict({
  env: {
    doc: 'Application environment',
    env: 'NODE_ENV',
    format: ['production', 'development', 'staging'],

    // Defaulting to production might prevent the leaking of debug information when it's not set properly.
    default: 'production'
  },

  server: {
    ports: {
      http: {
        doc: 'HTTP port',
        default: 7197
      }
    }
  },

  reporting: {
    sentry: {
      dsn: {
        doc: 'Sentry Client TOKEN (DSN)',
        default: null
      }
    }
  }
})

// Load it into convict.
config.loadFile(require('path').resolve('config/default.json'))

module.exports = config
