const message = 'Hello World'

// the below is loadded first..so you see the message
// document.addEventListener('DOMContentLoaded', () => {
//  const div = document.querySelector('.container1')
//  div.innerHTML = '<h1>' + message + '</h1>'
// })

// ReactDOM is to manage DOM
// inside of render method (what do you want to render, where to render)
// {message} - curly's are needed to enumerate variables in JSX
ReactDOM.render(
  // what to render
  <h1> { message } </h1>,
  // where to render
  document.querySelector('.container')
)
