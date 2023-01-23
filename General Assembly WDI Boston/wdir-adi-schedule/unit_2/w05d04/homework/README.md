![](https://git.generalassemb.ly/Web-Development-Immersive-Remote/WDIR-Outrun/raw/master/ga_cog.png)

<hr>

Title: Pokedex <br>
Type: Homework<br>
Creator: Thom Page WDIr-Panthalassa <br>
Adapted by: Cathleen Wright, Kristyn Bryan<br>

<hr>


# Make a POKEDEX

![](https://i.imgur.com/8UO1Y9f.png)

> Your mission is to be the very best, like no one ever was, at making a Pokémon manager (a Pokédex).

All you are given is a `pokemon.js` file that has all the raw data for 151 Pokémon (it's over 50,000 lines of code). You can render this as JSON in your browser. If you decide to check it out in your text editor, don't click on or open this file unless you are prepared to wait a minute or so for it to load. It is a huge file.

**It is up to you how you build your app**, in what order you want to do things, what kind of design flow your app will have, where you put your delete button, etc, and what parts of the Pokémon data your pages will display.

There are a few requirements to keep in mind:

## MVP

The app will:

  - display a bunch of Pokémon images on the index
  - have separate show pages for each Pokémon
  - have the ability to add a new Pokémon
  - have the ability to edit existing Pokémon
  - have the ability to delete Pokémon

# Setup for Tonight

Work inside the given `pokedex` folder

Ideally, your app should follow the MVC format of *models*, *views*, and *controllers* (these are your routes for now).

However, note you don't actually need a _controllers_ folder for now since all your routes will be in your `server.js` file

## Routes

The app will use RESTful Routes:

- Index
  - GET `/pokemon`<br>
- Show
  - GET `/pokemon/:id`<br>
- New
  - GET `/pokemon/new`<br>
- Edit
  - GET `/pokemon/:id/edit`<br>
- Create
  - POST `/pokemon`<br>
- Update
  - PUT `/pokemon/:id`<br>
- Destroy
  - DELETE `/pokemon/:id`<br>


## Starter Code

```
// server.js

const express    = require('express');
const app        = express();

const Pokemon    = require('../models/pokemon.js');

// INDEX
app.get('/', (req, res) => {
	res.render('index.ejs', { data: Pokemon });
});

// SHOW
app.get('/:id', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] });
});

```

_Just a reminder that as of Express 4.16 we no longer need to install and require body-parser to see the body of a request. For your homework you can use this for your middleware instead of installing and requiring body-parser:_

```javascript
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
```

## Data

### Notes on the Pokémon data and what to display

The `pokemon.js` file is massive and there is a ton of data to parse through. You need not display all of it on your pages. On your index page, you can just render the images.

Here are suggestions for what to display on your Pokémon's show page:

- The pokemon's name
- The image of the pokemon
- An unordered list of the Pokemon's types (eg. water, poison, etc).
- The pokemon's stats for HP, ATTACK, and DEFENSE.


# Commits

The order of your commits this time does not matter, but refer back to the MVP to make sure that you're meeting all of the requirements. Make your commits as you complete the work.

Examples:
<hr>
** Commit your work.** <br>
"Server is working and displays a plain index page"
<hr>


<hr>
** Commit your work.** <br>
"Displays a bunch of Pokémon images on the index".
<hr>

<hr>
** Commit your work.** <br>
"Has separate show pages for each Pokémon".
<hr>

<hr>
** Commit your work.** <br>
"Has the ability to add a new Pokémon".
<hr>

<hr>
** Commit your work.** <br>
"Has the ability to edit existing Pokémon".
<hr>

<hr>
** Commit your work.** <br>
"Has the ability to delete Pokémon".
<hr>

<hr>
** Commit your work.** <br>
"The app uses RESTful routing, all seven RESTful routes".
<hr>

<hr>
** Commit your work.** <br>
"View templates are complete".
<hr>

# Hungry for More?

## Style your App!

- Use static assets

<hr>
** Commit your work.** <br>
"Static assets included - CSS".
<hr>

- Make your app look and act nicely with static assets (set up a public folder and add some css, js)-- try using jQuery.

## Need some style inspiration?
These are screenshots from what other students have done to their Pokedex:

<details>
<summary>Example 1</summary>
	
![](https://imgur.com/MZ361IP.png)

![](https://imgur.com/65HTgw1.png)
</details>

<details>
<summary>Example 2</summary>

![](https://imgur.com/XsaaJ2x.png)

![](https://imgur.com/zppz3ev.png)
</details>

<details>
<summary>Example 3</summary>

![](https://imgur.com/ZRFfwgR.png)

![](https://imgur.com/gEOi0KX.png)
</details>


## Really, Really Hungry

Look into [cURL](https://curl.haxx.se/) to test your routes.  

You can test your post and put routes (send data to it) without going through the hassle of first creating a view with a form. You can bypass the form and take it out of the equation.

We can use cURL to send data to our routes in the Terminal.

[Instructor Notes on Testing](https://git.generalassemb.ly/Web-Development-Immersive-Remote/WDIR-Space-Ghost/blob/master/unit_2/w05d02/instructor_notes/TESTING.md)

[Practice using cURL with this activity!](https://git.generalassemb.ly/Web-Development-Immersive-Remote/WDIR-Space-Ghost/tree/master/unit_2/w05d02/student_labs/afternoon)
