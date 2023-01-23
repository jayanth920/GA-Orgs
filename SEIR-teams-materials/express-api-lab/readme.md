[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Express API Lab

For this lab, you will be creating a backend for a completed frontend
application. You will be working on an app called "GAphy" which will display
a bunch of Gifs.

![](images/gaphy.png)

The frontend application has full CRUD functionality, your job is to create the
backend code to make it functional!

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Fulfill the listed requirements.

Build out your backed in the `backend/` directory.

## Requirements

You must create an API that runs at `http://localhost:3000/gifs`. You must have
a few different routes:

* GET `/gifs` which will list out all gifs
* POST `/gifs` which will add a new gif and return a list of all gifs
* PUT `gifs/:gifId` which will update a gif and redirect to the list of all gifs
* DELETE `gifs/:gifId` which will delete a gif and redirect to the list of all gifs

You should have your database set up to store a collection of gifs. Your model
should have two attributes:

* a `name` for the name of a gif
* a `url` for the url of the gif

If these are named differently, you will have to change the frontend!

You should also set up a seed file to load some default gifs into your database.
We recommend using the Giphy site to get gifs. Use the full URL that has the
`.gif` file extension (e.g.
"https://media.giphy.com/media/3o6ozBUuLfzTCngAFi/giphy.gif").

### Required Planning - Create a Request-Response Cycle Diagram
In your breakout group, take about 30 minutes to co-create a visual representation 
of the request-response cycle for your Gaphy app based on the requirements above. 

You can use [the 
diagram](./request-response-cycle-example.png) of the book-e-json back end we created together 
in class as an example.

You MUST complete this step before you start writing any code. Use your diagram 
as a guide during the coding process.

### Tips for Getting Started

* To start, do a codebase review of the repo.
* You'll want to set up all your backend folders and files (think: `db` folder, `index.js` file, etc.). 
* You'll also want to run `npm init` to create a `package.json` file to manage dependencies (e.g. `express`).
* Set up routes in a controller.
* Once you have your back end running on `http://localhost:3000/gifs`, open `index.html` on the front end to test your routes via the frontend buttons.

**You shouldn't need to edit the front-end code.** After testing your backend
and frontend together, you may have to modify and fix your backend.

## Bonus

* Deploy your backend to Heroku and frontend to GitHub pages.
* Add tagging functionality.
* Add another model to the API.

## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
