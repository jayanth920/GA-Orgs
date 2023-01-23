# SEI Emergency Compliment

## Mission…

For tonight's homework, you will be creating a very simplified version of [Emergency Compliment](http://emergencycompliment.com/), except making the compliments SEI-themed.

**NOTE:** Ignore the broken "thanks" button on the site, you will not need to add that functionality to your own app. You also will not be required to add the "meh" button functionality on your site.

## Getting Started 

1. Fork and clone this repository.
1. Change into the new directory.
1. Create a basic express app in this repository: 
    - `npm init -y`
    - `touch index.js` 
    - Think: What packages do you need to install and require?
4. Complete the assignment mission.
    - See below for more details of how the app should work

**NOTE**: You will **not** need to create a database for this app 

# Activity 

Make an express app that randomly displays a compliment to the user. Look at [Emergency Compliment](http://emergencycompliment.com/) for a working example (but remember, try to make your compliments SEI themed!)

### Level 1: Generic Compliment

>`YOURPORT` should be a number like 3000 or 4000

When you visit the root (`"localhost:YOURPORT/"`) of your app, it should display a generic greeting and a randomly chosen compliment. The background color of the app should be randomized as well.

Here are some sample compliments and colors (feel free to substitute in your own)...

```js
const compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
```

### Level 2: Personalized Compliment

When you visit `"/:name"` (ie: `"localhost:YOURPORT/randy"`), the greeting should personalize itself to the provided name. There should still be a random compliment and background color.

---

# Submission 

**This homework assignment is due by Monday at 10AM ET** 

**To submit your homework, don't forget to...**

  - Create a `.gitignore` file and add `node_modules` to it 
  - Create a pull request on this repository 

---

# Hungry for More?

Finshed everything required above and want to do a bit more to stretch your skills? Try any or all of these bonuses:

1. Add the "meh" button functionality, so that when the user clicks on the button, they can get a new randomly generated compliment without having to refresh the entire page
1. Allow a user to add to the list of compliments using a POST request. You can submit POST requests to the app using a form.
1. Make this app a full-stack app by using MVC file structure and creating a mongo database to hold your compliments instead of just hardcoding the data
