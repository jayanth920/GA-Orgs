// Waits to run the code in the function until the document is loaded
$(document).ready(function() {
  console.log("This is working");
  $('#title').html("Hello World!");

  var favoriteColors = ["red", "green", "blue"];
  for(var i = 0; i < favoriteColors.length; i++) {
    // Create a new <li> for each of the colors, and then append that
    $('#color-list').append('<li>' + favoriteColors[i] + '</li>');

    // Alternate way of doing it
    $('<li>').html(favoriteColors[i]).appendTo('#color-list');
  }

  // Create array of 3 objects, each representing a person with a name / age
  // Display their name/age on the page using jQuery

  var people = [
    {name: "Anna", age: 27},
    {name: "David", age: 32},
    {name: "Teddy", age: 19}
  ];

  for(var i = 0, count = people.length; i < count; i++) {
    $('<div>').html(people[i].name + " is " + people[i].age + " years old.").appendTo('#people');
    // $('#people').append(people[i].name + " is " + people[i].age + " years old.");
  }

  $('#today-weather').html('Cloudy');
  $('#today-weather').addClass('blue');

  // Basic click events
  // $('h1').click(function() {
  //   alert("You clicked on the title");
  // });

  // If we have a longer function, do this instead:
  var alertAndFadeOnClick = function() {
    alert("You clicked it, now it will fade");
    $(this).hide('slow');
  };

  $('h1').click(alertAndFadeOnClick);

  // Take an element, and toggle between the blue and green classes when it is clicked
  var changeColorOnClick = function() {
    $(this).toggleClass('clicked');
  };

  $('h2').click(changeColorOnClick);

  $('h2').hover(changeColorOnClick);

  // Refactor this to have a better name
  // And make it update the today-weather based on what's in the box
  var updateWeather = function() {
    var weather = $(this).val();
    $('#today-weather').html(weather);
  };

  $('#forecast').change(updateWeather);
});











