# Intro to TDD: Test Driven Development
## Testing with Mocha + Chai

## Exercise Objectives
- learn about test driven development and practice unit testing
- introduce Mocha and Chai for Javascript Testing using `expect` and `to.be` for boolean values
- pro skills: gain ways to think about code through test cases
- practice setting up and writing your own tests

## What is TDD? (5 mins)

![image](https://niden.net/files/2009-11-24-tdd.png)

- A development technique where you create tests before you write code.
- Makes you think about the requirements and design of your code BEFORE you code.
- **The Goal** of TDD is to write clean code that works.
- What are some downsides?

## What is Unit Testing?
- Testing certain functions and areas/units of our code.
- Checks to see if a function and its set of inputs returns proper values && handles failures.
- **The Goal** of unit testing is to help identify failures in our algorithms or logic.


## What is Mocha?
  - [Mocha](https://mochajs.org/) is a JavaScript test framework that runs on Node.js and in the browser.
  - good for asynchronous testing
  - Mocha does not include an assertion library so that's why we use.... Chai!

## What is Chai?
  - [Chai](http://chaijs.com/) is an assertion library that pairs well with any JS testing framework
  - Chai has 3 different styles of assertion: `assert`, `expect`, and `should`

# Directions

Follow along with the setup. You will have time to work on your own later.

## Setup:
1. Inside `palindrome` in the morning exercise folder, run `npm init`.
2. Press `enter` for everything except for `test command`, enter `mocha`. Mocha looks for tests in the `test` directory.
3. Check out `package.json`. It now has `test: mocha` under `scripts`
4. Install Mocha and Chai `npm install mocha chai --save-dev`
5. Check out `package.json`. You should see `devDependencies` have mocha and chai.

## Canary Test

1. Before we write real tests, let's make sure we installed everything properly with a canary test. Put this code in `test/test.js`:

```
//require Chai's expect
var expect = require('chai').expect;

describe('my first test weee', function(){
  it('should pass this canary test', function(){
    expect(true).to.eql(true);
  });
});
```

2. This code contains one **test suite.**
3. `Describe` is a Mocha keyword to define a test suite. It takes 2 arguments:
  - the test suite name
  - a function that holds the suite's tests.
4. Each test is defined in the `it` function, which also takes 2 arguments:
  - the name of the test
  - the actual body of the test
5. Run the test `npm test` to run Mocha. You should see:

  ![image](https://i.imgur.com/mciRFdF.png)

6. CONGRATS YOUR FIRST TEST OMG!!
7. This means our Mocha and Chai are properly installed and working together.

## I'm PUMPED let's make some real tests now.

We're going to write and test a `palindromes` function in `js/palindrome.js`. But first let's write a test.

1. We'll build on top of our canary test.
2. Require the `js/palindrome.js` file to test and assign it to an `isPalindrome` variable.
  ```
  var isPalindrome = require('../js/palindrome.js');
  ```
3. Add another test under the canary test. We're going to pass "mom" as an argument and if the function is written properly, we `expect` this test to return `true`.

  ```
  it('should return true for argument mom', function(){
    expect(isPalindrome('mom')).to.be.true;
  })
  ```
4. Now let's write some code in `js/palindrome.js`.

  ```
  module.exports = function(word){
    return true;
  };
  ```

**Test-driven Design:** The idea that tests should drive the design of the code-- the tests should raise many questions and help us uncover hidden details, different test cases.

We barely wrote any code and already we can think about our function in new ways. Could the user input something else besides `word`? Multiple words? A sentence? Let's consider these cases and write tests for them.

5. Change `word` to `phrase` to be more descriptive.

6. YOU DO! Write more tests for:

* :ballot_box_with_check: `mom` is a palindrome
* :white_medium_square: `dad` is a palindrome
* :white_medium_square: `dude` is not a palindrome
* :white_medium_square: `mom mom` is a palindrome
* :white_medium_square: `dad mom` is not a palindrome

7. Run your test after writing each one. You should get `failing` for `dude` and `dad mom`.
8. Update our `js/palindrome.js` code cause our current code is terrible:

  ```
  module.exports = function(phrase){
    return phrase.split('').reverse().join('') === phrase;
  };
  ```
9. Run `npm test` again and if you've written your tests correctly you should get:

  ![image](https://i.imgur.com/x86cuhJ.png)

10. CONGRATS YA DID IT AGAIN!!!!!!

## Create Negative Test cases

We have beautiful tests that pass. But we have to consider edge cases, invalid inputs... things that could make our function break.

So consider: What happens if the argument is an empty string? What if it's blank? Are those still palindromes?

1. YOU DO! Write tests to account for these cases and run your tests to see them pass:
  - an empty phrase is not a palindrome
  - a phrase with just 2 spaces is not a palindrome
2. Your current code will fail these tests:

  ![image](https://i.imgur.com/fM3C8xR.png)

3. Now modify your javascript to make the tests pass. Use your programmer brain to solve this one! Once you made your code work you should have all 8 tests passing:

  ![image](https://i.imgur.com/S7umqwt.png)

## Exception Test

What if we don't pass an argument at all? How can we catch that? With exception tests!

  ```
  it('should throw an exception if argument is missing', function(){
    var call = function() { isPalindrome(); };
    expect(call).to.throw(Error, 'Invalid Argument!')
  });
  ```

Our test will fail again. So back to modifying our function to account for undefined arguments! Add this to your function, before the return statement:

  ```
  if(phrase === undefined)
    throw new Error ('Invalid Argument!');
  ```

![image](https://i.imgur.com/aFsozJI.png)

## Recap

- We were able to use Mocha and Chai in tandem to create automated tests.
- We considered many edge cases and wrote tests BEFORE we fine-tuned our function to account for those.
- What other tests can you run for more edge cases? What do those edge cases look like?

## Other Applications for Mocha/Chai
- Test Asynchronicity
- Test Node.js Applications
- Test Express Applications
  - routes
  - databases
  - models
- Client-sided tests
  - DOM and jQuery
  - Angular (from directives to UI)

## Recommended Resources
 - Go back to Unit 1 homeworks and exercises that use tests.
 - [What is Unit Testing?](https://code.tutsplus.com/articles/the-beginners-guide-to-unit-testing-what-is-unit-testing--wp-25728)
 - [RSpec: Ruby Testing](http://rspec.info/)
 - [Jasmine: JS Testing](https://jasmine.github.io/)
 - [Istanbul: JS Testing](https://istanbul.js.org/): creates coverage reports
 - [Karma: JS Testing](https://karma-runner.github.io/1.0/index.html): a lightweight server that manages loading/running of tests in different browsers.
