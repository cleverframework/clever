'use strict';

// Module dependencies.
const config = require('clever-core').loadConfig();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const util = require('../util');

// Show user list
exports.showUsers = function(UserPackage, req, res, next) {
  let start = 0;
  if (Number.isInteger(req.query.start)) start = req.query.start;

  function renderUserList(users) {
    res.send(UserPackage.render('admin/users-list', {
      packages: UserPackage.getCleverCore().getInstance().exportable_packages_list,
      users: users
    }));
  }

  User.getUsers(start, 10)
    .then(renderUserList)
    .catch(util.passNext.bind(null, next));

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
