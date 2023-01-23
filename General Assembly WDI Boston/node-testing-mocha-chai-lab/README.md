---
title: Testing with Mocha/Chai Lab
type: lab
duration: "1:25"
creator:
    name: Gerry Mathe modified by Syed Salahuddin
    city: London
competencies: Testing
---

# Testing with Mocha/Chai Lab

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

Now that we've written a few tests in our Express application, let's practice writing tests for a more complex version of our Candies app, an app that uses Sequelize, but with ice cream instead!

At the end of this lab, you should have tests written to make sure our index route works properly, our show route returns the information we need, we can update and post an icecream with error handling, and we can delete a icecream from our database. 

## Exercise

#### Requirements

- Fork and clone the starter code
- cd into `starter-code/icecream-app` and `npm install`


npm housekeeping: 

```bash
npm install mocha --save-dev
```

Then we will install chai using --save-dev:

```bash
npm install chai --save-dev
```

Last dependency we need to install is supertest:

```bash
npm install supertest --save-dev
```

- create a db called `favorite_icecream_development`
- run `sequelize db:migrate`
- run `sequelize db:seed:all`
- Implement these tests (and create routes for the INDEX, SHOW, POST, PUT and DELETE routes, using the postgres database)
- Remember to run your app while you test!
- you can run your tests with `npm test`

```
GET /icecream
  ✓ should return a 200 response
  ✓ should return an array of objects
  ✓ should return all the records in the database

GET /icecream/:id
  ✓ should return a 200 response
  ✓ should return an object containing the fields "brand" and "name"

POST /icecream
  ✓ should return a 200 response
  ✓ should add a new icecream to the database

PUT /icecream/:id
  ✓ should return a 200 response
  ✓ should update an icecream record

DELETE /icecream/:id
  ✓ should remove an icecream record
```

## Starter code

The starter code contains an express app with sequelize inited, with an icecream controller and a Sequelize icecream model.  It also includes seeds made by `sequelize seed:generate`, and a blank `test/icecream/icecream-test.js`.  Make sure to require the things that you need in the test file.

## Bonus:

- Add more validations in the models and add the tests for them, too
- Add fields with different datatypes and write tests for them

## Docs

- [Chai](http://chaijs.com/)
- [Mocha](https://mochajs.org/)
- [Supertest](https://github.com/visionmedia/supertest)

## When finished

- Make a pull request on this repo, with:
    - your name in the title
    - level of comprehension (out of 5)
    - level of completeness (out of 5)
    
 - Then, work on the Extra Resources

<br />

---

# Extra Resources

### Tutorials

- [Webapplog- How to use mocha with test-driven-development](https://webapplog.com/tdd/)
- [Scotch.io- test a node restful api with mocha + chai](https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai)

### Video Tutorials

- [unit testing- tech college path](https://techcollegehive.capitalone.com/paths/unit-testing-in-javascript)
- other pluralsight tutorials
    - [mocha js testing](https://www.pluralsight.com/courses/mocha-javascript-testing-nodejs)
    - [unit testing with node.js](https://www.pluralsight.com/courses/unit-testing-nodejs)

