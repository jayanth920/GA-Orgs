# Building a Bigger Project

## Learning Objectives
* Discuss the steps of planning an app
    - Wire frames
    - Pseudo Code
* Explain different strategies for organization
    - Function based
    - Class based
    - Model View separation
* Discuss coding best practices in a larger app
* Refactor and reorganize a working app

> One of the core truisms of software development is that as your code grows and requirements for the system that you are building change, additional logic will be added that is not yet present in the current system. In almost all cases, maintainability over the life of the code is more important than optimizing its present state

Obie Fernandez about POODR by Sandi Metz


## Planning (10 min / 3:00)

The biggest challenge we face as our programs grow larger is complexity. The larger the project, the more difficult it is to break down things down into the working parts. In order to combat this, we should designate time to plan for our projects. It may seem tempting to dive right into writing code, but I can assure you, *time spent planning is time well spent*! 

To combat scope creep in planning we want to abide by the mantra "[do less](https://www.youtube.com/watch?v=PKIpCPS-oZc)".  

We want to identify the "[minimum viable product (MVP)](https://www.youtube.com/watch?v=1FoCbbbcYT8)" and build the *smallest thing* that checks the most important boxes. As a rule of thumb, your MVP is probably too big - Do less!

When you plan what your MVP should be, think about how the users will be interacting with your site. A list of ways you want users to interact with your site are called *User Stories*. Each user story should be a feature of your site.  [More information on User Stories](http://www.agilemodeling.com/artifacts/userStory.htm) 

User stores should roughly follow this paradigm: "As a 'role', I can 'capability' so that 'receive benefit'".
Ex:
* As a user I should be able to upload photos so that I can see them in the browser
* Users can click a square and place an 'X'
* Students should be able to subscribe to which classes they are enrolled in.  

Once you have an idea of an MVP version of your product, you can start to think about ways you can scaffold your project up from there. We will talk about this more when we introduce Project 1, but you can categorize different levels of features you want to include that are not in your MVP. Think of these as *bronze*, *silver*, and *gold* features. Once you create your MVP, try to scaffold up to bronze, then scaffold up to silver, then if there is time, reach for the gold🥇!

#### Exercise (5 min / 3:05)
Spend 5 minutes with the person next to you outlining a **Tic Tac Toe** application like you would an essay. Keep in mind user events and the application's response to those events. If you have extra time, brainstorm bonus features. When complete, in the issue on this repository, create a comment with your ideas.

## Wire frames (5 min / 3:10)
In addition, we can draw out what we want our interface to look like before we actually create it. We can also diagram in that image what various parts of the interface will do.

With your help, I'll draw on the board what a Rock Paper Scissors App might look like. 

There are also design softwares out there that help with the design process.
* [Balsamiq](https://balsamiq.com/)
* [Canva](https://www.canva.com/create-a-design)
* [Vectr](https://vectr.com/)
* [Sketch](https://www.sketchapp.com/) - note: this one is paid, but GA has a discount code if you want it!

#### Exercise (5 min / 3:15)
Spend 5 minutes with the person next to you drawing what you want your Tic Tac Toe application to look like up on the board.

## Pseudo Code (10 min / 3:25)
The next step we can take is to format our outline to look more like code -- there are many ways to do this and it is totally up to you how you like to do it. 

*Pseudocode* is a way to describe the solution to a problem without writing code in full.
* Writing pseudocode forces you to think critically about the problem and break it down into *small steps*.
* It is usually written using a combination of English and logic. As a result, it is easy to read.
* It might display some features of the final product, such as indentation and code blocks.

Pseudocode should describe the entire logic of a problem so that programming becomes a task of translating pseudocode line by line into actual code.

Pseudocode isn't just about writing down the steps that you already know. It's a tool to help you work through the problem. Before we can write pseudocode to solve the problem, we need to know the problem.  

#### Identify the Problem

- What exactly are we trying to solve?
- What are we delivering?

#### Conceptualize

- Look at the big picture
- Avoid details
- Whiteboards and pen-and-paper can be useful tools here

#### Break It Down

- Break the conceptual models down into concrete steps / actionable items
- Identify risks (e.g., gaps in knowledge and technology)

#### Start Small, Stay Small

Write code using those concrete steps
- Verify that each step achieves what we want before continuing on (*Very important!*)
- If we do too much at once and things break, which they always do, we won't know what is causing the problem
- Humans thrive on easy wins and forward progress. Use this to your advantage.

#### [Here](https://github.com/ga-wdi-lessons/pseudocode) is a full lesson on pseudocode if you are interested in learning more!

#### Exercise (5 min / 3:30)
With your same partner from before, spend ten minutes turning your outline into pseudo code. You may not get all of they way through it -- don't worry! Submit what you have as a comment on the issue in this repository.

#### Check it out!
A version of pseudo code is in `outline.js`.

## Making code more readable (5 min / 3:35)
When you are working on a larger project, you probably want your code to be as readable and as modular as possible. There are a couple rules of thumb that may be helpful for you.

1. Be consistent -- if you are using semi-colons use them consistently, same is true for quotation marks (double or single?, es6

2. Make your code as close to normal speech as possible. Use clear variable names, comments, and clear logic so that the next person helping you can read it.

3. Keep your code DRY -- don't repeat yourself! That's why we write code in the first place!

4. Sandi Metz's rules (totally optional but helpful)
    - Classes can be no longer than one hundred lines of code.
    - Methods/Functions can be no longer than five lines of code.
    - More [here](https://robots.thoughtbot.com/sandi-metz-rules-for-developers)

5. Refactor your code! *Refactoring* refers to restructuring your code to make it more readable and less complex without changing the external functionality. First get something that works and then make it better afterwards!

Bonus tip:
6. Debugging:

* You may see in class that a lot of times we will ask you to console.log() your variables so that we can see what they are set as at a certain point. This is a great first step to identifying where your code is going wrong. See if your variable is actually set to what you expect it to be.
    
* [Rubber Ducking](https://en.wikipedia.org/wiki/Rubber_duck_debugging) is also a great strategy. It involves explaining your code line by line to a rubber duck! The rubber duck doesn't know anything about programming, so start at zero with your explanations! You can also try [this](http://duckie.me/) virtual rubber duck!

#### Structuring your code
The beauty of code is that there are so many correct answers and strategies in order to get to those correct answers. The way one person structures their code may be totally different than another person, and that is totally okay!

## Break (10 min / 3:45)

# Tic Tac Toe Example
In this section of the class, I am going to go different versions of code that does exactly the same thing -- it creates a Tic Tac Toe application.

## Algorithm (5 min / 3:50)
Instead of brute forcing the check to see if the game is over, we can do it algorithmically. We can keep track of each player's current tally of pieces in each row, column, and diagonal and if that tally is equal to three, they have won. We can do this using nested arrays. If this is unclear, do not worry! Its a bit outside the scope of this class. I used data attributes on the HTML tags to get the coordinates of the clicked on grid item, and I use those coordinates in order to update the player's score at the at position. 

## Functional Based (15 min / 4:05)
* If we look at the `vanilla/script.js` or the `pf-functional-vanilla/app.js` file you can see how the code is largely composed as a set of functions. I broke each chunk of logic into a singular function so that the code is easy to debug. Any issues that pop up can be more easy to find and isolate.  

Take a few minutes to go over the the code. 
Thinking big picture, what stands out? 
What do you understand? 
What is confusing?
How is this different from how you may have structured this app?

## OOP Approach (5 min / 4:10)
* This takes the same functionality of the code before but restructures it so that the code falls into methods within a class. Yes, there is JQuery here, but it is only used sparingly.  

Take a few minutes to look over this code. 

## MV Approach (5 min / 4:15)
* We can also structure the code so that it falls under two different classes -- one that stores all of the responses to user interaction called the *View* controller, and one that stores the data processing methodology called the *Model*. [Here](https://git.generalassemb.ly/ga-wdi-lessons/js-model-view-seperation) is a further breakdown on how this can look. MV approach is an example of *Separation of Concerns*, a concept very important to programming large applications.  

Model-View separation is an important concept in developing web apps.  Why might it be important to separate your model components from your view?

## Review (5 min / 4:20)
* What are two techniques we can use for early planning (before we start writing code)?
* Why is planning such an important step of development?
* What does "refactor" mean?
* What are some different application design strategies we can use?
* What are some good strategies for writing modular and clear code?
* Explain the difference between a functional approach and an OOP approach.
* What does Separation of Concerns mean in regards to programming?

## Break (10 min / 4:30)
