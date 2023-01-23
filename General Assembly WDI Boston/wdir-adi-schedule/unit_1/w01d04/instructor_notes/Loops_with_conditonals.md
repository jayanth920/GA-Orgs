<hr>
Title: Booleans, Conditionals & Loops<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
Creator: Kristyn Bryan <br>
Modified By: Karolin Rafalski <br>
Topics: Intro to Conditionals & Loops <br>
<hr>

# Setup
1. Navigate to your `student_examples` folder for today.
2. Create a file called `loops_and_conditionals.js` for practicing your work.
3. Open this file in your text editor. Add a console.log in your file run the code in your terminal `node loops_and_conditionals.js`.

<hr>

## Lesson Objectives
_After this lesson, students will be able to:_

- Use conditionals and booleans
- Write a simple if statement
- Write an if / else statement
- Explain why we would use 'control flow' in our programs
- Write a for loop with a conditional inside

<br>
<hr>

# Booleans
Comparisons that result in `true` or `false`

```javascript
7 === 10;
// this will result in false

17 === 17;
//this will result in true
```

[MDN Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

# Conditionals
Comparison operators can be used in conditional statements to compare values and take action depending on the result:

## If statement
If the condition is `true`, then the code will be run between the curly braces `{}`.

```javascript
const name = "wdir";

if (name === "wdir") {
  console.log("Our class is: ", name);
}
```

## if/else
If the condition is `false`, then the code between the `else{}` will be run.

```javascript
const name = "GA";

if (name === "wdir"){
    console.log("Our class is: ", name);
} else {
  console.log("That's not my class!");
}
```

## If / else if / else
When we use an `else if`, the program will look at the condition for the `if` and then the `else if` before it checks for an `else` statement.

```javascript
const name = "GA";

if (name === "wdir"){
  console.log("Our class is: ", name);
} else if (name === "GA"){
  console.log("That's our school");
} else {
  console.log("That's not my class!");
}
```
<hr>
[MDN Conditionals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

# Loops

Loops allow us to do something repeatedly

```js
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step' , step);
}
```

# Put it to Practice
Let's use all of these together to solve a problem!

## The Problem
If we list all natural numbers below 10, find the sum of all of the even numbers.

## Pseudo Code
Let's start out by pseudo-coding:

We should write down what we think we need to do or what the questions is asking us to do in **human language** - not computer language.

## Activity
Take ~ 5 minutes to write some pseudocode of how we can get the sum
- Post your pseudocode in slack

## Let's Work Through it Together
Note: You may have worked through this in different steps. That's ok! There are many different approaches. The key is to break it down into small steps and test each one.

## Start Small
First we have to 'get' the numbers 1 - 10.
We could console.log each one separately:

```javascript
console.log(1)
console.log(2)
//etc.
```

What's another way?

## Loop!
```javascript
for (let i = 0; i < 10; i ++ ){
  console.log(i);
}
```

Now we have a way to 'get' the numbers 1 - 10

## Control Flow
We have to figure out how to determine if one of the numbers is even. This is where *Control Flow* comes in:

We can choose to do something depending on the case.

_For this problem:_
- If it's even, let's do something with it...
- If it's odd, let's ignore it.

With control flow, you can decide what to do in different instances.

## The Power of If Statements in Control Flow
This is where **if statements** come into play! We can tell our program to do something *if* it meets certain criteria.

```javascript
for (let i = 0; i < 10; i ++ ){
  if (i == 1) {
    console.log("the number is 1")
  }
}
```

Note: You don't _need_ an else statement. If your _else_ statement would just be a comment like:

```js
if (true){
  console.log('awesome');
} else {
  // do nothing
}

```

Then you can omit the else statement.

## Remember Booleans?
That `(i == 1 )` will result with a Boolean.

- It either results in `true` or `false`.

### True
If it results in `true`, your application will the code between the curly braces.

### False
What happens when it results in False? Right now, nothing.

We can change the code to do something when the **if** evaluates to `False`:

```javascript
for (let i = 0; i < 10; i ++ ){
  if (i == 1) {
    console.log("the number is 1")
  } else {
    console.log("--not 1--")
  }
}
```

## If Statements in Loops
Let's do something other than just log while we're in our loop.

- Let's create a variable in our application that will hold the sum of all the numbers that go through a loop:

```javascript
let sum = 0;

for (let i = 0; i < 10; i ++){
  sum += i;
}
```

## Power of Conditionals
Let's use Conditionals to find only the even numbers:

```javascript
for (let i = 0; i < 10; i ++) {
  if (i % 2 == 0 ) {
    console.log(i, "is an even number");
  }
}
```

Let's combine what we've used to **add the even numbers** only.

```javascript
let evenSum = 0;

for (let i = 0; i < 10; i ++) {
  if (i % 2 == 0 ) {
    evenSum += i;
  }
}
```

<hr>

## Activity:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.


## Hungry for More?
<details><summary>Fibonacci</summary>
Fibonacci is a classic example in coding. Its name will appear often. In its essence, it is adding numbers together in a specific sequence. Don't let the inherent 'mathyness' or fancy name scare you. You've got this!

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

<br>

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

<br>

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

Fun fact! Fibonacci appears often in nature. [Check it out](xhttp://jwilson.coe.uga.edu/emat6680/parveen/fib_nature.htm)  

Start with some pseudoecode
</details>
