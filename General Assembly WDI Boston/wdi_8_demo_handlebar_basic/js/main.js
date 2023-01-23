$( document ).ready(function() {
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);
  var content = {title: "My New Post", body: "This is my first post!"}
  var html    = template(content);
  $('#entryTest').html(html);
});
