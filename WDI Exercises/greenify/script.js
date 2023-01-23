$(document).ready(function(){
  $("h1").on("click", function(){
    $("body").append($("<div>jQuery plugins are cool!</div>"))
  })
  $("h2").on("click", function(){
    $("div").greenify()
  })
  $("h3").on("click", function(){
    $("body").addGreenDiv()
  })
  $("h4").on("click", function(){
    $(".greenified").switchColors()
  })


})
