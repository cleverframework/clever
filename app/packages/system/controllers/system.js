'use strict';

// Index
exports.index = function(SystemPackage, req, res) {
  // Always use ExamplePackage.render()
  res.send(SystemPackage.render('site/index', {
    user: req.user
  }));
};
