![GALOGO](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67) 

# Intro to Unit Testing in Express and React with Jest

### Why is this important?
*This workshop is important because:*

- Automated testing can save tons of time and money! 
- Jest is a new, modern testing framework brought to us by Facebook

### What are the objectives?

*After this workshop, developers will be able to:*

* Explain what Unit testing is in relation to other kinds of testing
* Have a basic idea of what should be tested, versus what shouldn't
* Set up Jest in an Express environment
* Write a Unit Test using Jest, and run it from the command line

## Testing

There are several types of tests! 

1. Unit Tests 
2. Integration Tests
3. E2E Tests
4. Regression Tests
5. Smoke Tests
6. Alpha Tests
7. Beta Tests
8. System Tests 
9. Stress Tests

More on [types of testing](https://www.geeksforgeeks.org/types-software-testing/)

### What *not* to test

- Libraries. We can assume Express works! 
- Very strait forward implementations of library methods. 
  for example: 
    ```js
      router.get('/', function(req, res, next) {
        res.json({flights: flights});
      });
    ```
    this method is just a combination of router.get and res.json. If we assume these are working, all we end up testing if we test this route, is if "flights" is what it is supposed to be. 

### What to test:

- ALL of our own custom code! 


### Unit Testing

Unit Tests are the most basic kinds of tests, and generally the best place to get started with testing. With a unit test, we ignore dependencies entirely and test a single function _on its own_. 

The best candidates for Unit Tests in a REST API are helper methods, which is what we will do in this lesson. 

A Unit Test _should never_: 
  - Need to hit the database. If you need data, just use hardcoded data!
  - Use HTTP. We are not testing our network connection! 

A Unit Test _should_: 
  - test _edge cases_. What should happen if nothing is returned? Or if there is an error?

### Part I: Testing Express

Please clone the [starter code](https://git.generalassemb.ly/SEIR-teams-materials/unit-testing-flights)

Here we have a simple API that serves up some flight data. In it, we have a helper method, `getConnectingFlights`. This is a perfect candidate for a Unit Test. 

The method should check all flights, and return an array of flights that leave from the arrival airport of the original flight, as long as the flight leaves after the arrival of the first flight. We will write a test to ensure that. First we have to set up Jest: 

## Jest Setup

```bash
npm install --save-dev jest 
mkdir __tests__
touch __tests__/flights.test.js
```
Then, in our package.json, under scripts:

`"test": "jest __tests__/*.test.js"`

We should now be able to run our tests with `npm run test`! 

Of course, we don't have any tests yet. To write a test, we need to learn Jest's syntax, which is nearly the same as every other testing framework. It uses "describe", "test", and "expect". 

```js
describe('someMethod()', () => {
  test('should do the thing its supposed to do', () => {
  	
    expect({}).toMatchObject({});
  });
});
```

Let's drop that in our `flights.test.js` file and run `npm run test`. Cool! Our first passing test!

Let's break it down: 

`describe` tells us what method we are testing. 
`test` describes in english what exactly we are testing about this particular method
`expect` is a matcher. It's an english sounding way to check if something is what it should be. 

Other matchers: 

```js
expect(data).toEqual({one: 1, two: 2});
expect(a + b).not.toBe(0);
expect(n).toBeNull();
expect(n).toBeDefined();
expect(n).not.toBeUndefined();
expect(n).not.toBeTruthy();
expect(n).toBeFalsy();
expect(z).not.toBeNull();
expect(z).toBeDefined();
expect(z).not.toBeUndefined();
expect(z).not.toBeTruthy();
expect(z).toBeFalsy();
expect(value).toBeGreaterThan(3);
expect(value).toBeGreaterThanOrEqual(3.5);
expect(value).toBeLessThan(5);
expect(value).toBeLessThanOrEqual(4.5);
expect(shoppingList).toContain('beer');	
expect(compileAndroidCode).toThrow();
expect(compileAndroidCode).toThrow(ConfigError);
```

[Complete list](https://facebook.github.io/jest/docs/en/expect.html)

### Writing Tests

Our first test should be that this method does what it's supposed to in a normal situation. Let's write that test together!

**Note:** We are going to need to change where we put this test so we can import it! Right now this method is not exportable! Let's put it in it's own file called `flights_helper.js`!

OK great! That was the hard part. Now lets write some tests for _edge cases_. First, write a test for what should happen if _no_ connections are found: 


&#x1F535; **Activity**
```
- In the same describe clause write a test that the method 'should return an empty array if there are no connecting flights'
- 10 min
- Slack your code in a comment!
```  
Are there any other edge cases we should be testing for? If so, let's test those too! 


## Part II: Testing React 

Unit testing is more or less the same on the front end and back end. We are testing single functions with no dependencies, so whether or not that function runs on the front or back end, and in what framework doesn't matter a whole lot. It's just different in regards to set up. 

### Setting up Jest in React

Since both React and Jest are made by Facebook, they work together quite simply and easily. Especially if you are using `create-react-app`! 

**Step 1:**

`npm i jest`

`npm i react-test-renderer`

**Step 2:**

App.test.js comes with a test in it already! Let's start the server and run that test: 

`npm start` 

and in a new tab: 

`npm test`

**Step 4:** 

Write more tests!

Please Clone the [starter code](https://git.generalassemb.ly/SEIR-teams-materials/E2E-testing-React-Jest-Puppeteer)

&#x1F535; **Activity**
```
- Clone our starter code which has a React App with Jest already set up.
- npm install 
- npm start
- npm test
- 5 min
- thumbs up when done
``` 

Let's check out the unit test in the code. Once again we have factored our function out into a helper file. This makes our code more modular, and makes it much easier to test. Let's write another test:

&#x1F535; **Activity**
```
- Write a test that confirms that for inputs that are NOT 1, 1 our method returns false!
- 5 min
- thumbs up when done
``` 

### Resources
- [Sandi Metz's Magic Tricks of Testing](https://www.youtube.com/watch?v=URSWYvyc42M)
- [Jest docs](https://facebook.github.io/jest/docs/en/getting-started.html)
- [Test the components themselves with Enzyme.js](https://git.generalassemb.ly/SEIR-teams-materials/testing-in-react-with-jest-enzyme)
