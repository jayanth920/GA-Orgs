# Intro to Yeoman

## Objectives

At the end of this exercise students should be able to:

- Create a web application with an organized code structure
- Manage external code dependancies
- Use tools to streamline deployment of this web application

## Tools

- Yeoman
- NPM
- Bower
- Grunt

### Installation

You'll need NPM, Yeoman and Bower installed:

`brew install npm`
`npm install -g yo bower grunt`

## Introduction

### The Problems

#### Structure

Web apps made with JavaScript and HTML don't force a structure on you. You can name files anything you'd like, and put them pretty much anywhere you'd like. Unfortunately, this leads to projects that are massively inconsistent from one to another. There's quite a bit of overhead in getting started properly with a good project!

#### Dependancies

Most web applications also have *dependancies* on code that you didn't write. Libraries like jQuery, Angular, D3, and Bootstrap are excellent examples of these. Traditionally, people either link to a CDN for these resources, or download the code into their own folders directly. But what happens when there are version conflicts or newer versions of the libraries available. Do you keep other people's code checked into your Git repo?

#### Deployment

A well deployed web app will have only the code it needs and nothing more, because you want to transfer the code/resources efficiently across the Internet to the end-user.

Some tools that aid in this are *minification* and *concatination* of your HTML, CSS and JavaScript assets. What this means is that we remove whitespace, replace variable names with shorter ones to make the files shorter themselves. Then if we have multiple CSS or JavaScript files we can concatinate those into a single CSS and single JS file so that there are fewer HTTP requests made by the user's browser. But doing this manually is hard. You want your code to be untouched so you can keep editing it, but when you deploy you want it to be compact and efficient. You also want to keep your Git commits relatively free of extranious changes from minification. What if we had a tool to make this simple and repeatable?

### The Solution: Yeoman and Friends

Yeoman uses Bower and Grunt to give you superpowers for solving all of the above problems.

#### Structure

Yeoman helps you create structured web applications. When you generate a Yeoman application, it gives you a file structure with basic contents already there, plus configuration for other tools that will help us with our other goals.

To create a new web application simply type `yo webapp` from an empty directory.

Note, do **not** do this if you're creating an Angular application for that you'd install the Angular generator (`npm install -g generator-angular`) and then run `yo angular`

#### Dependancies

Yeoman uses Bower to help you manage dependancies, so if you need to update a library or add a new one it is simple and keeps the library code out of version control.

To add a new library type `bower install <dep>..<depN>`

To update an existing library type `bower update <dep>`

And then, to inject those dependancies into your `index.html` file we run: `grunt wiredep`

The list of your dependancies is kept in your `bower.json` file.

#### Deployment

Yeoman uses a set of Grunt tasks to automate deployment of your assets, but also local testing.

To run your tests: `grunt test`

To serve a local copy of your site: `grunt serve`

And to create a *distribution* of your site for deployment run: `grunt build`. This command will minifiy, concatinate and overall optimize your site and put a special copy of it into your `./dist` directory.

You'll have to remote the `dist` line from your `.gitignore`. Do a git add/commit. You can then deploy the contents of that directory to Github Pages by `git subtree push --prefix dist origin gh-pages`


## Exercise 1

1. Create a new web app with Yeoman (not Angular app)
2. Deploy it to Github Pages
3. Via Bower, add D3 as a dependancy
4. Re-deploy to Github Pages

## Exercise 2

1. Create an Angular app
2. Deploy it to Github pages
3. Modify the app slightly
4. Re-deploy to Github pages
