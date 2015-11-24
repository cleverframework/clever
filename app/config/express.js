// globals require
'use strict'

// Module dependencies.
const compression = require('compression')
const flash = require('connect-flash')
const csrf = require('csurf')

// const config = clever.loadConfig()

module.exports = function (app, config, db) {
  // Trust proxy
  app.enable('trust proxy')

  // Adds logging based on logging config in config/env/ entry
  if (config.logging.enable) require('./middlewares/logging')(app, config.logging)

  app.set('showStackError', true)

  // Should be placed before express.static
  // To ensure that all assets and data are compressed (utilize bandwidth)
  app.use(compression({
    // Levels are specified in a range of 0 to 9, where-as 0 is
    // no compression and 9 is best compression, but slowest
    level: 9
  }))

  // View engine setup
  app.set('view engine', 'jade')

  // Connect flash for flash messages
  app.use(flash())

  // Csfr token
  if (config.csrf.enable) app.use(csrf())
}
