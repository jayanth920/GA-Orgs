# Acceptance Testing with Rails and Rspec

## Overview

### [User Stories](http://www.mountaingoatsoftware.com/agile/user-stories)
A short description of a system feature.  
__“...understandable to customers and developers, testable, valuable to the customer and small enough so that the programmers can build half a dozen in an iteration.”__
__Kent Beck, 2001__

### Examples:
As a visitor.  
I would like to see all movies.  
So I can decide what movie to see.

As a visitor.  
I would like to create a new movie.  
So that I can, eventually, get a rating on a movie.  

As a visitor/unregistered user 
I would like to sign up  
So I use all the wonderful features of this app.

As registered user
I would like to sign in.
So I can manage my movies.

As a signed in user  
I would like to be able to add to my set of movies.  
So I can rate these movies.

As a signed in user  
I would like to be able to rate movies  
So that I can share my ratings with other users.   


## RSpec Feature Specs
* One way to create acceptance tests for user stories.
* Treat the application as a black box. With no internal knowledge of how the app implements it features.
* Interact with the interface and observe results.
* Outside in testing. Start at the UI implementing each feature/behavior as needed.
* Cover the data layer with unit/model test then skip up to acceptance tests.
	
## Other ways to create acceptance tests.
* [Cucumber](http://cukes.info/)
* [RSpec Request Specs](http://railscasts.com/episodes/257-request-specs-and-capybara)  
* [Request or Feauture specs?]( http://www.andylindeman.com/2012/11/11/rspec-rails-and-capybara-2.0-what-you-need-to-know.html)

## Capybara
* Capybara
* Browser automation library
* Simulates a real user.
* Come with drivers for Rack::Test and Selenium.
* Javascript support using PhantomJS.
	* Headless browser that can be used to test javascript as well.
	* More on this when we go over javascript.


### Lab. Build out the Movie resource (_Outside In_).
* Add capybara and launchy gem to the Gemfile.
* Add a feature spec for viewing movies.
	Drive the implementation with Behavior Driven Design (BDD)
	* Create a route for movies.
	* Create a controller for movies.
	* Create a movie index action.
	* Create a movie index view. To view all the movies.
	
* Add a feature to registering users.
	* Install Devise.
	* Create a feature spec for signing up/registering users.
	* Create a feature spec for signing in/logging in users.

## Resources
* [Thoughbot Capybara Cheat](http://learn.thoughtbot.com/test-driven-rails-resources/capybara.pdf)
* [Capybara Quick Ref](http://www.web-l.nl/system/CapybaraQuickRef.pdf)


