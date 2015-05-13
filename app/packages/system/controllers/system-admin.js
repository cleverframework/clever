'use strict';

// VERBS
exports.get = {};
exports.post = {};

// GET /
exports.showDashboard = function(SystemPackage, req, res) {
  // Always use Package.render()
  res.send(SystemPackage.render('admin/dashboard', {
    packages: SystemPackage.getCleverCore().getInstance().exportable_packages_list
  }));
};

// GET /admin/settings
exports.showSettings = function(SystemPackage, req, res) {
  res.send(SystemPackage.render('admin/settings', {
    packages: SystemPackage.getCleverCore().getInstance().exportable_packages_list
  }));
};

// GET /admin/help
exports.showHelp = function(SystemPackage, req, res) {
  res.send(SystemPackage.render('admin/help', {
    packages: SystemPackage.getCleverCore().getInstance().exportable_packages_list
  }));
};
