function piglatinize(word){

  return word;
}

$(document).ready(function(){
  var nose = $("#nose");
  var mouth = $("#mouth");
  nose.on("click", function(){
    var word = mouth.val();
    mouth.val(piglatinize(word));
  });
});
