![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Exercises in Test-Driven Development

## Introduction

Many of the things we've taught in this course have been primarily things you *know* -- you know how to write a function, you know how to build a REST service.  Test-driven development is different in that it's learning a new habit of thinking

## Objectives

* Students will learn about and practice the different phases and principles of the red-green-refactor cycle of test development.
* Students will learn about and practice pair programming, specifically the ping-pong approach to test-driving while pairing.

## How it works:

Because we're changing our way of thinking, we're going to start with small self-contained practice problems.  Ideally, these are problems where there it is clear to us whether the answer is right or wrong, but the algorithm is unclear. It can also be helpful (depending on temperament and personality) if the problems are ones we think we know the answers to already: that adds to the discipline of strict test-driven development.  Also, our ideal problem will have either a lot of useful test cases of increasing complexity or will have increasingly complex requirements that we can add one at a time.

We start with all the infrastructure set up: we have a source code file and a test file, with no source code in either.

### Phase one: RED

We start either with everything set up with blank code files, or we start with a clean, working code base that already passes its tests.  

To make it red, we write a test.  Under strict TDD, once we've decided that the refactoring phase is done (step 3: we'll get to it) we cannot add any code to the project without first adding a failing test for a feature or behavior we want. This test should be the simplest, most basic thing that the software should do that it does not yet do.  It should also be one test case or data point.

Then you run your test suite, and verify that the test failed. This is important: sometimes because of a bug or because of unintentional cleverness, the test that you think *should* fail does *not* fail.  In that case, you still add the test to your test suite and you write a new test.

### Phase two: GREEN

Then you add just enough code to the project to pass the test. You will be tempted to solve the whole thing.  Don't do that.  Do the simplest thing that makes it pass the test. 

Also, no code reorganization.  This is the place to be say "who cares if it's bad style - it passes the test!"  This is the place to say "We'll make it work now and make it pretty later."  

You can run your test suite as many times as you like, but when the new test passes and no older tests are broken, you are ready to move to the next phase.  Make sure you run the test suite to see the beautiful passing tests.

### Phase three: REFACTOR

Once you've gone through a red phase and a green phase, you're in the refactor phase.  You can move code around, simplify it, extract common code, choose better variable names.  The only constraints are that you cannot add new features (no features without a failing test first), you cannot add failing tests (doing so would end the refactor phase and put you into the red phase of the next cycle), and the tests that pass at the beginning of the phase need to pass at the end of the phase.

(Nitpick time: **refactoring** is when you rearrange and simplify code that's covered by tests.  When you don't have tests, it's not **refactoring**, it's **rewriting**, which sounds much more sloppy and risky than refactoring.  Because it is.  Don't let your colleagues get away with sloppy language and self-delusion.) 

## Demo: Prime Factors  (You get to watch)

Every number can be expressed as the product of a set of prime factors. Write a function that takes a number and returns a list of its prime factors.

## Demo:  Arithmetic expression calculator]

The task: to create a function that takes a string with an arithmetic expression in it, and calculate the result. 

The mathematical operators we recognize are (), +, -, *, /.  Numbers will all be integers, though they may be negative, and they may be large.  The function can expect that the expression will be valid.


## Lab One

As you have seen, the only way

### Pair Programming

You may have noticed that there's a certain bit of tension between the test-writing role and the code-writing role: they are very different mindsets, and they can be somewhat adversarial.  To reinforce the feeling of two mindsets,  for this next lab we're going to work in pairs, in a fairly strictly defined format called ping-pong pair programming. One of you will write the tests, and the other will write the code.

The person who writes the tests has a great deal of control over the direction the software goes in at any given time, but also has a great deal of responsibility for making sure that the steps are small and reasonable.  This is really tough at first, so after every few cycles -- as few as 2 if you like, or as many as 5 or 6 if you prefer -- you should switch roles.

### Bank OCR 

You are working in a bank with antiquated records and an even more antiquated scanner, hooked up to a state of the art computer, naturally.  You will get text in the following format, delivered one line at a time, top to bottom.  Your task is to translate it into numbers.

The digits from 0 to 9 are here.  (In the real code they will be represented only by space, pipe, and underscore; the periods are there to show spacing and alignment.)

```
._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.
|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|
|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|
```
Example input: 
```
._. ... ._.
|_| ..| |.|
..| ..| |_|
```

Should produce:
910

## Further Labs 

By now you should have the idea.  Choose one of these labs to try, with a partner or on your own. Try these as you see fit, with a partner or on your own.

### Spelling out Numbers

The problem is simple:  we as humans know how to write out numbers in words.  For instance, 318,411 is three hundred and eighteen thousand, four hundred and eleven.  Write a function that does this.  

(Hint:  start with 0, 1, 2, and work up.  Because of the way English works, things are going to be tedious up to about 30, and then you'll start to see patterns.)

### The Berlin Clock

From the description of a very famous clock: 

> The time is calculated by adding the lit rectangular lamps. The top
> lamp is a pump which is blinking on/off every two seconds. In the
> upper line of red lamps every lamp represents 5 hours. In the lower
> line of red lamps every lamp represents 1 hour. So if in the first
> line 2 lamps are lit and in the second line 3 lamps its 5+5+3=13h
> or 1 p.m. In the third line with tall lamps every lamp represents 5
> minutes. There are 11 lamps, the 3rd, 6th, and 9th are red
> indicating the first quarter, half, and the last quarter of the
> hour. In the last line with yellow lamps every lamp represents 1
> minute.

Implement this clock. (This may work better on the client side.)

## Lost in Alabama

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

## Resources

* [http://gmarik.info/notes/programming/test-driven-development-kent-beck](http://gmarik.info/notes/programming/test-driven-development-kent-beck) -- the blog author took notes on a talk that [Kent Beck](https://en.wikipedia.org/wiki/Kent_Beck) gave.  This is extremely information-dense, so don't be surprised if you have to read it a couple times over.

* [The Berlin Clock](http://www.surveyor.in-berlin.de/berlin/uhr/indexe.html) I am not making this up.

