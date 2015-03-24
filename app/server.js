// Creates and serves clever application
clever.serve((app) => {
  let config = app.config.clean;
  let port = config.https && config.https.port ? config.https.port : config.http.port;
  console.log(`Clever app started on port ${port}`);
});
