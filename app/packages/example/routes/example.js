'use strict';

// Dependencies
let router = require('express').Router();

// Require CleverCore
let CleverCore = require('clever-core');

// Load config
let config = CleverCore.loadConfig();

// Load controller
let exampleCtrl = require('../controllers/example');

// Exports
module.exports = function(ExamplePackage, app, database) {

  router.get('/', exampleCtrl.index.bind(null, ExamplePackage));

  return new CleverCore.CleverRoute(router, false, true);

};
