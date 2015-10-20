'use strict'

// Dependencies
let router = require('express').Router()

// Require CleverCore
const CleverCore = require('clever-core')

// Load config
let config = CleverCore.loadConfig()

// Exports
module.exports = function(SystemPackage, app, config) {

  router.get('/', (req, res) => {
    res.send('System OK')
  })

  return router

}
