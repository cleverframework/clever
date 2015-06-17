'use strict';

// Defining the Package
let cleverCore = require('clever-core');
let Package = cleverCore.Package;

// Defining the Package
let UsersPackage = new Package('users');

// Package registration
UsersPackage.register(function(app, auth, database, passport, userMenu) {

  require('./passport')(passport);

  UsersPackage.routes(app, auth, database, passport, userMenu);

  return UsersPackage;

});
