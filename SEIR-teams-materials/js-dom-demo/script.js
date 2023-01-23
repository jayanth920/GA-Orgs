/*
  GETELEMENT(S)BY METHODS
*/

// Grabbing a single element by its ID
// const title = document.getElementById('title')
// console.log(title)

// const title1 = document.getElementById('title1')
// console.log(title1)


// Grabbing multiple(all) with the class of 'paragraph'
// const paragraphs = document.getElementsByClassName('paragraph')
// console.log(paragraphs)


// Grabbing all of the elements with the tag name of 'span'
// const span = document.getElementsByTagName('span')
// console.log(span)






/*
  QUERY SELECTOR
*/
const title10 = document.querySelector('#title')
// console.log(title10)


const span = document.querySelectorAll('span')
// console.log(span)

const paragraph = document.querySelectorAll('.paragraph')
// console.log(paragraph[3])




/*
  GET & SET ATTRIBUTES
*/
const title1 = document.querySelector('#title1')

// Returns an object listing all of the element's attributes
// console.log(title1.attributes)

// How to get a specific attribute
// console.log(title1.getAttribute('class'))


// How to set an attribute
// title1.setAttribute('class', 'tiger')
// console.log(title1)

const a = document.querySelector('#anchor')
// console.log(a)


// setAttribute() takes two arguments. The first is which attribute
// The second is the value we are giving to that attribute
// Updating an href value
a.setAttribute('href', 'https://google.com')


/*
  CLASS LIST METHODS
*/

const image = document.querySelector('#random-image')
// console.log(image.classList)

// How to remove a class from an element
image.classList.remove('is-hidden')

// How to add a class to an element
// image.classList.add('is-active')


// console.log(image.classList.contains('is-active'))


/*
  CONTENT
*/
// innerHTML vs innerText

const myParagraph = document.querySelector('#my-paragraph')
// console.log(myParagraph.innerText)

// Update the text inside of a tag
myParagraph.innerText = 'New paragraph'

// 
// document.body.innerHTML = '<h1>Hello world</h1>'


/*
  CHANGING THE STYLING
*/

myParagraph.style.backgroundColor = 'pink'
myParagraph.style.fontSize = '24px'



/*
  CREATING ELEMENTS & APPENDING/REMOVING THEM 
*/

