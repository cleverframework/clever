'use strict';

// Defining the Package
let cleverCore = require('clever-core');
let Package = cleverCore.Package;

// Defining the Package
let UsersPackage = new Package('users');

// Package registration
UsersPackage.register(function(app, database, passport) {

  UsersPackage.auth = require('./authorization');
  require('./passport')(passport);

  cleverCore.register('auth', UsersPackage.auth);

  UsersPackage.routes(app, UsersPackage.auth, database, passport);

  return UsersPackage;

});
