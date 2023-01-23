console.log('stranger things are coming')
document.querySelector('h1').innerText = "Welcome to Upside Down"

const image = document.querySelector('img')
console.log(image)

// playing with css
image.style.display = 'none'

image.style.display = 'block'

image.style.filter = 'grayscale(80%)'

image.style.width = '95%'

image.style.filter = ''

// create elements
const eggos = document.createElement('img')
// append the element
document.querySelector('.container').appendChild(eggos)
// set an attribute
eggos.setAttribute('src', 'https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg')

// add a style
eggos.style.width = '100%'

// eggos.remove()
// .querySelector selects one thing..
let li = document.querySelector('li')
// this creates a NodeList
let lis = document.querySelectorAll('li')
console.log(lis)
lis[0].innerText = 'Demo Dog Hangout'
// Hero {name:'joe'}
for(let i = 0; i < lis.length; i += 1){
  if(i === 3) {
    lis[3].remove()
  }

}

let lisByName = document.getElementsByTagName('li')
console.log('this is lisByName', lisByName)
