# Tunr 1.0!

We're going to be building Tunr, the worlds #1 music catalog / player (those
Spotify haters can't keep up with us).

## Part 1 - Database / Schema / Models

In this repo are three files `artist_data.rb`, `song_data.rb`, `seeds.rb` and `console.rb`. Ultimately we want to use the `seeds.rb` file to seed our database and the `console.rb` file to be a REPL for our Sinatra app.

### Create the database

Create a postgres database called `tunr_db`. Make sure to use that **exact**
name, or you'll have trouble later on!

### Create a schema

Inside the db folder, create a `schema.sql` file, and then load it into your
`tunr_db` database.

Here's what our data model looks like:

*Artists*

| column name  | type |
|--------------|------|
| id   | primary key (int) |
| name | text |
| photo_url | text |
| nationality | text |

*Songs*

| column name  | type |
|--------------|------|
|id | primary key (int) |
|title | text |
|album | text |
|preview_url | text |
|artist_id | foreign key (int) |

### Create the Models Using Active Record

### Load the Seed Data

### Set up Sinatra app
- Define a route with view defined at `/`. For now it should say `Hello World` when you visit that url.

## Part 2 - Build a RESTful Interface using Sinatra

Make sure to commit after completing each feature. Don't move to the next feature without first finishing a feature.

### The Index Feature

Build the index feature for `artists`

If you need a reference, check out [the index part of the AR/Sinatra lesson](https://github.com/ga-wdi-lessons/sinatra-and-activerecord#the-index-route---wdi-app-1595)

### The Show Feature

Build the show feature for an `artist`

If you need a reference, check out [the show part of the AR/Sinatra lesson](https://github.com/ga-wdi-lessons/sinatra-and-activerecord#i-do-show-route---wdi-app-10125)

### The Create Feature

Build a feature that creates a new `artist` in the database.

If you need a reference, check out [the create part of the AR/Sinatra lesson](https://github.com/ga-wdi-lessons/sinatra-and-activerecord#the-post-request)

### The Edit Feature

Build a feature that allows a user to edit an existing `artist` in the database

If you need a reference, check out [the edit part of the AR/Sinatra lesson](https://github.com/ga-wdi-lessons/sinatra-and-activerecord#editing-models-lab-reference)

### The Delete Feature

Build a feature that allows users to delete an existing `artist` from the database.

## Bonuses
- create the 7 RESTful Routes for `songs`
- make `songs` a nested route under artists

## Mega-Bonuses
- Make a third model like playlists
- incorporate user authentication
