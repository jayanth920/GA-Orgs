function ThisCallbackDemo(msg){
   // What is this pointer?
   this.msg = msg;
};

ThisCallbackDemo.prototype.greet = function(){
  var msgDiv = document.getElementById('messageId');
  msgDiv.innerHTML = "" ;
  msgDiv.innerHTML = 'ThisDemo:greet says ' + this.msg;

  // alert('ThisDemo:greet says ' + this.msg);
};

// Call another method in the handler
ThisCallbackDemo.prototype.buttonHandler = function(event){
  this.greet();
}
