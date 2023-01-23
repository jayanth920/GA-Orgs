const url = 'https://tunr-api.herokuapp.com/artists/'
const get = document.querySelector('.js-get')
const post = document.querySelector('.js-post')
const put = document.querySelector('.js-put')
const destroy = document.querySelector('.js-delete')

get.addEventListener('click', () => {
  console.log('GET clicked!')
})

post.addEventListener('click', () => {
  console.log('POST clicked!')
})

put.addEventListener('click', () => {
  console.log('PUT clicked!')
})

destroy.addEventListener('click', () => {
  console.log('DELETE clicked!')
})
