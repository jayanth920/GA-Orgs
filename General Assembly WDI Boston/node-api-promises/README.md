[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Using Promises with the Node API

## Prerequisites

- [ga-wdi-boston/node-api](https://git.generalassemb.ly/ga-wdi-boston/node-api)

## Objectives

By the end of this, developers should be able to:

- Explain the advantages of using promises over callbacks.
- Read node documentation using callbacks.
- Rewrite node scripts using callbacks as scripts using promises.

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `npm install`.

## Drawbacks to Callbacks

Asynchronous code necessitates callbacks.
But dealing with lots of callbacks can be tricky:

- Callbacks can be messy when they're nested: "callback hell". See
  [`lib/copy-json.js`](lib/copy-json.js).
- Each callback will have to handle it's own errors if necessary.
- In complex programs, it will be hard to tell in what order callbacks fire.

Fortunately, there's a better way: Promises.

### Lab: Research the Promises API

Promises are objects that represent steps in an asynchronous process.
As of 2016, they are natively supported in Node.

Take a few minutes to read the API documentation on
 [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
Note function signatures and argument types as you read.
What arguments does a promise take when it is constructed?

1. [Promise Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#Syntax)
1. [Promise.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Methods_2)

### Using a Promise

An instance of a `Promise` will `reject` and trigger `catch` or `resolve` and
trigger `then`.

```js
new Promise((resolve, reject) => {
    if (/* logic for if promise should reject or resolve */) {
      reject(/* BOO return error */)
    } else {
      resolve(/* YAY return data */)
    }
  })
  .then(/* success callback */)
  .catch(/* failure callback */)
```

Usually our `Promise` is defined within another function for clarity.

```js
const returnsAPromise = function () {
  return new Promise((resolve, reject) => {
    if (/* logic for if promise should reject or resolve */) {
      reject(/* BOO return error */)
    } else {
      resolve(/* YAY return data */)
    }
  })
}

returnsAPromise()
  .then(/* success callback */)
  .catch(/* failure callback */)
```

### Using Promises Instead of Callbacks

Promises offer several advantages over callbacks.

- Promises, like callbacks, make asynchronicity explicit.
- Promises, unlike callbacks, clarify the order of execution.
- Promises are easier to read than callbacks.
- Promises can simplify error handling.

```js
const fs = require('fs')

// remember that callback is something you write, in this case to perform some
// processing on parsed JSON

const readJSON = function (filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      return callback(err) // what's going on here?
    }
    callback(null, JSON.parse(data)) // what if JSON.parse errors out?
  })
}

module.exports = readJSON
```

What are some weaknesses in this code? And the following?

```js
const fs = require('fs')

const readJSON = function (filename, callback) { // 👀 here
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      return callback(err) // pass the error from readFile
    }
    try {
      data = JSON.parse(data)
    } catch (error) {
      return callback(error) // pass the error from JSON.parse
    }
    callback(null, data) // don't pass the error, since we should have caught it
  })
}

module.exports = readJSON
```

What about this instead?

```js
const fs = require('fs')

const readJSON = function (filename) { // <-- look here
  return new Promise((resolve, reject) => {
    fs.readFile(filename, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

readJSON('./example.json')
  .then((data) => {
    return JSON.parse(data)
  })
  .then((pojo) => {
    pojo = modifierFunc(pojo) // modify object
    return pojo // explicitly returns pojo
  })
  .catch((err) => { // handle error conditions
    console.error(err)
  })
```

That's too verbose. This is better:

```js
const fs = require('fs')

const readJSON = function (filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

readJSON('./example.json')
  .then(JSON.parse) // what can we surmise about .then?
  .then(modifierFunc) // modify object --> returns what callback(prev) returns
  .catch(console.error) // handle error conditions
```

## Rules for Promisifying Your Code

### 1. Only ever pass a function as a call back. NEVER pass a function invocation

<details>
<summary>Why?</summary>
The difference is `.then()` _expects_ a callback. If you invoke the function,
the `.then` gets a _value_ NOT a function to invoke later.
</details>

```js
const json = "{'key': 'value'}"

getIndex()
  .then(JSON.parse)
  // vs
  .then(JSON.parse(json))
```

### 2. ALWAYS consider WHAT is being returned from each block of a promise chain

Be explicit if you need to

<details>
<summary>Why?</summary>
Because some methods don't return what you expect them to. If you're ever
unsure, BE SURE by making it explicit!
</details>

### 3. Safety third

<details>
<summary>Why?</summary>
'cause it should never be first or second.
</details>

### 4. Indent once at the start, and then lineup your `.then`s and `.catch`s

<details>
<summary>Why?</summary>
Because formatting is important to humans.
</details>

```js
startingFunction()
  .then(JSON.parse)
  .catch(console.error)
```

### 5. Never nest `.then`s--return out, and continue with the next `.then` in-line

```js
startingFunction()
  .then(JSON.parse)
  .then((pojo) => {
    functionThatReturnsAPromise(pojo)
      .then(dontDoThis) // <-- creates promise hell!
  })
  .catch(console.error)
```

<details>
<summary>Why?</summary>
Because nesting `.then`s defeats the purpose of promises

```js
startingFunction()
  .then(JSON.parse)
  .then((pojo) => {
    // return the Promise to keep the chain going!
    return functionThatReturnsAPromise(pojo)
  })
  .then(doThisInstead) // <-- narrowly avoids promise hell!
  .catch(console.error)
```

</details>

### Code-Along: Promisify `copy-json.js`

### Lab: Promisify `hey-yall.js`

### Lab: Promisify `randomizer.js`

## Additional Resources

- [Promise - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Promises](https://www.promisejs.org/)
- [Promises and Async/Await](https://javascript.info/async)
- [Common Promise Mistakes](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)
- [wbinnssmith/awesome-promises: A curated list of useful resources for JavaScript Promises](https://github.com/wbinnssmith/awesome-promises)
- [How to escape Promise Hell — Medium](https://medium.com/@pyrolistical/how-to-get-out-of-promise-hell-8c20e0ab0513#.4wtj9hlvw)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
