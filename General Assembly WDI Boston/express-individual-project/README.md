# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #3: Building An API Using Express

## Overview

While your last project taught you how to get started with Ruby, SQL, & Ruby on Rails, this project you'll be building something exciting with **Express & Mongo.**

## Technical Requirements

Your app must:

* **Use Mongo & Express** to build an API and a front-end that consumes it
* **Create an API using at least 2 related models**, one of which should be a user
* Include **all major CRUD functions** in a **RESTful API** for at least one of those models
* **Consume your own API** by making your front-end with HTML, Javascript, & jQuery
* **Add authentication to your API** to restrict access to appropriate users
* **Craft thoughtful user stories**
* Layout and style your front-end with **clean & well-formatted CSS**
* **Deploy your application online** so it's publicly accessible

## Necessary Deliverables

* A **working API**, hosted somewhere on the internet.
* A **front-end app that consumes your API**, hosted somewhere on the internet.
* **At least two Git repositories** (front-end and back-end) **hosted on Github**, with frequent commits dating back to the _very beginning_ of the project.
* The `README.md` file inside your _**front-end**_ repo should have:
    * A short description of your application.
    * A brief explanation of the **technologies** (Node modules, Express middleware etc) used.
    * A couple of paragraphs detailing the **general approach you took**.
    * Notes on any **unsolved problems** or **major hurdles** you had to overcome.
    * **Installation instructions** for any dependencies.
    * A link to your **user stories** – who are your users, what do they want, and why?
    * A link to your **ERD** - what data models does your app use?
    * A link to your **wireframes** – sketches of major views / interfaces in your application.
    * A link to the deployed front-end app.
    * A link to the repo for your back-end.
* The `README.md` file inside your _**back-end**_ repo should have:
    * A short description of your application.
    * A **catalog of routes (paths and methods)** that the API expects.
    * A link to the deployed back-end app.
    * A link to the repo for your front-end.

## Getting Started

Eager to get moving? Here are some good resources that you might want to refer back to.

* **[Express JS](http://expressjs.com/)**
* **[MongoDB](https://www.mongodb.org/)**
* **[Getting Starts with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)**

Some other suggestions and best practices:

* **Don’t hesitate to write throwaway code** to solve short term problems.
* **Read the docs for whatever technologies / frameworks / API’s you use**.
* **Write your code DRY** and **build your APIs RESTful**.
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
* **Keep user stories small and well-defined**, and remember – user stories focus on what a user needs, not what development tasks need accomplishing.
* **Write code another developer wouldn't have to ask you about**. Do your naming conventions make sense? Would another developer be able to look at your app and understand what everything is?
* **Make it all well-formatted.** Are you indenting, consistently? Can we find the start and end of every div, curly brace, etc?
* **Comment your code.** Will someone understand what is going on in each block or function? Even if it's obvious, explaining the what & why means someone else can pick it up and get it.
* **Write pseudocode before you write actual code.** Thinking through the logic of something helps.

# The Prompts

Each student will be assigned one of the following projects to complete. Though the broad brush-strokes are laid out for you here, the details are up to you, so feel free to get as creative as you like!

Note: As in Project 2, _**only shoot for Reach Goals once you've satisfied the core requirements**_.

## Bloggy

Build a blog engine! Your app must allow non-technical users to write blog posts. When a visitor visits your site, they should see content. When a user logs in, they should see a dashboard that lets them create and edit new posts. Blog posts should have comments.

**Reach Goal**: Use content-editable to make your blog posts "live-editable". When a logged-in user clicks on a post or a post title, the content should become editable. When the user is done, they should be able to submit changes to the server or cancel their edits.

## Tasker

Build a todo-list app! Your app should allow a user to maintain private todo lists sorted by project. Todo entries should have optional notes associated with them. Todo entries should be completable and deletable.

**Reach Goal**: Give todo entries due dates. Todo entries that are due or overdue should be styled differently, and should float to the top of the list. Give todo entries hashtags, and allow users to filter the view of their tasks based on tags.

---

# Feedback

Your instructors will give you a total score on your project as an aggregate across all feedback categories:

  Score | Expectations
  ----- | ------------
  **0** | _Does not meet expectations._
  **1** | _Meets expectations - good job!_
  **2** | _Exceeds expectations, you magnificent creature, you!_

This will serve as a helpful overall gauge of whether you met the project goals. But more important than your overall score is your feedback, particularly in individual categories - this will help you identify where to focus your efforts for future projects.

Below are specifics on each category, along with examples of what `0`, `1`, or `2` might look like.

## Workflow

### __Planning__

Did you create user stories, wireframes, and an ERD before you started writing code? Did you create (and follow) a schedule to keep the project on track?

| Score | Description |
|:-----:|:------------|
| 0 | No planning documents present. |
| 1 | Basic planning documents (wireframes, simple user stories, and rough data model) |
| 2 | Clear, detailed planning materials that make it easy for someone to follow the entire flow of the project. Professional-level planning. |

### __Source Control__

Did your you use source control effectively to manage your code and keep track of changes?

| Score | Description |
|:-----:|:------------|
| 0 | Large, infrequent commits containing work on multiple disparate features. Merge conflicts were common and involved significant rewrites. |
| 1 | Small, regular commits that reasonably divide up the work that was done. Effective use of branching to divvy up responsibilities. Occasional merge conflicts, but fairly small and resolvable. |
| 2 | Sophisticated use of branching and merging for managing different features. Merge conflicts were minimal to non-existent. |

## Deliverables

### __Technical Requirements__

Does your project meet all the technical requirements outlined above? Does it run?

| Score | Description |
|:-----:|:------------|
| 0 | App does not run on localhost, or runs but is missing significant features specified above. |
| 1 | App meets most core requirements and, the back-end has been deployed (in some form) to Heroku. |
| 2 | App meets **all** core requirements _and_ achieves some stretch goals. |

### __Software Design/Problem Solving__

How did you break up the functionality of your application? Do the solutions you came up with make sense, from the perspective of industry best practices? How well can you defend the choices you've made?

| Score | Description |
|:-----:|:------------|
| 0 | Little to no separation of concerns on the front-end. Poor choice of models and model relationships on the back-end. |
| 1 | Some separation of concerns on the front-end. Reasonable choices of models and relationships. |
| 2 | Clear separation of concerns on the front-end. Data models and model relationships are well-chosen for the problem at hand. |

### __Code Clarity__

Did you follow code style guidance and best practices covered in class, such as spacing and semantic naming? Did you comment your code as your instructors have in class?

| Score | Description |
|:-----:|:------------|
| 0 | Lots of missing semicolons in the JavaScript. Poor variable naming. Improper indenting _anywhere_. Excessive comments in the finished app. |
| 1 | Code is semantically correct. Naming isn't great, but is reasonable. Small number of select comments. |
| 2 | Code is extremely readable. Comments may be present, but are almost unnecessary because of how clear the code is. |

### __Creativity__

Did you add a personal spin or creative element into your project submission? Is the finished product something of value to the end user, in addition to being functional (not just a login button and an index page)?

| Score | Description |
|:-----:|:------------|
| 0 | App is very basic, and features very little creativity. |
| 1 | App shows some originality and inventiveness. |
| 2 | App is very novel because of its (a) approach, (b) UI, or (c) some other factor. |
