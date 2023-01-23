# Project #4: Ruby on Rails - Group Project

## Overview

For your 4th project, you will be collaborating to make a full CRUD app built with a React frontend and a separate Rails API server

## Attendance

As always, there will be no attendance during project time. But as per usual please make sure you're working on your project every day, and don't forget to communicate with your partners!

- **Tuesday, June 12**: There will be Outcomes as usual at 4:30 PM EST
- **Wednesday, June 13**: Project presentation day! You're required to be in the class zoom starting at 10:00 AM EST.

## Standups

Not required, but a suggestion: consider having stand-ups with your partner every day to keep track of how your project progress is coming along. Consider the following points to talk about:

  - What did I work on yesterday
  - What am I trying to get done today
  - What is preventing me from getting this done.
  - Read more about daily scrum/stand-ups [here](/unit_3/w08d04/morning_exercise)!

## Technical Requirements
### &#x1F534; Mandatory to pass:
#### MVP - minimum viable product

* **Rails backend**: Serve a JSON API with all CRUD operations available across your models. The Rails API must be deployed online via Heroku.
	* Must have at least one model
* **React frontend**: Serve a React frontend that consumes your Rails API. The React frontend must be deployed online via Heroku.
* **Two git repositories** hosted on Github, with a link to the relevant live sites, and frequent commits dating back to the very beginning of the project. Commit early, commit often!
* At **least** one Github commit per day per member
* A **daily tracker** that all group members use (Trello, github issues, or another similar tracker)
* **A ``README.md`` file** with explanations of the technologies used, the approach was taken, unsolved problems, and notes to yourself/group members so you can come back to your project later and be able to pick up your train of thought, etc. As well as a **link to your hosted working app**

ALSO, don't forget: a **technical demonstration** of your app which:

  * Is ~5-10 minutes in length
  * All group members should speak during the presentation
  * Shows off all features of the app
  * Explains the technical details
  * Explains the technical challenges
  * Explains which improvements you might make

Additionally, we would like each group member to answer at least at least one of the following questions:

1) What went well for your group?
2) What was your groups biggest struggle?
3) What was the most useful tool that your group relied on the most
4) What was the most surprising aspect of working in a group/a thing (or things) you didn’t anticipate

Lastly, everyone should answer the following question:

1) What was one thing _I_ could have done better to benefit my group

  ---

### &#x1F535; Not mandatory:
#### Recommended features - choose any

* Configure CORS in your rails API so that **only** your frontend app can access your API
* Use Sass
* Include **two or more models**
* Include either a one-to-many or a many-to-many relationship
* Use a **third party API** with a gem
* What about using **graphs or visuals** on your data? Chart.js , D3.js
* **Include portfolio-quality styling**
* **Use a CSS framework** like skeleton or bootstrap
* **Include User Stories**
* **Include wireframes** that you designed during the planning process (uploaded to your github repo)
* **Authentication**
* **Implement React Router**
* **Implement Redux or Flux**

---

## Meetings with instructors

**Friday June 7**

Your group will meet with your dedicated project instructor for 15 minutes to get your app idea approved. Be sure to write out what features you will need to build in order to meet MVP and some stretch goal ideas.

_Your instructor will contact you to setup a meeting time for project approval_

**Before you meet with your instructor**:

   - Meet to discuss your ideas with your teammate(s) and choose one idea (remember, you can always use other ideas for your next project(s))
   - Create the project's Github repo *OUTSIDE* of the class repository.
   - Create your user stories and add them to your `README.md`
   - Write what features will meet MVP and then list out other features as stretch goals
   - Make wireframes and add them to your `README.md` (or put images and add links)
   - Create your daily tracker

## How to Submit Your Project
Your project is due on Wednesday, June 13 at 10:00 am EST. You will present your project and show your code to classmates and instructors.

:heavy_check_mark: *One* group member should fill out [this google sheet](https://docs.google.com/spreadsheets/d/1PQ0u-EbnFDnH9l9B49VocunfWWtfpEJ-rAuAnzkY2s8/edit?usp=sharing) with all information required as usual. Note that this will be the order you present!

## File Setup

- Each of you, locally, should create a new folder to house your Project_4. This folder should be outside of your class repo.
- One person should create two new Github repositories. One will be for your front end and one will be for your backend. When this person creates the new rails project this time, **don't** `--skip-git`, we actually want it to initialize git! **Don't** `rm -rf .git` from your react app either!
- Everyone should clone these two repos from Github into the new Project_4 folder that they've created.
- Everyone that cloned the repos should go inside their new local repos and create a `.gitignore` file for each one. [Here is a list of useful .gitignores](https://github.com/github/gitignore).


### Suggested Ways to Get Started

<details><summary>List of ways to get started</summary>

* **Wireframe** Make a drawing of what your app will look like on each page of your application (what does it look like as soon as you log on to the site? What does it look like once a user logs in, etc.).

<br>

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.

<br>

* Create your **user stories**

<br>

* Create a **Trello board** and break down the user stories into cards

<br>

* **Use your Development Tools** (console.log, inspector, alert statements, etc) to debug and solve problems

<br>

* Work through the lessons in class for help and inspiration! Think about adding relevant code to your application each day - you are given 5 days so that you can work on it in small chunks, COMMIT OFTEN. We will be looking at your commit dates and comments are part of your scoring.

<br>

* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.

<br>

* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.

<br>

* **Don’t be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

</details>

### Useful Resources

* **[Group Work](/projects/project_3/working_in_groups.md)**
* **[Heroku](http://www.heroku.com)** _(for hosting your project)_
* **[Writing Good User Stories](http://www.mariaemerson.com/user-stories/)** _(for a few user story tips)_
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)** _(for more insight into wireframing)_

## Where to go for help during project week

1. Seek out help online
2. Seek out help with your classmates
3. Seek out help with our class TA
  - There will not be double TA hours during project week since you'll have each other. However, the usual TA hours will be available from 7-10 PM EST
