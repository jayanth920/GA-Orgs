[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Django API

We'll explore [django](https://www.djangoproject.com/), a popular
 [python](https://www.python.org/) web framework.

We'll use the [Django REST framework](http://www.django-rest-framework.org/),
 to build a JSON API.

We'll see how `django` provides a mechanism to create an administrative
 interface with little effort on our part.

## Prerequisites

-   Experience building web APIs
-   Experience with 1 or more high level languages.
-   [ga-wdi-boston/python](https://www.github.com/ga-wdi-boston/python).

## Objectives

By the end of this, developers should be able to:

-   Create a simple JSON API using the Django REST framework.

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Install dependencies with `pip install -r requirements.txt`.
1.  Create a development database with `createdb django-api-development`.
1.  Test the database with `./manage.py dbshell`.
1.  Test that django starts with `./manage.py runserver`.
1.  Run migrations with `./manage.py migrate`.
1.  Create an administrative user with `./manage.py createsuperuser`.

    -   Enter `admin` for the Username.
    -   Enter `admin123` for Password and Password (again).

1.  Test the api.

    -   Restart the server.
    -   Open `http://locahost:8000/` in a web browser and login as `admin`.

## Leading Topic Heading

Here is where the talk begins. If you have not already included framing above,
it's appropriate to put it here. Link to introductory articles or documentation.
Motivate the next section.

Demos, exercises, and labs are labelled as such, followed by a colon and a
description of the activity starting with an [imperative
verb](https://en.wikipedia.org/wiki/Imperative_mood).

## Demo: Write a Demo

Demos are demonstrations, and developers should give their full attention to
them. It's a great time for them to take notes about important concepts before
applying them in an exercise.

Demos correspond to the "I do" portion of scaffolding from consultant trainging.

## Code along: Write an Code along

During exercises, developers should apply concepts covered in the previous demo.
This is their first chance to generalize concepts introduced. Exercises should
be very focused, and flow natural into a lab.

Exercises correspond to the "We do" portion of scaffolding from consultant
trainging.

## Lab: Write a Lab

During labs, developers get to demonstrate their understanding of concepts from
demos and applied knowledge from exercises. Labs are an opportunity for
developers to build confidence, and also serve as a diagnostic tool for
consultants to evaluate developer understanding.

Labs should be timed explicitly using a timer. When estimating the time it will
take to complete a lab, it is better to overestimate. During labs, consultants
should circle the room and interact with developers, noting patterns and
prompting with hints on how to complete the lab. If developers end early, a
consultant may stop the lab timer. If developers do not finish in time, a
consultant may give more time at her discretion based on current talk pace, the
current estimate for the talk, and the importance of completing the lab while
consultant support is available.

Labs correspond to the "You do" portion of scaffolding from consultant
trainging.

## Additional Resources

-   [django documentation](https://docs.djangoproject.com/en/1.9/).
-   [python documentation](https://docs.python.org/3/).
-   [django REST framework](http://www.django-rest-framework.org/).

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
