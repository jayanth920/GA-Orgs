![GA Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Balancing Binary Trees

In our last lesson, we heard about the efficiency and power of binary trees. But, similar to us humans, binary trees are only at their best when things are balanced. In this lesson, we’ll learn about how to unlock the power of binary trees by balancing them!

## Learning Objectives

- Students Will Be Able To:
	- Discuss the importance of balance for a binary tree
    - Identify when a binary tree is unbalanced
    - Explain what an AVL tree is
    - Explain RR, LL, RL, and LR imbalances


---
## Roadmap

* Setup
* Binary tree balance
* AVL trees
* Node heights
* When to calculate node heights
* AVL imbalances
* Work on the exercises in breakout rooms
* Go over the solutions to the exercises

___

## Setup

* Clone down the starter code, install dependencies, and cd into project:
```
    $ git clone <paste link here>
    $ cd balancing-binary-trees
    $ npm i
```

* run the tests
```
    $ npx mocha
```

___

## The Importance of Balance for a Binary Tree

When we talk about time complexity for the basic insert, search, delete algorithms that come with our data structures, we often talk about logarithmic time complexity being the holy grail. 

To better understand this, we should first understand what ``O(log(N))`` time complexity means. 

At its core, ``O(log(N))`` time complexity means that running time of the algorithm grows in proportion to the logarithm of the input size. But understanding a common attribute of a ``O(log(N))`` algorithm may be a better way of understanding it. With a ``O(log(N))`` algorithm, you have a choice of the next element on which to perform some action on, and you only need to pick one of those choices.

Divide-and-conquer algorithms are considered logarithmic because you can cut your search area in half after every iteration.

Let's take a look at this binary tree:

![Balanced-Tree](https://imgur.com/mgUWM3w.png)

This binary tree is considered **balanced** because all of the branches end within one level of each other. 

If we were looking for the value of 7 in this binary tree, we will see that the search will be considered ``Θ(log(N))``. Let's take a look at why that is

* We will start at the root node with a value of 5
* Since 7 is greater than 5, we move our walker to the node with a value of 10
    * We have effectively cut out the entire subtree that begins with the node with a value of 3
* Since 7 is less than 10, we will now move to the left, and find 7 there!
    * Although we found what we were looking for, we have also cut out the entire subtree that begins with the node with a value of 12

Now let's take a look at very clearly imbalanced binary tree:

![Imbalanced Tree](https://imgur.com/xaIgsqm.png)

* In this case, we will see that every node is on the right property of its parent node
* If we were to search for the node with a value of 5 here, we would have to traverse the entire binary tree
* Thus causing our time complexity to be ``O(N)``

**❓ What data structure does the above image remind you of?**

___

## AVL Trees

Although the above case is technically a binary tree, we will see that its unbalanced nature causes any of the insertion, search, and delete algorithms to be ``O(N)``. 

Wouldn't it be great if your binary tree was always balanced, so that our insertion, search and delete operations would always be ``O(log(N))``? This is where the concept of self-balancing trees come in - of which an AVL tree is an example of. 

``AVL Trees`` (named after the creators Adelson-Velsky and Landis), are the first type of self-balancing trees to be invented!

An AVL tree balances itself by automatically calculating the difference in heights — the number of levels — between the left and right sides:

Difference is 0 or 1: The tree is balanced!

Difference is more than 1: The tree is unbalanced.

In our balanced binary tree below, the left side has a height of 1, while the right side has a length of 2. The difference is only 1, which makes it balanced!

![balanced binary tree](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/balancing-binary-trees/english/4-6-balanced.png)


**❓ Review the code below to determine if it's a balanced or unbalanced binary tree. Hint: You might want to draw it out to visualize the height!**

```json
{
    "value": 4,
    "left": {
        "value": 1,
        "left": {
            "value": -2,
            "left": null,
            "right": {
                "value": 3,
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right": {
        "value": 5,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 7,
            "left": {
                "value": -2,
                "left": null,
                "right": null
            },
            "right": {
                "value": 8,
                "left": null,
                "right": null
            }
        }
    }
}
```
<!--- Balanced: difference in right and left subtrees is never greater than one -->
___
# Heights of Various Nodes

Remember that the height of a node is the greater of the node's left and right heights, plus 1. The height of a leaf node (one that doesn't have any child nodes) is 1.

In many implementations of AVL trees, it is common to store a ``height`` property on each node. This way, you can just check the height of a node's left property against the height of a node's right property to check for an imbalance! 


In code, that would probably look like:

```js
node.height = 1 + Math.max(node.left.height, node.right.height);
```

However, let's assume we are on a node that looks like this:
```js
{
    height: 1,
    left: null,
    right: null
}
```

The code that we have would yield an error: ``TypeError: Cannot read property 'height' of null``. 

This means that the ``null`` data type does not have a ``height`` property. 

So how can we fix our code to account for nodes that have null left or right properties? We take advantage of the fact that in Javascript, ``null`` is considered to be 0 when used for arithmetic opertions. Meaning ``null + 1`` would evaluate to 1!

With this knowledge, the height of any node could be calculated as:

```js
node.height = 1 + Math.max(node.left && node.left.height, node.right && node.right.height);
```

You can imagine that recursion would lend itself well here in calculating the maximum heights of the left and right subtree of a given node.

**❓ Let's revisit our binary tree code from earlier. What is the height of the right subtree?**
```json
{
    "value": 4,
    "left": {
        "value": 1,
        "left": {
            "value": -2,
            "left": null,
            "right": {
                "value": 3,
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right": {
        "value": 5,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 7,
            "left": {
                "value": -2,
                "left": null,
                "right": null
            },
            "right": {
                "value": 8,
                "left": null,
                "right": null
            }
        }
    }
}
```

<!--- The height is 3.  -->


## When to Calculate the Heights of Nodes

When does a binary tree become imbalanced? 

Since we are working on creating automatically balanced binary trees, a good time to check the heights of the nodes would be after we've inserted a node. That way, if an insertion operation has created an imbalance (i.e., the difference in height between the target node's left and right subtrees is greater than 1), we can fix it on the spot and restore the efficiency of our data structure. This is why you might hear AVL trees described as "self-balancing," because they automatically balance themselves as they grow. 

If we didn't check node heights after each insertion, you might imagine that depending on the size of an unbalanced tree, the amount of rotations required to fix it might become expensive to process. 

## Imbalances

There are four scenarios for what AVL tree imbalances look like, and for each of them, we have different fixes which we'll accomplish by rotating, or moving nodes until balance is restored. This might sound simple, but rotating is actually not as straightforward as it seems. Let's investigate eaach type of imbalance and how we might fix it. 

### Left-left Imbalance

Rotate everything to the right!

![Left-left imbalance](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/balancing-binary-trees/english/11-1-left-left.png)

### Left-right Imbalance

Swap the outer two nodes, then rotate everything to the right.

![Left-right imbalance](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/balancing-binary-trees/english/11-2-left-right.png)

### Right-right Imbalance

Rotate everything to the left!

![Right-right imbalance](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/balancing-binary-trees/english/11-3-right-right.png)

### Right-left Imbalance

Swap the outer two nodes, then rotate everything to the left.

![Right-left imbalance](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/balancing-binary-trees/english/11-4-right-left.png)

### Visualizing Rotations

Let's check out this [visualization tool](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html) from the University of San Francisco. You can add nodes in the "insert" input in the upper-left part of the screen and watch as the tree balances itself!

## Essential Questions

**❓ What problem do self-balancing binary or AVL trees solve?**

**❓ How do we determine if a tree is balanced or not?**

**❓ What is an example of a left-right imbalance, and how would we fix it?**

## Interviews

In a job interview, you may be asked to check if a binary tree is balanced or balance an unbalanced tree. (That would be a pretty hardcore interview!)

Here’s what those problems could look like:

- [Convert a normal tree to a balanced one.](https://www.geeksforgeeks.org/convert-normal-bst-balanced-bst/)
- [Determine if a binary tree is balanced.](https://www.geeksforgeeks.org/how-to-determine-if-a-binary-tree-is-balanced/)
- [Whiteboard an AVL tree.](https://www.youtube.com/watch?v=rbg7Qf8GkQ4)

## Additional Resources
* AVL Tree [visualization](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)
* Tree balancing interview prep: [here](https://www.geeksforgeeks.org/convert-normal-bst-balanced-bst/) and [here](https://www.geeksforgeeks.org/how-to-determine-if-a-binary-tree-is-balanced).
* [Whiteboarding an AVL tree](https://www.youtube.com/watch?v=rbg7Qf8GkQ4&).
