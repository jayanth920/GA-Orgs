# Domain Modeling & ERDs

## Learning Objectives

- Draw an Entity Relationship Diagram (ERD)
- Identify and diagram one-to-one, one-to-many and many-to-many relationships between data entities
- Distinguish between entities and attributes
- Discuss data normalization needs and techniques

## Framing (5 minutes / 0:5)

Have you heard the phrase,

> Measure 3 times, cut once?

When we're building a large application, it is important to plan the structure of our application before writing code. Once the app is built, it can be difficult and time consuming to go back and restructure the app. Many of you felt this frustration when making changes to your projects. When we add user data and databases to our application, changing the structure of our app can become nearly impossible.


Similarly, if we have a really large application, it can be difficult to keep track of our application model and what changes will be required to add new features or to save new data. So not only do we need to measure 3 times before starting to build our app, we need a way to keep track of those measurements as we're building.

This is where Domain Modeling and Entity Relationship Diagrams come in.

## Domain Modeling (20 minutes / 0:25)

Domain Modeling allows us to outline the data values that we need to persist.

- We only consider the specific data our application needs, but not the behavior of the application
- A domain model in problem solving and software engineering is a conceptual model of all items and topics related to a specific problem
- It describes the various entities, their attributes, roles and relationships, plus the constraints that govern the problem domain

The big takeaway here is that domain modeling **does not describe solutions to the problem**, our application code will do that. Our domain model will represent our understanding of the problem, which will translate to an understanding of how our data needs to be structured.

### ERDs

An ERD -- or **Entity Relationship Diagram** -- is a tool we use to visualize and describe the data relating to the major entities that will exist in our programs. ERDs help us plan out and create our database structure, and allow us to outline the data in our application.

### Example: An Orchard

Take a minute to look through the below diagram. Note down any observations you have.

![orchard example](images/orchard.png)

What are some of your observations?

- The squares represent our entities and are filled with the attributes associated with our entity.
- The arrows between the squares indicate how the entities relate to one another.

### Relationships

![relationships](images/sample-relationships.png)

**One-to-one:** A Country has one Capital City

**One-to-many:** A GA Location has many Cohorts

**Many-to-many:** Each doctor has many patients, and each patient has many doctors.


#### ERD Symbols Guide

![ERD Notation](images/erd-notation.png)

### Example: Garnet

![garnet_erd](images/Garnet_ERD.png)

ERDs grow more complex the larger an application becomes. They are a crucial tool when planning and developing, as well as iterating on or improving an application. The instructors reference the above diagram all the time!

### We Do: Library ERD (10 minutes / 0:35)

Let's create together an ERD for an application that manages a library

- What entities does a library have?
- What attributes do those entities have?
- How do these entities relate to each other?

### You Do: ERD's for Web Pages in the Wild (15 minutes / 0:50)

> 10 minutes. 5 minutes review.

Count off in to groups. Together with your group make an ERD, but this time for a real world application. Make an ERD for the option that matches your group number below...

1. Amazon
1. Facebook
1. Reddit
1. ESPN

## Break (10 minutes / 1:00)
