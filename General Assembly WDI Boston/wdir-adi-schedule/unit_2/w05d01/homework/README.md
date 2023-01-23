# Express Practice

---
Title: JS Express & Routes Practice<br>
Type: Homework<br>
Creator: lost in the mists of time<br>
Heavily adapted by: Kristyn Bryan, Thom Page, Jerrica Bobadilla, Karolin Rafalski<br>
Competencies: Javascript, Express, Routes, Node<br>
Prerequisites: Javascript <br>

---

## Learning Objectives
* Practice setting up express applications.
* Practice creating custom routes.
* Practice using parameters from a request.


# Setup

In the `homework` directory for today, create a Javascript file `server.js`. Write your answers inside this one js file.


# Express

* `npm init`. You should receive a `package.json`.

Install express. `npm i express`. Check your files.
  - _Remember:_ If you have an older npm version below 5.0.0, you need to type `npm install express --save` instead! Refer back to your [notes](https://git.generalassemb.ly/Web-Development-Immersive-Remote/WDIR-Outrun/blob/master/unit_2/w04d05/instructor_notes/INTRO_TO_EXPRESS.md) if you need to be reminded of the differences between version 4 and 5  

:elephant: _Hint_: You can check to make sure your installation was successful in one of the following places:

- Your `package.json` file should have `express` listed in the dependencies.
- You could also check in your `node_modules` folder to see an`express` folder.
- Require `express` and set the `app`. (look back to the markdown from today if you need more help on how to do this).
- Tell the server where to listen for requests (the port).


## Greetings

2. Make a route `'/greeting'` that sends a generic greeting to the screen like "Hello, stranger".

3. Give the `greeting` route a param `/:name`

4. When hitting the route, the page should display a message such as "Hello, <name>", or "What's up, `<name>`", or "`<name>`! It's so great to see you!" (ex. hitting `'/greeting/Jimmy-boy'` should display `Wow! Hello there, Jimmy-boy` on the page).

&#x1F534; **Commit** <br>
<hr>
"Greeting express application created."
<hr>

## Tip Calculator

2. Your app should have a route of `'/tip'` and it should expect *2 params*. One should be `total` and one should be `tipPercentage`.

3. When hitting the route, the page should *display how much your tip will be* based on the total amount of the bill and the tip percentage. (ex. hitting `'/tip/100/20'` should display `20` on the page).

&#x1F534; **Commit** <br>

<hr>
"Tip Calculator express application created."
<hr>


## Magic 8 Ball

2. Create a route of `'/magic'` that should expect a phrase in the URL that ask the Magic 8 ball a question.

3.  So if the user hits that route and asks a question of "Will I be a Millionaire" (ex. `'/magic/Will%20I%20Be%20A%20Millionaire'`) he should have return to him his question AND a random Magic 8 ball response (see the array below) on the  screen.

4. We can't use spaces in the url, so we use `%20` to express a space in the url.

5. So if the user hits that route and asks a question of "Will I be a Millionaire" he should get his question asked and a random Magic 8 ball quote on the  screen.
- Send the magic 8 ball response back between html `<h1>` tags
- Use this array of Magic 8 ball responses.....

```
["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
```

&#x1F534; **Commit** <br>
<hr>
"Magic 8 Ball express application created."
<hr>



# Hungry for more?

## Fibonacci

1.  Add `Fibonnaci` as a comment in your application.

2. Create a route 'fibonacci'

3. This route will take one param, the number we will operate on.

4. If the number param is not a [fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number), print out "I can tell this is not a fibonacci number."

5. If the number is a Fibonacci number print out "Very good. It is Fibonacci."

&#x1F534; **Commit** <br>
<hr>
"Fibonacci."
<hr>

## Request

Looking for something advanced that we haven't covered? How about getting your server to communicate with another server on the web. You will have to look through documentation to get this working.

There are more modules than just `express`. Let's look at one called `request` that can make http requests of its own.

### request

Use a module called `request` to make an http request to a third-party API.

* Look on the [npmjs](https://www.npmjs.com/) website to find documentation for a module called `request`

* Go to the [jservice.io](http://jservice.io/) website to find documentation on the jservice api endpoints. This API will send JSON as a response. If you go to `http://jservice.io/api/random` in your browser, you'll see some JSON.

Something like this:

![](https://i.imgur.com/n82vCvO.png)

* Use `request` within node to make a request to `jservice.io` and get a random trivia question and log the JSON in terminal.

* Use `express` to make a route that will display a random trivia question and its answer (only the question and the answer) in the browser. _Hint_ is the JSON really a Javascript object? Or is it a string?

* Make a route that will deliver jservice results for one of either the clues, random, categories, category API endpoints, depending on user input.

&#x1F534; **Commit** <br>
<hr>
"Request"
<hr>


## HackerRank

Sign up for [HackerRank](https://www.hackerrank.com/). Solve a few of the problems (this will help get you prepared for interviews! A lot of companies use this site for pre-screening interviews.). Some companies use hackarrank as part of an interview process, so getting familiar with the interface can be a good move
