# Lab - AJAX and Angular

Our movie app could still use some upgrades.

Right now it only shows one movie.

Research the OMDB docs on how to get a list (hint research `s=` we've been using `t=`)

Then, **ONLY display the movie titles**. Allow the user to click on a movie and see the movie's details.

- Your page should have a form that uses the [OMDBapi](http://www.omdbapi.com/) to search for matching movies and then display the resulting **titles**.

 - *Example*: If a user searches for `Star Wars`, a list of every Star Wars movie will be displayed.

 - **NOTE** the `s=` search doesn't have as much data as the `t=` search. It also may have a different data structure. You'll have to look through the data that is sent back to you and figure it out.  **The data response should still have a title**, year and poster, but **the other fields that were populated with a `t=` query will remain empty.**

  Remember: you just want to display the titles, first, from the form input

 - **THEN** add functionality to be able to click on a title and see then FULL details, like we did in lecture together. possibly below the form/list, to the right of the form/list etc.


  - *Example*: If a user is viewing a list of every Star Wars movie and clicks on `Star Wars: A New Hope`, detailed information about that specific movie will be displayed.
  
  ## Bonus
  - Style it with some sweet sweet CSS
  - Go back and finish up the morning lab 
