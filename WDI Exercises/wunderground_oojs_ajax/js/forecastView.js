function ForecastView(forecast){
  this.forecast = forecast
  this.el = $("div.forecast")
}

ForecastView.prototype = {
  render: function(){
    var container = $("<div></div>")
    container.append($("<h2>" + this.forecast.locale + "</h2>"))
    container.append($("<h3>Current Weather is: " + this.forecast.weather + "</h3>"))
    this.el.html(container)
  }
}
