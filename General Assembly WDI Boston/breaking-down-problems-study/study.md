# Breaking Down Problems Study

## Required Reading

Read the following article: [10 Steps to Solving a Programming Problem](https://codeburst.io/10-steps-to-solving-a-programming-problem-8a32d1e96d74)

Then, read through the sections below and answer the questions. 

## Coding Logic

As developers, we are tasked with writing step-by-step instructions for a computer
to carry out to complete a given task or set of tasks. When thinking about how
to break down these instructions into steps for our application, we can focus on
two particular questions:

1. What information do I need to **keep track of** here?
2. What **functionality** should my application have?

Things we **keep track of** will likely be variables or data stored in a database.
The **functionality** our app needs will turn into the functions or methods we
write to use throughout the application.

### Break It Down: MBTA

Problem: Write a function that takes two lines and stations, and returns how
many stops are in between them given an intersection point.

We **could** start off by looking at an MBTA map to try to visualize this.

![Image of Official MBTA Map](https://media.git.generalassemb.ly/user/16103/files/09df8180-b79a-11e9-96e3-d20f890daace)

...But that's a little overwhelming. Let's break this down into the three lines,
pretending they run parallel to one another.

![Whiteboard drawing of three parallel lines to represent each train line. There are dots along the lines to represent the stations.](https://media.git.generalassemb.ly/user/16103/files/bd964080-b79d-11e9-96f3-dc56fd895619)

Hm, they're starting to look like lists of stations. How might we represent a
list in code?

If you screamed **ARRAY** - you'd be right!

![Similar whiteboard image as previous image, but with start and stop stations labeled.](https://media.git.generalassemb.ly/user/16103/files/c4bd4e80-b79d-11e9-88cb-42875d23b420)

Now, given a starting line and station, and an ending line or station, we should start
thinking about how we can determine "where" we are in our array of stations.

Since we are using arrays, we might look into [how we can find the indexes](https://lmgtfy.com/?q=find+index+of+an+element+in+array+js) of a
given stop on a given line.

As humans we can count how many stops there are in between stops. What information
could we give our application so that it **calculates** the number of stops?

![Similar whiteboard image as previous image, but with the path from start to stop stations labeled and numbered.](https://media.git.generalassemb.ly/user/16103/files/27631a00-b79f-11e9-9ab3-a8b8c22d8735)

### Question 1

Break down the MBTA problem into the two categories outlined in the intro:

1. What information do I need to **keep track of** here?
2. What **functionality** should my application have?

Replace `your answer here` below with at least two items for each category:

```
Keep track of: your answer here
Functionality: your answer herer
```

## Breaking It Down: Tic Tac Toe

Whether it's a small function like MBTA or a big project like a Tic Tac Toe
browser game, we should be asking ourselves those two major questions:

1. What information do I need to **keep track of** here?
2. What **functionality** should my application have?

If we are keeping track of things, that generally will map to certain
data points or values we want stored.

For Tic Tac Toe, we can break this down:

- **Keep track of** who the current player is, X or O
- **Keep track of** if the game is over and who won
- **Keep track of** moves played on the board so far

Once we know **what**, we will want to think about **how** we will keep track
of these things. We could use regular variables, the `store` module, or the API
database, depending on what the API offers us. Consider what type of data you
might use for each of the points above, and how you would change it if you
need to.

For functionality, we can think about what our application **should do**. This
means we can start thinking about how to break up our code into modular
functions or methods to use throughout the logic.

For Tic Tac Toe we might need:

- **Functionality:** respond to user clicks by placing move on board
- **Functionality:** check for a winner
- **Functionality:** switch player from X to O, O to X
- **Functionality:** start and restart game

Once you're at this point, you should also start asking yourself questions
about what your application will need in order to complete a certain function.

For instance, for "start and restart game" we might ask ourselves:

- What do we need for the game to start, or be playable?
- What is the starting value of our stored data?
- What should my user do to trigger this refresh?
- What methods (jQuery or otherwise) or libraries would be good to use here?

### Question 2

Using the above section as a guide, brainstorm how you might expand on
this for your own Tic Tac Toe project.

Consider this requirement: "respond to user clicks by placing move on board"

What functionality will our application need to accomplish that requirement?
What data/information will it need to keep track of?

Replace `your answer here` below with at least two items for each category:

```
Keep track of: your answer here
Functionality: your answer herer
```
