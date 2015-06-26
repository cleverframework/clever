'use strict';

let mongoose = require('mongoose');
let _ = require('lodash');

// Generic require login routing middleware
exports.requiresLogin = function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401).send('User is not authorized');
  }
  next();
};

// Require login routing middleware with root redirect
exports.requiresLoginRedirect = function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  next();
};

// Generic require Admin routing middleware
// Basic Role checking
exports.requiresAdmin = function(req, res, next) {
  if (!req.isAuthenticated() || !req.user.hasRole('admin')) {
    return res.status(401).send('User is not authorized');
  }
  next();
};

// Generic validates if the first parameter is a mongo ObjectId
exports.isMongoId = function(req, res, next) {
  if ((_.size(req.params) === 1) && (!mongoose.Types.ObjectId.isValid(_.values(req.params)[0]))) {
      return res.status(500).send('Parameter passed is not a valid Mongo ObjectId');
  }
  next();
};
