![GA Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Graphs

## Learning Objectives

Developers will be able to:

- Define graphs
- Understand the difference between undirected and directed graphs, and use cases for each
- Describe the differences between implementation with adjacency lists vs. adjacency matrices
- Understand the time complexities of operations in graphs
- Describe how DFS vs. BFS works in graphs
- Implement a graph using an adjacency list

## Setup

- Clone down this repo, cd into it, install dependencies and open it.

```
$ git clone <paste ssh url>
$ cd graphs
$ npm install
$ code .
```

- Work on the exercises in [`./graphs.js`](./graphs.js)
- Run tests

```bash
$ npm test
```

## What are Graphs?

A graph is a collection of nodes, which store data, and edges, which represent relationships or connections between nodes.

![Graph with A, B, C, D, E nodes](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-data-structures/9-Diagram.png)

Graphs are commonly used to represent networks. They are concerned with the multiple relationships between entities, like the friend connections in a network of users, or the possible routes between locations on a map, or routers and ethernet cables.

Facebook has [used a graph data structure](https://m.facebook.com/nt/screen/?params=%7B%22note_id%22%3A10158791578747200%7D&path=%2Fnotes%2Fnote%2F&refsrc=deprecated&_rdr) to organize its data since 2013. Items like users, check-ins, and comments would be stored as objects, also called “nodes.” The relationship between those items — “liked by” or “friend of” — are represented as “edges” that connect the objects. A graph structure is the clearest and most efficient way for Facebook to store this data, return it to users, and make it accessible to developers.

Graphs can get very large! As seen in [this](https://danieldcm.medium.com/wikipedias-articles-graph-analysis-320d8630a46b) article analyzing wikipedia pages.

![1_6gjTXzvn9Rd81J8Li6_CPg](https://media.git.generalassemb.ly/user/37934/files/8e4b2080-850d-11ec-8f6d-dd8e447f52bf)

**❓ You know what’s represented by the nodes and edges in Facebook’s graph. What would the nodes and edges in Google Maps’ graph represent?**

**❓ Trees and linked lists also have nodes. How are trees and linked lists different from graphs based on what you've seen so far?**

## Undirected vs. Directed

Because graphs are not hierarchical like trees or ordered like lists, how do we show relationships between nodes on a graph?

We describe the edges in a graph as undirected (a mutual connection between nodes) or directed (pointing from one node to another). Undirected and directed edges define how we categorize graphs.

### Undirected

An undirected graph has edges that describe a mutual connection between two entities. An example of this would be a LinkedIn connection -- the relationship is mutual and the directionality of it does not matter.

### Directed

On the other hand, a directed graph has edges that point from one entity to another. An example of this might be following someone on Twitter.

The direction of these relationships matter, and thus the edge between two nodes points from one to the other.

![Directed graph](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/graphs/directed-graph.png)

**❓ Which type of graph would we need to represent liking someone's Instagram post?**

**❓ Which type of graph would we need to represent all the available flight routes between destinations?**

## Implementing Graphs

There are two main ways that we can implement graphs in code.

### Adjacency List

An adjacency list uses a collection of arrays for each node, and is the more commonly used implementation. In this implementation, a graph is represented with a collection of arrays for each node.

In code, an adjacency list looks like the example below. Each key-value pair represents a node. The key is the value of the node, and the value is an array of edges to other nodes:

```js
const graph = {
	A: ['B', 'E'],
	B: ['A', 'C', 'D', 'E'],
	C: ['B', 'D'],
	D: ['B', 'C', 'E'],
	E: ['A', 'B', 'D'],
};
```

**❓ What would this look like drawn out in visual form?**

**❓ Is the graph represented here a directed or undirected graph?**

### Adjacency Matrix

An adjacency matrix is represented by a two-dimensional array. In an adjacency matrix, a graph is represented by a two-dimensional array (an array of arrays). Each subarray is a node, and the values in the node represent edges to other nodes. Conceptually, this is what it looks like:

![Adjacency Matrix](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/graphs/numbers-and-letters.png)

In code, it looks like this, where a 1 represents an edge and a 0 represents a lack of an edge:

```js
const graph = [
	[0, 1, 0, 0, 1],
	[1, 0, 1, 1, 1],
	[0, 1, 0, 1, 0],
	[0, 1, 1, 0, 1],
	[1, 1, 0, 1, 0],
];
```

**❓ What would this look like drawn out in visual form?**

**❓ The adjacency matrix graph above is an undirected graph. There’s a secret clue in the graph that can help you figure that out — can you tell what it is?**

## Time Complexity

The algorithmic complexity of a graph's operations depends on how the graph is implemented.

| Operation      | Adjacency List | Adjacency Matrix |
| -------------- | -------------- | ---------------- |
| Search         | O(N)           | O(1)             |
| Insert a node  | O(1)           | O(N^2)           |
| Delete a node  | O(N+E)         | O(N^2)           |
| Add an edge    | O(1)           | O(1)             |
| Delete an edge | O(E)           | O(1)             |
| Memory (Space) | O(N+E)         | O(N^2)           |

> Here, N represents a node and E represents an edge; both values have an impact on the complexity of adjacency lists and matrices.

**❓ If the time efficiency of Search operations needed to be prioritized, which implementation would you choose?**

**❓ Why do you think Adjacency Matrices have such slow insertion/deletion operations for nodes?**

## Breadth-First and Depth-First Search

Just like with any data structure, we need to be able to find the data we're looking for in a graph. As with binary trees, another structure that is a collection of interrelated nodes, we can traverse a graph using either Breadth-First or Depth-First searches.

### Breadth-First Search (BFS)

Breadth-first search tries to stay as close to the starting node as possible before going on to the next level of nodes. The search "ripples out" from the starting point and checks all the first-degree connections before moving on to second-degree and higher levels of connection.

A breadth-first search has one big advantage to recommend it -- it will find the shortest path between two connected nodes, as we're traversing the closest connections first.

If you know the value you're looking for is closer to the starting node, choose BFS as it will be faster.

<details>
	<summary>Bonus: BFS Pseudocode</summary>
	
- Create a queue (this can be an array) and a variable to store the values of nodes visited
- Place the starting node in the queue
- Loop as long as there is anything in the queue
	- Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
	- If there are any neighbors of the node dequeued that *have not yet been visited* - add each of them to the queue and mark as visited
- Return the variable that stores the values

</details>


### Depth-First Search (DFS)

Depth-first search follows one chain of related nodes until you reach the end of the graph, then returns to the starting node and begins again. You go as deep as possible down one path before backing up and trying again.

It's like walking through a maze. You explore one path, hit a dead end, and go back and try a different one.

Depth-first searches lend themselves well to a recursive approach, as you want to continue traversing while a node has connections, and explore all the possible connections before returning to the starting point. If the graph is very wide and not too deep, DFS is generally more efficient than BFS at finding the desired element.

Basically we are visiting a node and then recursively traversing all of the left side then all of the right side.

<details>
	<summary>Bonus: DFS Pseudocode</summary>
	
- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
	- Push the value of the node to the variable that stores the values
	- If the node has a left property, call the helper function with the left property on the node
	- If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable
- Return the array of values

</details>

### BFS vs. DFS Use Cases

Think about trying to find someone on Facebook. If you wanted to find a specific person, you’d approach it differently than if you were just browsing for new friends. Say you wanted to find your long-lost best friend from kindergarten. As you comb through every possible person with their name, Facebook is using DFS to return those results.

But if you wanted to find people to connect with on Facebook, you might use Facebook’s “People You May Know” feature. In this scenario, Facebook is using BFS to show you people with whom you have things in common — mutual friends, where you live, or where you work.

## Essential Questions

1. When would you use a graph data structure over a binary tree or a linked list? 
1. What is the difference between a directed and undirected graph? When would you use each? 
1. When would you choose an adjacency list graph implementation over an adjacency matrix? 

## Graph Implementation

To complete this exercise, you will be implementing a Graph Class in [`./graphs.js`]('./graphs.js) using an Adjacency List.

Your Graph Class will need the ability to add Nodes and Edges. If you'd like to implement any bonus methods, such as deleting Nodes and Edges or searching, feel free!

## Additional Resources

- Practice building a graph [visually](https://visualgo.net/en/graphds?slide=1)
- Common graph interview [questions AND solutions](https://medium.com/@codingfreak/graph-data-structure-interview-questions-and-practice-problems-22d5cd488855).
- Some graph data structure [interview question topics](https://medium.com/@codingfreak/graph-data-structure-interview-questions-and-practice-problems-22d5cd488855).
- Visualizations of [breadth-first search](https://www.cs.usfca.edu/~galles/visualization/BFS.html) and [depth-first search](https://www.cs.usfca.edu/~galles/visualization/DFS.html) in a graph structure.
- [More interview questions](https://stackabuse.com/graph-data-structure-interview-questions) about graphs that don’t necessarily deal with coding.

A popular graph-related interview question covers Dijkstra’s shortest path algorithm, a method for traversing a graph. The algorithm itself gets complicated, but you should familiarize yourself with the concept:

- An [overview](https://medium.com/basecs/finding-the-shortest-path-with-a-little-help-from-dijkstra-613149fbdc8e) of the algorithm
- A [visualization](https://www.cs.usfca.edu/~galles/visualization/Dijkstra.html) of the algorithm

## Attributions

- [myGA on Graphs](https://my.generalassemb.ly/activities/403)
- [Interview Cake](https://www.interviewcake.com/concept/javascript/graph?)
