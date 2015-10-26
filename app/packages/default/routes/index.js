'use strict'

// Dependencies
const router = require('express').Router()

// Require CleverCore
const CleverCore = require('clever-core')

// Exports
module.exports = function(SystemPackage, app, config, awesome) {

  router.get('/', (req, res) => {
    res.send(`${config.app.name} listening on http://${config.app.host}:${config.app.port}`)
  })

  router.get('/awesome', (req, res) => {
    res.send(awesome)
  })

  return router

}
