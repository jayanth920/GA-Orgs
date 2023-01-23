$(document).ready(function(){
  $(".get-forecast").on("click", function(){
    var city = $(".city").val()
    var state = $(".state").val()
    var url = "http://api.wunderground.com/api/f28a93cae85945b6/conditions/q/" + state + "/" + city + ".json"
    var request = $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(response){
      var forecast = new Forecast(response)
      var forecastView = new ForecastView(forecast)
    }).fail(function(){
      console.log("ajax request failed");
    }).always(function(){
      console.log("this always happen regardless of success of failure");
    })
  })
})
