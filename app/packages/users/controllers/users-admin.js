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
      user: req.user,
      users: users,
      csrfToken: req.csrfToken()
    }));
  }

  User.getUsers(start, 10)
    .then(renderUserList)
    .catch(util.passNext.bind(null, next));
};

exports.showUser = function(UserPackage, req, res, next) {
  function render(userToShow) {
    res.send(UserPackage.render('admin/user-details', {
      packages: UserPackage.getCleverCore().getInstance().exportable_packages_list,
      user: req.user,
      userToShow: userToShow,
      csrfToken: req.csrfToken()
    }));
  }

  User.getUserById(req.params.id)
    .then(render)
    .catch(util.passNext.bind(null, next));
};

exports.createUser = function(UserPackage, req, res, next) {
  res.send(UserPackage.render('admin/create-user', {
    packages: UserPackage.getCleverCore().getInstance().exportable_packages_list,
    user: req.user,
    csrfToken: req.csrfToken()
  }));
};

exports.editUser = function(UserPackage, req, res, next) {
  function render(userToEdit) {
    res.send(UserPackage.render('admin/edit-user', {
      packages: UserPackage.getCleverCore().getInstance().exportable_packages_list,
      user: req.user,
      userToEdit: userToEdit,
      csrfToken: req.csrfToken()
    }));
  }

  User.getUserById(req.params.id)
    .then(render)
    .catch(util.passNext.bind(null, next));
};
