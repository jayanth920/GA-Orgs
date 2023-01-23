![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

## Objectives
* Use ActiveModel Serializer to create the JSON Representation of a Resource.

## We Do: Use ActiveModel Serializer.

We typically want to a fine grained control over the API. For example, we don't want to show the `created_at` and `updated_at` attributes for each model. Or we may want to create an attribute that doesn't exist on a Model.

The most common way to do this in a Rails API is to use the [ActiveModel Serializer](https://github.com/rails-api/active_model_serializers/tree/0-9-stable) gem. 

*Note, we are using the version 0.9 of this gem. Not the latest version as there were problems with the latest version.*

ActiveModel Serializer (AMS) will create a class for each resource, Movie and Review. This class will determine the *JSON representation* of the resource.

**Add this to the Gemfile, and bundle install.**

This will get version 0.9.3 of this gem.

```
gem 'active_model_serializers'
```

**Add this to the app/controller/application_controller.rb**

```
	# Remove the root element, curly braces surrounding the JSON.                                                     
  def default_serializer_options
    {
      root: false
    }
  end
```

### Create the JSON Representation of a Movie

**Add this to the app/serializers/movie_serializer.rb**

```
class MovieSerializer <	ActiveModel::Serializer
  # determines which attributes will be shown in the represntation.
  attributes :id, :name, :rating, :desc, :length
end
```

Now look at the Movies JSON and notice that its missing the `created_at` and `updated_at` attributes. *Because they weren't included in the attributes above.*

**Add this to the app/serializers/movie_serializer.rb**

```
  ...
  has_many :reviews
  ...
```

**Go to `http://localhost:3000/movies` and `http://localhost:3000/movies/2`**

Now when we view movies we'll see all it's reviews embedded in the representation of a movie!

But, we can see ONLY the reviews for a movie by going to *http://localhost:3000/movies/2/reviews*. 

See the difference? We may not need both of these, depends on what the client wants.

### Create the JSON Representation of a Review.

Lets create a representation of a review. Again, we don't want the `created_at` and `updated_at` attributes.

**Add the below to app/serializers/review_serializer.rb**

```
class ReviewSerializer < ActiveModel::Serializer
  attributes :name, :comment, :id
end
```

Doneso, good.

### Create a virtual attribute only for the JSON Representation.

Add a review_count virtual attribute for movie representation.

```
class MovieSerializer < ActiveModel::Serializer
  attributes :id, :name, :rating, :desc, :length, :review_count

  has_many :reviews

  # create a virtual attribute
  def review_count
    object.reviews.count
  end
end
```

Notice that we added an attribute, :review_count, and a getter method for that attribute. 

The *object* in the review_count method references a specific movie object.

## Lab 

* Add ActiveModel Serializers for the Album and Song resources. Remove the `created_at` and `updated_at` attributes.

* Add a virtual attribute, num_of_songs, to the Album representation using AMS.

* Add a virtual attribute, price, to the Album model. The price of the album will be 50 percent of the price of all the album songs.


Code Along: JSON API
*Change the review serializer to get it's name from the user that created the review.

Remember we removed the name attribute from the Review model.

  def name
    object.user.name
  end
Emulate an authenticated user.

When you add login, authentication, you'll typically determine the current user by calling a current_user method in the ApplicationController.

We don't have authentication in this app yet. But, we'll emulate it by creating a current_user method and hard coding a User.

In the app/controllers/applicaiton_controller.rb

def current_user
   @current_user ||=  User.find_by_name 'Meg'
end
Change the Movies Controller to use this current_user method

 # GET /movies                                                                                                     
  def index
    # all the movies                                                                                                
    if current_user
      @movies = current_user.movies.all
    else
      @movies = Movie.all
    end

    render json: @movies
  end

  # GET /movies/:id                                                                                                 
  def show
    # find one Movie by id                                                                                          
    if current_user
      @movie = current_user.movies.find(params[:id])
    else
      @movie = Movie.find(params[:id])
    end
    render json: @movie
  end


## Code Along: JSON API

**Change the review serializer to get it's name from the user that created the review.*

Remember we removed the name attribute from the Review model.

```
  def name
    object.user.name
  end
```

#### Emulate an authenticated user.

When you add login, authentication, you'll typically determine the current user by calling a current_user method in the ApplicationController. 

We don't have authentication in this app yet. But, we'll emulate it by creating a current_user method and hard coding a User.

**In the app/controllers/applicaiton_controller.rb**

```
def current_user
   @current_user ||=  User.find_by_name 'Meg'
end
```

**Change the Movies Controller to use this current_user method**

```
 # GET /movies                                                                                                     
  def index
    # all the movies                                                                                                
    if current_user
      @movies = current_user.movies.all
    else
      @movies = Movie.all
    end

    render json: @movies
  end

  # GET /movies/:id                                                                                                 
  def show
    # find one Movie by id                                                                                          
    if current_user
      @movie = current_user.movies.find(params[:id])
    else
      @movie = Movie.find(params[:id])
    end
    render json: @movie
  end
```
