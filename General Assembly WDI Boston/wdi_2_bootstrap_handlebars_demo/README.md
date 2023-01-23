![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Handlebars & Bootstrap Demo

## Objectives

By the end of this, students should be able to:

- Render javascript objects in html using handlebars
- Use the Bootstrap grid system to make a responsive page
- Create a visually appealing header using bootstrap styles
- Consult the bootstrap documenation for additional styling

# Part 1: Handlebars

## Instructions

1. Fork and clone
2. `npm install`
3. `bower install`
4. Follow along

## Templating

By now, we know how to render static html. What happens when we want to render data from another source?

## Handlebars

Handlebars is a javascript templating library.

Rendering objects with handlebars templates is a four step process:

1. Create a template in a script tag on your html page
2. Create a templating function
3. Call the templating function with the object as our parameter
4. Set our div's html to the result of calling our templating function

### 1. Creating the template

Our client wants us to create a Game of Thrones fansite. Please run `grunt serve`, navigate to `localhost:9000/characters.html` and open up your console. What do you see?

By some magic hocus-pocus that we will discuss later, we have an array of character objects.

Our objects look like:

```javascript
var daenarys = {
  id: 1,
  name: "Daenerys Targaryen",
  title: "Queen of Meereen and Mother of Dragons",
  quote: "I will take what is mine with blood and fire.",
  url: "http://i.imgur.com/DjHJq4E.jpg"
};
```

Our template will mirror this structure.

First, we create a script tag in our html file.

```html
<script id="character-index" type="text/x-handlebars-template"></script>
```

Now we can begin our template! True to handlebars's name, the library uses `{{}}` as wrappers.

First, we iterate through our array of objects:

```html
<script id="character-index" type="text/x-handlebars-template">
  {{#each characters}}
  {{/each}}
</script>
```

Next, we create tags for each object property:

```html
<script id="character-index" type="text/x-handlebars-template">
  {{#each characters}}
    <img src={{url}}/>
    <h2>{{name}}</h2>
    <h4>{{title}}</h4>
    <p><em>Quote: {{quote}}</em></p>
  {{/each}}
</script>
```

### 2. Create a templating function

Now that we have a template made up, we need to pass data into it! Navigate over to `scripts/characters.js`. You should see a characters module. Ignore the top function for now. We'll get to that at a later lesson. For now, we will concern ourselves with the `_renderCharacters` function.

First, we need to compile our html template. This sounds complicated, but Handlebars makes it easy! We type:

```javascript
var template = Handlebars.compile($('#character-index').html());
```

We are targeting the template with jQuery, extracting the html with `.html`, then feeding the result into Handlebars's compiling function. Finally, we point to the resulting function with the variable `template`.

### 3. Call the templating function with the object as our paramater

Now that we've created our templating function, lets see what it can do!

Enter this under your last line of code and check the log in your console:

```javascript
  console.log((template({
    characters: characters
  })));
```

We have a string that contains all of the html we want to render. Almost there!

### 4. Set our div's html to the result of calling our templating function

We already know how to do this part. We target our `content` div, then set it's html content with `.html()`:

```javascript
$('#content').html(template({
  characters: characters
}));
```
And that's it! Call the function and see the results for yourself.


### Lab(Pair)

Pair up with a partner, and follow this pattern to render the array of houses on `/houses.html`. The html page and most of the javascript have already been written for you. All you need to do is follow the above pattern on `houses.html` and `houses.js`.


## Part 2: Bootstrap

We now have content our page, but we have no way to navigate between pages, and our mockup is ugly. Luckily, there's a front end framework that allows us to make our page functional, pretty and responsive quickly.

Bootstrap is an open-source collection of HTML and CSS design templates. You already installed bootstrap with bower, so we will move right along with implementation.

### The Grid System

Boostrap uses a 12 column grid. What does this mean? Let's find out!

First, copy and paste this code into your stylesheet:

```css
.container {
  border: 10px solid red;
}

.row {
  border: 10px solid green;
}

.col-md-4 {
  border: 10px solid blue;
}
```

We're going to use these stylings to keep track of where our divs are.

Next, let's go ahead and apply the basic bootstrap grid classes to our index.html. With bootstrap, you will wrap your whole grid in a:

```html
<div class="container"></div>
```

each row in a:

```html
<div class="row"></div>
```

and each seperate piece of content in a varaiation of:

```html
<div class="col-md-4"></div>
```

All put together, a sample grid looks as follows:

```html
<div class="container">
  <div class="row">
    <div class="col-md-4">How now brown cow</div>
    <div class="col-md-4">How now brown cow</div>
    <div class="col-md-4">How now brown cow</div>
  </div>
  <div class="row">
    <div class="col-md-4">How now brown cow</div>
    <div class="col-md-4">How now brown cow</div>
    <div class="col-md-4">How now brown cow</div>
  </div>
</div>
```

Go to `index.html`, comment out the existing code and paste in the above block. We'll check it out together.

So we have this weird three-part class for our columns. What do these mean? Let's take a few minutes to look over the documentation on the subject:

[Go here and scroll down for grid column knowledge](http://getbootstrap.com/css/)

#### Application

Time to start improving our app! Let's start with the houses page.

First, we need to add container and row div wrappers to the elements on our index:

```html
<div class="container">
  <h1>Houses</h1>
  <div class="row">
      <div id="content"></div>
  </div>
</div>
```

Our page is looking a bit better, but having all of our houses in one vertical line is far from ideal. To get these guys looking pretty, we need to add another div inside of template:

```html
<script id="house-index" type="text/x-handlebars-template">
  {{#each houses}}
  <div class="col-md-4">
      <img src={{sigil}}/>
      <h2>{{name}}</h2>
      <h4>{{words}}</h4>
  </div>
  {{/each}}
</script>
```

Now it's beautiful(ish)!

### Lab

Use the same pattern to make the characters page look better! Try experimenting with your own grid configurations.

### Components

Boostrap provides a number of copy-and-paste solutions for problems that you might run into. Right now, we seem to have a navigation issue. We have all these beautiful pages, but no way to visit them.
I have (ever so slightly) modified the [navbar template](http://getbootstrap.com/components/#navbar) found in the bootstrap documentation:

```html
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">Grand Theft Thrones</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="/characters.html">Characters</a></li>
            <li><a href="/houses.html">Houses</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
```

Go ahead and copy and paste this above the container in each of our html pages. Bingo! Bootstrap components are that easy! I was not kidding when I said these were copy and past solutions.


### Free Play

As you've probably found out by now, using Bootstrap boils down to reading through their documentation, finding the classes that you need and pasting them into your html markup. With this in mind, take 20 minutes to customize your website! Just scroll through the page, find components that you like and add them to your page. A few suggestions:

  - [Image Shapes](http://getbootstrap.com/css/#images-shapes)
  - [Page Headers](http://getbootstrap.com/components/#page-header)
  - [Media Objects](http://getbootstrap.com/components/#media)

## Additional Resources

- [Handlebars documentation](http://handlebarsjs.com/reference.html)
- [Bootstrap Documentation](http://getbootstrap.com)
