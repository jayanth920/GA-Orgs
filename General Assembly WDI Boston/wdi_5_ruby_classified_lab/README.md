![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Putting it All Together: Classified Ads

You've learned how to work with data in a database, how to answer REST queries, how to make REST queries, and how to communicate over AJAX.  We're going to put this all together and build a single-page app, one step at a time.

## Objectives

* Integrate knowledge of REST, Rails, AJAX and databases by producing a single-page web application using all four.

## Getting Started

We're going to use the same stripped-down Rails that we used for learning about CRUD.  We could work out the command line bit by bit, but we'll just steal from that lesson:

```javascript
rails new --database=postgresql --skip-bundle --skip-sprockets \
  --skip-spring --skip-javascript --skip-turbolinks \
  --skip-test-unit classifieds
```

We're also going to steal some magic from last week's lessons too. Add this line to the Gemfile:

```
gem 'rack-cors', :require => 'rack/cors'
```

Install the gems:

```
bundle install
```

Add these lines to config/application.rb:

```
config.middleware.use Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: [:get, :post, :patch, :put, :delete, :options]
  end
end
```

(This instructs Rails to allow scripting requests from other sites, which will make development easier.)



## User Stories

1, Users should be able to post a classified ad, including title, body, phone number, and email address.

2. Users should be able to view all classified ads.

3. Users should be able to add a category to their classified ads: Help Wanted, For Sale, or Event.

4. Ads should have start dates and end dates.  Users should not be able to see ads before their start date or after their end date by default, but they should be able to see them if they ask.

5. Events should have Event Dates.  When users view Events, they should be sorted to show the soonest events first.

6. For Sale and Event ads should have zip codes, and users shoud be able to specify a single zip code when they search.

## Strong Parameters

Strong parameters are a way of restricting and sanitizing the input that users may pass to your API so that you can do less-risky bulk assignments.  

A bulk assignment is when you take advantage of the fact that parameters from the web are passed into Rails in a hash, which is what the `create` method expects.  So instead of saying 

```ruby
place = Place.create(name: 'New York', team: 'Yankees', best_part: 'Brooklyn')
```

You can say 

```ruby
place = Place.create(params)
```

But if you do that, Rails will yell at you because you haven't examined the contents of params to be sure it's all stuff you can or should pass to Place.create().

Instead, you prefix it with a line like this:

```ruby
safe_params = params.require(:name).permit(:team, :best_part);
place = Place.create(safe_params);
```

Here are some references:

* [Introducing Strong Parameters](http://easyactiverecord.com/blog/2014/12/18/introducing-strong-parameters/)
* [A Rule of Thumb for Strong Parameters](http://patshaughnessy.net/2014/6/16/a-rule-of-thumb-for-strong-parameters)

## ActiveModel::Serializers

Just as we can sanitize the input with strong parameteters, we can clean up the output with ActiveModel:Serializers. 

Add this to the Gemfile:

```ruby
gem "active_model_serializers", github: "rails-api/active_model_serializers"
```

And use this as a reference: [Serving Custom JSON From Your Rails API With ActiveModel::Serializers](https://blog.engineyard.com/2015/active-model-serializers)

(Note that there are some concepts in that reference, like `has_many`, that we'll be looking at on Friday and Monday.)





