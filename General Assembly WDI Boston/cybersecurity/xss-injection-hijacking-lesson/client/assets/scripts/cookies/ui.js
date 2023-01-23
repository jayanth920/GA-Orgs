'use strict'

const onSuccess = function (data) {
  const $info = $('#cookie-info')

  $info.html(`Cookie ${data.sessionId} saved.`)

  setTimeout(() => {
    $info.html('')
  }, 5000)
}

const onError = function (response) {
  console.error(response)
}

module.exports = {
  onSuccess,
  onError
}
