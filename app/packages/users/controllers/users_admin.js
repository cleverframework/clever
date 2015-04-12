'use strict';

// Module dependencies.
let config = require('clever-core').loadConfig();

// Show user list
exports.showUsers = function(UserPackage, req, res, next) {
  res.send('Users list');
};

exports.showUser = function(UserPackage, req, res, next) {
  res.send('User');
};

exports.createUser = function(UserPackage, req, res, next) {
  res.send('Create new user');
};

exports.editUser = function(UserPackage, req, res, next) {
  res.send('Edit user');
};
