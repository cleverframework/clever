export default (app) => {

  app.on('appStarted', () => {
    console.log(`${app.config.name} started`);
  });

  app.on('createUser', (form) => {

    $('#createUserError').addClass('hidden');

    let postData = $(form).serialize();
    let formURL = $(form).attr('action');
    let $createUserBtn = $('#createUserBtn');
    $.ajax({
      url : formURL,
      type: 'POST',
      data : postData,
      success:function(data, textStatus, jqXHR) {
        location.href = '/';
      },
      error: function(jqXHR, textStatus, errorThrown) {
        $('#createUserError .message').html(`${jqXHR.responseJSON[0].msg}.`);
        $('#createUserError').removeClass('hidden');
        $createUserBtn.removeClass('disabled');
      }
    });
    $createUserBtn.addClass('disabled');
  });

  return app;
}
