# Intro to MVC

## Learning Objectives

- Understand each part of the MVC architecture
- Explain the role each part of MVC plays in an application

## Framing
(5 minutes)

Before we get in to learning how to build web applications with Ruby, we need to take a step back and introduce an important architectural pattern: MVC.

> What might we mean when we say "architectural pattern"?

When building an application, there is an important step that has to happen that is often described as *architecting* the app. This step encompasses things like deciding on a file structure, figuring out what entities your application will have and how they relate to each other, etc. So, we describe it as *architecting*.

Just like with buildings, there are common ways of architecting an application. This goes back to the idea of "Convention over Configuration" that we've talked about previously. Using a common convention for the architecture of our application lets us get started sooner and onboard other developers quickly.

The application architecture we're learning today is one of the most common. It's called MVC, which stands for **model**, **view**, **controller**.

## Why MVC?
(5 minutes)

What makes MVC so powerful as an architectural pattern is the idea of [Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns).

<details>

<summary>What is Separation of Concerns?</summary>

For any given feature of an application, we'll have multiple things we need to do to build that feature out: persist the data for that feature, present the data for that feature, write some business logic to control how the feature works. Each of these can be considered a separate **concern**: presentation, persistence, business logic. Separating these makes them easier to build and write, maintain or change. If we want to change how we're presenting some data, we can do so by just changing the presentation and it wont affect the persistence or business logic.

</details>

## MVC In Action
(20 minutes)

Lets say we're building a hypothetical application for our client, Beyonce. This application will let her fans buy and sell second-hand merchandise. We'll call it eBae.

Specifically, we need to build out the part of the application that will let a user post a new item for sale. To do so, we need to know what data we have about a given item, how to present an item and how we can control the data and it's presentation through some business logic.

These map directly to the three parts of MVC:
1. Model - where we describe the data of a feature
2. View - where we present the data for a feature
3. Controller - where we compose our data and it's presentation through some business logic

For the feature we need to add to eBae, our Model, View and Controller would break down like this:

### The Model
The model is where we define the data for our feature. This is very closely related to Domain Modelling and ERDs.

If we were building an application for a library, we would have a model for a book, an employee, a member. Each of these would contain the definition of any attributes the entity has. For our eBae application, the model that we would need to define is for an Item that a user is selling - it may have a description, a seller, and a starting bid price.

### The View
The view is what the user sees and interacts with (the HTML and CSS that get's rendered in the browser).

Each Model can have a couple of different views. In MVC there are some conventions around common views:
  - a list/index view, where we show every instance of a model
  - a show view, where we see a single instance of a model
  - an edit view, where we can update a single instance of a model
  - a new view, where we can create a new instance of a model

In eBae, we need to build out a couple of views:
  - a view to show every item that is for sale (the list/index view)
  - a view for a single item for sale (the show view)
  - a view for a seller to edit an item they've posted for sale (an edit view)
  - a few for a seller to post a new item for sale (a new view)

### The Controller
The controller is where we knit our models and views together. It is where our business logic will live and we'll compose our views and models together.

In eBae, a user will see a new view that will display a form for them to fill out to post a new item for sale. That form will need to be processed - that's where our controller comes in. The controller will take that data and create a new Item from our Item model and save it to the database. Then, when another user wants to see that item, they'll visit the show view. When they do, the controller will use the model to pull the data for that specific item and render our show view.

## Turn And Talk
(5 minutes)

Turn to your neighbor(s) and review the following questions:
1. What is MVC? What does it stand for? What are the different parts of MVC?
2. For each part of MVC,
  - what is it's concern?
  - How does it interact with the other two parts?


