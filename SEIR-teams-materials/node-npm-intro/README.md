[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Intro to Node and NPM

Learn about server-side JavaScript with Node and NPM.

## Prerequisites

- JavaScript
- Command line
- Have Node and NPM installed

## Objectives

By the end of this, developers should be able to:

- Identify and discuss high-level differences between server-side and client-side JavaScript
- Import and export Node modules
- Use npm to install and manage dependencies in projects and globally
- Use Node to work with the file system
- Publish an npm module to the npm registry


## Introduction

Today, we're going to embark on the next leg of our journey in learning full
stack web development. So far, we've just learned to write client-side JavaScript
that is loaded into our browsers via an HTML file. We have also used React to create
more dynamic client-side applications that run in the browser. There's another kind of
JavaScript that we have yet to learn.

If we're not writing JavaScript _for_ our browsers to run, then what exactly are
we writing it for? You may have heard that Node is server-side JavaScript, but
why and how are we concerned with servers as web developers?

### Turn and Talk

- In plain English, what does a server do?
- Have we had exposure to any servers so far? Give some examples.

## The Role of the Server

In computing, a **server** can be any program or device that provides functionality for other programs or devices, called **clients**. Every time you visit a website or use a web application, you're making a request to a _server_.  Your browser, in this case, is the _client_.  The World Wide Web is principally comprised of servers that all follow a common set of rules for communicating with clients called Hypertext Transfer Protocol or [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#Components_of_HTTP-based_systems) (more on this later).

The job of the _server_ is to **respond** to _client_ **requests**. If a server application receives a request it can't fulfill, the rules dictate that it must still provide a response. If a server doesn't respond with anything, we know that it's down or that something has gone wrong with our connection to the server.

This is the 'contract' between servers and clients: when a client makes a request, the server must respond, even if the response is that it can't perform the job that was requested. We call this paradigm [request-response](https://en.wikipedia.org/wiki/Request%E2%80%93response).  In the case of the Web, we refer to this more specifically as the _HTTP request-response cycle_.

In unit one, our use of servers was limited entirely to **web servers** that simply stored HTML, CSS, JS and media (images, video, etc.) files and sent that content to our browsers when requested.  These included our Live Server that we ran locally and the servers that Github used to make it possible to share our apps via the Web. In unit two, we also made use of third-party APIs that ran on servers independent of our web server.

Now that we'll be building our own APIs, we have to dig into how to program these types of servers.  Browsers can only understand HTML, CSS and JS, but we don't have those limitations when we are building a server application.  We can choose from dozens of languages. In this program, we'll be exploring how to do create server-based applications with JavaScript in this unit and then we'll take a look at how to do this with Python in the next.

## What is NodeJS?

NodeJS is a JavaScript runtime for building server-side applications. It's what we use when we want to program in JavaScript outside of the browser.

To make sense of this, it's helpful to understand a little bit more about what JavaScript is.  JavaScript is not owned or controlled by a single company or individual.  It's known as an _open standard_.  The standard that it is based on is called ECMAScript because it's maintained by an international standards group known as the European Computer Manufacturers (ECMA).  Within this standards organization, a committee called TC39 is responsible for creating the specifications that guide companies who build browsers and other systems that interpret JavaScript on how it should behave and what features it should have.  The committee is made up of members from across the industry (such as employees from Google, Microsoft and Apple) as well as other stakeholders.

TC39 just writes specifications, it's up to the browser companies and open source community to actually implement those standards.  This is what makes it possible for websites and web applications to work in many different browsers.  It's also why they sometimes don't work or behave differently in a specific browser &mdash; because a browser hasn't implemented a feature in JavaScript or hasn't implemented it correctly.

[Node](https://nodejs.org/), then, is just another implementation of the JavaScript specification.  It's actually based on the V8 engine that runs JavaScript in Chromium (the open source project that powers many browsers like Chrome, Opera and now Microsoft's Edge browser).

What's important about Node, though, and what makes it a little different from the browser implementations, is that it is aimed at running JavaScript in a server environment, not a browser!

That means there are some practical differences in how we write JavaScript in Node versus for a browser. It also means there is a lot of server specific functionality that will only work in Node.

### You do: Node vs. the Browser

Let's explore the similarities and differences between JavaScript in the browser and in Node. Work through
[this exercise](https://git.generalassemb.ly/sei-921/browser-server-js)

## Your First Node Application

We're going to explore working with Node and npm in our `sandbox` directory.

### Instructions

1. Navigate to your `sandbox`
1. Create a new directory called `hello-node` and `cd` into it.
1. Create a file called `index.js` and edit it in your text editor.
1. Console log 'hello world'.
1. Create an array with at least three elements, that is assignedto a variable, and console log the variable.
1. Create an object with at least two properties, that is assigned to variable, and console log it.
1. Write a DOM method like `document.querySelector()` and see what happens.
1. In your command line and enter the command `node index.js`. Make sure you're in the same directory as the file you're trying to run.

**Review Questions:**

- What does the `node` command do?
- What happens with `document`? Can we fix that?
- What if you type `node` just by itself?

## Working with Modules and Dependencies

We use npm and the `package.json` file it creates to manage our project. Most
importantly, we use it to manage **project dependencies.**

Dependencies are modules or libraries of code, separate from our application,
that our application relies on in order to function. It's a way for us to reuse
code, either written by ourselves or someone else.

The `package.json` file is used to describe details about our project - one of
those details is the project's dependencies. They're stored in a key in the file
called `dependencies`!

Here's what the dependencies in a `package.json` might look like for a project:

```json
"dependencies": {
  "bcrypt-nodejs": "0.0.3",
  "connect-flash": "^0.1.1",
  "cookie-parser": "^1.4.3",
  "express": "^4.16.2",
  "express-session": "^1.15.6",
  "hbs": "^4.0.1",
  "method-override": "^2.3.10",
  "mongoose": "^5.0.7",
  "passport": "^0.4.0",
  "passport-local": "^1.0.0"
}
```

### Aside: node_modules and .gitignore

Each of the dependencies in our project may have dependencies itself.  This is why when you look into `node_modules` directory of your projects, you're likely to see hundreds if not 1000+ modules (a typical create-react-app has 1013 node modules)!  So, we definitely don't want to have to store all these modules in Github. This is where we'll rely on `.gitignore` to make sure that Git doesn't track any of the files in the `node_modules` directory. If the files aren't tracked by Git, they can never be sync'd up to Github.

Maybe you're concerned that if our projects need these modules to run, wouldn't it be safer to put them in Github?  Fear not!  Since our `package.json` describes everything that is needed to run our projects if you (or someone else) need to reproduce the environment that an application runs in, you can clone or download it from Github and run `npm install` in the project's directory.  The install command retrieves all of the modules from npm described in the `package.json` and puts them into the `node_modules` folder.  It then updates the `package-lock.json` with all of the details about what was installed.

### Instructions

> Still in your `hello-node` directory

1. In the command line, in your project directory, run:

```sh
npm init -y
```

Use `ls` and note that we now have a file called `package.json`

```sh
npm install lodash
```

Using `ls` again we should see that `node_modules` appeared and it contains a dependency of `lodash` in it.  Additionally, we now have a `package-lock.json` file.

We don't want git to track all the node modules files. There are way too many and it bloats the size of our project.

Let's set up a new git project in this directory.

```sh
git init
```

2. Create a file called `.gitignore` in the root of your project directory.

```sh
touch .gitignore
```

3. Open `.gitignore` and type `node_modules` into it.

4. You're done!

You can put the names of any files or folders in the `.gitignore` file. They
will all be ignored. They won't be deleted from git though - you must use
`git rm` for that. For example, if you previously committed a `node_modules`
folder, adding it to `.gitignore` doesn't delete the folder. It simply stops
paying attention to it.

5. In `index.js`:

```js
const _ = require("lodash");

const variousBrownBears = [
  "Atlas bear",
  "Bergman's bear",
  "Blue bear",
  "Eurasian brown bear",
  "European brown bear",
  "Gobi bear",
  "Grizzly bear",
  "Himalayan brown bear",
  "Ussuri brown bear",
  "Kamchatka brown bear",
  "Kodiak bear",
  "Marsican brown bear (critically endangered)",
  "Mexican grizzly bear",
  "East Siberian brown bear",
  "Syrian brown bear"
];

const randomBear = _.sample(variousBrownBears);
console.log(randomBear);
```

6. Next, let's create a new file called `bears.js` and add **only** the array of brown bears, and remove the array from `index.js`.

Add the following to `bears.js`:

```js
module.exports = variousBrownBears;
```

4. Then, in `index.js` add the following to the top of the page after the lodash require statement and before the `randomBear` variable:

```js
const variousBrownBears = require("./bears");
```

5. Run `node index.js` from the command-line.

**Review Questions:**

- In your own words, describe what we just did

## Working With the File System

One of the key advantages to working on the server is being able to work with
the file system. Working with the file systems is especially handy if we're
using Node to build command line applications, which we can do because Node is
not confined to the browser!

Node comes with a module, called
[fs](https://nodejs.org/dist/latest-v10.x/docs/api/fs.html), for working with
the file system.

### Set up

1. Create a new folder in your `sandbox` directory, call it `node-fs`
1. `cd` into `node-fs` and create a file called `index.js`

### Write to a file

We'll start by exploring how to create (i.e. write) files using Node. The method
for doing so is part of the `fs` module and is called `writeFile`.

> Documentation for
> [fs.writeFile](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)

Update your `index.js` file with this code snippet:

```js
const fs = require("fs");

/*
fs is the node filesystem module. We're importing it from the node standard library, which is always in scope (part of the standard node modules), so we don't provide a path at the beginning of the line.
*/

fs.writeFile("./file.txt", "hello world", err => {
  if (err) {
    console.error(err);
  } else {
    console.log("done");
  }
});
```

Let's break this down:

1. We first import `fs`, and save it to a variable using `require()`
1. The first argument is the path and name of the file we want to write
1. The second argument is the data we want to write. In this case, just a string
   that says `hello world`
1. The last argument is a `callback` function, or a function that runs when the
   writing is complete

Go ahead and run this file in your terminal by typing `node index.js`.

What just happened?

### Read From a File

So, we've written some data to a file. How can we get the contents of it?

Comment out the code to for `writeFile` and add the following below:

```js
fs.readFile("./file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
```

This looks very similar to the `writefile` syntax, but with some different
arguments:

1. Argument 1 is the path to the file we want to read
1. Argument 2 is the `encoding` of the file. If you don't specify the encoding,
   what happens?
1. Argument 3 is the callback function again. It takes two arguments: `error`
   and `data`.

This is great and all, but can't we do more than hello world? Why yes, yes we
can.

### Parsing & Stringifying JSON

Enter JSON: [JavaScript Object Notation](https://en.wikipedia.org/wiki/JSON).
It's a format that looks very similar to JavaScript objects, so it's easy to
read and write by hand (if we want to).

Let's create a plain old JavaScript object in our `index.js` file:

```js
const pojo = {
  animal: false,
  name: "peter obvarious jones otlewski",
  password: "shenanigan174",
  hobbies: ["reading", "writing", "snowboarding", "cat petting"]
};
```

Now we have a nice regular JavaScript object. Let's turn it into a JSON string:

```js
const pojoJson = JSON.stringify(pojo);
```

If we console log `pojoJson` we will see something like this:

```js
{"animal": false,"name": "peter obvarious jones otlewski","password": "shenanigan174","hobbies": ["reading", "writing", "snowboarding", "cat petting"]}
```

Now we can take this and write it into the file.

Comment out the `readfile` function and uncomment the `writefile`. Move it below
the object declaration. Then, swap out `'hello world'` with the `pojoJson`
variable.

Now your whole file should look something like this:

```js
const fs = require("fs");

// fs.readFile('./file.txt', 'utf8', (err, data) => {
//   if(err) {
//     console.error(err)
//   }
//   else {
//     console.log(data)
//   }
// })

const pojo = {
  animal: false,
  name: "peter obvarious jones otlewski",
  password: "shenanigan174",
  hobbies: ["reading", "writing", "snowboarding", "cat petting"]
};

const pojoJson = JSON.stringify(pojo);

fs.writeFile("./file.txt", pojoJson, err => {
  /** another way to log the error message */
    if (err) throw err;
    console.log("done");
});
```

Run the script again in your terminal, and check the results in `file.txt`. What
happens if you don't stringify it first? Try just writing the `pojo` object to
the file and then look at it.

## Lab: [Build Your Own Node Module](https://git.generalassemb.ly/SEIR-teams-materials/npm-resume)

Let's build off of our work with `fs` and JSON and build out your resume as a
node module and publish it to the npm registry! Work through
[this repository](https://git.generalassemb.ly/seir-921/npm-resume).

## Additional Resources

- [Node.js Documentation](https://nodejs.org/en/)
- [W3 Schools: Getting Started with Node](https://www.w3schools.com/nodejs/nodejs_get_started.asp)
- [Rising Stack](https://blog.risingstack.com/) - A really great resource for
  Node

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
