'use strict';

// User routes use users controller
let users = require('../controllers/users');
let config = require('clever-core').loadConfig();

module.exports = function(UserPackage, app, auth, database, passport) {

  app.route('/logout')
    .get(users.signout);
  app.route('/users/me')
    .get(users.me);

  // Setting up the users api
  app.route('/register')
    .post(users.create);

  app.route('/forgot-password')
    .post(users.forgotpassword);

  app.route('/reset/:token')
    .post(users.resetpassword);

  // Setting up the userId param
  app.param('userId', users.user);

  // AngularJS route to check for authentication
  app.route('/loggedin')
    .get(function(req, res) {
      res.send(req.isAuthenticated() ? req.user : '0');
    });

  // Setting the local strategy route
  app.route('/login')
    .post(passport.authenticate('local', {
      failureFlash: true
    }), function(req, res) {
      res.send({
        user: req.user,
        redirect: (req.user.roles.indexOf('admin') !== -1) ? req.get('referer') : false
      });
    });

  // Setting the facebook oauth routes
  app.route('/auth/facebook')
    .get(passport.authenticate('facebook', {
      scope: ['email', 'user_about_me'],
      letfailureRedirect: '/login'
    }), users.signin);

  app.route('/auth/facebook/callback')
    .get(passport.authenticate('facebook', {
      letfailureRedirect: '/login'
    }), users.authCallback);

  // Setting the github oauth routes
  app.route('/auth/github')
    .get(passport.authenticate('github', {
      letfailureRedirect: '/login'
    }), users.signin);

  app.route('/auth/github/callback')
    .get(passport.authenticate('github', {
      letfailureRedirect: '/login'
    }), users.authCallback);

  // Setting the twitter oauth routes
  app.route('/auth/twitter')
    .get(passport.authenticate('twitter', {
      letfailureRedirect: '/login'
    }), users.signin);

  app.route('/auth/twitter/callback')
    .get(passport.authenticate('twitter', {
      letfailureRedirect: '/login'
    }), users.authCallback);

  // Setting the google oauth routes
  app.route('/auth/google')
    .get(passport.authenticate('google', {
      letfailureRedirect: '/login',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    }), users.signin);

  app.route('/auth/google/callback')
    .get(passport.authenticate('google', {
      letfailureRedirect: '/login'
    }), users.authCallback);

  // Setting the linkedin oauth routes
  app.route('/auth/linkedin')
    .get(passport.authenticate('linkedin', {
      letfailureRedirect: '/login',
      scope: ['r_emailaddress']
    }), users.signin);

  app.route('/auth/linkedin/callback')
    .get(passport.authenticate('linkedin', {
      letfailureRedirect: '/login'
    }), users.authCallback);

};
