function ThisDemo(msg){
   // What is this pointer?
   this.msg = msg;
};

ThisDemo.prototype.greet = function(){
  var msgDiv = document.getElementById('messageId');
  msgDiv.innerHTML = "" ;
  msgDiv.innerHTML = 'ThisDemo:greet says ' + this.msg;

  // alert('ThisDemo:greet says ' + this.msg);
};
