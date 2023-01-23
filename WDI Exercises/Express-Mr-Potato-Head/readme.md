# Express Mr. Potato Head

![](https://images-na.ssl-images-amazon.com/images/I/51J5hkqkjQL._SX355_.jpg)

## Framing

The goal of this lab is to get you more familiar with Express and - in particular - the many trade offs and design decisions you can make when using Express to build a full-stack web application.

One of Express' strengths as a web framework is that it is extremely flexible and unopinionated: you build your app however you want. The flip side of that is that you have to make a lot of decisions yourself, which can lead to some interesting results:

![](https://static.twentytwowords.com/wp-content/uploads/Misshapen-Mr-Potato-Head-685x513.jpg)

This lab is will have you review and work through the codebase for 3 different Express applications ranging from small to large with 1 extra bonus application. For each application, you will answer a series of questions in an Issue on this repository.

## Building Applications with Express

Three of these apps are pulled from the book [Pro Express](http://proexpressjs.com/) and one was built by your instructors. They range in size from small to large.

> Note, you may or may not be able to get these applications up and running locally. The point here is to read through and review the codebase, so getting the app running locally is not a requirement.

> Note, also, that these applications are not necessarily built in the way that we've taught you to build applications with Express - there will be similarities and differences. Part of this exercise is to get you to identify and start to understand those differences and similarities.

### #1: [Storify Gallery](https://github.com/azat-co/sfy-gallery)

The Storify Gallery app pulls user stories from the [Storify API](http://dev.storify.com/api/summary) and displays them in an Instagram-like story wall. This is the kind of application a WDI student might build as a homework assignment.  

### #2: [To Do app](https://github.com/azat-co/todo-express)

The To Do app is a full CRUD (create, read, update and delete) to do list application. It is relatively large - around the size of an application a WDI student might build for a lab.

### #3: [Express Twitter](https://git.generalassemb.ly/ga-wdi-exercises/Express-Twitter)

The Express Twitter application is a Twitter clone built with Express, Passport, MongoDB and Mongoose (i.e. the tools we taught you). It is roughly equivalent to the size of an application a WDI student might build for a project.

### Bonus: [HackHall](https://github.com/azat-co/hackhall)

HackHall is the largest of the three applications and closely resembles an application that a medium-sized startup or company might build and maintain. It includes a lot of advanced features, like

- an integration with the Stripe payment system
- an integration with SendGrid for sending emails to users
- a test suite from following test-driven development
- deployment and build files (the `Procfile` and `Makefile`)
- multiple routers and models
- complex relationships between models

## Submission

Create a new GitHub Issue on this repository and work through the prompts provided in the Issue Template. Your issue is due by the end of this lab block.

It may be helpful to read through [this markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), as you will need to write your submission in markdown.