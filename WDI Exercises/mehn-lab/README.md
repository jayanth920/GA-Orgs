# MEHN Lab

## Prompt

This is an open-ended, pair lab! You and your team mate should choose from the following domains or come up with your own. If you come up with your own, run it by an instructor first! It must, however, fulfill the following requirements:

## Requirements

### Technical Requirements

Your application should use the MEHN stack. This includes:

* **MongoDB** as your database and **Mongoose** as your ODM.
* **Express** to handle HTTP requests.
* **Handlebars** for your views.
* **Node** to run your Express server

Your app should have full CRUD functionality for at least one model. Additionally, your application should include some basic styling and navigation throughout the app.

### Working Requirements

* Both students ***must have commits on the repository***.
* Tasks must be fairly divided between each student. Leave a comment in the submission indicating each student's responsibilities.

## Bonus I
Add [Validation](http://mongoosejs.com/docs/validation.html) to the properties on your model.

### Bonus II
Add a second model to your application, which is embedded under the first model. Read the documentation on [Subdocuments](http://mongoosejs.com/docs/subdocs.html).

### Bonus III
Deploy your app to [ Heroku ](https://www.heroku.com/home).

### Bonus IV
Add authentication to your app with [Passport](http://www.passportjs.org).

## Pairs

You will be working in pairs. We will leave the group selection up to you. Feel free find a partner after the lab has been introduced.

Pair programming is a common industry practice where two developers work on the same project together. Typically, one person is the "driver" and the other is the "navigator". Throughout the lab you must switch roles.

Here are two explanations of pair-programming, it's benefits and how to do it:
1. [Pair Programming Considered Extremely Beneficial](https://content.pivotal.io/blog/pair-programming-considered-extremely-beneficial)
2. [Agile Best Practices: Pair Programming](https://www.versionone.com/agile-101/agile-software-programming-best-practices/pair-programming/)

## Domains
Pick from one of the following project ideas. If you and your partner would like to come up with your own domain, run it by an instructor first for sign-off.

### HackerNews-style link aggregation site
Users can post news links to the site where they get aggregated on the home page. Each link should have a url, title, brief description and the date it was posted. The homepage of the site should list all the most recently posted links. As a bonus, add the ability to comment on links.

### StackOverflow-style Question/Answer page
Users can post questions so other users can answer them. The most recent questions should be visible on the homepage. Each question should have a title and a description. Other users can then submit answers to these questions. 

### Recipe/Ingredients Manager
Build an app that lets users create posts for their favorite recipes (title, description, instructions, ingredients). Users can add new recipes and see recipes posted by others.

## Lab Submission

Please submit an issue to this repo by the time indicated on the course schedule with the following:

* A link to your lab repo
* A link to your deployed application (if you have one)
* The names of your group members

## Grading
You will be graded with your partner and both receive the same score. It is really important that you have roughly the same number of commits to your project!

Your project should have:

* Semantic HTML and CSS that passes validation
* A `package.json` file listing all the packages you used
* An `index.js` or `server.js` file for starting up your server
* A `views/` directory for your handlebars views and a `layout.hbs`
* A `controllers/` directory for each controller in your application
* A connection to MongoDB through Mongoose
* At least one Mongoose model
* The ability to create (C) a record of your model (a new view)
* The ability to read (R) a single record of your model (a show view)
* The ability to read (R) multiple records of your model (a list view)
* The ability to update (U) a record
* The ability to delete (D) a record
