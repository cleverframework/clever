export default (app) => {

  function callListener(e, eventName) {
    // STOP default action
    e.preventDefault();
    e.stopImmediatePropagation();

    // Emit event
    console.log(`Emit: ${eventName}`);
    app.emit(eventName, this);
  }

  $('.deleteUser').click(function(e) {
    callListener.call(this, e, 'deleteUser');
  });

  $('#createUser').submit(function(e) {
    callListener.call(this, e, 'createUser');
  });

  return app;
}
