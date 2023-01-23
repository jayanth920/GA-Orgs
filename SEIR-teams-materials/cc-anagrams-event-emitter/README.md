[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

---
Type: Coding Challenge <br>
Duration: "~:45" <br>
Creator: Madeline O'Moore <br>
Source: Code Wars, Leetcode <br>
PreReq: JavaScript Fundamentals


![.](https://i.giphy.com/media/ZVik7pBtu9dNS/200w.webp)

--- 

## Instructions

1. Fork and clone this repository
1. Change into the new directory
1. Create a file called `solutions.js`
1. Write your solutions for the challenges below in the `solutions.js` file

# JS Coding Challenge

For today's morning exercise, you will be tackling some JS coding challenges. Please note these are _challenges_ meaning they may be difficult and you may find yourself having to look up online how to do something. That is fine and expected, just start small and try pseudocoding the logic out before you write any actual code.

These questions will be similar to technical coding challenges you will get during your interviews. Try to carefully think through and even talk through your approach with your breakout rooms before beginning. 


## Is this an Anagram?

```js
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {}
```


## Event Emitter, JS Classes Practice

```js
// --- Directions
// Write a class, EventEmitter that has three methods: on, emit, and removeListener.

// on("eventName", callbackFn) - a function that takes an eventName and a callbackFn,
//     should save the callbackFn to be called when the event with eventName is emitted.

// emit("eventName", data) - a function that takes an eventName and data object,
//     should call the callbackFns associated with that event and pass them the data object.

// removeListener("eventName", callbackFn) - a function that takes eventName and callbackFn,
//     should remove that callbackFn from the event.

// For example:
// let superbowl = new EventEmitter()
// const cheer = function (eventData) {
//   console.log('RAAAAAHHHH!!!! Go ' + eventData.scoringTeam)
// }
// const jeer = function (eventData) {
//   console.log('BOOOOOO ' + eventData.scoringTeam)
// }
// superbowl.on('touchdown', cheer)
// superbowl.on('touchdown', jeer)
// superbowl.emit('touchdown', { scoringTeam: 'Patriots' }) // Both cheer and jeer should have been called with data
// superbowl.removeListener('touchdown', jeer)
// superbowl.emit('touchdown', { scoringTeam: 'Seahawks' }); // Only cheer should have been called
```

# Hungry for More

If you finish early, try the one below! 

## Max Char

```js
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
```
