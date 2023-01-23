'use strict'

const getFormFields = require('../../lib/get-form-fields')

$(() => {
  const baseUrl = 'http://localhost:4741/'

  const onError = (error) => {
    console.error(error)
  }

  const onSignIn = (response) => {
    console.log(response)
    console.log('Signed in')
  }

  const onSignUp = (response) => {
    console.log(response)
    console.log('Signed up')
  }

  const signUpOrIn = (credentials, path) =>
    new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response)
        } else {
          reject(xhr)
        }
      })
      xhr.addEventListener('error', () => reject(xhr))
      xhr.open('POST', baseUrl + path)
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(JSON.stringify(credentials))
    })

  const signIn = (credentials) => signUpOrIn(credentials, '/sign-in')

  const signUp = (credentials) => signUpOrIn(credentials, '/sign-up')

  $('#sign-up-promise').on('submit', function submitHandler (e) {
    e.preventDefault()
    const formData = getFormFields(this)
    signUp(formData)
      .then(onSignUp)
      .then(() => signIn(formData))
      .then(onSignIn)
      .catch(onError)
  })
})
