// grabbing an element using jquery
// the $ in the variable is a visual representation that the variable
// is using jquery
let $meat = $('.meat')
console.log($meat)

// create a new element...
// this is indicated by <>
const $div = $('<div>')
console.log($div)
// i'm not usein <> becuase I'm grabbing an existing element
const $body = $('body')
$body.append($div)
//add a class
$div.addClass('meat')
// create an h3
const $h3 = $('<h3>')
// add text
$h3.text('Ostrich')
// append the h3
$div.append($h3)

const $div2 = $('<div>')
$div2.addClass('dairy')
const $h3_2 = $('<h3>')
$h3_2.text('make it end')
$div2.append($h3_2)
$body.append($div2)

const $div3 = $('<div>')
$div3.addClass('dairy')
const $h3_3 = $('<h3>')
$h3_3.text('make it end..please')
$div3.append($h3_3)
$body.append($div3)

let $allDivs = $('div')


$allDivs.eq(2).children().text( 'Kohlrabi');


// let products = ['dairy','meat']
// let food = ['milk','pig']
// for(let i = 0; i < 2; i += 1){
//   const $div = $('<div>')
//   const $h3 = $('<h3>')
//   $h3.text(food[i])
//   $div.addClass(products[i])
//   $div.append($h3)
//   $body.append($div)
// }
