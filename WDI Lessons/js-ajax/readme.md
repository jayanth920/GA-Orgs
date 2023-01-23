# AJAX and APIs

## Learning Objectives - Ali

- Explain what an API is and how to use one
- Describe AJAX and how it lets us build rich client-side applications
- Render new HTML content using data loaded from an AJAX request.
- Perform GET, POST, PUT, and DELETE requests to an API to modify data.

## Framing (5 minutes, 0:05)

Over the past few weeks we've learned how to build our own full-stack applications complete with front-end, back-end, and the ability to store and manage data. Yet, for the most part, we have been limited to just the data and functionality that we, ourselves have been creating. 

Today, we're going to learn how to request information from third-party databases, and how to make our applications more dynamic by making it so our application doesn't need to refresh the page to make a request to an API server!

## Turn & Talk (10 minutes, 0:15) - James

> 10 minutes: 5 min T&T, 5 min review

[Open up Google Maps in your browser](https://www.google.com/maps). As you interact with the web app, consider the following questions:

1. How many times do you see the page refresh?
1. When you request new data (i.e. by searching for a location), does the page refresh? Does the Google Maps app get data from a server?

## What is an API (15 minutes, 0:30) - Ali

**API** stands for "Application Programming Interface" and is a way of describing software design. At the highest level, an API is any application with a set of instructions for how programmers can interact with it. The DOM is actually an example of an API.

When we're talking about the web (and web APIs), we're generally talking about an application that we interact with through it's routes. However, requests to an API's routes won't respond with views, they'll respond with data.

### API Data - James

An API will receive a scripted request and send a response. But what makes an API different from a full-stack application, is that an API won't render views, it'll just send back data. That data will generally be in one of two forms: XML or JSON.

#### XML

**XML** stands for "eXtensible Markup Language" and is the granddaddy of serialized data formats (itself based on HTML). XML is fat, ugly and cumbersome to parse. It is increasingly the less common of the two formats you'll encounter. It is still a major format due to its legacy usage across the web. You'll probably always favor using a JSON API, if available.

XML looks like this:

```xml
<users>
  <user id="23">
    <name><![CDATA[Bob]]></name>
  </user>
  <user id="72">
    <name><![CDATA[Tim]]></name>
  </user>
</users>
```

#### JSON

**JSON** stands for "JavaScript Object Notation" and has become a universal standard for sending and receiving data across the web. It is light-weight, easy-to-read and quick to parse.

JSON looks like this:

```json
{
  "users": [
    {"name": "Bob", "id": 23},
    {"name": "Tim", "id": 72}
  ]
}
```

#### What is Serialization?

All data sent via HTTP is sent as strings. Unfortunately, what we really want to pass between web applications is **structured data** (i.e., arrays and hashes). In order to do so, native data structures are **serialized**: converted from a javascript object into a string representation of the data. This string can be transmitted and then parsed back into data (de-serialized).

### Working with an API - Ali

APIs can be either public or private. If an API is public, anyone can access the data behind it. If an API is private, then you'll need to get a password (called an API Key) or go through some other form of authorization before you can access data through that API.

Here is a good list of [Free Apis](https://github.com/toddmotto/public-apis)

We'll start by exploring a public API: [PokéApi](https://pokeapi.co/)

#### You do: PokéApi (10 minutes, 0:40) - James

> 10 minutes

For the next 10 minutes, explore the PokéApi. Remember that web APIs take requests for data through the URL.

1. How do you get data for all Pokemon?
2. What about for a specific Pokemon?
3. How do you get data about a specific ability?
4. How do you get data about a specific location?

Try the links out in the browser as well as on the pokeapi page.
> In order to format JSON in the browser nicely, you might need a plugin like Chrome's [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en).

## What is AJAX (15 minutes, 0:55) - Ali

**AJAX** stands for "Asynchronous JavaScript and XML".

Back in the early- and mid-1990s, the only way for a user to request new data was through the server-based request-response cycle. The user would click on a link or change some data in the UI and the whole page would reload. This was inefficient for the user and the User Experience; it was also an inefficient use of bandwidth, as an entire rendered page had to be transmitted rather than just the new or updated data.

This is where AJAX came in to play. AJAX is a way for us to make HTTP requests in JavaScript. So we can make requests to our server (asynchronously) without having to reload the page!

AJAX was first implemented in Internet Explorer as the `XMLHttpRequest` object and later adopted by Mozilla and Safari. In 2005, Gmail and Google Maps were rebuilt using `XMLHttpRequest` and a developer named Jesse James Garret wrote an article titled *"[Ajax: A New Approach to Web Applications](http://adaptivepath.org/ideas/ajax-new-approach-web-applications/)"*, where he coined the term *AJAX*.

Building apps with `XMLHttpRequest` lead to a better user experience and faster applications but it was extremely verbose and cumbersome to work with. To make it easier, jQuery implemented the `.ajax()` api, abstracting away `XMLHttpRequest` into a jQuery-like set of function calls.

More recently, WHATWG (the standards body for HTML) introduced the `fetch()` api as a browser-native implementation of AJAX similar to the jQuery api. Fetch has gained a lot of popularity in the past few years because its easy to use and doesn't require loading in jQuery.  Today we will focus on fetch for our api calls.

### We Do: Lets see it in Action - Jame

We will use Javascript's `fetch()` method to make AJAX calls to an API. The standard requests we will be making are GET, POST, PUT, PATCH and DELETE.

Let's try that out ourselves. Clone down [this repo](https://git.generalassemb.ly/ga-wdi-exercises/js-pokeapi-ajax).

In `script.js`, we will use AJAX to send a `GET` request to the Pokemon API...

```js
const url = 'https://pokeapi.co/api/v2/pokemon/7'

// fetch takes a url, and an object with a few optional parameters. 
// Ex: {method: 'POST', headers: {'Content-Type': 'application/json'}}
// The default method of fetch is a GET request
// For now all we have to pass fetch is the url
fetch(url)
  .then((res) => {
    console.log('success!', res)
  })
  .catch((err) => {
    console.log('something went wrong...', err)
  })
```

Every AJAX request needs a URL (where we're making our request), the type (or method) of our request and the dataType that we want back (JSON or XML). The default of fetch is a GET request, and we can also get away with the default headers for our GET request.

The `fetch` method uses Promises to handle the fact that making AJAX requests is asynchronous. 

### Aside: Promises & Asynchronous JS (10 minutes, 1:05) - Ali

An AJAX request is asynchronous: we'll make our request to the server and some time later will get our response. In the meantime, the rest of our code will keep running. We need some way to handle it when it's finished. We've previously handled asynchronous actions by using callbacks. The `.fetch()` method uses Promises.

You'll notice there are 2 functions *chained* onto the AJAX call. These are our **promise methods**. Promises are callbacks that may or may not happen. A promise represents the *future result* of an asynchronous operation. It's how we handle the return value of our `fetch` request.

- `.then()` - this code is run if the Promise is fulfilled
- `.catch()` - this code is run if the Promise is rejected
- `.finally()` - this code is always run, fulfilled or not

Note that .then() will be called even if we get a 404 or some other error code from our requested url. This is because the response back is still considered a fulfilled promise. The response will however include a property `ok: false` which you can use to control the flow of your code. 

Ex: 
```js
  fetch(myFavoriteUrl)
    .then(res => {
      if (res.ok) {
        console.log('celebrate!')
      }
    })
```

### The API Response - James

But how do we access the JSON object we saw in the browser before? If we use `.then()` we can log out information about the response of the page. However, we can't do much with the body of the data yet. Luckily, our response has a `.json()` method that can be called which will turn our response into json.  

Let's change our `script.js` file to incorporate this.  

```js
fetch(url)
  .then((res) => {
    return res.json()
  })
  .then((res) => {
    console.log('success!', res)
  })
  .catch((err) => {
    console.log('something went wrong...', err)
  })
```

What we have above is an example of chaining. You are almost guaranteed to have to work with chaining when dealing with AJAX or Promises. I like to short-hand the above code to something like this...

```js
fetch(url)
  .then(res => res.json())
  .then(res => console.log('success!', res))
  .catch(err => console.log('something went wrong...', err))
```

We can then dig through this response just like any other JS object to pull up the information we want. 

```js
.then(res => console.log(res.name))
```

## You Do: DOM Manipulation Using Response Data (10 minutes, 1:15) - Ali

1. Delete the HTML inside of `index.html` (though not the `<script>` tag!)
1. Add a form and a `<h1>` to your HTML. Your form should include a single input for an ID and a submit button.
1. Add an event listener to your form so that when submitted, you trigger an AJAX call to the PokéAPI to find the Pokemon with the ID from the ID form field.
1. Inside your `.then()` promise callback, set the text of your `<h1>` to be the name of the Pokemon the user searched for.

> Hint: What does `.preventDefault()` do?
> Bonus: include an `img` tag to your html and have a picture of the pokemon you search for appear on your page!

## Break (10 minutes, 1:25)

## AJAX and CRUD (60 minutes, 2:25) - James

So we've used AJAX to do an asynchronous `GET` request to an API. More often than not, 3rd party APIs are read-only. They don't want anyone updating the Pokemon! There are some APIs that you can do full CRUD on, just not for the PokeApi.

It just so happens that we at GA have built a [Tunr API for artists and songs](https://tunr-api.herokuapp.com/artists.json), where we can do full CRUD with AJAX.

To start, open your Terminal, and `cd` to your sandbox, then clone [this repo](https://git.generalassemb.ly/ga-wdi-exercises/tunr-ajax-fetch):

```bash
git clone git@git.generalassemb.ly:ga-wdi-exercises/tunr-ajax-jquery.git
```

Then `cd` into this repo, and open it on your text editor. We will be working in the `script.js` file. You should see this in the `script.js` file:

```js
const url = 'https://tunr-api.herokuapp.com/artists/'
const get = document.querySelector('.js-get')
const post = document.querySelector('.js-post')
const put = document.querySelector('.js-put')
const destroy = document.querySelector('.js-delete')

get.addEventListener('click', () => {
  console.log('GET clicked!')
})

post.addEventListener('click', () => {
  console.log('POST clicked!')
})

put.addEventListener('click', () => {
  console.log('PUT clicked!')
})

destroy.addEventListener('click', () => {
  console.log('DELETE clicked!')
})
```

We can now use `.fetch()` to make asynchronous HTTP requests to our Tunr API!

We're going to replace the code inside our four event handlers with 4 AJAX calls to our API.

You may also need to enable [this extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) on Chrome to allow for CORS.  By default, Chrome disallows cors for local files. 

### Get - Ali
Lets start with our `GET` request. This won't look too different from the one we created for the PokeApi before:

<details>
  <summary>AJAX `GET` request:</summary>

```js
get.addEventListener('click', () => {
  fetch(url)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
})
```
</details>

### Post - James
To make a post request, we'll add the method type `POST` and add a `body` sub-object. We'll also include a `headers` object to inform the api what data we are sending. 

<details>
  <summary>AJAX `POST` request:</summary>

```js
post.addEventListener('click', () => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      artist: {
        name: 'Talking Heads',
        nationality: 'USA',
        photo_url: 'https://media.newyorker.com/photos/59095466019dfc3494e9e7df/master/w_727,c_limit/Talking-Heads.jpg'
      }
    })
  })
    .then(res => console.log(res))
    .catch(err => console.log(err))
})
```

</details>

### Put - Ali
To make a `PUT` request, we need the updated data we want to store in our database. We also need the id of the artist we want to update. We'll send it to the route for the item we want to update, i.e. `https://tunr-api.herokuapp.com/artists/ID.json`.

<details>
  <summary>AJAX `PUT` request:</summary>

```js
put.addEventListener('click', () => {
  fetch(url + 21, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      artist: {
        name: 'Devo',
        nationality: 'OuterSpace!',
        photo_url: 'https://static.spin.com/files/field/image/1008-devo.jpg'
      }
    })
  })
  .then(res => console.log(res))
  .catch(err => console.log(err))
})
```

</details>

### Delete - James
Making a `DELETE` request only requires changing our method type and making our request to the artist we want to delete.

<details>
  <summary>AJAX `DELETE` request:</summary>

```js
destroy.addEventListener('click', () => {
  fetch(url + 21, {
    method: 'DELETE'
  })
  .then(res => console.log(res))
  .catch(err => console.log(err))
})
```

</details><br />

**NOTE:** You can find the solution to this exercise [here](https://git.generalassemb.ly/ga-wdi-exercises/tunr-ajax-fetch/tree/solution)!

## Closing (5 minutes, 2:30) - Ali

JavaScript developers often need to perform CRUD functionality to/from an API. Today we've used fetch to do this, but there are other ways to do this as well. XMLHttpRequest used to be the only way to do this.  Then the JQuery Method `.ajax()` became popular. Below we have included examples using these other AJAX methods as well as information about API Keys that many APIS require. 

-------

## Bonus

### API Keys

[Read More](/apiKeysExercise.md)

### Fetch, jQuery, XMLHttpRequest

[Read More](/fetch-jquery-xml.md)

### CRUD with Fetch

[Read More](/fetch-crud.md)

### jQuery AJAX Cheat Sheet

[Read More](/jQuery-ajax-cheatsheet.md)
