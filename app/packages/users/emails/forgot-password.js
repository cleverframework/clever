'use strict';

module.exports = function(user, config, token) {
  const text = [
    `Hi ${user.firstName},`,
    'We have received a request to reset the password for your account.',
    'If you made this request, please click on the link below or paste this into your browser to complete the process:',
    `${config.app.uri}/reset/${token}`,
    'This link will work for 1 hour or until your password is reset.',
    'If you did not ask to change your password, please ignore this email and your account will remain unchanged.'
  ].join('\n');
  return text;
};
