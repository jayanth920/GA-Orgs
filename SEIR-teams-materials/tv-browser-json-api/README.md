[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Express JSON API Homework

## Prerequisites

- Express routes
- Mongoose models + schemas

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Install dependencies.
1. Fulfill the listed requirements.

Please turn in your submission by the deadline on your cohort calendar. Unless otherwise specified, assignments are due by 10 am ET the next class day via pull request. 

## Requirements

For this lab you'll be building a JSON API using Express, from scratch. The
provided starter files are here just to give you a guideline - you must create
everything that isn't the seed data.

> All this data was pulled from the TV Maze API. It's pretty great!
> http://www.tvmaze.com/api

Run `node db/getPeople.js`. This will retrieve a list of 20 random people from
the API. If it fails, wait 10 seconds and try again.

- Using the newly retrieved people data (in `db/people.json`), build out the
  Person model. Include all of the properties.
- Build out the Show model. The following properties are just SOME of the ones you will need to have in your model ... examine your data to determine all of the properties the Show model will need. If you get errors, it's likely that you're missing some properties or have not typed them correctly!
  - url
  - name
  - language
  - genres
  - status
  - runtime
  - rating
  - weight
  - all image links
  - summary
- Write the logic to seed the database with both datasets. You can do each
  individually if its easier.
- Set up your express server, routes, and controller. Put `/api` as the prefix
  to all your routes.

Your server should have the following routes/endpoints. How you choose to name
them is up to you. You should follow RESTful paradigm we've used in class with the the standard HTTP verb / action convention,
e.g. using GET for retrieving data and POST for writing data.

- List all shows/people
- List a single show/person by id
- Create a show/person
- Update a single show/person by id
- Delete a show/person by id

This means you will have a total of 12 routes! 6 for each model.

Remember to use Postman, it's a good friend to rely on during these trying
times.

## Bonus

- Update your `list all shows` method to only return some of the properties, for
  example: name, id, url, summary. the `list a single show by id` method should
  return everything.
- Update your `list a single show by name` method to be more flexible in
  searching. For example, you could convert everything to lowercase, and get
  creative with how you compare if names are equal.

## Double Bonus

Add a third model for episodes. Reference the episodes to the shows by id (you
may have to add the id back in to the shows). Then pick 10 or so shows and
populate your database with them, using [axios](https://github.com/axios/axios)
to help you make requests and the new Episode model to write to the database.

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
