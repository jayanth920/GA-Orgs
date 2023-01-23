---
title: Reverse a Linked List
type: Homework
duration: "1:00"
creator:
    name: Charlie Drews
    city: NYC
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Reverse a Linked List Homework

> ***Note:*** _This can be a pair programming activity or done independently._

## Exercise

You are going to write a method to reverse a linked list. For example, say you have a linked list with 10 nodes:
```
[Node 0] -> [Node 1] -> ... -> [Node 8] -> [Node 9] -> null
```

The head is `[Node 0]`. The last node points to null, because there is no next node after the last one. If you reverse this linked list, the result would be:
```
[Node 9] -> [Node 8] -> ... -> [Node 1] -> [Node 0] -> null
```

The new head, after reversing the list, is `[Node 9]`, and now the old head, `[Node 0]`, points to null because it is now the last node.

You can use the linked list you created for the [Linked List Lab](https://github.com/ga-adi-nyc/linked-list-lab) as your starting point, so that can be the linked list you reverse.

#### Requirements

Write a method that takes the **head** of a linked list as input (e.g. `[Node 0]` in the example above) and reverses the list by iterating through each node and modifying them as needed. The method should reverse the list _in place_, meaning you will modify the list directly without making a whole new copy of the list.

Your method does not need to return anything, but by the end the head input should be updated to refer to the _new_ head of the list after it has been reversed.


**Bonus:**
- In addition to the required _iterative_ approach, implement another method that reverses the linked list _recursively_.
- Create your own implementation of `ArrayList`
  - Note that the process of inserting a node in an ArrayList is much more complicated than in a Linked List!
  - If you don't want to complete this bonus, at least think about _why_ insertion is more complicated for ArrayList - what's different and why? What advantages do you get with ArrayList that make it worth this extra effort?

#### Starter code

You can copy your code from the [Linked List Lab](https://github.com/ga-adi-nyc/linked-list-lab) into your fork of this repo and use that as starter code. Or, you can start from scratch and re-implement a linked list as more practice.

#### Deliverable

Submit your code via pull request from your fork of this repo. Do not submit this assignment to the Linked List Lab repo. If you worked with a partner, only one person needs to submit a pull request, but be sure to include both names in the pull request title.
