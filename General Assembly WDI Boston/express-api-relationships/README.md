[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Express as an API

## Prerequisites

- [express-api-study](https://git.generalassemb.ly/ga-wdi-boston/express-api-study)
- [express-api-crud](https://git.generalassemb.ly/ga-wdi-boston/express-api-crud)

## Objectives

By the end of this, developers should be able to:

- Use Express to CRUD on a Mongoose subdocument
- Use Express to CRUD on a Mongoose reference

## Preparation

1. Fork and clone this repository.
 [FAQ](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. `cd` into the `restaurants_api` folder
1. Install dependencies with `npm install`.

## Overview

Including one to many and many to many relationships in an Express API using Mongoose.

We can run our application with

```bash
npm run server
```

## Lab: Restaurants - Single Resource

A restaurant will be our first resource. Restaurant will need `name`,
`address`, `phone` and `cuisine`.

- Restaurant Schema and Model
- Restaurant CRUD Routes

## User

We've provided a `User` resource in this repository. It is similar to the `Book`
resource from the previous lesson but with an `email` and `hashedPassword`
property.

### Review: User routes

Together, we'll review the relevant `user` code in
[`server.js`](restaurants_api/server.js) and [`routes/user_routes.js`](restaurants_api/routes/user_routes.js).

### Annotate Along: Model

Now let's annotate the user model together in [`models/user.js`](restaurants_api/models/user.js).

## Code Along: Reviews - One to Many Subdocuments

Each restaurant should have its own set of reviews and a single review only
belongs to that one restaurant. We consider this a
**one-to-many** subdocuments relationship.

![One to many diagram. One Restaurant has many Reviews](https://media.git.generalassemb.ly/user/16320/files/441ca000-f75c-11ea-94f7-30405bf9720c)

Restaurant will need `reviews`.
Reviews will need a `title` and `content`.

- Review Schema
- Review CRUD Routes

## Code Along: User - One to Many Reference

Now let's create a **one-to-many** relationship with references.

A restaurant can only have **one** owner, but a owner can have **many** restaurants.
We will represent `owner`'s with the `User` model.

![One to many diagram. One User (owner) has many Restaurants](https://media.git.generalassemb.ly/user/16320/files/323afd00-f75c-11ea-919e-863c8266e780)

Restaurant will need an `owner` reference with the type `User`.

## Bonus: Customers - Many to Many Reference

A customer should be able to visit many restaurants and a restaurant may have
many customers. We consider this a many-to-many relationship.

![Many to many diagram. Many Restaurants can have many Reviews](https://media.git.generalassemb.ly/user/16320/files/75198200-33e7-11eb-83d4-c6ad94e8dc39)

Restaurant will need `customers` references.
Customer will need `name`, `hometown`, and `restaurants` references.

- Customer Schema and Model
- Customer CRUD Routes

As a bonus exercise, feel free to watch [this video 🎥](https://drive.google.com/drive/u/1/folders/1ZBoMmMiTA0ACHTuGyUy5WGf2BQGhK4Li)
that creates a many to many relationship in Express.

## Additional Resources

- [Subdocuments vs References Tradeoffs](https://stackoverflow.com/questions/21302279/embedded-document-vs-reference-in-mongoose-design-model)
- [Mongoose Subdocuments Docs](http://mongoosejs.com/docs/subdocs.html)
- [Mongoose Populate Docs](http://mongoosejs.com/docs/populate.html)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
