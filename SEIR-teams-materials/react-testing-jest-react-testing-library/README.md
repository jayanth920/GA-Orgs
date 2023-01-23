# React Testing Library

![Image](https://www.freecodecamp.org/news/content/images/size/w2000/2020/03/cover-3.png)


## Learning Objectives
- Describe the importance of testing your code programmatically
- Be able to roughly describe different types of testing
- Be able to write and run tests using React Testing Library and Jest

Let's start by taking a look at an example of a test: https://testing-library.com/docs/example-input-event

Why might we want to test our code?

## What is Jest?
https://jestjs.io/docs/getting-started

Jest is an easy to configure testing framework built by Facebook for testing JavaScript code. Jest runs your tests for you automatically when you have it in watch mode.

## What is React Testing Library?
https://testing-library.com/docs/react-testing-library/intro

"The Testing Library family of libraries is a very light-weight solution for testing without all the implementation details. The main utilities it provides involve querying for nodes similarly to how users would find them. In this way, testing-library helps ensure your tests give you confidence in your UI code."

Guiding Principle: The more your tests resemble the way your software is used, the more confidence they can give you.

## Configuration

Jest automatically looks for files with a `test.js` suffix, or for files in a `__tests__` folder. We will use the suffix today.

Let's start a React app for our testing purposes today.

Run
```bash
$ npx create-react-app testing-lesson
```

We can run `$ cd testing-lesson` then `$ npm test` right now and see what happens. Also try running `$ npm test -- --verbose` to see a more full test output: https://jestjs.io/docs/cli#--verbose.

We get some feedback from the app that our tests are all passing!

You can see in `App.test.js` that we only have one test right now: `renders learn react link`. Let's take a look at this test.
1. What is being imported?
2. Where do we define the name of the test?
3. Lines 5 through 7 are the content of this test, what do you think each line is doing?
4. How can I modify this test so it doesn't pass anymore?

Jest and React Testing Library come completely configured within `create-react-app`, so we don't have to do anything else to get it working!

## Test Driven Development

“Test-driven development” refers to a style of programming in which coding, testing (in the form of writing unit tests), and refactoring rely on each other.

It can be succinctly described by the following set of rules:

1. Write a “single”test describing an aspect of the program.
2. Run the test, which should fail because the program lacks that feature.
3. Write “just enough” code, the simplest possible, to make the test pass.
4. Refactor the code until it conforms to the simplicity criteria.
5. Repeat, “accumulating” unit tests over time

## We Do: Hello World
Today, we will be building a couple of small projects in React. Let's create a components folder to store them.

`$ mkdir src/components`

Then, let's create a `HelloWorld` subdirectory within the components directory to create our first tests.

Let's create two files within it -- one called `HelloWorld.js` and one called `HelloWorld.test.js`. Right now, we want to build a component that just renders out a name that's fed to it via props. Let's write a test to see if our app is doing that!

```js
//HelloWorld.test.js

import { render, screen } from '@testing-library/react';

import HelloWorld from './HelloWorld';

// We will describe a block of tests
test('Hello world component', () => {
	// First render the component under test
	render(<HelloWorld name={'Your Name'} />);

	// Then create an assertion within the test that checks if our component renders our name prop
	expect(screen.getByText('Your Name')).toBeVisible();
	expect(screen.getByText('Your Name').tagName).toBe('H1');
});

```
Right now, when we run `npm test` our test fails.

Now, using test driven development principles, we will write the minimum code for it to pass. In this example, we just need a component that renders a name in it. Let's implement that:

```js
function HelloWorld(props) {
	return <h1>{props.name}</h1>;
}

export default HelloWorld;
```
Now our test passes!

Documentation on different avalable queries and when to use them: https://testing-library.com/docs/queries/about#priority

[Solution](./src/components/HelloWorld)

## You Do: Writing Tests for a Counter App

For this exercise, you will be using test driven development to write the React code to pass some pre-written tests. 

We want to build a counter app. Given the following tests, write a React component that passes the following tests.

Let's create a folder and some files for our counter app.
```bash
$ mkdir src/components/Counter
$ touch src/components/Counter.{js,test.js}
```

Copy the following code into `Counter.test.js`:
```js
import { render, screen, fireEvent } from '@testing-library/react';

import Counter from './Counter';

test('should display the title "Counter"', () => {
	render(<Counter />);
	expect(screen.getByText('Counter')).toBeVisible();
});
```
Now run `$ npm test`. All previous tests should still be passing! No need to exit out of the tests, they will rerun automatically every time you save.

One by one, copy a test into the body of the testing block. Then, make that test succeed before copying in another one.

Take a look at the documentation for Jest and React Testing Library aswell. They will give you some context for the english verb-like function names.

* https://facebook.github.io/jest/docs/en/api.html
* https://testing-library.com/docs/react-testing-library


1. 
```js
test('should start the count at 0', () => {
	render(<Counter />);
	expect(screen.getByText('Current Count: 0')).toBeVisible();
});
```

2.
```js
test('should increment counter by 1 when "+" is clicked', () => {
	render(<Counter />);

	fireEvent.click(screen.getByText('+'));
	expect(screen.getByText('Current Count: 1')).toBeVisible();
	fireEvent.click(screen.getByText('+'));
	expect(screen.getByText('Current Count: 2')).toBeVisible();
});
```

3.
```js
test('should decrement counter by 1 when "-" is clicked', () => {
	render(<Counter />);
	fireEvent.click(screen.getByText('-'));
	expect(screen.getByText('Current Count: -1')).toBeVisible();
});
```

Bonus: Try writing a tests for some of the following functionality. Then write the code to make the tests pass!

- Make sure the count can't drop below 0
- Make the 'Current Count' text green if the count is above 10
- Anything else you want to add!

[Solution](./src/components/Counter)

### Expected Benefits

- T.D.D can cause reductions in defect rates at the cost of a moderate increase in the initial development effort.
Teams tend to report that these overheads are more than offset by reducing effort in projects’ final phases.
- T.D.D. can lead to improved design qualities in the code, and more generally, a higher degree of “internal” or technical quality, for instance, improving the metrics of cohesion and coupling


### Common Pitfalls

- Forgetting to run tests frequently
- Writing too many tests at once
- Writing tests that are too large or coarse-grained
- Writing overly trivial tests, for instance, omitting assertions
- Writing tests for trivial code, for instance, accessors
- Not all team members commit to writing tests for the code they write

## BONUS: Testing Glossary

See: [Types of Software Testing](http://www.softwaretestinghelp.com/types-of-software-testing/)

* How tests are executed:
  - **Manual** - user runs test via the UI
  - **Automated** - test scripts are executed that call into the code and compare results to expected values
* Granularity:
  - **Unit** - focuses on testing individual "units" of code, usually individual components, functions or methods
  - **Integration** - set of components that are collaborating (interacting) to perform a task
  - **End-to-end (E2E)** - complete application running in an environment that mimics a real-world production environment
* Purpose:
  - **Functional**
     * **Positive testing** - does it work when it is supposed to work.
     * **Negative testing** - does it fail when it is supposed to fail.
  - **Performance / Load** - How does the software behave under a heavy load?
     * Lots of users / traffic
     * Large data sets
  - **Usability** - How intuitive (easy to use) is the software?
  - **Security** - How secure is the application?
  - **Compatibility** - How well does the software work with various hardware, O.S., network environments?
  - **Recovery** - How well does the system respond to hardware or software failures? Is it fault-tolerant?
  - **User Acceptance Testing (UAT)** - Does the software do what the customers want it to do?
     * Actual software users test the software to make sure it can handle required tasks in real-world scenarios, according to specifications.

### Further Learning

This guide has been a fundamental look at some of the functionality we can have in our testing. Please look at these docs for further information. 

- [React Testing Recipes](https://reactjs.org/docs/testing-recipes.html)
- [React Testing Library Intro](https://testing-library.com/docs/react-testing-library/intro/)
