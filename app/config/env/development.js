'use strict';

module.exports = {
  db: `mongodb://${(process.env.DB_PORT_27017_TCP_ADDR || 'localhost')}/clever-dev`,
  debug: true,
  logging: {
    format: 'tiny'
  },
  aggregate: false,
  mongoose: {
    debug: false
  },
  app: {
    name: 'CLEVER Framework - Development',
    url: 'http://localhost:3000'
  },
  cookieDomain: '.impero-cms.dev',
  facebook: {
    clientID: '570817389722371',
    clientSecret: '244f599f92257ffa3cb2a647d1dc1226',
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  twitter: {
    clientID: 'DEFAULT_CONSUMER_KEY',
    clientSecret: 'CONSUMER_SECRET',
    callbackURL: 'http://localhost:3000/auth/twitter/callback'
  },
  github: {
    clientID: 'DEFAULT_APP_ID',
    clientSecret: 'APP_SECRET',
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  google: {
    clientID: 'DEFAULT_APP_ID',
    clientSecret: 'APP_SECRET',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
  linkedin: {
    clientID: 'DEFAULT_API_KEY',
    clientSecret: 'SECRET_KEY',
    callbackURL: 'http://localhost:3000/auth/linkedin/callback'
  },
  emailFrom: 'no-reply@sendgrid.impero.me', // sender address like ABC <abc@example.com>
  mailer: {
    service: 'Sendgrid', // Gmail, SMTP
    auth: {
      user: 'imperodesign',
      pass: 'impero11'
    }
  },
  uploader: {
    service: 'local',
    services: {
      local: {
        dir: 'path/to/upload/folder',
        maxFileSize: -1,
      },
      aws: {
        accessKeyId: 'ACCESS_KEY_ID',
        secretAccessKey: 'SECRET_ACCESS_KEY'
      }
    }
  }
};
