![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Javascript: Separation of Concerns

## Objectives

By the end of this lesson, students should be able to:

* Organize JavaScript code based on model and view responsibilities

## Instructions

1. Fork and clone this repo.
1. Change into the project directory.
1. Follow your instructor's instructions.

## Separation of Concerns

> In computer science, separation of concerns (SoC) is a design principle for separating a computer program into distinct sections, such that each section addresses a separate concern... A program that embodies SoC well is called a modular program. Modularity, and hence separation of concerns, is achieved by encapsulating information inside a section of code that has a well-defined interface...
>
> The value of separation of concerns is simplifying development and maintenance of computer programs. When concerns are well-separated, individual sections can be reused, as well as developed and updated independently. Of special value is the ability to later improve or modify one section of code without having to know the details of other sections, and without having to make corresponding changes to those sections.
>
> [Separation of concerns - Wikipedia, the free encyclopedia](https://en.wikipedia.org/wiki/Separation_of_concerns)

## Exercise

The code provided in this repo is a simple list-keeping app. We just refactored our code to use jQuery instead of vanilla JavaScript.

We have two concerns in this app:

* Code that deals with retrieving data from the DOM
* Code that renders a new item on our list

We can think of the first concern as a "model" concern; that is, a concern about how we describe the data structure we're working with. The second is best thought of as a "view" concern, since it deals with what is shown to the user, in this case, interactively.

Since we're using `browserify`, separating our code into different files is easy. All we have to do is create separate files for each concern and then move our code into the appropriate place.

We'll be presented with an opportunity to observe another refactoring, this time with an eye toward improving readability and keeping like-code together.

## Bonus Practice

1. Clone this repo to a new folder: `git clone <this_repo> todo` (do not fork)
1. Change into the project: `cd todo`
1. Switch to the solution branch: `git checkout solution`
1. Delete the master branch: `git branch -d master`
1. Create a new master: `git checkout -b master`
1. Delete the solution branch: `git branch -d solution`

Now you have a fresh new repo based on the solution to this repo. Your task is to modify the current app by:

1. Adding checkboxes to the list items
1. Change the style of the list items to strike-through when the boxes are checked

Which file(s) did you visit to change the list item elements? Which file(s) did you visit to dynamically change the style? Did you create any new data in your solution? How would you change your solution to use an array of objects (`[{},...]`) that represent todos in memory?
