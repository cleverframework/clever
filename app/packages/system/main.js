'use strict';

let cleverCore = require('clever-core');
let Package = cleverCore.Package;

// Defining the Package
var SystemPackage = new Package('system');

// All CLEVER packages require registration
SystemPackage.register(function(app, database) {

  SystemPackage.auth = require('./authorization');

  cleverCore.register('auth', SystemPackage.auth);

  SystemPackage.routes(app, SystemPackage.auth, database);

  return SystemPackage;

});
