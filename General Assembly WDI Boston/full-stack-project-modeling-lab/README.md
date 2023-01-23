[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Full Stack Project Modeling Lab

During this lab we are going to talk project ideas, how to take a 'shoot for
the stars' idea, and build it in a methodical fashion that will keep you on
track, while fixing *one* problem at a time.

When you're starting out as a developer, it's often a struggle to take a
grandiose idea and consolidate it into more manageable pieces.

## Prerequisites

- [full-stack-project-practice](https://git.generalassemb.ly/ga-wdi-boston/full-stack-project-practice)

## Objectives

By the end of this, developers should be able to:

- Properly scope projects.
- Break apart an ERD into a 'to-do' list.
- Plan feature progress effectively.
- Prioritize objectives/tasks and descope accordingly.

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.

## What is `scope`? Why it is important

Scope is typically a list of features or goals you have in mind for your
project. For example, if I wanted to have users be able to sign up, log in,
change password, etc. those are all features I would like my application to
have. They are *within* the scope of my project.

## What is `MVP`? Why it is important

MVP, **Minimum Viable Product**, not Most Valuable Player, is a product that
meets the minimum specifications or *requirements*. If I have a project idea
that includes multiple features and accesses 3rd party APIs, the additional
features would be *extra* for my project. The base level of the project would
include the barest minimum in order to have a working application.

## Demo: Write an ERD and prioritize it

Our goal is to create the Uber of Books!  It is our billion dollar idea!
The application needs to let authors upload their books to the website and then
readers will be able to purchase the books directly from the authors. But,
once we know what people like to read then we will suggest new authors to them.
This will showcase new authors to new readers. And the reader can leave a
comment about the book. Also, we will track how much of the book they read that
way we can tell publishing companies what % of readers get to what line in a
book. THIS IS GOING TO BE HUUUUUGE!

Where to begin?  Well, I need everything. I want it all and I want it all at
once!

I will need:

- Users
- Authors
- Books
- E-Commerce Store
- Payment System
- Recommendation System
- Reader Progress Tracking System
- Advertisement Big Money Machine Maker

Hmm that seems like a lot. Maybe I should break this down into some smaller
versions.

When Google first started it didn't have email, maps and file storage, it just
had search. When Facebook was first created it didn't have chat or a market
place, it just had a wall post.

#### Version 1

Our MVP will be to allow a user (author) to upload their books. This is the
perfect starting point for the base of our application.

- A user (author) will have many books.
- A book will belong to that user.
- A user can upload a book with a title, inventoryAmount, and price.
- A user can edit a book.
- A user can delete a book.
- A user view all their books.

#### Version 2

Then we will allow users to view all the books that have been uploaded by
others users and to let them view a specific user's list of books. This is a
step towards letting them browse and purchase.

- A user can view list of all books.
- A user view list of specific users' books.

#### Version 3

Next we can let a user comment on the other users' books.

- A user can also add a comment for another users' books.
- A user can edit a comment for another users' books.
- A user can delete a comment for another users' books.
- A user can view comments for another users' books.

### Version 4

And each version from here on out should contain another specific feature that
we can build until eventually we get to our end goal!

- <a href="https://video.disney.com/watch/to-infinity-and-beyond-4be70efc7dbb2b6a6e9faf04">To Infinity and Beyond</a>

## CURL Scripts: The why

CURL is your friend. It allows us as developers to *completely eliminate* the
front end or client from the equation. After you've built out a feature with
your API your FIRST inclination should be to test it with CURL. Because of this
we've put a `/scripts` directory in each of the templates we provide. Do
Future You a favor and start writing them out, save, and commit ones that you
know work. That way when you come back later and want to add a feature, it's
easy to test your previous work!


## Lab: Pitch Time

You all should've completed the [full-stack-project-practice](https://git.generalassemb.ly/ga-wdi-boston/full-stack-project-practice)
at this point. We'll go around the room, and have people present,
or share their ideas and we'll descope and prioritize them together. Once we're
done, think about how YOUR project might be descoped, and what the priorities
are. Set yourself up for success! If you're unclear by the end of all of this,
schedule a 1-1 with a consultant to review your ERD, wireframes, and plan of
attack!

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
