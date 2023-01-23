[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Scribble

![](https://dl.dropboxusercontent.com/s/8frf8rblw6pnpds/hipsterlogogenerator_1438007087793.png?dl=0)

Scribble is a Django application where users can read, write and interact with
the best content all around the world.

## Prerequisites

* Python
* `pipenv` and managing virtual environments
* Django views, templates, and models

## Instructions

1. Fork and clone this repository.
1. Change into the new directory and check out a dev branch.
1. Fulfill the listed requirements.

Build your Django application in the root of this repository. This exercise will require you to refer back to our previous lecture notes in order to set up a Django app from scratch. To see the steps for setting up a Django app with a Postgres database, refer back to our Tunr setup [instructions](https://git.generalassemb.ly/SEIR-809/django-installation). 

When asked if you want to overwrite the readme, enter "n" (for no).

**This assignment is due Thursday, 10/21 at 10 am ET via PR on the repository.**

## Requirements

### Models + Migrations

Create
[models](https://git.generalassemb.ly/sei-921/django-models#models)
for Post and Comment

A `Post` should have the following fields:

* `author` (`CharField`)
* `title`  (`CharField`)
* `body` (`CharField`)

A `Comment` should have the following fields:

* `author` (`CharField`)
* `body` (`CharField`)
* `post` (`ForeignKey` for `Post`)

Create
[migrations](https://git.generalassemb.ly/SEIR-809/django-models#migrations)
for Post and Comment

### Django Rest Framework

Your Scribble app will need the following API endpoints:

1. `Post` List: Create an list endpoint where a user can see all posts. Each
   post should link to its respective detail endpoint.
2. `Post` Detail: Create a detail endpoint where a user can see each
   individual post. The detail endpoint should also list all of the post's comments.
3. `Comment` List: Create an list endpoint where a user can see all comments. Each
   comment should link to its respective detail endpoint.
5. `Comment` Detail: Create a detail endpoint where a user can see each
   individual comment. The detail endpoint should also show which `post` the `comment` belongs to.

## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
