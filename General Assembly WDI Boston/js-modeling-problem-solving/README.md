![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

## Objectives
* Start a project using a proven methodology.
* Create User Stores for a project.
* Create a Domain Model, conceptual model, for a project.
* Implement the project. 


## Prerequisites
- Javascript Objects

## Overview 

Let's start to solve a problem from scratch. So, often we hear from students **"I just don't know where to start"** solving a problem. There are some methodologies we can use to attack a problem and get going on a project.

We're going to review a set of techniques that are typically used in the software industry to solve problems. 

**It's very, very important that we do this kind of work before we start coding!** We need to have some kind of grasp on how the project should be broken up and work together to form a common model of the software and to agree on the meaning of the terms we are going to use throughtout the project. We are going to us a **ubiquitious langauge** as defined in **Domain Driven Design**.

> ##### Defintion: ubiquitious language
> Set of terms used to decribe some part of a system. 
> The meaning of these teams MUST be agreed on by all 
> the team members. This greatly reduces confusion. **Domain Experts**, **Management** and **Tech Team** must avoid technical jargon.

#### History and Background

User Stories started in the [Extreme Programming](https://en.wikipedia.org/wiki/Extreme_programming) community. This was a community that came into existance in the 90's as a response to the most typical process used to manage projects at that time, the **Waterfall process**.

In **Waterfall process** a group of people, not developers, typically business analysis created a big document that contained every requirement along with all it's detail. 

This big document was then *"Thrown over the Wall"* to people that created the project's software. The software architects would create a software design and *"Throw it over the Wall"* for the coders to implement.

This didn't work very well on most projects and their was a high rate of failure in projects. 

## Agile vs. Waterfall 
#### Waterfall

_The waterfall model is a sequential design process, used in software development processes, in which progress is seen as flowing steadily downwards (like a waterfall) through the phases of Conception, Initiation, Analysis, Design, Construction, Testing, Production/Implementation and Maintenance._- [Wikipedia](http://en.wikipedia.org/wiki/Waterfall_model)

<p style="text-align:center">
  <img src="https://i.imgur.com/yJMVO91.png">
</p>

Waterfall is a good example of a linear methodology. It has it's own benefits:

- simple,  easy to understand and use.
- easy to manage due to the rigidity of the model – each phase has specific deliverables and a review process
- phases are processed, completed one at a time, and do not overlap
- works well for smaller projects where requirements are very well understood

However, other methodologies have evolved as the need for greater flexibility has arisen.


#### Agile

_Agile software development is a group of software development methods in which requirements and solutions evolve through collaboration between self-organizing, cross-functional teams. It promotes adaptive planning, evolutionary development, early delivery, continuous improvement, and encourages rapid and flexible response to change_- [Wikipedia](http://en.wikipedia.org/wiki/Agile_software_development)

#### The Agile Manifesto

This was a formal "proclamation" of key values and principles for approaching software development that was put together in 2001.  The four key concepts value:

- **Individuals and interactions over processes and tools:** self-organization and motivation are important, as are interactions like co-location and pair programming
- **Working software over comprehensive documentation:** working software is more useful and welcome than just presenting documents to clients in meetings
- **Customer collaboration over contract negotiation:** requirements cannot be fully collected at the beginning of the software development cycle, therefore continuous customer or stakeholder involvement is very important
- **Responding to change over following a plan:** agile methods are focused on quick responses to change and continuous development

The core principles of agile development remain the same:

* Iterative, incremental and evolutionary
* Efficient and face-to-face communication
* Very short feedback loop and adaptation cycle
* Quality focus
* Adaptive vs. predictive
* Iterative vs. waterfall
* Code vs. documentation


## User Stories

#### The 3 C's of User Stories.

A Story consists of three parts, **Cards**, **Converstations** and **Confirmation**. 

#### Conversations
The most important part of User Stories are Conversations. This is a conversation about features that the project should have. It's typically between people serving in all kinds of roles on the project. 
These roles may be **Management** (project manager), **Domain Experts** (product manager, business analysist), **Techies** (developers, architects, QA, etc.). 

The interactions between people required to create a project are usually very complex and evolve over time. We learn more and more about the project and the business we're in, the **domain**, as time moves forward. 
We start with a the mimimal set of features possible and put off the "hard stuff" or non-essential features until later. We never know less about a project and what it should be than in this very moment. So, we try to push as many decisions as possible until later, until we know more!

#### Cards

Cards capture the written representation of a story. The cards can be physical "index cards" but in my experience most organizations use some kind of project management tool such as Pivotal Tracker. 

But, the notion of an index card is important. It reminds us that stories are supposed to be small enough to fit on an index card. You don't have to use too many characters to describe a story. I'm thinking pretty much like a tweetful, about 140 characters. 

#### Confirmation

How do we know we're done with a story? We need a solid set of acceptance criteria to determine if a story is done. Often, this is where we capture a lot of the detail for a story. *Note, Confirmation are are NOT software tests!*. Lets say that confirmation are conditions of satifaction. Satisfaction as defined by the Product Owner, Business Analys or Project Manager.

## [Morts Hardware](MortsHardware.md)

## [Honest Tom's Used Cars](https://github.com/ga-wdi-boston/agile-user-stories-lab)

## Pre-Reading
* [User Stories for Agile Requirements](https://vimeo.com/43601248)
* [INVEST User Stories](https://youtu.be/uj5iUbDf-iw?list=UUQScrIAUqnPqwBu97eO17WQ)




