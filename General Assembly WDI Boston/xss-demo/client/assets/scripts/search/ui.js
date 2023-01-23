'use strict'

const onSuccess = function (data) {
  // The jQuery `html` method is unsafe: it performs no sanitation for us.
  // Sanitize and validate your data on the server in order to use this method
  // in this implementation. `onSuccess` receives data from the server.
  //
  // In order to sanitize client-side, you must sanitize before issuing the
  // AJAX request. Perhaps in `./events`?

  $('#search-results').html(data)
}

const onError = function (response) {
  console.error(response)
}

module.exports = {
  onSuccess,
  onError
}
