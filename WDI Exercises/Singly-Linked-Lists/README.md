# Linked Lists

You are going to implement a Singly Linked List using JavaScript.

Linked lists are linear collections of data that consist of nodes with data and pointers. Singly linked lists have nodes that store the value of the node and a pointer to the next node.

You will need to build out 2 ES6 classes, a `Node` class and a `SinglyLinkedList` class. Your `Node` class should have a `data` or `value` property to store the value of the node and a `next` property to reference the next node in the list. Your `SinglyLinkedList` class should have `head` and `length` properties: the `head` refers to the last item in the list and the `length` refers to the length of the list.

Once built, it should be possible to create a new list using your `SinglyLinkedList` class, add nodes to the list and get nodes by their index.

## MVP

**Requirements**
- Implement a `Node` class that has `data` and `next` properties
- Implement a `SinglyLinkedList` class that
  - has `head` and `length` properties
  - has an `insert` method that creates a new node, sets the new node to the `head` and increments the `length`
  - has a `get` method that takes an index and returns the value stored in the `data` property of the `Node` at that index in the linked list.

## Bonus

Pick any (or all) of the following bonus requirements.

1. Implement a `remove()` method that will remove an item from the list at a particular index
2. Implement a `map()` method that takes a callback and returns a new linked list after invoking the callback on each node in the list
3. Implement a `forEach()` method that takes a callback and invokes it on each node in the list
4. Implement a `slice()` method that takes two indices and returns a new list containing the nodes starting and ending with the two indices.


