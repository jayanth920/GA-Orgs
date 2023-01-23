# Computer Science Fundamentals

## Learning Objectives
* Define computer science and discuss how it is useful for web developers.
* Define the word `algorithm`.


## Framing (10 min/ 9:10)

> "Computer science is a discipline that involves the understanding and design of computers and computational processes. In its most general form it is concerned with the understanding of information transfer and transformation. Particular interest is placed on making processes efficient and endowing them with some form of intelligence. The discipline ranges from theoretical studies of algorithms to practical problems of implementation in terms of computational hardware and software."

> ([Source](https://www.cs.mtu.edu/~john/whatiscs.html))

Computer Science fields include but are not limited to...
- Algorithms
- Data structures
- Mathematical logic
- Networking
- Computer Architecture
- Theory (Coding, Game, Graph)
- Artificial intelligence

> [This Wikipedia article](https://en.wikipedia.org/wiki/Outline_of_computer_science#Subfields) has a nice summary of CS sub-fields.

Many think of computer science as a necessary prerequisite to do anything programming-related with a computer and *really know what you are doing*, or that knowing a certain amount of computer science is some kind of litmus test for a *true programmer*. This attitude perhaps unnecessarily mystifies an already difficult subject and field of study and, at worst, makes the learning curve seem so steep that it is like a learning barrier.

### What do you already know about computer science?

Decades ago, it was absolutely necessary to have an understanding of computer science to do anything with a computer. In the beginning of consumer computing, home computers were essentially electronics projects for enthusiasts and hardcore hobbyists. The types of things you could do with a computer were very limited, and of interest to people with specific interests. Computers have come a long way since then, and are equipped with operating systems that attempt to make it as easy as possible for anyone to use a computer.

Something similar is true for programming, namely that not knowing any computer science is no longer a barrier to entry.

> An aside...
The field of computer science can sometimes feel like an elitist club.  This field has at times been discriminatory towards groups of people who may not have come from backgrounds where computers and computer programming were readily available to them.  Computer science classes often assumed hidden prerequisite knowledge that only some people had been exposed to. Take a few minutes to read this article. [When Women stopped coding](https://www.npr.org/sections/money/2014/10/21/357629765/when-women-stopped-coding)

You probably know more computer science than you even realize! 
> **110F,S Introduction to Computer Science.** 
The first course in computer science is an introduction to algorithmic problem-solving using the Python programming language. Topics include primitive data types, mathematical operations, structured programming with conditional and iterative idioms, functional abstraction, objects, classes and aggregate data types. Students apply these skills in writing programs to solve problems in a variety of application areas. No previous programming experience necessary. (Quantitative and Symbolic Reasoning.) Maximum enrollment, 26. The Department. [Hamilton College Intro to Computer Science](https://www.hamilton.edu/academics/departments/Courses-and-Requirements?dept=Computer%20Science).

We will go over all of these concepts within the first two weeks of the class!

Throughout this cohort, the computer science mini-lessons will offer an abbreviated version of a "Data Structures and Algorithms" course since that is usually one of the most important classes computer science students take.

### How Can We Use Computer Science? (5 min / 9:15)

**Computer science provides methods and concepts for evaluating what we are doing as programmers.** At the very least, understanding some computer science can simply deepen our appreciation for our discipline and our craft. Overtime we can learn to become more efficient with our code and start to think more like computer scientists.  (*Maybe I don't need to 3 nested for loops?*)

What does computer science have to do with modern web development? Not much, on the surface. As application developers, we can do our job well by following best practices, guided by our experience. It probably will not be often that you are interested in the time-complexity of a method you write.

Complexity and data structures are something **engineers** worry about, not developers, right?

Well, no. While it is true that we don't usually care much about optimization,
there are a few reasons why developers should care a bit about classic topics in
introductory computer science (CS).

1. Classic problems allow us to practice our problem solving skills.
2.  Being familiar with the tradeoffs inherent in choosing an algorithm or a data structure have direct parallels in choices you make writing your application code. Knowing some of these tradeoffs can help us write more efficient programs.  
3. Some of our colleagues will have CS degrees, and being able to understand the jargon and figures of speech they use helps us communicate with them. Perhaps most importantly, these colleagues will probably have some say in hiring you, since they're your prospective team. Nearly every technical interview touches on these topics to some extent.

### What is an algorithm?  (15 min / 9:30)

Take 10 minutes and read [this](https://www.economist.com/blogs/economist-explains/2017/08/economist-explains-24) article. Write an issue on this repository with a definition in your own words of what an algorithm is.

> An algorithm is, essentially, a brainless way of doing clever things. It is a set of precise steps that need no great mental effort to follow but which, if obeyed exactly and mechanically, will lead to some desirable outcome.

from [here](https://www.economist.com/blogs/economist-explains/2017/08/economist-explains-24).

In other words...

> An algorithm is just fancy term for a set of instructions of what a program should do, and how it should do it. In other words: it’s nothing more than a manual for your code.
[Vaidehi Joshi](https://medium.com/basecs/sorting-out-the-basics-behind-sorting-algorithms-b0a032873add)

Long division is a great example of a non-computer algorithm. If we follow the steps exactly, we will have the same exact output every time.

### Think-Pair-Share: Outline an Algorithm (5 min / 9:35)

Take 3 minutes to write down your day-initialization algorithm (i.e., your morning routine). Share it with a neighbor. How many steps are there? How do you or could you save time if you're in a rush?

### What makes a good algorithm? (5 min / 9:40)

When we work with relatively small inputs, using an efficient algorithm to solve a problem is not crucial. Instead, it is more important to have clean code, good interfaces, and bug-less applications. However, once we are working with huge inputs our code will get a lot slower. At that point, building efficient algorithms becomes really important.

When we write code, one of our main goals is to make that code execute quickly. If our code is inefficient, our sites will load slowly and users may leave. We also want to use as little memory as possible when we execute our code so that it is less expensive to host our sites. These are usually the two best measures of the effectiveness of an algorithm, their speed and their memory use.

### Next Time...
We will look at how to evaluate the efficiencies of different algorithms!

## Roadmap for CS Curriculum
* Algorithms: Big O-Notation and Algorithmic Complexity
* Algorithms: Binary Search + O n log n
* Data Structures: Arrays and Hash Tables
* Data Structures: Linked Lists
* Data Structures: Stacks and Queues
* Data Structures: Graphs and Trees
* Binary & How Computers Understand Code

### Thirsty for more?
* https://medium.com/basecs
* http://www.cs.usfca.edu/~galles/visualization/Algorithms.html
* https://www.khanacademy.org/computing/computer-science/algorithms
