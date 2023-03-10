# JavaScript Promises

## Introduction

Welcome to the Promise land! (sorry) You have been sneakily using promises this whole class, but today, we will illuminate what exactly a promise is, and shed light on best practices to use while playing with promises.

## Objectives:

* Describe the anatomy of a Promise
* Utilize Promises to manage asynchronous operations
* Correctly use a Promise chain
* Handle errors while working with Promises

## Why Promises?

Promises are an alternative to directly using callbacks. Promises allow us to write asynchronous code that looks like synchronous code. Promises create the illusion of returning values or throwing errors from within our callbacks. While promises do not replace callbacks--promises depend on callbacks--they provide a layer of abstraction between you and callbacks, enabling you to prevent callback hell.

### Anatomy of a Promise

![alt text](diagram1.png "Anatomy of a Promise")

### Role of a Promise

A promise represents a value that will be available for use in the future, 
but is not available now. Think of it like an IOU for the actual value. Once
it **resolves**, it will pass the value it's standing in for to a function you
provide for it to invoke. Like an IOU, it can also "bounce", or **reject**, and 
fail to provide the value it's standing in for. Promises also provide a way to 
deal with this possibility.

## Using a Promise

A promise takes an anonymous function with two parameters; `resolve` and `reject`.
The promise resolves when `resolve` is called, and is rejected when `reject` is 
called.

The value passed to `resolve` will be the argument passed to the resolution 
handler you register by calling the promise's `then` method. Likewise with the 
value passed to `reject` and the rejection handler registered by calling 
the promise's (or a chained promise's) `catch` method.

### `Promise.then` and `Promise.catch`

These two methods on every `Promise` object are the primary means of interacting
with them. This section covers what they have in common.

They can be used the same way. Each takes one argument, a function. Here is a
usage example featuring an arbitrary promise, `somePromise`:

```js
somePromise.then(function(resolutionValue) {
    console.log("somePromise resolved with value " + resolutionValue);
    doSomethingWith(resolutionValue);
});
```
```js
somePromise.catch(function(rejectionValue) {
    console.error(rejectionValue instanceof Error ?
        rejectionValue :
        "somePromise rejected with value " + rejectionValue);
});
```

#### `.then`

`then` is a method on every `Promise` object. It is used to register an event
handler for the promise's "resolve" event. When the promise resolves, the handler
is invoked and passed the value the promise resolved to as its argument.

#### `.catch`

`catch` is a method on every `Promise` object. It is used to register an event
handler for the promise's "reject" event. When the promise rejects, the handler
is invoked and passed the value (usually an `Error` object) the promised rejected
with as its argument.

## Labs 1 & 2

* Write a JS file for node that `requires` promise_lesson.js

`lab.one` contains a pre-made promise that will always resolve. Call its then method with a handler function that prints its result.

`lab.two` contains a pre-made promise that will always reject. Call its catch method with a handler function that prints its result.

## Group Activity

Pair with the person next to you. One of you writes code to create a Promise. The other writes code to operate on the promise.

At least one of each:
* then
* catch

### More `then` and `catch`

Promises allow us to reclaim the `return` and `throw` keywords. We can return a value from our `then` handler, and that value will be used to fulfill the promise returned by `then`. It will be available as a parameter to the following then handler.

We can throw errors from our `then` handler, and they will be used to reject the promise returned by `then`. It will be available as a parameter to the nearest catch handler down the chain.

#### More `then`

There is a little more to `then` that this. It returns a new promise that resolves
(or rejects) based on whether the upstream promise resolves or rejects, and what
goes on in its resolution handler. Here is a code demonstration:

```js
somePromise.then(function(resVal) {
    console.log("somePromise resolved!");

    if(Math.random() > .5) {
        return "The promise returned by `then` will now also resolve.";
    } else {
        throw new Error("The promise returned by `then` will now reject!");
    }
}).then(function(rV) {
    console.log("The promise returned by the previous call to `then` resolved!");
});
```

`Promise.then` returning a new promise is what enables us to build 
**promise chains**. A chained promise resolves only if its upstream promise
resolves AND the resolution handler does not throw an error. Otherwise, it
rejects. This is important to understanding the next section.

#### More `catch`

Like above, there's a little more to `catch`. Since `then` lets us build promise 
chains, and chained promises reject if their upstream promise rejects, `catch`
can be used at the end of a promise chain to catch all upstream rejections. Here 
is a code example:

```js
somePromise.then(function(rV) {
    if(Math.random() > .5) {
        return "Resolve 1!";
    } else {
        throw new Error("Reject 1!");
    }
}).then(function(resVal) {
    if(Math.random() > .5) {
        return "Resolve 2!";
    } else {
        throw new Error("Reject 2!");
    }
}).then(function(resolutionValue) {
    if(Math.random() > .5) {
        return "Resolve 3!";
    } else {
        throw new Error("Reject 3!");
    }
}).catch(function(err) {
    console.error(err);
});
```

### Arrays of Promises

A tricky aspect of promises is iterating over an array of them. Looping doesn't work.

Enter `Promise.all`.

It lets you provide a handler to be called once all async functions have finished. `Promise.all` collapses an array of promises into a single promise, which resolves once all its constituent promises have resolved.

??? but what if you're not waiting for them all to finish? `Promise.race` collapses an array of promises into a promise as well, but this one resolves once the first constituent promise resolves.

## Labs 3 & 4

Call `Promise.all` on the array contained in `lab.three`, then compute the mean of the numeric results.

Call `Promise.race` on the array contained in `lab.four`, then log the numeric result.

# Further Reading

[Promise on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[We Have a Problem with Promises](http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)
