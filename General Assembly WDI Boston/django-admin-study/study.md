# The Django Admin CMS

One of the greatest built-in features of the Django framework is it's admin
CMS (content management system) which will give us the ability to CRUD on
our models without any client or even views/urls at all.

## Content Management Systems

First, what is a content management system (CMS)? We may not have heard this
word very often, though we have probably used a CMS at one point or another.

Think of a website-making platform like [WordPress](https://wordpress.com/) or
[Wix](https://www.wix.com/). These are examples of content management systems.
They allow you to literally "manage the content" of your website you're building
by editing the page titles, adding blocks of text or images, etc.

CMS don't have to be just for managing a website's content. These can also be
used for really any kind of content management, from documentation to internal
tooling.

## From Scratch

Let's run through creating a brand-new project and app with Django to show
just how little we have to do to use Django's admin CMS.

### Create a new project

Run `django-admin startproject django_admin_cms .`

Make sure you include the `.` at the end so the project is made into this directory.

### Create a new app

Run `django-admin startapp api`

### Create a new database

Run `createdb django-admin-cms`

### Update project settings

#### Add app to project

In the `django_admin_cms/settings.py` file, add `'api'` to the list `INSTALLED_APPS`.

#### Update project database

In the `django_admin_cms/settings.py` file, locate the `DATABASES` definition.

1. Change the default `'ENGINE'` to be `'django.db.backends.postgresql'`.

2. Change the default `'NAME'` to be `'django-admin-cms'` (the name of the
database we created with `createdb`).

### Run Initial Migrations

This Django app has some defaults, including what we need for our admin view.

Run `python manage.py migrate` to run the default migrations.

## The Admin App

If you look back in the `settings.py` file's `INSTALLED_APPS` list, one of
those apps is `'django.contrib.admin'`. This is the actual app that Django has
pre-built for us to use for this admin CMS.

We already have the admin route set up for us by default thanks to Django.
Navigate to the main URL file of our project (`django_admin_cms/urls.py`).
You'll see that `path('admin/', admin.site.urls)` is one of our defined URLs.

Visit your current admin route by running the server with
`python manage.py runserver`.
It should tell you that a server was started at `http://127.0.0.1:8000/`. This
is the same as `http://localhost:8000`.

Navigate to `http://localhost:8000/admin` (or `http://127.0.0.1:8000/admin`) to
see our admin login view.

> NOTE: **THIS IS NOT THE CLIENT-SIDE USER LOGIN.** Instead, this is our admin
> login, for us (as developers) to be able to interact with our application's
> data.

We don't have a user we can log in with yet, so let's make one! Close the
server with `ctrl+c` to get back into the file system.

### Super Users

Turns out, Django is going to provide us with a built-in `User` model to do
basic authentication for our project. We'll talk more about this model later,
but for now we'll be using this `User` model to create a "super user" to be
able to login to the admin view.

These super users are really just `User` instances, but with certain fields
set to give them permission & access to the admin view.

Run `python manage.py createsuperuser` (Windows: `winpty python manage.py createsuperuser`)
and hit enter. Django should prompt you for a username, email, and password.

> Note: This is all based on Django's built-in `User` model, which includes
> these three required fields. Later on we'll see how we can modify this model
> to match the fields we used in Express (no username).

Once you have your user created, run the server again (`python manage.py runserver`)
and navigate back to the admin login. Then, make sure you can log in to the
admin view with the credentials you just created!

Right now, we can see Django will allow us to edit `Groups` and `Users` right
away - these are two models built-in to Django. One of the `User`s is the
super user you just created to log in to the admin view. You can select that
document to inspect, edit, or delete it. Basically, we can CRUD on these two
models right out of the box!

To start seeing some of our custom data, we'll need to add a model.

### A `Food` Model

Let's create a `Food` model in the `api/models.py` file.

Give this model at least a `name` and an `expiration_date` field. The `name`
should be a string, and the `expiration_date` should be a date.

Add any other fields you'd like, and a `__str__` method that returns a string
representation of the food (like it's `name`).

#### Migrate

Make sure to generate and run your migrations.

```sh
python manage.py makemigrations
python manage.py migrate
```

### Registering The Model

If you re-ran your server and tried to go to the admin view, you wouldn't see
the `Food` model we just created. We'll need to register our model to see
it displayed and be able to work with it.

> Note: Thanks to Django's admin interface, we don't need to go build a create
> route for our app to make some food in the admin CMS. Keep in mind that
> all admin modifications to our data bypass any logic in our routes. We will
> be able to CRUD on these resources solely based on their models.

Edit your `api/admin.py` to register the food model:

```py
from django.contrib import admin
from .models import Food # import the Food!

# Register your models here.
admin.site.register(Food) # register the Food!
```

Make sure your server is running, then go to the admin endpoint and login with
your user. You should see a new section for your `api` app with a listing for
the `Food` model. If you select `Food`, you'll be presented with a new view
for seeing all the foods, creating new foods, etc.

Create at least three (3) foods, then try editing their contents or even
deleting some. You should be able to perform complete CRUD on this `Food` resource
without any views or URLs. The Django admin CMS will just use the model for all
of this functionality. This is why we say the model is the "source of truth".

Nice work - you did it! You've successfully used Django's Admin CMS. Consider
registering your models when you work on your projects to be able to manage
user content, populate the database, and more!
