# Delivery Notes

## Framing

- Ask a volunteer to explain what a real world Promise is outside of the context
  of code.
- After that, hand someone a marker and make them Promise to return the marker
  to you.
- Then say, "What happens if I go to write on the whiteboard with that marker
  before the developer has kept their Promise?"
- Try to write on the board with no marker.
- Then I say "I can't write on the board until the developer gives me back the
  marker, or tells me why they can't give it back to me (ie they lost it)".
- This demonstration helps illustrate what a Promise conceptually is.

Since they have been exposed to using promises during Project 1
`api.show().then().catch()`, start the talk by looking at that code form the
AJAX sequence that they used and mostly had in their own projects. [code in jquery-ajax-crud](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-crud/blob/solution/assets/scripts/books/events.js#L11
)

```js
// make API call
api.index()
  .then(ui.onIndexSuccess)
  .catch(ui.onError)
```

Ask them what is happening and what their understanding of it so far was.
Discuss the difference between

```js
doSomething()
  .then(function () {
    return doSomethingElse()
  })

doSomething()
  .then(function () {
    doSomethingElse()
  })

// wrong
doSomethingAsync()
  .then(doSomethingElse()) // incorrect
  .catch(doError)

// right
doSomethingAsync()
  .then(doSomethingElse) // correct
  .catch(doError)

// wrong
doSomethingAsync()
  .then(function () {
     doSomethingElseAsync()
   })
   .then(afterSomethingElse) // does not wait for doSomethingElseAsync to finish
   .catch(doError)

// right
doSomething()
  .then(function () {
     return doSomethingElseAsync()
   })
  .then(afterSomethingElse) // does wait for doSomethingElseAsync to finish
  .catch(doError)
```

Some of them made "callback hell" and nested `.then` in their projects so
discuss what might be happening and why.
Then describe and show them the documentation on how `$.ajax()` returns a
promise so we never had to write our own, and this lesson will be about writing
our own promises.

### Lab - read docs (10 - 15 minutes)

### Code-Along

- When doing the code along to transform `copy-json.js` to use promises, have
  the developers make a copy of the file in lib: `promisify-copy-json.js`

## Whiteboard diagrams

Potentially useful whiteboard diagram to show off the difference between the
`.then`'s being invoked and their callback functions being invoked.

![diagram](https://i.imgur.com/7mSV4r3.jpg)

![function scope](https://media.git.generalassemb.ly/user/16103/files/42511c00-2ae5-11e9-893a-bff257f40ef7)
