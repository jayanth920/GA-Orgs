![](../../../ga_cog.png)

---
Title: Poke Express <br>
Type: Homework<br>
Duration: 2:00 - 4:00<br>
Original creators: WDI-Lettuce, WDIR-Panthalassa, Thom Page<br>
Adapted by: Kristyn Bryan, Karolin Rafalski, Sonyl Nagale <br>
Competencies: Practicing Index and Show pages<br>
Prerequisites: Javascript, Express, Routes, Node <br>

---

# POKE EXPRESS

![pokemon](https://i.imgur.com/rRKtN1B.jpg)

Make a Pokemon app that displays data inside server-side rendered views.

## App

User Stories
- When a user goes to the `/pokemon` route they will see an `index` of pokemon: the names of each pokemon rendered to the page.
- When a user clicks on the name of the pokemon, they will be taken to that pokemon's `show` page, and will see the pokemon's name and image.


### Structure


**In terminal:**
- inside your homework folder:
  - `mkdir pokemon_app`
  - `cd pokemon_app`
  - `mkdir views`
  - `touch views/index.ejs`
  - `touch views/show.ejs`
  - `mkdir models`
  - `touch models/pokemon.js`
  - `touch server.js`
  - `npm init`
    - follow `npm init` prompts
    - Does npm init create a file? If it does, where does it create the file? What is the name of the file?
  - `atom .`
- <details><summary>Approximate File Structure</summary>

  ![file structure image](https://i.imgur.com/GdpBW9j.png)
  
  **IMPORTANT! This image is a rough outline for you to double check which main folders should be nested or on the same level. If you just have one file, it could be argued that you don't need a folder for it. But as your apps grow, you'll need to get more organized and definitely use folders. Be consistent and adjust your routing, as needed. 

</details>


<hr>
&#x1F534; Commit: <br>
All my files are created"
<hr>

### Install NPM Packages

**In terminal:**
- Make sure that you are on the same directory level as your `package.json` (why?)
- `npm i express ejs`
- check your `package.json`
- <details><summary>package.json screenshot</summary>

  ![package.json image](https://i.imgur.com/JiEa7M2.png)

</details>

<hr>
&#x1F534; Commit: <br>
"All my npm packages are added"
<hr>


### Set up your server

-**In your `server.js` file, set up your server**
   - require express
   - set `express()` to a variable
   - set a variable of `port` to `3000`
   - set your app to listen to the port and include a `console.log()`, so that you can tell when your server is running
   - include a get route `/` that will `res.send('Welcome to the Pokemon App!');` so that when you got to `localhost:3000`, you will see `Welcome to the Pokemon App!`
- **In terminal**
  - `nodemon` or `nodemon server.js` (if you set your up your `package.json` to start `server.js` you do't need to put it after `nodemon` )
      - **GOTCHA!** : `nodemon` will only work if you run it from the same location as your `package.json`
- **In the browser**
   - go to `localhost:3000`
   - check that you have your `Welcome to the Pokemon App!` message displaying

<hr>
 &#x1F534; Commit: <br>
 "My server is set up and running"
<hr>



### Set up your _'database'_
- You have created a file called `pokemon.js`
- Inside of this file, put the following array of pokemon objects. This is your 'database' for tonight's homework

```
const pokemon = [ {name: "Bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"},
				{name: "Ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur.jpg"},
				{name: "Venusaur", img: "http://img.pokemondb.net/artwork/venusaur.jpg"},
				{name: "Charmander", img: "http://img.pokemondb.net/artwork/charmander.jpg"},
				{name: "Charizard", img: "http://img.pokemondb.net/artwork/charizard.jpg"},
				{name: "Squirtle", img: "http://img.pokemondb.net/artwork/squirtle.jpg"},
				{name: "Wartortle", img: "http://img.pokemondb.net/artwork/wartortle.jpg"}
			  ];

```
- Set up your 'database' so that it can be exported to your `server.js` and then be required by your `server.js`
- set this 'database' to a variable called `pokemon` in your `server.js` file
- create a get route `/pokemon` that will `res.send(pokemon)`, which will display your pokemon data as json in the browser

<hr>
&#x1F534; Commit: <br>
"Connected my database, can see json in the browser"
<hr>

### Set up your index view

- Instead of displaying json at your `/pokemon` route, you should serve the `index.ejs` file you created that will display your pokemon
- You will have to set up your ejs file
  - Start with your html boilerplate code
  - Add an `<h1>` that describes this page, i.e. 'See All The Pokemon!'
  - Add a `<style>` tag so you can write some CSS directly in your html file. [More info](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) - In the Hungry for More section - you can work on properly linking a CSS file. 
  - Add a background-color and text color to the body, inside your `<style>` tag to be sure it is working as expected. Example:
  
```
 
<style type="text/css">
  body {
    color: blanchedalmond;
    background-color: steelblue;
  }
</style>

```
- Change your `/pokemon` route to `res.render` your `index.ejs` file
- In your browser, go to `localhost:3000/pokemon` and be sure to see your `index.ejs` view with an `h1` tag


- **Stretch step, not required** : Choose a [google font](https://fonts.google.com/) and add it to your html and inside your `<style>` tag

<hr>
  &#x1F534; Commit: <br>
  "index.ejs view rendered at pokemon route"
<hr>

### Set up your index view to show your pokemon data
- continue working on your `index.ejs` view so that you can see:
  - the name of each pokemon, as a list item, inside an unordered list
  - this list should be dynamically rendered by ejs based on your data from your 'database'

<hr>
    &#x1F534; Commit: <br>
    "I can view a list of all my pokemon in the browser "
<hr>

### Set up your show route

- Inside your `server.js`, add a new get route `/pokemon/:id`
- That will `res.send(req.params.id);`
- So, when you go to `localhost:3000/pokemon/whatever`
 - `whatever` will show up in the browser

<hr>
   &#x1F534; Commit: <br>
   "show view shows req.params.id "
<hr>


### Link your `index.ejs` to your `show.ejs`
 - inside your `index.ejs`,
   - for each pokemon, add an `<a>` tag that will have an `href` that goes to the route `/pokemon/x`, where x is the array position of the `pokemon` in the data array. This should be set dynamically with ejs
   - when you click the link you should go to your show route and the index number corresponding to the pokemon's array position should be displayed

<hr>
   &#x1F534; Commit: <br>
   "added dynamic anchor tags to index.ejs "
<hr>

### Render your individual pokemon in the show view
- copy/paste your code from your `index.ejs`  into your `show.ejs` (surely, there must be a better way; are you wondering if there is something in the hungry for more section about this?)
- change all your html code inside your `show.ejs` file's `<body>` so that 
	- your h1 tag says "Gotta Catch 'Em All"
	- add an h2 tag that will display the name of the pokemon
	- add an image tag that will display an image of the pokemon
	- add an anchor tag with the text of `back`, that will take you back to your `index.ejs` view
- update the route in the server.js to render the show view with the pokemon data

<hr>
  &#x1F534; Commit: <br>
  "created show views of each pokemon "
<hr>

### Style your app
 - Update the appearance of your app with css
 - <details><summary> Example CSS </summary>
 
    Index page:
    ![index](https://i.imgur.com/5Q5maB7.png)

    Show page:
    ![show](https://i.imgur.com/USD5KN1.png)

 </details>


 <hr>
   &#x1F534; Commit: <br>
   "styled my app "
 <hr>

</details>

# Responsive Design 

Keep learning more CSS!

- [Intro to Responsive Design](https://www.youtube.com/watch?v=BsuCBmzLf_U&index=21&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
- [Mobile First Design](https://www.youtube.com/watch?v=iQIj7Lu64M4&index=22&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
- [Media Queries](https://www.youtube.com/watch?v=GYygtVolViM&index=23&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

# Hungry for more?

1. Use EJS partials in your Pokemon app! Create a partial for the head, and include it in both your views. [Nice walkthrough can be found here (starts about 1/4 of the way down)](https://scotch.io/tutorials/use-ejs-to-template-your-node-application)

1. Style your application with Bootstrap! Or really jazz up your app by adding some hand-rolled flourishes with css animations, jQuery and more!

1. Sign up for [Code Wars](https://www.codewars.com/) and try out a challenge (or a few!) in order to keep honing your JavaScript skills!

1. Learn about express static in order to learn how to link a css file to your app (we'll be covering it tomorrow) - [read those docs!](https://expressjs.com/en/starter/static-files.html) Go ahead and dive right in! 
