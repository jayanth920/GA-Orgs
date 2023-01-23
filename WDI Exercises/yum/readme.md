# YUM!

For Homework you will be writing a node application to practice using Express and Mongoose. Your task: create an app that tracks and stores Restaurants.

## Setup

Fork and clone this repo. Build out your file structure following MVC and install all the necessary packages from npm.

## Express

Build out an app using Express with routes that you can view in your browser and forms that manipulate your data with full CRUD.

Your app should have one resource: Restaurants.

| Name | Type | Description |
| --- | --- | --- |
| name | String | The name of the restaurant |
| owner | String | The name of the owner |
| type | String | The type of food the restaurant serves |
| capacity | Number | The max capacity of the restaurant |

## Bonus 1

Review the documentation on [Schemas](http://mongoosejs.com/docs/guide.html) and [Validation](http://mongoosejs.com/docs/validation.html) in Mongoose and add to your schema definition. Are there default values you could set in the schema? Are there properties you could validate (make required, set a min or max for, etc)?

## Bonus 2: Subdocuments

In Mongo, you can create nested resources using [Subdocuments](http://mongoosejs.com/docs/subdocs.html). Add a menu property to your Restaurant schema that contains an array of MenuItem documents.
