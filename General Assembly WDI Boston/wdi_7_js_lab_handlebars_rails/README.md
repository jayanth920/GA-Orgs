# Handlebars on Rails

[Handlebars](http://handlebarsjs.com/) is one of the more popular [JavaScript templating languages](http://garann.github.io/template-chooser/) currently in use. Just like we have the ERB templating language to generate HTML in Rails, we can use a JavaScript templating language to generate HTML on the client side. This way we don't have to construct each element manually using jQuery.

As a side topic, this repository also includes the [JsRoutes gem](https://github.com/railsware/js-routes), which provides a handy way to access the routes of your Rails app from JavaScript. Check the README of that project for installation and usage.

## Demo

The `/articles` path in this app returns fake static JSON data for a list of articles. We'll use an Ajax request to retrieve this data, and pass it to a Handlebars template that will render the articles onto the page. The reference code for the finished demo is in `reference.md`.

The stylesheets used for the lab might interfere with this demo &ndash; add `?no_styles=true` onto the end of the URL to suppress them.

## Lab

At the `/reference` path in this app, you will find a static HTML reference page. Your goal is to make the root path display the *exact* same HTML, by making an Ajax JSON request to `/profile` and rendering a [Handlebars](http://handlebarsjs.com/) template using the returned data. Use JsRoutes to get the correct path for the request.

*(note: this lab is adapted from LinkedIn's "[client-side templating throwdown](https://engineering.linkedin.com/frontend/client-side-templating-throwdown-mustache-handlebars-dustjs-and-more)")*
