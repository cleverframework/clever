export default (app) => {

  $('#createUser').submit(function(e) {
    // STOP default action
    e.preventDefault();
    e.stopImmediatePropagation();

    // Emit createUser event
    app.emit('createUser', this);
  });

  return app;
}
