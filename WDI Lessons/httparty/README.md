# HTTParty & API calls

## Learning Objectives

  - Define APIs and Endpoints
  - View endpoints in the browser to view JSON response from a server
  - Manage Ruby dependencies (Gems)
  - Use HTTParty to make an API call to a TVMaze API endpoint
  - Extract relevant and specific data from a server response to an API call

## APIs and Endpoints

**API** stands for Application Program Interface. This can refer to the interface of a programming language or a piece of software itself. Think about using jQuery's `$()` function. The jQuery library provides us with single massive function that can accomplish a variety of tasks. We can think of this as being jQuery's *interface*.

However, this morning we will focus on a more specific meaning of the term **API**, or a very web-specific sense of the term **API**. The term is also used to refer to servers that respond to client/user requests data, often formatted as JSON, instead of an HTML page. The server makes this data available at certain URLs that are called ***endpoints***.

## Endpoints in the Browser

1. Before we look at some examples of APIs, let's [download the JSONView extension for Chrome](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc/related?hl=en).

2. After installing the plugin, head over to http://api.tvmaze.com/shows/83. You should see something like this...

```js
{
  id: 83,
  url: "http://www.tvmaze.com/shows/83/the-simpsons",
  name: "The Simpsons",
  type: "Animation",
  language: "English",
  genres: [
    "Comedy",
    "Family"
  ],
  status: "Running",
  runtime: 30,
  premiered: "1989-12-17",
  officialSite: "http://www.fox.com/the-simpsons/full-episodes",
  schedule: {
    time: "20:00",
    days: [
      "Sunday"
    ]
  },
  rating: {
    average: 8.5
  },
  weight: 96,
  network: {
    id: 4,
    name: "FOX",
    country: {
      name: "United States",
      code: "US",
      timezone: "America/New_York"
    }
  },
  webChannel: null,
  externals: {
    tvrage: 6190,
    thetvdb: 71663,
    imdb: "tt0096697"
  },
  image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_portrait/0/639.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/0/639.jpg"
  },
  summary: "<p><b>The Simpsons</b> is the longest running scripted show in US television history. It captures the adventures of Homer, Marge, Maggie, Bart and Lisa who are living in a fictional town called Springfield.</p>",
  updated: 1503899579,
  _links: {
    self: {
      href: "http://api.tvmaze.com/shows/83"
    },
    previousepisode: {
      href: "http://api.tvmaze.com/episodes/1107599"
    },
    nextepisode: {
      href: "http://api.tvmaze.com/episodes/1223232"
    }
  }
}
```

We get back a response full of information about *The Simpsons*. TVMaze also has an endpoint that will return data in response to searches, as well.

We are used to doing doing searches as web *users*, but now we're going to look at how, as developers, we can use an API like  TVMaze to use data from searches in our programs, as web ***developers***.

## Setting Up (5 min)

> In Terminal (or your CLI of choice)...

```bash
 $ cd ~
 $ mkdir api-party
 $ cd api-party
 $ touch app.rb Gemfile
 $ atom .
```

> In `Gemfile`, add the following...

```rb
source 'https://rubygems.org' # this is the Ruby community's hosting platform for Ruby gems

gem 'httparty'
```

> Next, we'll switch back to our CLI. Enter the command below.

```bash
 $ bundle install
```

> That should produce some output like this...

```bash
$ bundle install
Fetching gem metadata from https://rubygems.org/.............
Fetching version metadata from https://rubygems.org/.
Resolving dependencies...
Using bundler 1.15.4
Using multi_xml 0.6.0
Fetching httparty 0.15.6
Installing httparty 0.15.6
Bundle complete! 1 Gemfile dependency, 3 gems now installed.
Use `bundle info [gemname]` to see where a bundled gem is installed.
Post-install message from httparty:
When you HTTParty, you must party hard!
```

Switching back to our editors, we can see that this command created a file named `Gemfile.lock`. This file contains **fixed** versions numbers of gem or dependencies your program uses. Gems are essentially libraries of Ruby code written by other Ruby developers. Through Ruby's Gems give us tools for doing certain things. It's somewhat like using something like `jQuery` or `lodash`.

## TVMaze API micro-app

We'll be writing our first app API that makes an API call. In order to learn how to use this API, let's take a brief look the [TV Maze documentation](http://www.tvmaze.com/api).

### HTTP Requests with HTTParty

> In `app.rb`...

```rb
require 'httparty'

url = 'http://api.tvmaze.com/singlesearch/shows?q='
puts "What show would you like to search for?"
input = gets.chomp
url = url + input
puts "Requesting from #{url}"
response = HTTParty.get(url)
puts response
```

> In your CLI...

```bash
$ ruby app.rb
```

Running our Ruby app will generate some output like this.

```bash
What show would you like to search for?
the simpsons
Requesting from http://api.tvmaze.com/singlesearch/shows?q=the simpsons
{"id":83,"url":"http://www.tvmaze.com/shows/83/the-simpsons","name":"The
Simpsons","type":"Animation","language":"English","genres":["Comedy","Family"],
"status":"Running","runtime":30,"premiered":"1989-12-17","officialSite":
"http://www.fox.com/the-simpsons/full-episodes","schedule":{"time":"20:00",
"days":["Sunday"]},"rating":{"average":8.5},"weight":96,"network":{"id":4,"name"
:"FOX","country":{"name":"United States","code":"US","timezone":"America/New_York"}},
"webChannel":null,"externals":{"tvrage":6190,"thetvdb":71663,"imdb":"tt0096697"},
"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/0/639.jpg",
"original":"http://static.tvmaze.com/uploads/images/original_untouched/0/639.jpg"},
"summary":"<p><b>The Simpsons</b> is the longest running scripted show in US
television history. It captures the adventures of Homer, Marge, Maggie, Bart and
 Lisa who are living in a fictional town called Springfield.</p>",
 "updated":1503899579,"_links":{"self":{"href":"http://api.tvmaze.com/shows/83"},
 "previousepisode":{"href":"http://api.tvmaze.com/episodes/1107599"},
 "nextepisode":{"href":"http://api.tvmaze.com/episodes/1223232"}}}

```

We got back some output, but it is not very readable. We can use another Gem, `awesome_print`, to help us format the output.

### Adding `awesome_print`

> In `Gemfile`...

```rb
source 'https://rubygems.org'

gem 'httparty'
gem 'awesome_print'
```

> Next, we'll have to install our new gem in the CLI...

```bash
 $ bundle install
```

> In `app.rb`, at the beginning of the file, add...

```rb
require 'awesome_print'
```

> Then, in `app.rb`, make these changes at the end of the file...

```diff
response = HTTParty.get(url)
+ parsed_response = response.parsed_response
- puts response
+ ap parsed_response
```

The method `.parsed_response` is from `HTTParty` and returns a Ruby `Hash`. We have to call this method so that `awesome_print`'s `ap` method will display the response from TVMaze properly.

### Bringing in `pry`

Next, let's add in `pry`.
```rb
require 'httparty'
require 'awesome_print'
require 'pry'

url = 'http://api.tvmaze.com/singlesearch/shows?q='
puts "What show would you like to search for?"
input = gets.chomp
url += input # url = url + input
puts "Requesting from #{url}"
response = HTTParty.get(url)
parsed_response = response.parsed_response # parsed_response is an HTTParty method
ap parsed_response

binding.pry

puts "pry"
```

  - > *Note: You most likely have `pry` installed globally and therefore don't need to run `bundle install`.*

### Response Hash

HTTParty is converting the JSON response from TV Maze's server into a Ruby hash. JSON data has strings for its keys and this carries over into the Ruby Hash `HTTParty.get` returns.

The response Hash we get back will have strings for keys instead of instead of symbols. We would have for example, `parsed_response["schedule"]` instead of `parsed_response[:schedule]`.

Usually in Ruby, we'll be dealing with `:symbol` keys and not `"string"` keys. Today will likely be the sole exception with your work in Ruby during this course.

> In `pry`, type...

```
[4] pry(main)> parsed_response["schedule"]
```

> You should see something like...

```
=> {"time"=>"20:00", "days"=>["Sunday"]}
```

An easy way to see what keys a `Hash` has is the `.keys` method. Try it out in `pry`!

> In `pry`...

```
[5] pry(main)> parsed_response.keys
=> ["id",
 "url",
 "name",
 "type",
 "language",
 "genres",
 "status",
 "runtime",
 "premiered",
 "officialSite",
 "schedule",
 "rating",
 "weight",
 "network",
 "webChannel",
 "externals",
 "image",
 "summary",
 "updated",
 "_links"]
```

> Next, let's access the values we're interested in, deeper in the response `Hash`...

```
[6] pry(main)> parsed_response["schedule"]["days"]
=> ["Sunday"]
[7] pry(main)> parsed_response["schedule"]["time"]
=> "20:00"
```

### Getting Rating and Schedule from the Response

When we're building web applications that use information from 3rd party APIs, we're usually interested only in some of the data in response. Often, we're interested in a very, very small portion of the data returned by API. Some APIs return a huge amount of information.

We'll add some code to just show the rating and schedule of the show.

> In `app.rb`...

```diff
- ap parsed_response
+ show_name = parsed_response["name"]
+ show_time = parsed_response["schedule"]["time"]
+ show_days = parsed_response["schedule"]["days"]
+
+ puts "#{show_name} is on at #{show_time} on #{show_days}"
```

> Next run your Ruby code again. You should see something like this above the `pry` output...

```bash
~/wdi/exercises/api-party
$ ruby app.rb
What show would you like to search for?
the simpsons
Requesting from http://api.tvmaze.com/singlesearch/shows?q=the simpsons
The Simpsons is on at 20:00 on ["Sunday"]
```

### Refactor into a method

For a finishing touch, we can refactor our code by encapsulating it within a method.

```rb
require 'httparty'
require 'pry'

def tvmaze_search input
  url = 'http://api.tvmaze.com/singlesearch/shows?q=' + input
  puts "Requesting from #{url}"
  response = HTTParty.get(url)
  parsed_response = response.parsed_response # parsed_response is an HTTParty method
  show_name = parsed_response["name"]
  show_time = parsed_response["schedule"]["time"]
  show_days = parsed_response["schedule"]["days"]

  return "#{show_name} is on at #{show_time} on #{show_days}"
end

binding.pry

puts "pry bug"
```

That will allow us to perform lots of searches easily.

> Run `app.rb` again. Try some different searches by passing in strings to the `tvmaze_search` method we've just defined.

```
[1] pry(main)> tvmaze_search "the simpsons"
Requesting from http://api.tvmaze.com/singlesearch/shows?q=the simpsons
=> "The Simpsons is on at 20:00 on [\"Sunday\"]"
[2] pry(main)> tvmaze_search "trailer park boys"
Requesting from http://api.tvmaze.com/singlesearch/shows?q=trailer park boys
=> "Trailer Park Boys is on at  on [\"Friday\"]"
[3] pry(main)> tvmaze_search "american idol"
Requesting from http://api.tvmaze.com/singlesearch/shows?q=american idol
=> "American Idol is on at 20:00 on [\"Wednesday\"]"
```
