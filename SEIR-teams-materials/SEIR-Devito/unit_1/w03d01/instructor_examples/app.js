console.log('app is loaded')
$( () => {
  // $ in the variable indicates that we are using jquery
  // lis represents that we are grabbing more than one li
  let $lis = $('li')
  // grab the element from the jquery array
  console.log('this uses  $($lis[0]) ',  $($lis[0]))
  // using .eq()
    console.log('this uses  $lis.eq(0) ',  $lis.eq(0))
  // using $(li:eq(0))
  console.log('this uses $(li:eq(0) ', $('li:eq(0)'))
  // using pseudoclass
  console.log("this uses $('li:first-of-type')", $('li:first-of-type'))
  console.log("this uses $('li:nth-of-type(2)')", $('li:nth-of-type(2)'))

  // create a table
  let $body = $('body')
  let $table = $('<table>')
  let $thead = $('<thead>')
  let $day = $('<th>').text('Day')
  let $classes = $('<th>').text('Classes')
  $thead.append($day)
  $thead.append($classes)
  // append the thead
  $table.append($thead)
  // .appendTo() , insertAfter(), prepend()
  // using appendTo to tell jquery which parent to append the element
  // $day.appendTo($thead)
  // $classes.appendTo($thead)
  // $table.append($('<tr>').append($('<td>').text('Monday')).append($('<td>').text('Herbology')))
  $table.append($('<tr>').append($('<td>').text('Monday')).append($('<td>').text('Herbology')))
  $table.append($('<tr>').append($('<td>').text('Tuesday')).append($('<td>').text('Divination')))
  // using .append to append the child directly to the parent

  // append the table once you've created all the other table elements
  $body.append($table)


})

// $(document).ready(() => {
//
// }
