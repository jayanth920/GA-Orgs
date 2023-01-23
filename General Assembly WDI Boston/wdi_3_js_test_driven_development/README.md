![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Introduction to Test Driven Development

## Introduction

## Objectives

At the end of the lesson, students should be able to:

* Use the red-green-refactor technique to break down difficult problems
* Use the ping-pong technique for pair programming.

## Vocabulary

refactor

## Concept: Red-Green-Refactor

The red-green-refactor cycle is a common approach to test driven development.  

You start out with working code that passes all its tests, or with no code and no tests.  

The first thing you do is write a test that you expect to fail. Run the test suite and see that it does.

Now you are in the red state.

The next thing you do is write just enough code for that test to pass.  And when I say "just enough" I mean, don't think ahead, don't think of what test cases are coming soon, just write the simplest code that passes the test and doesn't break any others.  If there is only one test case and it expects the function to return 7, it is perfectly fair to just say `return 7;`. Run the test suite and see that it passes.

Now you are in the green state.

At this point you can make any changes you like to the code, so long as when you are done all the tests pass.  This is called refactoring.

And now you think of the next step the code needs to take.

## Demo: Fizz-Buzz

Fizz-Buzz is a game that math teachers use to teach the concept of multiples.  You go around the circle of players, counting from 1 to wbenever someone makes a mistake, and you either say the number, "Fizz" if it is a multiple of 3, or "Buzz" if it is a multiple of 5. If it is a multiple of 3 and 5? "Fizz-Buzz."

Write a function that takes a number and produces what should be said when that number comes around.

## Concept: Ping-Pong Pair Programming

Two people, one computer.  One writes the tests, the other writes the code.  Ideally, they only communicate through the code.

## Demo: Prime Factors

Every number can be expressed as the product of a set of prime factors. Write a function that takes a number and returns a list of its prime factors.

## Practice: Lost in Alabama

Write a function `shortestRoute` to find the shortest routing and distance between two Alabama cities using the following distance table.

Do not use any other manually computed distances in your program.

* Alabaster-Birmingham 24 miles
* Alabaster-Montgomery 71 miles
* Birmingham-Huntsville 103 miles
* Birmingham-Tuscaloosa 59 miles
* Demopolis-Mobile 141 miles
* Demopolis-Montgomery 101 miles
* Demopolis-Tuscaloosa 65 miles
* Mobile-Montgomery 169 miles
* Montgomery-Tuscaloosa 134 miles

Example 1:

`shortestRoute('Demopolis', 'Birmingham')` should return
```Javascript
{
    distance: 124,
    route: [
        'Demopolis',
        'Tuscaloosa',
        'Birmingham'
    ]
}
```

Example 2:
`shortestRoute('Mobile', 'Huntsville')` should return
```javascript
{
    distance: 367,
    route: [
        'Mobile', 
        'Montgomery', 
        'Alabaster', 
        'Birmingham', 
        'Huntsville'
    ] 
}
```

## Practice: Infinite Precision Calculator

Write a set of functions that add, subtract, multiply, and divide numbers represented as lists of digits.  For instance, `add([1, 2], [1, 5])` should return `[2, 7]` because 12 + 15 = 27.

As a hint, consider the order in which you most likely learned arithmetic: first, adding two single-digit numbers together, then addition without carrying, then addition with carrying.
