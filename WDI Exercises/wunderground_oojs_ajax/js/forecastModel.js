function Forecast(response){
  var response = response.current_observation
  this.tempF = response.temp_f
  this.iconUrl = response.icon_url
  this.weather = response.weather
  this.windGustMph = response.wind_gust_mph
  this.locale = response.display_location.full
}
