'use strict'

const onIndexSuccess = function (response) {
  if (response === '<ul></ul>') {
    $('#comments').html(`
      <p>No one has commented yet. Be the first!</p>
    `)
  } else {
    $('#comments').html(response)
  }
}

const onCreateSuccess = function (data) {
  $('#comment-form textarea').val('')
}

const onCreateError = function () {
  const $info = $('#comments-info')

  $info
    .html(`<p>Something went wrong. Please try again?</p>`)
    .css({color: 'red'})
  setTimeout(() => {
    $info.html('')
  }, 5000)
}

const onError = function (response) {
  console.error(response)
}

module.exports = {
  onIndexSuccess,
  onCreateSuccess,
  onCreateError,
  onError
}
