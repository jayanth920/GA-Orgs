[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Coding Challenge - Shortest Square Shark

Today's coding challenge is made up of 3 problems to refresh your mind on those JavaScript fundamentals. 

## Getting Started 

How you do these coding challenges is up to you: 

- Creating a JavaScript file in your `sandbox` and running it with `node <filename>.js` every time you need to test it
- Creating a JavaScript file in your `sandbox` and connecting it to an `index.html` file and running a live server 
- Using [Repl.it](https://repl.it/) or [CodePen](https://codepen.io/)

---

## Baby Shark

You've heard of Fizz Buzz, but now... let's Baby Shark! 

Write a function called `babyShark` that takes a number as an argument. Console log as many lines as the number passed in. 
  - For every odd numbered line, have it print `Baby shark`
  - For every even numbered line, have it print `doo doo do doo do do`  

**Example Output:** 

```js
babyShark(7) 

// should return...
// Baby shark
// doo doo do doo do do 
// Baby shark
// doo doo do doo do do 
// Baby shark
// doo doo do doo do do 
// Baby shark
```

## a Square of Squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Write a function called `isSquare` that takes a number as an argument. Make it so the function determines if the number passed in is a [square number](https://en.wikipedia.org/wiki/Square_number), and return true if it is, false if it isn't 

**Example Output:** 

```javascript
isSquare(-1) // returns false
isSquare(0) // returns true
isSquare(3) // returns false
isSquare(4) // returns true
isSquare(25) // returns true  
isSquare(26) // returns false
```

(BONUS: Can you write the solution in one line?)

## Shortest Word

Write a function called `findShort` that takes in a string/sentence as an argument. Make it so that the function returns the length of the shortest word(s) in the string. 

Assume the string will never be empty and you do not need to account for different data types.

```javascript
findShort("bitcoin take over the world maybe who knows perhaps")
// returns 3
findShort("turns out of random test cases are easier than writing out basic ones") 
// returns 2
```
(BONUS: Can you solve this in one line?)
