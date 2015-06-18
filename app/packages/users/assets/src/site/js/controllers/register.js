export default (app) => {

  function callListener(e, eventName) {
    // STOP default action
    e.preventDefault();
    e.stopImmediatePropagation();

    // Emit event
    console.log(`Emit: ${eventName}`);
    app.emit(eventName, this);
  }

  $('#createUser').submit(function(e) {
    callListener.call(this, e, 'createUser');
  });

  $('#sendResetPasswordEmail').submit(function(e) {
    callListener.call(this, e, 'sendResetPasswordEmail');
  });

  $('#setNewPassword').submit(function(e) {
    callListener.call(this, e, 'setNewPassword');
  });

  $('#updateSettingsProfile').submit(function(e) {
    callListener.call(this, e, 'updateSettingsProfile');
  });

  return app;
}
