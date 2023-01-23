---
title:  Mocha, Chai, & BCrypt
type: lab
duration: "1:25"
creator:
    name: James Traver
    city: CHI
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Mocha, Chai, & BCrypt


*Testing BCrypt on Node.js with Mocha + Chai.*

[![Build Status](https://travis-ci.org/code-for-coffee/mochaChaiAndBcrypt.svg?branch=master)](https://travis-ci.org/code-for-coffee/mochaChaiAndBcrypt)
(This build status shows the statuses of the test command specified in `package.json`'s `script.tests` using a service like https://travis-ci.org)


![giphy.gif](giphy.gif)

## Getting Started

* Clone this repository.
* `npm install` to acquire the modules required for this project.
* Run `mocha`. Watch the tests work.

## What's going on with this BDD stuff?

1. Behavior driven development starts off with us placing tests are placed inside of a `test/` folder.
2. Functionality is then then *described* with a series of tests.
3. Each test (*it*) then can *expect* or describe what a value *should* be.

## Challenge

1. Read **Chai's** BDD Docs: http://chaijs.com/api/bdd/
2. Inspect `test/test.js`
3. Modify each test to make them **fail**.
4. Correct them to make them pass again!
5. After inspecting the initial tests inside of the `test/test.js` folder and getting them to work, uncomment out the starter code at the end of the file and re-test BCrypt by hand.
