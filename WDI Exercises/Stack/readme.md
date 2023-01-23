# Stack

You're going to implement a Stack using JavaScript.

A Stack is a list-like structure resembling a real-life stack. A stack has Nodes or pieces of data stored in order with newer items at the top of the stack accessed first.

You'll need to use a JavaScript class for your `Stack` and give it a `items` property for storing data. Your `Stack` should have three methods:

1. `push` for adding an item to the top of the stack
2. `pop` for returning and removing the item at the top of the stack
3. `peek` for returning the item at the top of the stack


## Requirements

- Implement a `Stack` class that
  - has an `items` property for storing the items in your stack
  - has a `push` method for adding an item to the `items` property
  - has a `pop` method for removing and returning the first item in the `items` property
  - has a `peek` method for returning the first item in the `items` property (but not removing it)

### Example

Your stack should function roughly like this:

```js
let stack = new Stack()
stack.push(0) // => [0]
stack.push('A') // => ['A', 0]
stack.push(true) // => [true, 'A', 0]

stack.peek // => true

stack.pop // => true
```

## Bonus

### Add a length property

Add a `length` property that returns the number of items in the stack

### Process when you `pop`

Make it so that `pop` takes a callback and returns the result of passing in the top item of the stack

**Example:**

```js
let stack = new Stack()
stack.push(0) // => [0]
stack.push(1) // => [1, 0]
stack.push(2) // => [2, 1, 0]

// `pop` without a callback returns and removes the first item
stack.pop() // => 2
// `pop` with a callback removes the first item and passes it to the callback,
// returning the result of the callback (in this case, 1 times 5)
stack.pop((item) => item * 5) // => 5
```
