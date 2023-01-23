![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Introduction to Code Testing

## Introduction

## Objectives

Hera are the objectives for the lesson:

- When given a function implementation, the student should be able to identify its decision points and code paths and write tests accordingly.
- When given the specification for a function, the student should be able to write Jasmine tests to test its correctness.
- When given a technical term relating to testing, the student should be able to define it and use it in a sentence.

## Vocabulary

assertion; expectation; matcher; test suite; black box test; white box test; code path; decision point

## The simplest thing that could possibly work

The center of testing code is the assertion.  When you assert something, you are saying that it must be true. For instance:

```javascript
expect(2 + 2).toBe(4);
```

The assertion has an *expression*, in this case `2 + 2`, and a *matcher*, in this case `toBe(...)`. The result of evaluating the expression is then compared against, or matched with, another value, by the matcher.  In this case, `toBe(...)` tests for strict equality with the expression.

Some programmers also call this an *expectation* rather than an *assertion*.  There are several different schools of thought within the software testing universe, some of which we'll touch on later.

Simple assertions are not sufficient in and of themselves.  Most often, a test case will have a stanza of code, and a label.  Also, because we expect to have dozens of these tests, we will want a way of grouping them into suites. The bare minimum Jasmine test that will actually run looks like this:

```javascript
describe('Javascript arithmetic', function(){
  it('should add 2+2 correctly', function(){
    expect(2 + 2).toBe(4);
  });
});
```

## Prepare to meet your matcher

Jasmine has several matchers that are standard, and there are several libraries of matchers available.  If you don't recognize a matcher, be prepared to look it up.  (I promise I won't do that to you in this lesson.)

Here are the core matchers I think are likely to be most useful.  

* *.toBe(value)* - tests for strict equality (===)
* *.toEqual(value)* - tests for object or array equality
* *.toBeDefined()*
* *.toBeUndefined()*
* *.toBeTruthy()*
* *.toBeFalsy()*
* *.toBeGreaterThan(number)*
* *.toBeLessThan(number)*
* *.toContain(substring)* - when the expression passed to `expect` evaluates to a string, this matches a substring
* *.toContain(element)* - when the expression passed to `expect` evaluates to an array, this matches an element within the array

You can also assert the opposite of any matcher by prefacing it with `.not`, such as:

```javascript
expect(3).not.toEqual(7);
```

And you can classify assertions as positive and negative assertions, which just means whether that .not is in there.

## A note on code layout

Jasmine is a very flexible tool, and there are several ways you can use it.  For this lesson I chose the simplest way that required the least infrastructure. The code to be tested goes under `src/`, the tests go under `spec/` and are named ending in `.spec.js`, and to run them you open or refresh the file `SpecRunner.html` in a web browser.  When you add a new file (if you add a new file), you must also include it in a script tag in the SpecRunner.html file.

The location and naming of source code and specification files is convention. 

You can also use the website http://www.tryjasmine.com, which is sort of a REPL for entire Jasmine files. 

## Exercise 1: Assert yourself

Choose five of the matchers written above, and construct an assertion for each of them.  At least two of your assertions should be negative.  Put them all in one test.

## Exercise 2: Put it to the test

There are four functions defined in the `page.js` file, and they all have documentation specifying what they are supposed to do.  At least one of them has a bug. 

The first function already has a test suite.  Using it as an example, write test suites for the other three to demonstrate which of them have bugs.

## Knowing what to test: decision points and code paths

The testing we did in Exercise 2 was fairly straightforward.  We knew what the functions were supposed to do, and we made sure that, when given a particular input, we got the output we expected.  This is called black box testing, because we treat the code as a black box that we cannot see into.  All we can do is put something in and see what comes out.

When we can consider the inner working of the code, we can do white-box testing, named by analogy to black-box testing.  Consider every path the computer could take through the code: the places where it has to choose between two paths are called decision points, and they show where to focus testing.

How do you find decision points?  Look for control structures like if, while, and loops.  Make sure that you have a test case for each case in an if/else if/else construction. 

Consider the code paths and complexity in Example 1.

And what do you do if your code has too many decision points or code paths in one function?  Break it up into several functions.  This will not only make it easier to test, it will make it easier to understand.

We will demonstrate with the code in Example 2.

## Exercise 3: Revenge, Refactor, Reuse

In #xercise 3 you will find a function that confused people when it first appeared.  Write tests for it to be sure it does what it is supposed to do.  

Once that is done, try breaking it up into 2 or 3 functions in such a way that it reduces the complexity and makes it easier to test. 



