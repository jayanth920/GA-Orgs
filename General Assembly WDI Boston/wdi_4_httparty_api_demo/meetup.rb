require 'HTTParty' # or add 'HTTParty' to your Gemfile in Rails

# get my api key
ANNAS_MEETUP_API_KEY = "get_yer_own_key_already"

# let's say I want to return a list of all the members in a given meetup group

members_in_this_group = HTTParty.get("https://api.meetup.com/2/members?&key=#{ANNAS_MEETUP_API_KEY}&sign=true&photo-host=public&group_id=176399&page=20")

# get all the names of members in this group

names = members_in_this_group["results"].map { |person| person["name"]}

# now I want to return a list of all the upcoming meetups within 1 day in a 1-mile radius of my zipcode

upcoming_meetups_near_me = HTTParty.get("https://api.meetup.com/2/open_events?&key=#{ANNAS_MEETUP_API_KEY}&sign=true&photo-host=public&time=,1d&zip=02144&radius=1")

# get all the names of these meetups

event_names = upcoming_meetups_near_me["results"].map { |event| event["name"] }

# so how do we use this inside of Rails?

# user story: user enters a zipcode and is able to see a list of all meetups nearby that day

# let's imagine we have a Meetup model, with attributes: name, time, place
# we need to get the info from the API to the database (using the Meetup model)

# to follow Single Responsibility Principle, it's a good idea to have
# all the API calls be done in a separate class, let's call it MeetupRetriever
# this is a class that does NOT inherit from ActiveRecord - it's just a Plain Old Ruby Object

# so make a new file - /app/models/meetupretriever.rb

class MeetupRetriever

  # make a new file in root of your app - .env
  # also add 'dotenv-rails' to Gemfile, and bundle
  # also add .env to .gitignore
  # in .env file: "MEETUP_KEY"="-09Q834JA;OS9E8DF;OAIJSDF"

  ANNAS_MEETUP_API_KEY = ENV["MEETUP_KEY"]

  # at some point, we're going to call MeetupRetriever.new(02144)

  def initialize(zipcode)
    # HTTParty.get request here, uses the ANNAS_MEETUP_API_KEY and zipcode passed in
  end

  # other methods/calls also

  def self.get_names_of_meetups
    # uses the result of the initialize method and perform some calculation on it
  end

end

# you might call this class from inside your Meetup model, or maybe your controller
# remember the idea of "fat model, skinny controller" or even better "skinny everything" -
# not too many methods in your model OR controller

# MeetupRetriever.new(02144)



fido.bark

Dog.count_all_dogs

class Dog

  attr_accessor

  def initialize
  end

  # this is an instance method
  def bark
  end

  # this is a class method, you call it on the class
  def self.count_all_dogs
  end

end
