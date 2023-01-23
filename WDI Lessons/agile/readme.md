# User Stories/MVP/Agile Software Development

## Learning Objectives
- Define Software Development Life Cycle
- Provide a general overview of both Waterfall and Agile
- Identify the components of a good user story.
- Explain what a Kanban Board is, and why we use it.
- Define what a backlog is and how they are implemented in developer workflow.
- Create user stories for existing web applications.
- Differentiate MVP from application.
- Generate user stories in order to create proof of concept for MVP(minimum viable product)

## Framing

What is the best way to approach building our projects? When we're working on a new software project, what can we do to set ourselves up for success?

These are questions that developers have been asking themselves for a long time. There are many different answers, which we'll discuss here:

## Software Development Life Cycle

The software development life cycle (SDLC), also referred to as the application development life-cycle, is a term used to describe the process for planning, creating, testing, and deploying an information system. This process can take many forms, one of which is the waterfall methodology:

![waterfall](https://upload.wikimedia.org/wikipedia/commons/e/e2/Waterfall_model.svg)

Waterfall is a linear approach to software development. Project stages are executed sequentially and you get to the final product - fully developed and tested - at the very end of the process. This was the status quo for a long time and still works well in some cases. You need to know EXACTLY what you want the end goal to be. i.e. you know: what to build and who to build it for and those two things don't change.

Except that things always change: requirements change, customer needs change, the market changes.

In 2001, a meeting of influential developers addressed the shortcomings of the traditional Software Development Life Cycle, resulting in the Agile Manifesto.

## Iterative Delivery

The cornerstone of Agile development is iterative delivery -- releasing new versions and updates regularly.

Consider the [evolution of Facebook over the years](http://www.pcmag.com/feature/320360/10-years-later-facebook-s-design-evolution).

Think about this in comparison to software that is released in annual versions.

## Agile Software Development

Agile Software Development is a group of software development methods in which requirements and solutions evolve through collaboration between self-organizing, cross-functional teams. - Wikipedia

### [Agile Manifesto](http://agilemanifesto.org/)

> "The Agile movement is not anti-methodology, in fact many of us want to restore credibility to the word methodology. We want to restore a balance. We embrace modeling, but not in order to file some diagram in a dusty corporate repository. We embrace documentation, but not hundreds of pages of never-maintained and rarely-used tomes. We plan, but recognize the limits of planning in a turbulent environment. Those who would brand proponents of XP or SCRUM or any of the other Agile Methodologies as "hackers" are ignorant of both the methodologies and the original definition of the term hacker." —Jim Highsmith, History: The Agile Manifesto

**Individuals and interactions over processes and tools:**
- self-organization and motivation are important, as are interactions like co-location and pair programming.

**Working software over comprehensive documentation:**
- working software is more useful and welcome than just presenting documents to clients in meetings.

**Customer collaboration over contract negotiation:**
- requirements cannot be fully collected at the beginning of the software development cycle, therefore continuous customer or stakeholder involvement is very important.

**Responding to change over following a plan:**
- agile methods are focused on quick responses to change and continuous development.

> about the items in bold, while there is value in the items on the right, we value the items on the left more.

> TL;DR: TRY SOMETHING react to feedback

## [Scrum Methodology](http://scrummethodology.com/)

Scrum is currently one of the most popular implementations of the Agile Manifesto. Much of Scrum's popularity is due to its simplicity.

There are three roles in Scrum:
1. **Product Owner**: The person with a vision of the final product who can communicate the big picture needs and wants of the product.
2. **Scrum Master**: The person tasked with fasciliating the work organizing and prioritizing work, facilitating work and addressing any issues blocker the team, and communicating between the product owner and the team.
3. **Team Members**: The development team who build the product (3-9 people; includes programmers, engineers, designers, architects, etc)

The Scrum Methodology is focused on quick iterations known as sprints which tackle work from a Backlog maintained by the Product Owner and the Scrum Master. The items in the Backlog are anything that take the teams time and can generally be categorized as adding a feature or fixing something (whether that be bug squashing or refactoring). Sprints are generally a week or two long. Before a Sprint there is a time-boxed Sprint Planning meeting where the top items in the backlog are assigned as sprint tasks. The Team Members and Scrum Master then go about the work of breaking down tasks and assigning responsibilities for the sprint.

Each day of the sprint, the team and scrum master meets for a short meeting (frequently held standing to encourage brevity) to discuss progress made, plans, and potential obstacles.

At the end of the sprint, the team and scrum master meets and should have some feature(s) be ready for deployment (meaning written, tested, and approved) and to be shown to the product owner. The team, scrum master, and product owner meet to discuss the product of the last sprint and finally there is a meeting to plan the next sprint and the cycle continues. Having these short work cycles allows tight feedback loops, constant delivery of ever improving product, the ability to respond quickly to changing product demands, and very importantly, the ability to work focusing on a specific goal. Changing the direction of the project on a per iteration basis if need be.

### What does this mean for you?

For our second project, we are missing a couple of key aspects to fully implement scrum -- those elements being time and other people. That being said, we can still take cues from the work flow:

- Try filling all of the roles yourself but being careful to be in just one mindset at at time. Take the role of the manager to build the backlog, then take the role of scrum master in prioritizing, and finally work on implementation as a team member.
- Structure your own sprints in even smaller increments. Maybe even 1 or 2 days. Perhaps shorter! Get something done in the sprint and iterate on it

When planning these sprints, set concrete goals for yourself. I'm going to achieve X by 12:30 so that I can get started on Y after lunch. I will finish Y by close of business so that I can start on Z. You could scale even further than that.


### Think, Pair, Share: Waterfall vs Agile/Scrum (10 minutes)

Take a moment to read through each of the following questions, then discuss with a partner:

1. When does it make sense to use the waterfall SDLC?
2. When would you favor using the agile SDLC?
3. Can you think of any companies that adhere to waterfall principles?
4. Which companies come to mind when thinking of the agile methodology?
5. Can you list ways conventional companies are adjusting to the agile movement?

## MVP Minimum Viable Product

### T&T(4m)

- With what we've talked about, discuss with your neighbor what you think we mean by minimum viable product.

Honestly there's a lot of different meanings for minimum viable product. [This video does a great job describing an approach](https://www.youtube.com/watch?v=1FoCbbbcYT8)

So what does MVP mean in this class? It's not so different. Build something that works (sorta), that you can get feedback from, and subsequently iterate on.

For the scope of this course. Think of a bronze, silver and gold model. Silver is really what you're trying to make. But if you fall short on time you have your bronze you can fall back on. If you don't have enough to do, you could go to your gold model. Your MVP should be on that bronze/silver line... ish

## User Stories, how do we figure out our MVP?

In order to work towards our MVP developers write user stories. User stories are essentially small granular features for your application.

User stories have:
- role
- goal
- reason

As a `<role>` I should be able to `<goal>` so that `<reason>`

User stories should be granular and succinct.

specific and implementable user story
```
As a user, I should be able to message other users so that I can communicate with my family
```

general user story that does not provide insights as to how the goal should be met
```
This app should have a really good social networking engine.
```

### MVP Practice: Instagram

What is the most essential feature for this product? What's the MVP?

What are bronze, silver, and gold features?

### User Stories Practice: Instagram

Now that we have our MVP outlined for Instagram, lets write some User Stories:

Remember: every user story needs a `<role>`, `<goal>` and `<reason>`. 

Write a user story for all your MVP features from above.

### GitHub Projects

User stories are great, but wouldn't it be nice if there was a great place to store and track all of them? There is! The "Projects" tab of every GitHub repository. There are other tools just like it out there (like Trello), but we recommend this one.

Create a repository for your Project 2 if you haven't already. Once you do:

- Create an new Project inside your new repository for Project 2.
- Create a card with a possible user story for your Project 2.

### Backlog

A backlog is a list of features or technical tasks which the team maintains and which, at a given moment, are known to be necessary and sufficient to complete a project or a release

- if an item on the backlog does not contribute to the project's goal, it should be removed;
- on the other hand, if at any time a task or feature becomes known that is considered necessary to the project, it should be added to the backlog.

Its a set of work that is targeted to achieve successful delivery of a project or a release of a product. Often times, it boils down to a bunch of user stories.

### The Icebox

The icebox is literally where all your ideas go that you don’t currently plan to build. It doesn’t mean you can’t thaw them out later, but it represents what you should be investigating further. The backlog, however, is things you definitely plan to build

## Wireframes, what will our MVP look like?

A wireframe is a simple blueprint/template/sketch/visual outline of the components of your website. Though there are some great digital wireframing tools out there, all you really need to make a wireframe for your personal use is a piece of paper and something to write with.  
- READ ME: [Wireframe Basics](https://www.gliffy.com/uses/wireframe-software/)
- Curious to learn more about wireframes? Ask a UXDI student!
- [Lucid Chart](https://www.lucidchart.com/) is a great free(mium) tool for diagramming. It is very useful for both wire framing as well as making ERDs

## Closing
We have just had a crash course in the some of the basics involved in the development process, project management, and idea development.

The important thing for this course is how we use these tools, principles and methodologies to help us plan for, and work efficiently on our projects.

## Homework
The only homework from this lesson is to use what we've learned today and apply it for our second project.

## Resources
- [Write Better User Stories](http://codesqueeze.com/the-easy-way-to-writing-good-user-stories/)
- [Balsamiq Mockups](https://balsamiq.com/)
- [Prototyping with Marvel](https://marvelapp.com/)
- [Agile Manifesto Principles](http://agilemanifesto.org/principles.html)
