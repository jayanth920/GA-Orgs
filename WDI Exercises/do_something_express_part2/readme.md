# Do Something (Part Two)

Tonights homework is an extension of last nights'. - https://github.com/ga-dc/do_something_express_part1

Tonight please:

- Organize your files with respect to the MVC paradigm:

```
app/
  - models/
    - list.js
    - task.js
  - controllers/
    - listsController.js
    - tasksController.js
  - views/
    - index.html 
```

In the main application, require all of the other files with `require()` and `module.exports`

Complete the CRUD functionality for lists if you have not yet done so.

## And Then

Create an index.html file in `app/views/index.html`

Serve this file with:

```js
app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});
```

Use handlebars to "bootstrap" the application on the first page load. i.e. Handlebars 
loads data into the HTML.
