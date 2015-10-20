'use strict'

const config = {
  env: process.env.NODE_ENV || 'development',
  db: process.env.POSTGRES_URL || 'postgres://postgres:postgres@postgres/postgres',
  app: {
    name: process.env.APP_NAME || 'Clever V1',
  },
  http: {
    port: process.env.NODE_PORT || 3000
  }
}

module.exports = config
