'use strict';

// Module dependencies.
let mongoose = require('mongoose');
let User = mongoose.model('User');
let async = require('async');
let config = require('clever-core').loadConfig();
let crypto = require('crypto');
let nodemailer = require('nodemailer');
let templates = require('../template');

// Send logged user
exports.me = function(req, res) {
  console.log(true)
  res.json(req.user || null);
};

// Find all user
exports.getUsers = function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) return next(err);
    if (!users) return next(new Error('Failed to load Users'));
    res.json(users);
  });
};

// Find user by id
exports.getUserById = function(req, res, next) {

  let id = req.params.id;

  User.findOne({
    _id: id
  }).exec(function(err, user) {
    if (err) return next(err);
    if (!user) return next(new Error(`Failed to load User ${id}`));
    res.json(user);
  });
};

// Create user
exports.createUser = function(req, res, next) {
  var user = new User(req.body);

  user.provider = 'local';

  // because we set our user.provider to local our models/user.js validation will always be true
  req.assert('firstName', 'You must enter your first name').notEmpty();
  req.assert('lastName', 'You must enter your last name').notEmpty();
  req.assert('firstName', 'Firstname cannot be more than 32 characters').len(1, 32);
  req.assert('lastName', 'Lastname cannot be more than 32 characters').len(1, 32);
  req.assert('email', 'You must enter a valid email address').isEmail();
  req.assert('password', 'Password must be between 8-20 characters long').len(8, 20);
  // req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);

  var errors = req.validationErrors();
  if (errors) {
    return res.status(400).json(errors);
  }

  // Hard coded for now. Will address this with the user permissions system in v0.3.5
  user.roles = ['authenticated'];
  user.save(function(err) {
    if (err) {
      switch (err.code) {
        case 11000:
        case 11001:
          res.status(400).json([{
            msg: 'Username already taken',
            param: 'username'
          }]);
          break;
        default:
          var modelErrors = [];

          if (err.errors) {

            for (var x in err.errors) {
              modelErrors.push({
                param: x,
                msg: err.errors[x].message,
                value: err.errors[x].value
              });
            }

            res.status(400).json(modelErrors);
          }
      }

      return res.status(400);
    }
    req.logIn(user, function(err) {
      if (err) return next(err);
      return res.status(200).json(user)
    });
  });
};

// Edit user by id
exports.editUserById = function(req, res, next) {
  res.send();
};

// Delete user by id
exports.deleteUserById = function(req, res, next) {
  res.send();
};
