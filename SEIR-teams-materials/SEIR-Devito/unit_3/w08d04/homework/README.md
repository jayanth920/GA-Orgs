[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Secured Bookmarks

![](https://imgur.com/BXN6ZQs.png)

Adding authorization to your bookmarks app!

#### Learning Objectives

- Authorization with Express and Angular

#### Prerequisites

- JavaScript
- Node / Express 
- Mongo / Mongoose

---

## Getting Started

You have two options for this homework 

1. Add authorization onto your bookmarks homework that you worked on earlier this week

1. Or, if you don't want to mess with that code or if you weren't able to get it fully working and complete, feel free to use the provided starter code! The starter code is very basic with little to no styling and only basic CRUD functionality to make it easier for you to jump in and understand what's going on it the app!

   - If you use the starter code in the `bookmarks-starter` folder, don't forget...
      - `npm i` to install all packages 
      - To read through all the files to understand what's going on and take note of all the variables being used! 

## Authorization MVP 

So you've made a bookmarks app, great! But, anyone can visit and edit or delete your bookmarks, which is not exactly ideal in this case. Let's fix that by adding some authorization! Similar to the original bookmarks homework, we'll just be listing the required functionality your app should have via user stories and it'll be up to you to 'solve' the problems in a way that makes sense to you! 

#### User Stories

1. As a user, I should be able to create an account with an encrypted password
   - The user model should have a `username` and `password` 
1. As a user, once I've created an account I should be able to log into that account 
   - Once I'm logged in, I should be able to tell that I am by seeing a "Welcome" message that displays my username somewhere on the page
1. As a user, I should be able to see all bookmarks even if I'm logged out

_Stretch Goal:_ As a user, I should only be able to create, edit, and delete bookmarks when I'm logged in 

## Hungry for More? 

1. If you used the given starter code, you'll notice there is virtually no styling -- fix that and give your app some styling flair!
1. Keep upgrading your bookmarks app
   - Make it so that bookmarks are only editable/deletable by the specific user that created it 
   - Make it so that you can filter bookmarks by the user that created it 
   - Make it so that a logged in user can create a "private" bookmark that no one else can see except the user that created it 
   
---    

## Deliverables

1. A bookmarks app that meets all the MVP requirements outlined above.


## Submission Guidelines

- This homework is **optional**, so you are not required to submit it. If you would like our homework grader to take a look or if you have any questions, then feel free to submit an issue as usual!

---

*Copyright 2019, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
