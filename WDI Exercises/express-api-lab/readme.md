# Express API Lab

For this lab, you will be creating a backend for a completed frontend application. You will be working on an app called "GAphy" which will display a bunch of Gifs. 

![](images/gaphy.png)

The frontend application has full CRUD functionality, your job is to create the backend code to make it functional!

**Objective:** You must create an API that runs at `http://localhost:3000/gifs`. You must have a few different routes:

* GET `/gifs` which will list out all gifs
* POST `/gifs` which will add a new gif and return a list of all gifs
* PUT `gifs/:gifId` which will update a gif and return a list of all gifs
* DELETE `gifs/:gifId` which will delete a gif and return a list of all gifs

You should have your database set up to store a collection of gifs. Your model should have two attributes:
* a `name` for the name of a gif
* a `url` for the url of the gif
If these are named differently, you will have to change the frontend!

You should also set up a seed file to load some default gifs into your database. We recommend using the Giphy site to get gifs. Use the full URL that has the `.gif` file extension (e.g. "https://media.giphy.com/media/3o6ozBUuLfzTCngAFi/giphy.gif").

## Installation
* Fork the repository
* Clone the repository
* Create a directory called `backend` which will hold your backend code
* At the end, submit a pull request with your completed code

## Tips for Getting Started

* To start, you'll want to set up all your back-end folders and files (think: `db` folder, `index.js` file, etc.).
* You'll also want to `npm init` to create a package.json file to manage dependencies (e.g. express).
* Set up routes in a controller.
* Once you have your back end running on `http://localhost:3000/gifs`, open `index.html` on the front end to test your routes via the front-end buttons.

**You shouldn't need to edit the front-end code.**

## Grading

Your project should have:
* CRUD routes on the application's backend.
* a connected database, with a fully functional model.
* Fully functional frontend code.
* Modularized Express code.

## Notes on the Front End
* This app uses JavaScript for dom manipulation.
* A CSS Framework called materialize is used for the modals. Here JQuery is used to turn them on and off.
* [Axios](https://github.com/axios/axios) is used for AJAX requests.
* Update appears when you click the grey button at the top.
* Edit and delete appear when you click on an image. 

## Bonuses
* Deploy your application to Heroku and GitHub pages.
* Add tagging functionality.
* Add another model to the API. 

## Plagiarism

Take a moment to re-familiarize yourself with the [plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md), specifically on using work you find online and on work you do with other students.

We give assignments like this to give you the opportunity to review the material in class in a practical manner. By building something using what you've learned in class, you'll be reviewing the material and gaining a deeper understanding of it.

These assignments are similar to those you can expect when applying for a job, either in the form of a take-home coding challenge or an in-person technical interview. So it's important that you put in your best effort now and challenge yourself to do this assignment on your own.

If you are struggling with the material, that's alright! That's why you're here. First, try reviewing the previous lessons and exercises. Go easy on yourself, you're still learning! If you're still struggling after that, come to office hours and ask an instructor for help. They're here to help you!

Don't copy and paste from another source or another student or the solution branch. That's just going to put you at a disadvantage when you're interviewing for a job
