'use strict'

const onSuccess = function (data) {
  const $info = $('#security-info')

  $info.html(`
    <p>Successfully changed security settings:</p>
    <pre>${JSON.stringify(data)}</pre>
  `)

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
