// namespace 'app'
var app = app || {};
// fetch the weather
app.fetchWeather = function() {

  $.getJSON("http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=1111111111", function(data) {
    app.renderWeather(data, "#body");
  });
  return true;

};
// render the weather
app.renderWeather = function(weatherData, selectorString) {

  var template = weatherData.city.name + ", " + weatherData.city.country + " at (" + weatherData.city.coord.lon +"," + weatherData.city.coord.lat + ") and the current weather is..  " + weatherData.list[0].weather[0].description;

  $(selectorString).html(template);
  return true;

};
// when the document is ready
$(document).ready(function() {
  console.log("let's get ready to rumble!");
  var weatherData = app.fetchWeather();
});
