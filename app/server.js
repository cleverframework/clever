'use strict';

// Creates and serves clever application
let clever = require('clever-core');

clever.serve(function(app) {
  let config = app.config;
  let port = config.https && config.https.port ? config.https.port : config.http.port;
  console.log(`Clever app started on port ${port}`);
});
