$(document).ready(function(){

  $('#submit').on('click', function(e){
    e.preventDefault();
    // creates a new instance of the FileReader object prototype
    var reader = new FileReader();

    //setting a function to be executed every time the reader successfully completes a read operation
    reader.onload = function(event){
      // once the data url has been loaded, make the ajax request with the result set as the value to key 'poster'
      $.ajax({
        url: 'http://localhost:3000/movies',
        method: 'POST',
        data: { movie: {
          title: $('#title').val(),
          director: $('#director').val(),
          poster: event.target.result
        } }
      }).done(function(response){

      }).fail(function(response){
        console.error('Whoops!');
      })
    };

    // read the first file of the file input
    $fileInput = $('#poster');
    reader.readAsDataURL($fileInput[0].files[0]);

  });
});
