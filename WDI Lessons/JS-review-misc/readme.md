# Misc JS Schtuff & Debugging

## Learning Objectives

- Leverage the `.each` in jQuery to iterate through jQuery objects
- use the event object to trigger events based on specific keys being pressed
- Identify common errors in JS
- Seek and destroy these errors

## Framing
We had a bunch of stuff thrown at us yesterday. It's a whole lot. It's ok to not fully understand it today. We'll be covering some new content that we didn't quite get to in the last two lessons. Additionally we'll also talk about debugging and some common best practices. Let's get to some stuff that we weren't able to cover yesterday.

## `.each()`

[Go here for details on this part of the lesson](https://github.com/ga-wdi-lessons/jquery-dom#each)

## Key Events

[Go here for details on this part of the lesson](https://github.com/ga-wdi-lessons/js-events-callbacks#key-events-445---500-15-minutes)

## Debugging

## Reframing

This next portion of the class is about Javascript errors and what to do when you get one. We're only going to go over the parts that we're pertinent for useful debugging, but if you'd like to view the lesson plan in its entirety, look [here](https://github.com/ga-wdi-lessons/js-debugging)

### Errors

Errors don't just happen. Chrome doesn't just "break". In fact, it's not Chrome that's throwing the error at all: it's Javascript.

Whenever you run into an error, it's because somewhere in the code you're running or in Javascript's source code there's a line that says, "When this happens, throw an error."


```html
<!DOCTYPE html>
<html>
<head>
  <title>JS Errors</title>
  <script>
  bar
  console.log("Such is life.");
  </script>
</head>
<body></body>
</html>
```

The result:

```
Uncaught Error: Oh, noes.       index.html:6
```

The `console.log` doesn't happen.

## Error handling

You probably don't want an error to stop whatever your app's doing. You can tell Javascript, "If an error like such-and-such occurs, then do this specific thing instead of simply breaking and stopping." This is called **error handling**.

To handle an error you have to "catch" it (errors are "thrown", and must be "caught"). An "uncaught" error will cause the app to stop.

Here's an example of catching an error:

```html
<!DOCTYPE html>
<html>
<head>
  <title>JS Errors</title>
  <script>
  try{
    bar
  }catch(err){
    console.log("This is the " + err);
  }
  console.log("Such is life.");
  </script>
</head>
<body></body>
</html>
```

This time the `console.log` *does* happen. When you "catch" an error Javascript does whatever you tell it to do in response to the error, and then keeps on going. When you don't catch an error, Javascript stops.

Javascript is intentionally "trying" some code, and if the code throws an error, Javascript is waiting to "catch" it.

This `try...catch` system is something most programming languages have although it may use different verbs.

### And that's all we'll say about error handling for now...

Again, error handling is an advanced concept. Generally we don't recommend getting into it until everything else on your app is very well-polished.

## Console Debugging

### Preserve Log

If the "Preserve log" checkbox is checked in your Chrome console, uncheck it. When it's checked it doesn't clear error messages when you refresh your page. This can make your console get *really* ugly *really* quickly.

## Reading Error Messages (10 minutes / 0:40)

Let's say I get this error message:

```
Uncaught SyntaxError: Unexpected token {      controller.js:8
```

<details>

<summary><strong>Q. In what file and on what line is the error?</strong></summary>

> Line 8 of `controller.js`

</details>


### Click it!
Click on `controller.js:8` and it'll show you that specific line of code.


## Common Errors

### Framing ()

Javascript has [7 error types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types). 3 of them will account for 99% of the errors you encounter in this class, so we're going to focus on those.

<details>

<summary><strong>Q. What might these 3 words mean in the context of Javascript? <i>Syntax</i>, <i>reference</i>, and <i>type</i>.</strong></summary>

> Syntax: The way the code is actually written.

> Reference: The process of calling variables and functions.

> Type: The different kinds of data Javascript can handle, like strings and numbers.

</details>


### You Do: Getting Acquainted With Error Messages ()

> 15 minutes exercise. 5 minutes review.

https://github.com/ga-wdi-exercises/js-errors-practice

## How To Find Answers ()

If you can't fix an error within a reasonable amount of time &mdash; for instance, if the console says the error's on a line like this...

![Ugly error](ugly_error.jpg)

...turn to Google. Definitely do NOT try to slog through minified code.

## Google Fu
This is a skill, and a valuable one. Even if you *think* you're good at it, you'll get better. It takes practice and each day you'll get progressively better at crushing those errors.

Let's say we get the following error in the console...

```bash
Uncaught ReferenceError: robins_spatula is not defined
```

<details>
<summary><strong>Q. How should we go about Googling a solution to this error?</strong></summary>
<br/>

* Copy and paste the exact text of your error into Google, and then remove any words that are specific to your script.
* For example, instead of:
```
Uncaught ReferenceError: robins_spatula is not defined
```
...search for:
```
Uncaught ReferenceError: is not defined
```

* If you're looking for a specific phrase, put it in quotes.
* `is not defined` will return any page with the words `is`, `not`, and `defined`.
* `"is not defined"` will return any page with the exact phrase `is not defined`.

* Use `-` to exclude stuff.
* `ReferenceError -jquery` will return any page with `ReferenceError` and **without** `jquery`


* Use `site:sitename.com` to search within a site
* `site:stackoverflow.com ReferenceError` will search for pages with `ReferenceError` inside Stack Overflow only

</details>

## Stack Overflow

When the instructors look at things on Stack Overflow, we tend not to read the actual content of the question; we skip straight to the answers.

If the answer doesn't look promising, go to the next one. Repeat until the answers have very few upvotes.

If none of the answers are promising, go on to the next thing that turned up on Google.

You can get [badges](stackoverflow.com/help/badges) and [special privileges](stackoverflow.com/help/privileges) on Stack Overflow by asking good questions and giving good answers!

## Instructors

Failing all that, ask an instructor. Generally the first question we'll ask *you* is, "Did you get an error?" Having an error message makes things *much* easier to fix. We likely don't need to know anything at all about your app to fix the problem... but would love to learn about it if you have the time! :)

## You Do - Cash Register

Enough about errors, let's do an exercise to end the day.
Clone [this repo](https://github.com/ga-wdi-exercises/cash-register)

## Solving Problems
Break down the problem into smaller steps. In the case of Cash Register, your ultimate goal is to create an app where the user can get a total of the amounts they're inputting displayed and also have the amounts shown in the register.

How can we break this in to smaller steps?

1. Let's make sure of code executes only when the user submit the form.
2. Let's capture the amount the user inputs.
...

## (Bonus) You Do: Timer JS [TimerJS](https://github.com/ga-wdi-exercises/timer_js)
