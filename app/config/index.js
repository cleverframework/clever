'use strict'

const config = {
  env: process.env.NODE_ENV || 'development',
  db: process.env.POSTGRES_URL || 'postgres://postgres:postgres@localhost/postgres',
  app: {
    name: process.env.APP_NAME || 'Clever V1',
    port: process.env.NODE_PORT || 3000,
    host: process.env.NODE_HOST || '0.0.0.0'
  },
  session: {
    secret: process.env.SESSION_SECRET || 'shhh',
    cookie: process.env.SESSION_COOKIE || true,
    name: process.env.SESSION_NAME || 'cleverv1.sessionid',
    proxy: process.env.SESSION_PROXY || false, // if you do SSL outside of node
    model: {
      name: 'CleverV1Session',
      underscored: true,
      paranoid: false,
      tableName: 'clever_v1_session'
    }
  },
  auth: {
    jwt: {
      cookie: 'cleverv1.jwt'
    },
    passport: {
      enable: true
    }
  },
  logging: {
    enable: process.env.LOGGING_ENABLE || true,
    format: process.env.LOGGING_FORMAT || 'dev'
  },
  csrf: {
    enable: false
  }
}

module.exports = config
