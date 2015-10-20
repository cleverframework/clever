'use strict'

// Creates and serves clever application
const clever = require('clever-core')

clever.serve(app => {
  console.log(`Clever app started on port ${app.config.http.port}`)
})
