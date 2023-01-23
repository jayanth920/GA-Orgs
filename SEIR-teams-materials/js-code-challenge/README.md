
# JS Coding Challenge 

For today's morning exercise, you will be tackling some JS coding challenges. Please note these are _challenges_ meaning they may be difficult and you may find yourself having to look up online how to do something. That is fine and expected, just start small and try pseudocoding the logic out before you write any actual code. 

What is pseudocode? I'm glad you asked! 

## Intro to Pseudocoding

Pseudocoding is a helpful process to begin with before you start writing actual code. It makes it easier for you to conceptualize and understand what you're actually aiming to do.

Pseudocoding is structuring your solution in human language rather than computer language. Typically, you write down what you're thinking you should do to solve a problem as a // comment _before_ you solve the problem with actual code. Depending on how you write your pseudocode, it can help guide you to what you may need to write.

For example, if I were to pseudocode how to print out only the even numbers of an array, I could do something like so: 

```javascript
// loop through the length of the array 
// check if the current element of the array is even 
// if it is even, console log it 
```

As you can see, the words kind of guide you towards what kind of code to write. 

- The first line uses the word "loop", which indicates I probably want to use a for loop or some other iteration method. 
- The second line uses the word "if", which indicates I need to use an if statement 
- The third line blatantly says what I need to do, console.log 

Commenting your code like this, writing out what you're doing line by line, is also just a good idea in general as a beginner. Not only will you solidify to yourself that you understand what exactly your code is doing, but in case you have to go back later and look back at your work, you'll know exactly what you were thinking and what's happening at a quick glance. 

## Instructions 

1. Fork and clone this repository 
1. Change into the new directory 
1. Write your solutions for the challenges below in the `lib/challenge.js` file 
1. Check your work as you go by opening your `lib/index.html` in the browser as a LiveServer 

# The Challenges

## Prime Numbers 

A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, [go here](https://en.wikipedia.org/wiki/Prime_number). To test whether a number is Prime, you only need to test as far as the **square root** of that number. This is advisable for optimization and testing large numbers.

![Prime numbers table](https://media.giphy.com/media/a1DcwyGtpLG9O/giphy.gif)

### Step One

Write a function called `checkPrime` that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.

_Hint:_ Check every number up to (and including!) the square root. To do this, try a _for loop_.

### Step Two
Write another function called `printPrimes` that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with `printPrimes(97)`, it will print all the Prime numbers up to and including 97.

This function can **call on** the previous `checkPrime` function. 

## Word Frequency 

### Step One

Write a function `findWordFrequencies` that takes in a sentence (string), and returns an object with each word as a key, with a value of how many times that word appears in the sentence.

eg: `findWordFrequencies('I love lamp')` would return `{ I: 1, love: 1, lamp: 1 }`

Make it work just for sentences without commas, apostrophes, and periods. Capital letters and lowercase letters should be treated as equals: 'The' and 'the' are the same word.

### Step Two

Write a function `findHighestFrequency` that takes in an object and returns an object with the key that has the highest value. With this function we can see which word appeared in the sentence with the highest frequency.

If there is a tie between the two most frequent words, the first appearing one is returned.

#### Examples

<details><summary><strong>Click to see examples</strong></summary><p>

**"The world is all that is the case"**

```javascript
const freqs = findWordFrequencies('The world is all that is the case'));

console.log(freqs);
```

> => { the: 2, world: 1, is: 2, all: 1, that: 1, case: 1 }


```javascript
const freqs = findWordFrequencies('The world is all that is the case');

console.log(findHighestFrequency(freqs));
```

> => { the: 2 }

**"That that is is that that is not is not"**

```javascript
const freqs = findWordFrequencies('That that is is that that is not is not');

console.log(freqs);
```

> => { that: 4, is: 4, not: 2 }

```javascript
const freqs = findWordFrequencies('That that is is that that is not is not');

console.log(findHighestFrequency(freqs));
```

> => { that: 4 }

**"hi"**

```javascript
const freqs = findWordFrequencies('hi');

console.log(freqs);
```

> => { hi: 1 }


```javascript
const freqs = findWordFrequencies('hi');

console.log(findHighestFrequency(freqs));
```

> => { hi: 1 }

</p></details>

# Hungry for More

If you finish early, try these! You may have to signup for CodeWars if you haven't already.

[Coin Calculator](https://www.codewars.com/kata/calculator-coin-combination)

[Bob's Short Forms](https://www.codewars.com/kata/bobs-short-forms)
