# PBJ Radio

For this app, your job is to build a single-page app that plays music (a real,
functional tunr!)

For a working solution, please see [the deployed version](http://pbjradio.herokuapp.com).

## Backbone w/ Rails

Note that for this app, we've provided you with a functional rails back end.
Take some time to familiarize yourself with the routes and data model.

This app is already set up to load backbone inside rails, as well as handlebars
templates, both using the respective rails gems.

For backbone, everything is just loaded up, not much special. Take a look at the
`application.js` to see how it's done.

### Templates

Note the location of the templates in `app/assets/javascripts/templates`. You
can get these compiled templates functions using e.g. `HandlebarsTemplates['songs/show']`
in your javascript.

## Bonus

* Add functionality to sort songs (by artits, title, album)
* Add a search box that live-filters the list of songs
* Add a list of recently played songs to the player view
* Add a playlist model to the app, and let the user create and play playlists
