# Queue

You're going to implement a Queue using JavaScript.

A Queue is a list-like structure resembling a real-life queue: think waiting in line for a movie. A Queue has Nodes or pieces of data it stores in order with newer items at the bottom of the stack and accessed last (first in, first out)

You'll need to use a JavaScript class for your `Queue` and give it a `items` property for storing data. Your `Queue` should have three methods:

1. `enqueue` for adding an item to the end of the queue
2. `dequeue` for returning and removing the item at the beginning of the queue
3. `peep` for returning the item at the top of the stack


## Requirements

- Implement a `Queue` class that
  - has an `items` property for storing the items in your stack
  - has a `enqueue` method for adding an item to the `items` property
  - has a `dequeue` method for removing and returning the first item in the `items` property
  - has a `peek` method for returning the first item in the `items` property (but not removing it)

### Example

Your stack should function roughly like this:

```js
let queue = new Queue()
queue.enqueue(1) // => [1]
queue.enqueue(true) // => [1, true]
queue.enqueue('hello world') // => [1, true, 'hello world']

queue.dequeue() // => [true, 'hello world']
queue.peek() // => true
```

## Bonus

### Add a length property

Add a `length` property that returns the number of items in the stack

### Process when you `dequeue`

Make it so that `dequeue` takes a callback and returns the result of passing in the top item of the stack

**Example:**

```js
let queue = new Queue()
queue.enqueue(1) // => [1]
queue.enqueue(2) // => [1, 2]
queue.enqueue(3)  // => [1, 2, 3]

queue.dequeue() // => [2, 3]
queue.dequeue((item) => item * 5) // => 10
```
