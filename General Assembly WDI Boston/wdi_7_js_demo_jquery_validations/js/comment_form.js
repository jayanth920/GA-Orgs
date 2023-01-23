$().ready(function() {

  // validate the comment form when it is submitted
  $("#commentForm").validate();
  $("#commentForm").on('submit', function(){ 
    // What is this?
    // What is $(this)
    
    if($(this).valid())  {
      alert("Valid: Submitted form");
      console.log("Valid: Submitted form");
    }else{
      alert("InValid Form");
      console.log("InValid form");
    }
  
  });
})
