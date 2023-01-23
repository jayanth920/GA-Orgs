# jQuery Paperclip Example


### Introduction

Although the Paperclip gem provides a relatively simple way to implement image upload into an app, sending an image from the client to the API is tricky. This repo is an example of how accomplish this. The client side implementation can be found in the public folder of the app.

### Interesting Code

This implementation makes user of the javascript FileReader prototype in the ajax request made in `public/main.js`:

```ruby
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
      console.log('File has been saved');
    }).fail(function(response){
      console.error('Whoops!');
    })
  };

  // read the first file of the file input
  $fileInput = $('#poster');
  reader.readAsDataURL($fileInput[0].files[0]);

});
```

All of the files will be name `data` without a Paperclip method workaround. This workaround can be found in `movie.rb`:

```ruby
  def rename_avatar
    self.poster.instance_write :file_name, "#{Time.now.to_i.to_s}.png"
  end

  before_post_process :rename_avatar
```

This will name each file the current timestamp and give it the proper extension
