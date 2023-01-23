## IMDB Rails App

1. Fork and clone this repository (I already ran `rails new imdb_movies -T --database=postgresql` to create it). Run `rake db:create` to set up your database.
2. Create a controller for movies.
3. Create an index action in the movies controller.
4. Create a route for this action.
5. Add the [IMDB gem](https://github.com/ariejan/imdb) to your `Gemfile` and run `bundle install`.
6. In your index action, get the top 250 movies. `@movies = Imdb::Top250.new.movies`
7. Create a view to show all these movies. Use an ordered list to show ONLY the titles of each movie.
8. Create a show action in the movies controller.
9. Add a route for this show action. The route will take a "name" parameter.
10. Use this name parameter to find info from IMDB about this movie. `@movie = Imdb::Search.new(params[:name]).movies.first`
11. Create a show view with the movie's title, year and length (in minutes).

### Extra Credit

Show the cast members for each movie. Use a new controller named Casts with index and show actions.




