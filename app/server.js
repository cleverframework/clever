'use strict'

// Creates and serves clever application
const clever = require('clever-core')

clever.serve(app => {
  console.log(`Clever app listening on http://${app.config.app.host}:${app.config.app.port}`)
})
