let apiUrl
const apiUrls = {
  production: '<replace-with-heroku-url>',
  development: 'https://library-express-api.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
