# Django Lab

We have looked at a lot of Django concepts already, but one of the best
thing about Django is that it comes with commands we can use to generate
project and app folder structures with template code for everything we need!
These commands will set us up with everything we need to build a Django project,
so we should practice using them!

This repository is basically empty, so this lab is all about getting it set up
with what we need for a basic Django project.

Use the `django-crud` lesson & the internet as a resource. As you go, fill out
the [`cheatsheet.md`](cheatsheet.md) file with the relevant answers.

## Pipenv and Dependencies

To set up our virtual environment and install dependencies, we are using `pipenv`.

1. If you haven't already, make sure the `django-env` virtual environment is running.
2. In the [`cheatsheet.md`](cheatsheet.md), fill out the `pipenv` section with the relevant commands.

## Generating the Django Files

We can use the `django-admin` command to generate projects and apps with all
the relevant Django files.

1. Generate a project **into the current directory** named `bigredproject`.
2. Generate an app named `api`
3. In the [`cheatsheet.md`](cheatsheet.md), fill out the `django-admin` section with the relevant commands.

## Connect the App

Connect your new `api` app to the `bigredproject`.

## Bonus

Got through all that? Keep it going!

### Basic Route

Build a basic route for the "home" page of our application. We will reach
this endpoint by going to our localhost `/home`. Use a function view, and
display the following HTML:

```html
<h1>You made it to the home page! ^o,o^</h1>
```

### Make a Model

Create a model `Car` with the following fields:

- `owner` (string)
- `color` (string)
- `doors` (number)
- `mileage` (number)

### CRUD on the `Car`

- Class-based view `Cars` for "index" and "create"
- Class-based view `CarDetail` for "show", "delete", and "update"
- URLs defined to see all cars at `/cars` and the car with ID 1 and `/cars/1`
- Serializer that can be used to view, create, and update cars in the views

Make sure you generate & run your migrations when you're ready to test.
