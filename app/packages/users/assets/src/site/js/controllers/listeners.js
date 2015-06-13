export default (app) => {

  function sendDataAjax(options) {
    $.ajax({
      url : options.formURL,
      type: options.method, // POST or PUT or PATCH
      data : options.postData,
      success: options.successCallback,
      error: function(jqXHR, textStatus, errorThrown) {

        if(options.$success) options.$success.addClass('hidden');

        // Show the errors to the user
        options.$errorMessage.html(`${jqXHR.responseJSON[0].msg}.`);
        options.$error.removeClass('hidden');

        // Enable the submit form button
        options.$btn.removeClass('disabled');
      }
    });
  }

  app.on('appStarted', () => {
    console.log(`${app.config.name} started`);
  });

  app.on('createUser', (form) => {

    const $createUserError = $('#createUserError');
    const $createUserBtn = $('#createUserBtn');
    const options = {
      formURL: $(form).attr('action'),
      method: $(form).attr('method'),
      postData: $(form).serialize(),
      successCallback: function(data, textStatus, jqXHR) {
        location.href = '/';
      },
      $error: $createUserError,
      $errorMessage: $('#createUserError .message'),
      $btn: $createUserBtn
    }

    // Clear the error message div
    $createUserError.addClass('hidden');

    // Send Ajax
    sendDataAjax(options);

    // Disable the submit form button
    $createUserBtn.addClass('disabled');

  });

  app.on('resetPassword', (form) => {

    const $inputEmail = $('#inputEmail');
    const $resetPasswordSuccess = $('#resetPasswordSuccess');
    const $resetPasswordError = $('#resetPasswordError');
    const $resetPasswordBtn = $('#resetPasswordBtn');
    const options = {
      formURL: $(form).attr('action'),
      method: $(form).attr('method'),
      postData: $(form).serialize(),
      successCallback: function(data, textStatus, jqXHR) {
        $inputEmail.val('');
        $resetPasswordSuccess.removeClass('hidden');
        $resetPasswordBtn.removeClass('disabled');
      },
      $success: $resetPasswordSuccess,
      $error: $resetPasswordError,
      $errorMessage: $('#resetPasswordError .message'),
      $btn: $resetPasswordBtn
    }

    // Clear the error message div
    $resetPasswordError.addClass('hidden');

    // Send Ajax
    sendDataAjax(options);

    // Disable the submit form button
    $resetPasswordBtn.addClass('disabled');

  });

  return app;
}
