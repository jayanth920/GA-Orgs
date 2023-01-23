# Materialize CSS + CSS Frameworks

## User Interface libraries

User interface libraries help create stylized and professional looking web applications. Most include some sort of grid system so that you can have elements aligned well, they have color schemes so that is handled for you, and they stylize your HTML components so that they look clean and professional.

Some of these include:
* [Bootstrap](http://getbootstrap.com/)
    * Very well known and built by Twitter
    * Easy to learn and looks professional
    * Can be easy to spot "Bootstrap Sites"
    * Can be difficult to customize components
* [Materialize](http://materializecss.com/)
    * Clean looking
    * A bit more "fun" than Bootstrap
    * Lots of styling and color options
    * Follows Google's Material style guide
* [Foundation](http://foundation.zurb.com/)
    * Lots of examples
    * Professional looking
* [Semantic UI](https://semantic-ui.com/)
    * Lots built in
    * Built in themes so its customizable
* [Grommet](https://grommet.github.io/)
    * Has a huge focus on accessibility
    * Looks really clean
    * Not as used as some of the others
    * Made for React JS (which we will learn in the next unit)


### Choosing a UI Framework
Choosing a UI framework mostly comes down to personal preference in appearance and the goals of the site. The different styles may appeal to different industries more or may convey a different message.

## Materialize
Material Design is a design paradigm that Google created for their sites. 

[Video on Material Design](https://www.youtube.com/watch?time_continue=9&v=Q8TXgCzxEnw)

It follows a few principles listed [here](http://next.materializecss.com/about.html).


Materialize CSS is a library built based on material design. It helps you create material sites pretty easily.

## Installation

Create an HTML file that looks like the following.
```html
<!DOCTYPE html>
<html>
<head>
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>

<body>

    <!--JavaScript at end of body for optimized loading-->
    <script type="text/javascript" src="js/materialize.min.js"></script>
</body>
</html>
```

Now you can use Materialize in your project!

For example, if you add a div with the following CSS classes, you will get a teal square div with styling!

```html
  <div class="card-panel teal lighten-2">This is a card panel with a teal lighten-2 class</div>
```

There's also a built in grid that allows you to center things easily!

```html
<body>
    <div class="container">
        <div class="row">
        <div class="col s1">1</div>
        <div class="col s1">2</div>
        <div class="col s1">3</div>
        <div class="col s1">4</div>
        <div class="col s1">5</div>
        <div class="col s1">6</div>
        <div class="col s1">7</div>
        <div class="col s1">8</div>
        <div class="col s1">9</div>
        <div class="col s1">10</div>
        <div class="col s1">11</div>
        <div class="col s1">12</div>
        </div>
    </div>
</body>
```
You can also add different widths for different sizes of devices. So, on a large device there may be 12 columns, but on a cell phone only three. There are 12 columns to fill, so you can allocate them as such. 

You can also use components such as navbars, footers, and cards using Materialize.

```html
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
```

There are also some components that use JavaScript to render, like modals. These are pretty un-fun to write yourself but can be done easily using Materialize.

The full documentation is [here](http://next.materializecss.com/modals.html).

## You do: Creating a Web Page

Create a stylized website using Materialize. Make sure to add in colors, JavaScript components, and use the grid system!
