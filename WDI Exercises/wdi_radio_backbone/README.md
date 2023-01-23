# WDI Radio: Backbone Edition

For this app, your job is to build a single-page app that plays music. It's a real,
functional tunr!

For a working solution, please see [the deployed version](http://pbjradio.herokuapp.com).

## API Setup

Fork and clone [this repo](https://github.com/ga-dc/wdi_radio_api). We'll be using a rails back end. It'll be a single model CRUD API for songs. Lets go into this directory and run all our initial rails setup and run our server.

```bash
$ cd wdi_radio_api
$ bundle install
$ rake db:create
$ rake db:migrate
$ rake db:seed
$ rails s
```

This will be the backend we'll be using, from http://localhost:3000.

## Tuesday: Add Models, Collections and Item Views

### Models and Collections

* Create a main `index.html` for your Backbone application
* Create a directory for `js`, and in it, make directories for `models`, and `collections`
* Add an `app.js` to your `js` directory
* Install Backbone dependencies using Bower.
* Create a file necessary for creating a Model definition for `Song`
* Create a file necessary for creating a Collection definition for `Songs`
* Write the appropriate Model definition for `Song`
* Write the appropriate Collection definition for `Songs`

### Item View

* Define a Backbone item view for your `Song` model.
* Create a `render` method and corresponding Handlebars template that defines your view's `.$el`.
* Create a `listenTo` statement that causes the view to re-render upon change.
* Create events that correspond with the following actions. You will need to make new methods and/or Handlebars templates for most of these.
  * Rendering an "Edit Song" form.
  * Canceling an "Edit Song" form.
  * Updating a song with new data.
  * Deleting a song.

## Wednesday: Add Collection View, and Specialty Views

### Collection View

* Define a Backbone collection view of your `songs` collection
* Bind the collection view to an element in the HTML
* Modify `app.js` to render the populate and render the collection view using events

### Specialty View

* Define a Backbone specialty view for `player`
  * When you click a song in the collection view, should play song in player
* Define a specialty view for `create` song

## Thursday: Add Backbone Router

### Router

* Implement a Backbone Router for your application
* Add an empty `Router` object to the global `App` object to namespace your router definition
* Create a Backbone Router definition
  * Setup a root route
  * Setup a route for adding a new song
  * Setup a route for which song is currently playing
* Create an instance of our router in `app.js` and initialize it

## Bonus

* Add functionality to sort songs (e.g., by artists, title, album).
* Add a search box that live-filters the list of songs.
* Add a list of recently played songs to the player view.
* Add a playlist model to the app, and let the user create and play playlists.
* Bonus features that make sense to be specialty views should be implemented as such
