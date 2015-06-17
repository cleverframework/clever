'use strict';

const cleverCore = require('clever-core');
const Menu = cleverCore.Menu;

const userMenu = new Menu('user');

// const subTestMenu = new Menu('subTest');
// subTestMenu.addElement('Option 1', '/settings/sub/opt1', 1);
// subTestMenu.addElement('Option 2', '/settings/sub/opt2', 2);

userMenu.addElement('Profile', '/settings/profile', 1);
userMenu.addElement('Account Settings', '/settings/account', 2);

// userMenu.addElement('Sub Menu', '/settings/sub', 3, function(cleverCore, req, defer, menuEl) {
//   cleverCore.resolve('subTestMenu', function(subTestMenu) {
//     const parent = menuEl; // just to remember how to use my function
//     subTestMenu.render(cleverCore, req, function(err, rendredSubTestMenu) {
//       if(err) return defer.reject(err);
//       menuEl.sub = rendredSubTestMenu;
//       defer.resolve();
//     }, parent);
//   });
// });

exports.user = userMenu;
// exports.subTest = subTestMenu;
