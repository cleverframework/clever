'use strict';

// Dependencies
let router = require('express').Router();

// Require CleverCore
let CleverCore = require('clever-core');

// Load config
let config = CleverCore.loadConfig();

// Load controller
let systemCtrl = require('../controllers/system_admin');

// Exports
module.exports = function(SystemPackage, app, database) {

  router.get('/', systemCtrl.index.bind(null, SystemPackage));

  return new CleverCore.CleverRoute(router, 'admin', true);

};
