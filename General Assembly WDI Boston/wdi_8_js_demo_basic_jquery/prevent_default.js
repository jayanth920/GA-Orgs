$(document).ready(function() {
  $('a').on('click', function(event) {
    event.preventDefault();
    debugger

    // Really only needed on forms
    return false;
  });

  $('#myForm').on('submit', function(event) {
    event.preventDefault();
    debugger
    // Get the fields or
    // Make an Ajax request

    // 'this' is useful here

    return false;
  })
});
