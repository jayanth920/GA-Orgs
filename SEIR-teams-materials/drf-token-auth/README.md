[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Django Rest Framework with Token Authentication

Through this tutorial, we'll be getting another rep setting up and building a Django application, and building up an API that uses Django Rest Framework and a Token Authentication system using a library called Djoser. We'll also create a custom user model that builds on Django's base user model, and learn how to set up custom permissions for users. 

We'll also follow some slightly different configuration steps to prime our application for deployment, which we'll tackle this week! Consider the differences in setup below ideal for creating DRF apps that you intend to deploy.

## Create a Project Directory

The top-level project directory will contain the files used to manage the projectʼs dependencies and a special file to initialize Django administration commands. This is the directory that will be deployed to Heroku so it is critical that you **do not nest it inside of another git directory**.

1. Make a new project-directory and switch into it.

```bash
# Substitute project-directory for your project directory name
$ mkdir drf-restaurants
$ cd drf-restaurants
```

2. Inside the project-directory add a `.env`, `.gitignore` and `Procfile` file. Be especially careful with the spelling and case of each of these files. The `touch` command can be used to create all of these files with one command:

```bash
$ touch .env .gitignore Procfile
```

3. Initialize the directory for Git.

```bash
$ git init
```

4. Open the project in VS Code with `code .` and add the following to the .gitignore file.

```bash
.env
*.log
*.pot
*.pyc
__pycache__/
local_settings.py
db.sqlite3
db.sqlite3-journal
media
# By not including the Pipfile.lock, if you're collaborating on a team
# other team members will have to run pipenv install to create their
# own local file.
Pipfile.lock

# General MacOS files to ignore
.DS_Store
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent
```

## Create and Activate the Virtual Environment

The remaining files and directories inside our project directory are created automatically using various commands that are run inside a **_virtual environment_**.

```bash
$ pipenv shell
```

## Install Django and Project Dependencies

Pipenv works a lot like npm does. It installs and manages dependencies. All of the following commands should be run inside of the virtual environment that you created and activated in the previous step.

> #### :triangular_flag_on_post: Use `pipenv` instead of `pip`
>
> Keep in mind that pipenv is relatively new and isn’t strictly required to install Python packages. If you use `pip install` instead, packages will be installed globally on your machine. Global installations should generally be avoided though, so any time you see `pip install` used in tutorials or documentation on the Web, you should substitute `pipenv install`.

1. Install Django for the project:

```bash
$ pipenv install django
```

Running the above command will install the Django package, update the `Pipfile`, and create a `Pipfile.lock` in the project directory.

2. As with npm, we can install multiple packages simultaneously with the `pipenv install` command. We need to add the `psycopg2` package to connect Django to PostgreSQL, and while weʼre at it, we can install packages to help us add more functionality, configure and deploy our Django app to Heroku later on:

```bash
$ pipenv install psycopg2-binary dj-database-url gunicorn djoser django-cors-headers whitenoise
```

> psycopg2-binary: PostgreSQL database adapter for Python 

> dj-database-url: Lets us use a `DATABASE_URL` environmental variable

> gunicorn: Python WSGI HTTP server for Unix

> djoser: Provides DRF views for user authentication functionality 

> django-cors-headers: Enables CORS for our backend

> whitenoise: Allows our web app to serve its own static files (HTML, CSS)

## Initialize the Django Project

With Django installed you can now create a Django project with the `startproject` command. This will create a new directory containing all of your projectʼs settings. This new directory is often referred to as the _project root_. You will only run this once for the project.

> Django will not create the project if the name contains any special characters other than underscores. This is different from our standard naming conventions for directories because we’re creating a _Python module_ so we need to follow the [PEP8 Naming Conventions for modules](https://www.python.org/dev/peps/pep-0008/#package-and-module-names) which states:
>
> Modules should have short, all-lowercase names. Underscores can be used in the module name if it improves readability.

1. Run the following command on the command line:

```bash
$ pipenv run django-admin startproject django_restaurants .
```

2. If it’s not already open, open the project in VS Code with `code .` and navigate to the `settings.py` in your newly created Django project root directory and open the file.

3. Find the `SECRET_KEY` constant. Select it and copy it (command <kbd>⌘</kbd> + <kbd>C</kbd> **or** <kbd>CTRL</kbd> + <kbd>C</kbd> on Windows).

>Note that the secret key is prefixed by `django-insecure` in more modern versions of Django to remind developers to not publish the hard-coded string and to generate their own secret key. You can use a resource like [this](https://django-secret-key-generator.netlify.app/) to generate a new key if you accidentally push your key to GitHub.

4. Open the `.env` file and paste the `SECRET_KEY` constant into it (command <kbd>⌘</kbd> + <kbd>V</kbd> **or** <kbd>CTRL</kbd> + <kbd>V</kbd> on Windows). Because the key most likely contains special characters, you will need to place the value in single quotes such as:

```bash
# Add *** your *** secret key to the .env file
# surrounding the value in single quotes
# Example:
SECRET_KEY='7)!_i_g13w-&f_o=u=ur7w_%u-rc#^$z5wy4hyiqxqmruvcou&'
```

5. Back in your `settings.py`, you can now replace the `SECRET_KEY` constant with the following:

```python
import os # <- import the os module

# ...

SECRET_KEY = os.environ['SECRET_KEY']
```

6. Remember to add a CORS setting to `settings.py` to allow other requests from other domains to your application: 

```python
CORS_ALLOW_ALL_ORIGINS = True
```

7. Note the message to not run debug in production. Instead, we'll create an environment variable called MODE and set it to 'dev' in our .env file locally and 'production' in the Heroku configvars. We can use a ternary operator to set the DEBUG to True or False based on the environment variable.

```
MODE=dev
```


```python
# SECURITY WARNING: don't run with debug turned on in production! 

# Replace the DEBUG = True with:
DEBUG = True if os.environ['MODE'] == 'dev' else False

# Interesting ways to refactor the if/else expression
# DEBUG = (True, False)[os.environ['MODE'] == 'dev'] # tuple indexing, not favored by most python fans 
# DEBUG = bool(os.environ['MODE'] == 'dev') # boolean for test condition in parentheses
```


## Create and Register a Django App

Django applications are organized around reuseable, pluggable _apps_. This concept is similar to components in a React application. It allows us to modularize our code, giving us flexibility and separation of concerns. Django installs several default apps, but leaves it up to us to organize the other aspects of our project into apps that make sense given the project scope.

1. Follow the naming conventions for creating a Python package here (short, all-lowercase names, optionally with underscores), create the `users` app:

```bash
$ django-admin startapp users
```

2. Every time we generate a new app, we need to also update the `INSTALLED APPS` list in the `settings.py` file. Notice that there are already several apps added to the list by default:

```python
INSTALLED_APPS = [
  'django.contrib.admin',
  'django.contrib.auth',
  'django.contrib.contenttypes',
  'django.contrib.sessions',
  'django.contrib.messages',
  'django.contrib.staticfiles',

  'corsheaders', # <- add
  'djoser', # <- add

  'users', # <- add
]
```

3. Configure the cors and whitenoise middleware:

```python
MIDDLEWARE = [
    ...
    # Add whitenoise right AFTER 'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
...
    'corsheaders.middleware.CorsMiddleware',
    # Add corsheader right BEFORE 'django.middleware.common.CommonMiddleware',
    ...
]
```

## Configure PostgreSQL

By default, Django uses sqlite for its database. We'll be using PostgresQL instead. Confirm that postgres is installed locally before running the following commands.

1. Create a new file called `settings.sql` in the project root directory:

```bash
$ touch settings.sql
```

2. Inside `settings.sql`, add the following **replacing `<dbname>` with your projectʼs database name** (make sure you do not leave any angle brackets in your code). Database names must abide by the following rules in SQL:

- Names must start with a letter or an underscore; the rest of the string can contain **letters**, **digits**, and **underscores**.
- Must be 63 or fewer characters in length.

```sql
-- settings.sql
CREATE DATABASE <dbname>;
CREATE USER <dbname>user WITH PASSWORD '<dbname>';
GRANT ALL PRIVILEGES ON DATABASE <dbname> TO <dbname>user;

-- Example
-- CREATE DATABASE restaurants;
-- CREATE USER restaurantsuser WITH PASSWORD 'restaurants';
-- GRANT ALL PRIVILEGES ON DATABASE restaurants TO restaurantsuser;
```

Then run the following command from the root directory:

```bash
$ psql -U postgres -f settings.sql
```

> #### :bug: Fixing the _role “postgres” does not exist_ error
>
> When you install postgres using homebrew it doesnʼt create a superuser by default. The above psql command says, run the code in the settings.sql file as the user (`-U`) named postgres. If no user with that name exists, youʼll get an error. Run `/usr/local/opt/postgres/bin/createuser -s postgres` at the command line to create the user first and then rerun command above.

3. Next, we need to connect our app to the database. In your project’s `settings.py` file, import the dj-database-url package that was installed as a dependency previously **after** the `import os` statement at the top of the file. Make **note that the package name uses underscores** _not_ hyphens:

```python
# settings.py
# Add:
import dj_database_url
```

The dj-database-url package parses a database URL to configure the connection string values (i.e., the database name, port, and root user and password) automatically. This allows us to configure our database connection string using the same format that Heroku uses when we create a Postgres database for our deployed app. Heroku automatically adds the DATABASE_URL to our config vars, which it reads as environment variables. The benefit for us is that we will be able to easily push to Heroku without having to make changes to our `settings.py` file.

4. Then find the `DATABASES` constant dictionary in `settings.py` and change it to read:

```python
DATABASES = {
  'default': dj_database_url.config(conn_max_age=600)
}
```

5. In the `.env` file you created earlier, add a `DATABASE_URL` environment variable in the following format using the default PORT `5432`:

```bash
DATABASE_URL=postgres://<USER>:<PASSWORD>@<HOST>:<PORT>/<DBNAME>
# Example: DATABASE_URL=postgres://restaurantsuser:restaurants@localhost:5432/restaurants
```

### Starting the Django Development Server

Before running the server we need to **`exit`** the virtual environment we currently have running so that the environment variables we just created can be loaded when we start the shell again.

1. Exit the virtual environment shell completely by going to the Terminal and typing control <kbd>^</kbd> + <kbd>C</kbd> followed by control <kbd>^</kbd> + <kbd>D</kbd>.

2. Reactivate the shell from the command prompt with:

```bash
$ pipenv shell
```

3. Type the following command in the activated virtual environment:

```bash
$ python3 manage.py runserver
```

If you were following this repository on your own and creating your own application, you may see a message that tells you that you have _unapplied migrations_ if you installed DRF or created any models, which we haven't done just yet in DRF Restaurants! At the minimum you'll see a message that reads:

```bash
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

**🛑 DO NOT RUN MIGRATIONS YET! We will run them later AFTER creating a custom user model. ** 

> #### :white_check_mark: Confirm that the Django server is running
>
> To confirm that the server is running visit http://localhost:8000 and you should see a page welcoming you to Django!

4. If your server is running successfully, use `git add .` and `git commit -m "Initial commit"` to create your initial commit.

## Django REST Framework (DRF)

We'll be using [Django REST Framework](https://www.django-rest-framework.org/), or DRF for short, to create our API. Although it isn't strictly required to build a REST API with Django, it has some great features, such as its _browseable API_ that make it an excellent choice. It's also by far the most popular third-party package for creating an API with Django. And, importantly, it's both well-funded and well-maintained.

### DRF Installation

To start using DRF, we need to install and configure it.

1. Make sure your virtual environment is active, and if not, activate it with `pipenv shell`.

2. Next, run `pipenv install djangorestframework`.

3. After the installation is complete, open your project in VS Code if it is not already open and navigate to the `settings.py` file.

4. Add `'rest_framework'` to your `INSTALLED_APPS` settings list.

```python
INSTALLED_APPS = [
    ...
    'rest_framework', # <- add
    'rest_framework.authtoken', # <- add
]
```

5. Add a new dictionary at end of the `settings.py` file as follows:

```python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        # What we'll use for our API
        'rest_framework.authentication.TokenAuthentication',
        # What we'll use for the browseable API
        'rest_framework.authentication.SessionAuthentication',
        # Basic Authentication should be removed in production
        'rest_framework.authentication.BasicAuthentication',
    ],
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
    ]
}
```

6.  In your **project root** directory, locate the `urls.py` file add a new import for `include` at the top of the page to the `from django.urls import path`

```python
from django.contrib import admin
from django.urls import path, include
```

7.  Now, add the `api-auth` path to the `urlpatterns`:

```python
from django.urls import path, include # <-add include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth', include('rest_framework.urls', namespace='rest_framework')), # <- add
]
```

> The [URL namespace](https://docs.djangoproject.com/en/3.0/topics/http/urls/#url-namespaces) in the project urls.py allows us to refer to paths more specifically, so we can say something like `rest_framework:path_name`.

### Create a Custom User

While it's not required that you create a custom user model, it is advisable if you'd like to have the flexibility to use one in the future to add additional fields to the model or modify the baked in user authentication model. In fact, Django has a [whole section in the documentation](https://docs.djangoproject.com/en/3.0/topics/auth/customizing/#changing-to-a-custom-user-model-mid-project) that describes the pitfalls of attempting to change the user model after youʼve performed even a single initial migration.

To use a custom user model with Django's built in authentication, **do not** run any database migrations until you complete the following steps. (If you already ran the initial migrations after installation in your development environment, just run `DROP DATABASE "yourdbname";` from the interactive psql terminal and delete any migrations in the migrations folder that may exist. You’ll need to rerun the command to create the database again if you take this step.)

> :question: What principle(s) of OOP are represented here and why? 

> :question: Why are we creating a custom user model?
>
> The most common reason to create a custom user model is to allow users to authenticate with an email address instead of Django’s default behavior that uses a username. The second most common reason is to extend the user model with additional fields (DOB, a profile picture, etc.). It should be noted that to extend the user model you donʼt need to create a custom model. See the documentation for more information on [extending Django’s built in model](https://docs.djangoproject.com/en/3.0/topics/auth/customizing/#extending-django-s-default-user) without creating a custom user.

1.  In the `users/models.py`, add the following imports after the `from django.db import models`:

```python
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField( verbose_name='email', max_length=255, unique=True)
    avatar = models.CharField(max_length=500)
    REQUIRED_FIELDS = ['username']
    USERNAME_FIELD = 'email'

    def get_username(self):
        return self.email
```

2. Add a `serializers.py` file with the following:

```python
# users/serializers.py
from djoser.serializers import UserCreateSerializer, UserSerializer
from rest_framework import serializers
from . import models

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = models.User
        fields = ('id', 'email', 'username', 'password', 'avatar')
```

3. Create a `urls.py` in the user module:

```python
# users/urls.py
from django.urls import path, include
from users import views

urlpatterns = [
  path('', include('djoser.urls')),
  path('', include('djoser.urls.authtoken'))
]

```

4. Include the users urls in project root urls file:

```python
# django_restaurants/urls.py


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth', include('rest_framework.urls', namespace='rest_framework')),
    path('', include('users.urls')) # <- add
]

```

5. Open the `settings.py` file in your project root and scroll to the bottom and add: 

```py
AUTH_USER_MODEL='users.User'
``` 

This tells our Django app to use the `users` app in the installed apps for this project and the customized `User` class inside of that for the user authentication within the project!

6. While we're in the `settings.py`, configure the djoser module by adding a new dictionary as follows:

```python
DJOSER = {
    'LOGIN_FIELD': 'email',
    'USER_CREATE_PASSWORD_RETYPE': True,
    'SERIALIZERS': {
        'user_create': 'users.serializers.UserCreateSerializer',
        'user': 'users.serializers.UserCreateSerializer'
    }
}
```

7.  Time to run migrations! Go to your virtual environment. If it’s not active, activate it with `pipenv shell`. Now you can run `python3 manage.py makemigrations` followed by `python3 manage.py migrate`.

## Create a Superuser in the Terminal

Now we'll try out creating a superuser. We run this operation to provide us with a user so we can log into the admin panel.

1. Go to your virtual environment. If it’s not active, activate it with `pipenv shell`. Then type:

```bash
# run in the virtual environment:
$ python3 manage.py createsuperuser
```

## Get a Token

The djoser module that we installed has a [bunch of endpoints](https://djoser.readthedocs.io/en/latest/getting_started.html#available-endpoints) already set up for us including one for login that will return a token to us at http://127.0.0.1:8000/token/login/. Let's test if we can get back a token!

## You Do: Create a restaurants App and Models

Now that we have our token and authentication system working, add a new app for restaurants to our project. 

```cli
$ django-admin startapp restaurants
```

**Remember to add it to your installed apps in `settings.py`!**

For this app, create two models:

- Review

  - title: A char field
  - Restaurant: A foreign key for the related restaurant
  - body: A text field

- Restaurant
  - name: A char field
  - cuisine: A char field

> When you've finalized your models, remember to make migrations and then run them to your database.

## You Do: Add Serializers for Restaurant and Review

Since we're only building out a Django API, we need serializers to help us go between our database query sets, Python, and JSON responses! Create a `restaurants/serializers.py` and build a basic serializer for Restaurants and Reviews like we did yesterday.

## You Do: Add a ViewSet

 Inside the `restaurants/views.py` file add a viewset for Restaurants and Reviews using the `generics.ListCreateAPIView` and `generics.RetrieveUpdateDestroyAPIView` classes we used previously:

```python
from rest_framework import generics  # <- import generics
from .models import Restaurant, Review  # <- don't forget your models
from .serializers import RestaurantSerializer, ReviewSerializer  # <- or serializers


class RestaurantList(generics.ListCreateAPIView):
    # add code here


class RestaurantDetail(generics.RetrieveUpdateDestroyAPIView):
    # add code here


class ReviewList(generics.ListCreateAPIView):
    # add code here


class ReviewDetail(generics.RetrieveUpdateDestroyAPIView):
    # add code here

```

## We Do: Add URLs

Create a new file `restaurants/urls.py` and add the urls for our CRUD routes on Restaurants and Reviews.

Add the following to the `django_restaurants/urls.py` so that our restaurant app urls are included.

```python
urlpatterns = [
    ...
    path('', include('users.urls')),
    path('', include('restaurants.urls')),
]
```

Now we're ready to test in Postman!!!!

## Bonus: Custom Permissions

Wouldn't it be great if only a user who created a Restaurant or a Review was allowed to update it? We can achieve that by writing some custom model permissions for our Restaurants and Reviews as described in the DRF [documentation](https://www.django-rest-framework.org/tutorial/4-authentication-and-permissions/#object-level-permissions). 

## Add an `owner` attribute to Restaurants and Reviews

In the models for your Restaurants and Reviews, add the following property:

```python
    owner = models.ForeignKey(
        'users.User', related_name='restaurants', on_delete=models.CASCADE)
```

Since we're changing a property on our model, we need to make and run migrations.

### Associating Restaurants and Reviews with Users

On the Restaurant and Review ListCreateAPIView viewsets, add the following method, which will modify how an instance of a Restaurant and Review is saved: 

```python
def perform_create(self, serializer):
    serializer.save(owner=self.request.user)
```

### Updating our Serializers

Go to the `restaurants/serializers.py` and add a new field to each serializer: 

```python
owner = serializers.ReadOnlyField(source='owner.username')
```

Be sure to add `'owner',` to the fields in the `Meta` class for each serializer.

### Custom Permissions

In `restaurants`, create a `permissions.py` file where we wil ldefine a custom permission that only allows owners of a resource to write to it. 

```python
from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the snippet.
        return obj.owner == request.user
```

Now in `restaurants/views.py`, add a couple imports to the top: 

```python
from rest_framework import permissions
from restaurants.permissions import IsOwnerOrReadOnly
```

To the ListCreateAPIView viewsets, add the following `permission_classes` property: 

```python
permission_classes = [permissions.IsAuthenticatedOrReadOnly]
```

To the RetrieveUpdateDestroyAPIView viewsets, add the following: 

```python
permission_classes = [IsOwnerOrReadOnly]
```

Now only authenticated users will have write access to Restaurants and Reviews, and only owners are able to edit or delete resources.

## You Do: Bonus

Implement any or all of the following as a bonus!

- [Validation](https://www.django-rest-framework.org/api-guide/validators/)
- [Throttling](https://www.django-rest-framework.org/api-guide/throttling/)
- [Pagination](https://www.django-rest-framework.org/api-guide/pagination/)
- [Filtering](https://www.django-rest-framework.org/api-guide/filtering/)

## Solution Code

Solution code [here](https://git.generalassemb.ly/esin87/drf-auth-restaurants).

## Additional Resources

[Django Rest Framework User Authentication Tutorial - Custom User Model + Social Auth](https://wsvincent.com/django-rest-framework-user-authentication-tutorial/)

[JWT Token Auth with Simple JWT](https://github.com/SimpleJWT/django-rest-framework-simplejwt)

[django rest auth social authentication tutorial](https://michaeldel.github.io/posts/django-rest-auth-social-tutorial/)
