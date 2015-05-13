'use strict';

// Dependencies
let router = require('express').Router();

// Require CleverCore
let CleverCore = require('clever-core');

// Load config
let config = CleverCore.loadConfig();

// Load controller
let usersCtrl = require('../controllers/users-admin');

// Exports
module.exports = function(UserPackage, app, auth, database, passport) {

  // Show registration form
  router.get('/', usersCtrl.showUsers.bind(null, UserPackage));

  router.get('/create', usersCtrl.createUser.bind(null, UserPackage));

  router.get('/:userId', usersCtrl.showUser.bind(null, UserPackage));

  router.get('/:userId/edit', usersCtrl.editUser.bind(null, UserPackage));

  return new CleverCore.CleverRoute(router, 'admin', false);

};
