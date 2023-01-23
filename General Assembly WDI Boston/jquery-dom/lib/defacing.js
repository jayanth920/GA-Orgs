/* globals $ */
'use strict'

// some ideas for defacing a wikipedia page
// IDs are circa June 2021, they may change
$('#firstHeading').hide()

$('#firstHeading').show()

const $title = $('#firstHeading')

// .append
$title.append(' writes songs about margaritas and cheeseburger based locales')
$title.append(' couldn\'t write a smooth song if his life depended on it.')
$title.append(' has a song called "math suks" ...what anti-intellctual garbage, right?')
$title.append(' I can add to the end')
$title.append('. Adding more')

// .prepend
$title.prepend('The one and only (THANKFULLY) ')
$title.prepend('I can add to the front ')
$title.prepend('Once more. ')

// .text - getter
$title.text()

// .text - setter
$title.text('replaced with .text() method!')

// .on
$title.on('click', () => {
  $title.append('is a disgrace to the art of music')
})
$title.on('click', () => {
  $title.text('I was clicked!')
})

// .css
$('body').css('background-color', 'pink')
$('#bodyContent').css('background-color', 'pink')

// .data - setter
$title.data('things', 'This is the value saved on things key')

// .data - getter
$title.data('things')
