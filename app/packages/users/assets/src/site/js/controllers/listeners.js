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

  app.on('sendResetPasswordEmail', (form) => {

    const $inputEmail = $('#inputEmail');
    const $sendResetPasswordEmailSuccess = $('#sendResetPasswordEmailSuccess');
    const $sendResetPasswordEmailError = $('#sendResetPasswordEmailError');
    const $sendResetPasswordEmailBtn = $('#sendResetPasswordEmailBtn');
    const options = {
      formURL: $(form).attr('action'),
      method: $(form).attr('method'),
      postData: $(form).serialize(),
      successCallback: function(data, textStatus, jqXHR) {
        $inputEmail.val('');
        $sendResetPasswordEmailSuccess.removeClass('hidden');
        $sendResetPasswordEmailBtn.removeClass('disabled');
      },
      $success: $sendResetPasswordEmailSuccess,
      $error: $sendResetPasswordEmailError,
      $errorMessage: $('#sendResetPasswordEmailError .message'),
      $btn: $sendResetPasswordEmailBtn
    }

    // Clear the error message div
    $sendResetPasswordEmailError.addClass('hidden');

    // Send Ajax
    sendDataAjax(options);

    // Disable the submit form button
    $sendResetPasswordEmailBtn.addClass('disabled');

  });

  app.on('setNewPassword', (form) => {

    const $setNewPasswordError = $('#setNewPasswordError');
    const $setNewPasswordBtn = $('#setNewPasswordBtn');
    const options = {
      formURL: $(form).attr('action'),
      method: $(form).attr('method'),
      postData: $(form).serialize(),
      successCallback: function(data, textStatus, jqXHR) {
        $setNewPasswordBtn.removeClass('disabled');
        location.href = '/';
      },
      $error: $setNewPasswordError,
      $errorMessage: $('#setNewPasswordError .message'),
      $btn: $setNewPasswordBtn
    }

    // Clear the error message div
    $setNewPasswordError.addClass('hidden');

    // Send Ajax
    sendDataAjax(options);

    // Disable the submit form button
    $setNewPasswordBtn.addClass('disabled');

  });

  app.on('updateSettingsProfile', (form) => {

    const $updateSettingsProfileSuccess = $('#updateSettingsProfileSuccess');
    const $updateSettingsProfileError = $('#updateSettingsProfileError');
    const $updateSettingsProfileBtn = $('#updateSettingsProfileBtn');
    const options = {
      formURL: $(form).attr('action'),
      method: $(form).attr('method'),
      postData: $(form).serialize(),
      successCallback: function(data, textStatus, jqXHR) {
        $updateSettingsProfileSuccess.removeClass('hidden');
        $updateSettingsProfileBtn.removeClass('disabled');
      },
      $success: $updateSettingsProfileSuccess,
      $error: $updateSettingsProfileError,
      $errorMessage: $('#updateSettingsProfileError .message'),
      $btn: $updateSettingsProfileBtn
    }

    // Clear the error message div
    $updateSettingsProfileError.addClass('hidden');

    // Send Ajax
    sendDataAjax(options);

    // Disable the submit form button
    $updateSettingsProfileBtn.addClass('disabled');

  });

  return app;
}
