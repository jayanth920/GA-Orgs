## Rails Routes

### Overview  
 
Learn about URL Helpers and nested routes. _Possibly create your own cheat sheets._ And practice, practice, practice.

	* Create a resource.
	* Explore the URL Helpers created by routes. 
	* Calling actions from the rails console.
	* Build out the actions and views for the resource.
	* Create a nested resource and look at the URL Helpers.
	
### Two purposes of Routing
1. Maps HTTP requests to Controller actions. _We've seen this_
2. Enables the dynamic generation of urls, **Url Helpers**, for use as arguments to methods like
link_to and redirect_to.

### In Class, (Create Model)
1. Create a DB.
   ```rake db:create```
2. **In a new branch**, create a movie resource.
   ```rails g resource Movie title:string description:text rating:string length:integer```

   This will create a migration, model, controller and add an entry into the routes.rb file.
   **Commit**

3. Run migrations.
   `rake db:migrate`
   _(This will generate a file db/schema.rb that will show the model attributes, Open it up.)_

   **Commit**
4. Populate the db/seeds.rb file to create a couple of Movies. Run rake to seed the DB.
   `rake db:seed`

	**Commit**
5. Open up the rails console and look at the movies
   _Should see all the movies created in the seeds file._

6. Open up the movie model. Then run _annotate_ at the command line and look at the movie model file again.
    The annotate gem provides a command `annotate` that will add a comment to each model file, showing the model's attributes.
    **Commit**


### In Class, (Show routes)
1. Look at you're routes.rb file.
   Notice the
   `resources :movies`

2. `run rake route ` _Roughly maps to:_

	<table>
	<tr>
		<th>HTTP Verb</th><th>URI Pattern</th><th>URL Helper</th><th>Controller#Action</th><th>CRUD</td>
	</tr>

	<tr>
		<td>GET</td><td>/movies(.:format)</td><td>movies_path</td><td>movies#index </td><td>_show all movies_</td>
	</tr>


	<tr>
		<td>GET</td><td>/movies/:id(.:format)</td><td>movie_path(id)</td><td>movies#show</td><td>READ</td>
	</tr>

	<tr>
		<td>GET</td><td>/movies/new(.:format)</td><td>new_movie_path</td><td>movies#new</td><td>_get form_</td>
	</tr>

	<tr>
		<td>POST</td><td>/movies(.:format)</td><td>movies_path</td><td>movies#create</td><td>CREATE</td>
	</tr>

	<tr>
		<td>GET</td><td>/movies/:id/edit(.:format)</td><td>edit_movie_path(id)</td><td>movies#edit</td><td>_get form_</td>
	</tr>


	<tr>
		<td>PATCH/PUT</td><td>/movies/:id(.:format)</td><td>movie_path(id)</td><td>movies#update</td><td>UPDATE</td>
	</tr>

	<tr>
		<td>DELETE</td><td>/movies/:id(.:format)</td> <td>movie_path(id)</td><td>movies#destroy</td><td>DELETE</td>
	</tr>

</table>


<br/>


### Lab for entire class (Invoke Actions using curl)
1. Create a before filter in the Movies controller.
	`before_action :show_controller_action`

	...

	`def show_controller_action`
	` render text: "In #{params[:controller]}##{params[:action]}" `
	`end`

2. Comment out the "protect_from_forgery" in Application Controller for below example **ONLY**.

3. Create a Table on the whiteboard, by running curl. This table will have columns for:
	1. The curl command
	2. The HTTP method.
	3. The URI, path.
	4. The Controller Action invoked.

    `curl --get localhost:3000/movies`
    `curl --get localhost:3000/movies/3`
    `curl --get localhost:3000/movies/new`
    `curl --data 'title=Gravity&rating=G' ]localhost:3000/movies`
    `curl localhost:3000/movies/3/edit`
    `curl --data '_method=PUT&title=Gravity&rating=G'  localhost:3000/movies/3`



### In Class, (Invoke Actions in Console)
We'll be using URL helpers generated by the resources :movies . Lets add a column to the above
table, Url Helper, that will show the url helper used to invoke each action.

1. Open the rails console.
2. Look at the URL helper for the index action.
	`app.movies_path` => /movies
	`app.get app.movies_path` => Processing by MoviesController#index ...

3. Look at the URL helper for the create action. _(Same as index action, **BUT** it uses a HTTP POST)_
	`app.movies_path` => /movies
	`app.post app.movies_path` => Processing by MoviesController#create ...

4. Look at the URL helper for the new action.
	`app.new_movie_path` => /movies/new
	`app.get app.new_movie_path` => Processing by MoviesController#new ...

5. Look at the URL helper for the edit action.
	`app.edit_movie_path(3)` => /movies/3/edit
	`app.get app.edit_movie_path(3)` => Processing by MoviesController#edit ...

6. Look at the URL helper for the show action.
	`app.movie_path(3)` => /movies/3
	`app.get app.movie_path(3)`  => Processing by MoviesController#show as HTML ...

7. Look at the URL helper for the update action.  _(Same as show action, **BUT** it uses a HTTP PATCH OR HTTP POST)_
	`app.movie_path(3)` => /movies/3
	`app.patch app.movie_path(3)` => Processing by MoviesController#update ...

8. Look at the URL helper for the delete action.  _(Same as show action, **BUT** it uses a HTTP DELETE)_
	`app.movie_path(3)` => /movies/3
	`app.delete app.movie_path(3)` => Processing by MoviesController#destroy ...

9. Do the above using url instead of path, change movies_path to movies_url.


### Lab. (Build out the Movie resource.)

1. Each movie in the list of movies should have.
	* The movies attributes, (title, rating,..).
	* links to show, update and delete the movie.

2. The list of movies should have a link to create a NEW movie.

3. The view for displaying one movie should have a link to the list of movies.

4. The forms for creating and updating a movie should have a cancel button that brings you back to the list of movies.


### Lab (Extra Credit): Allow each movie to have comments.
1. Show all the comments for a specific movie.
2. Add a comment to a movie.