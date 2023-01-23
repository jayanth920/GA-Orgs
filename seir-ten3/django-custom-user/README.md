# Setting up a Django project

If you haven’t previously set up a Django project, you may need to install `python3` and `pipenv`. MacOS already comes preinstalled with version 2 of Python. This older version of Python is not compatible with current versions of Django, so for this course, you _must_ install and run Python3.

## Python 3 Installation

1. In your terminal, check the version of Python running on your machine:

```bash
python -V && python3 -V
```

If you do not see a version of Python that is listed as 3.6 or greater, then install Python3 on your machine with the following command:

```
brew install python3
```

## Pipenv Installation

Pipenv allows us to install packages and run Python projects in isolation on our machine so that we don't have to install packages globally. There are other ways of creating and running virtual environments which you may see used in tutorials online, but [pipenv](https://pipenv.readthedocs.io/) has steadily gained popularity since its release in 2017 and [is now the officially recommended package manager for Python](https://packaging.python.org/tutorials/managing-dependencies/#managing-dependencies). It was inspired by npm and manages project dependencies using a `Pipfile`, similar to the `package.json` used in NodeJS projects.

To make sure pipenv is installed type `pipenv --version`. If you don't have pipenv installed, install it with:

```bash
brew install pipenv
```

## Setting Up a New Django Application

Our Django application will have the following file structure.

```
project-directory           <- Project folder (git repository)
  ├── .env                  <- Stores environment variables
  ├── .git
  ├── .gitignore
  ├── Pipfile               <- Lists project and dev dependencies
  ├── Pipfile.lock          <- Manages the project dependency tree
  ├── Procfile              <- Lists commands to run on the deployed server
  ├── manage.py             <- Used to initialize Django admin commands
  ├── settings.sql          <- Used to create our database
  ├── django_project_root   <- Installed when `startproject` is run
  │     ├── settings.py     <- Contains all of the project settings
  │     ├── urls.py         <- Project root urls (routes)
  │     └── wsgi.py         <- For deployment (Web Server Gateway Interface)
  └── app_root              <- A Django component installed with `startapp`
        ├── apps.py
        ├── models.py
        ├── urls.py
        ├── admin.py
        ├── tests.py
        ├── serializers.py  <- Django REST Framework only
        ├── views.py        <- Django REST Framework only
        └── migrations      <- Used to sync the database with our models
            └── __init.py__
```

### Create a Project Directory

The top-level project directory will contain the files used to manage the projectʼs dependencies and a special file to initialize Django administration commands. This is the directory that will be deployed to Heroku so it is critical that you **do not nest it inside of another git directory**.

1. Make a new project-directory and switch into it. In order to successfully deploy your app, make sure that this directory is **not** nested inside another git managed directory. Give your project a meaningful name following professional standards and best practices:

- Use all **lowercase letters**
- Use only **alphanumeric** characters separated with hyphens (no special characters)
- Do **not** have any spaces in the name
- Do **not** use a number or hyphen as the first character.

```bash
# Substitute project-directory for your project directory name
mkdir project-directory
cd project-directory
```

2. Inside the project-directory add a `.env`, `.gitignore` and `Profile` file. Be especially careful with the spelling and case of each of these files. The `touch` command can be used to create all of these files with one command:

```bash
touch .env .gitignore Procfile
```

3. Initialize the directory for Git.

```bash
git init
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

### Create and Activate the Virtual Environment

The remaining files and directories inside our project directory are created automatically using various commands that are run inside a **_virtual environment_**. To both create and ‘activateʼ the virtual environment run the following command inside the project directory. The `--three` option is used to make sure that the virtual environment is configured with Python 3:

```bash
pipenv shell --three
```

> #### :white_check_mark: Confirm that pipenv is running
>
> A message that reads `Launching subshell in virtual environment…` indicates that your virtual environment is active. You should also see a `Pipfile` in your project directory when you type `ls`.

### Install Django and Project Dependencies

Pipenv works a lot like npm does. It installs and manages dependencies. All of the following commands should be run inside of the virtual environment that you created and activated in the previous step.

> #### :triangular_flag_on_post: Use `pipenv` instead of `pip`
>
> Keep in mind that pipenv is relatively new and isn’t strictly required to install Python packages. If you use `pip install` instead, packages will be installed globally on your machine. Global installations should generally be avoided though, so any time you see `pip install` used in tutorials or documentation on the Web, you should substitute `pipenv install`.

1. Install Django for the project:

```bash
pipenv install django
```

Running the above command will install the Django package, update the `Pipfile`, and create a `Pipfile.lock` in the project directory.

2. As with npm, we can install multiple packages simultaneously with the `pipenv install` command. We need to add the `psycopg2` package to connect Django to PostgreSQL, and while weʼre at it, we can install two packages to help us configure and deploy our Django app to Heroku later on:

```bash
pipenv install psycopg2-binary dj-database-url gunicorn
```

### Initialize the Django Project

With Django installed you can now create a Django project with the `startproject` command. This will create a new directory containing all of your projectʼs settings. This new directory is often referred to as the _project root_. You will only run this once for the project. By convention, this directory is often given a prefix of `django_` followed by the project name.

Django will not create the project if the name contains any special characters other than underscores. This is different from our standard naming conventions for directories because we’re creating a _Python module_ so we need to follow the [PEP8 Naming Conventions for modules](https://www.python.org/dev/peps/pep-0008/#package-and-module-names) which states:

> Modules should have short, all-lowercase names. Underscores can be used in the module name if it improves readability.

1. Run the following command on the command line:

```bash
# Substitute django_project_root for your own project root name
pipenv run django-admin startproject django_project_root .
```

> :information_source: What does this command do?
>
> - `pipenv run` runs the command in the virtual environment. If we leave off this part of the command, we'll use the version of the Django CLI that is installed globally (if there is one).
> - `django-admin` is the command line interface for interacting with Django. It has a few commands, of which `startproject` is used to initialize a new Django project.
> - `django_project_root` is the name of our project. We add `.` after it so that the project is created in the current directory (the default is to create a new Django project in a new directory).

2. If it’s not already open, open the project in VS Code with `code .` and navigate to the `settings.py` in your newly created Django project root directory and open the file.

3. Find the `SECRET_KEY` constant. Select it and copy it (command <kbd>⌘</kbd> + <kbd>C</kbd> **or** <kbd>CTRL</kbd> + <kbd>C</kbd> on Windows).

4. Open the `.env` file and paste the `SECRET_KEY` constant into it (command <kbd>⌘</kbd> + <kbd>V</kbd> **or** <kbd>CTRL</kbd> + <kbd>V</kbd> on Windows). Because the key most likely contains special characters, you will need to place the value in single quotes such as:

```bash
# Add *** your *** secret key to the .env file
# surrounding the value in single quotes
# Example:
SECRET_KEY='7)!_i_g13w-&f_o=u=ur7w_%u-rc#^$z5wy4hyiqxqmruvcou&'
```

5. Back in your `settings.py`, you can now replace the `SECRET_KEY` constant with the following:

```bash
SECRET_KEY = os.environ['SECRET_KEY']
```

### Create and Register a Django App

Django applications are organized around reuseable, pluggable _apps_. This concept is similar to components in a React application. It allows us to modularize our code, giving us flexibility and separation of concerns. Django installs several default apps, but leaves it up to us to organize the other aspects of our project into apps that make sense given the project scope.

1. Each Django app consists of a Python package that requires the use of several `.py` files. To help make sure that we have all of the required files configured properly, Django comes with a utility that automatically generates the basic directory structure of an app. This utility is invoked with the `startapp` command in our virtual environment. Once again, we must follow the naming conventions for creating a Python package here (short, all-lowercase names, optionally with underscores):

```bash
# Substitute app_root for your app name e.g., auth or polls or pets
django-admin startapp app_root
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
  'add_your_app_root_name_here', # your app name here
]
```

### Configure PostgreSQL

By default, Django uses sqlite for its database. We'll be using PostgresQL instead. Confirm that postgres is installed locally before running the following commands.

1. After installing postgres, create a new file called `settings.sql` in the project root directory:

```bash
touch settings.sql
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
-- CREATE DATABASE pets;
-- CREATE USER petsuser WITH PASSWORD 'pets';
-- GRANT ALL PRIVILEGES ON DATABASE pets TO petsuser;
```

Then run the following command from the root directory:

```bash
psql -U postgres -f settings.sql
```

> #### :bug: Fixing the _role “postgres” does not exist_ error
>
> When you install postgres using homebrew it doesnʼt create a superuser by default. The above psql command says, run the code in the settings.sql file as the user (`-U`) named postgres. If no user with that name exists, youʼll get an error. Run `/usr/local/opt/postgres/bin/createuser -s postgres` at the command line to create the user first and then rerun command above.

3. Next, we need to connect our app to the database. In your project’s `settings.py` file, import the dj-database-url package that was installed as a dependency previously **after** the `import os` statement at the top of the file. Make **note that the package name uses underscores** _not_ hyphens:

```python
# settings.py
import os
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
# DATABASE_URL=postgres://USER:PASSWORD@HOST:PORT/NAME
# Example: DATABASE_URL=postgres://petsuser:pets@localhost:5432/pets
```

### Starting the Django Development Server

Django comes with a built in development server that we can run from within the virtual environment. Before running the server though, we need to exit the virtual environment we currently have running so that the environment variables we just created can be loaded when we start the shell again.

1. Exit the virtual environment shell completely by going to the Terminal and typing control <kbd>^</kbd> + <kbd>C</kbd> followed by control <kbd>^</kbd> + <kbd>D</kbd>.

2. Reactivate the shell from the command prompt with:

```bash
pipenv shell
```

3. Type the following command in the activated virtual environment:

```bash
python3 manage.py runserver
```

You should see a message that tells you that you have _unapplied migrations_, followed by a message that reads:

```bash
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

> #### :white_check_mark: Confirm that the Server is Running
>
> To confirm that the server is running visit http://localhost:8000 and you should see a page welcoming you to Django!

4. If your server is running successfully, use `git add .` and `git commit -m "Initial commit"` to create your initial commit.

## Django REST Framework (DRF)

We'll be using [Django REST Framework](https://www.django-rest-framework.org/), or DRF for short, to create our API. Although it isn't strictly required to build a REST API with Django, it has some great features, such as its _browseable API_ that make it an excellent choice. It's also by far the most popular third-party package for creating an API with Django. And, importantly, it's both well-funded and well-maintained.

### DRF Installation

To start using DRF, we need to install and configure it.

1. Make sure your virtual environment is active, and if not, activate it with `pipenv shell`.

2. Next, type `pipenv install djangorestframework`.

3. After the installation is complete, open your project in VS Code if it is not already open and navigate to the `settings.py` file.

4. Add `'rest_framework'` to your `INSTALLED_APPS` settings list.

```python
INSTALLED_APPS = [
    ...
    'rest_framework',
]
```

5. Add a new list at end of the `settings.py` file as follows:

```python
REST_FRAMEWORK = {
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

7.  Now, add the `api-auth` path to the `urlpatterns` list:

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth', include('rest_framework.urls', namespace='rest_framework')),
]
```

> The [URL namespace](https://docs.djangoproject.com/en/3.0/topics/http/urls/#url-namespaces) in the project urls.py allows us to refer to paths more specifically, so we can say something like `rest_framework:path_name`.

### Create a Custom User

While it's not required that you create a custom user model, it is advisable if you'd like to have the flexibility to use one in the future to add additional fields to the model or modify the baked in user authentication model. In fact, Django has a [whole section in the documentation](https://docs.djangoproject.com/en/3.0/topics/auth/customizing/#changing-to-a-custom-user-model-mid-project) that describes the pitfalls of attempting to change the user model after youʼve performed even a single initial migration.

To use a custom user model with Django's built in authentication, **do not** run any database migrations until you complete the following steps. (If you already ran the initial migrations after installation in your development environment, just run `DROP DATABASE "yourdbname";` from the interactive psql terminal and delete any migrations in the migrations folder that may exist. You’ll need to rerun the command to create the database again if you take this step.)

> :question: Why are we creating a custom user model?
>
> The most common reason to create a custom user model is to allow users to authenticate with an email address instead of Django’s default behavior that uses a username. The second most common reason is to extend the user model with additional fields (DOB, a profile picture, etc.). It should be noted that to extend the user model you donʼt need to create a custom model. See the documentation for more information on [extending Django’s built in model](https://docs.djangoproject.com/en/3.0/topics/auth/customizing/#extending-django-s-default-user) without creating a custom user.

1.  Weʼll create a separate app for users to modularize our code and make it easier to maintain and reuse in the future. Start by activating the virtual environment if it's not already activated:

```bash
pipenv shell
```

2. Run the following command at the prompt inside the virtual environment:

```bash
django-admin startapp users
```

3. Open your project in VS Code if it is not already open and navigate to the `settings.py` file.

4. Add the `'users'` module to your `INSTALLED_APPS` settings list.

```python
INSTALLED_APPS = [
    ...
    'users',
]
```

5. Next, we’ll import some classes from django that will help us create a user that inherits all of the methods and properties needed to work with Djangoʼs built in authentication system. In the newly created `users/models.py`, add the following imports after the `from django.db import models` at the top of the page:

```python
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.conf import settings
```

6. For users, there are two parts we need to handle. We need a custom **user model** that will specify the fields used on the model, and we need a **user manager class** to substitute the Django [`UserManager`](https://docs.djangoproject.com/en/3.0/ref/contrib/auth/#manager-methods) class helper methods for creating users (`create_user` and `create_superuser` methods). A [complete example](https://docs.djangoproject.com/en/3.0/topics/auth/customizing/#a-full-example) can be found in the documentation. We’ll start with the user manager, which will inherit from [`BaseUserManager`](https://docs.djangoproject.com/en/3.0/topics/auth/customizing/#django.contrib.auth.models.BaseUserManager). Using `BaseUserManager` as the super class will give us a couple of additional helper classes.

```python
class UserManager(BaseUserManager):
    """Manager for user profiles"""

    # The create_user method is passed:
    # self:      All methods in Python receive the class as the first argument
    # email:     Because we want to be able to log users in with email
    #            instead of username (Django's default behavior)
    # password:  The password has a default of None for validation purposes.
    #            This ensures the proper error is thrown if a password is
    #            not provided.
    # **extra_fields:  Just in case there are extra arguments passed.
    def create_user(self, email, name, password=None, **extra_fields):
        """Create a new user profile"""
        # Add a custom validation error
        if not email:
            raise ValueError('User must have an email address')

        # Create a user from the UserModel
        # Use the normalize_email method from the BaseUserManager to
        # normalize the domain of the email
        # We'll also unwind the extra fields.  Remember that two asterisk (**)
        # in Python refers to the extra keyword arguments that are passed into
        # a function (meaning these are key=value pairs).
        user = self.model(email=self.normalize_email(email), name=name, **extra_fields)

        # Use the set_password method to hash the password
        user.set_password(password)
        # Call save to save the user to the database
        user.save()

        # Always return the user!
        return user

    def create_superuser(self, email, name, password):
        """Create and save a new superuser with given details"""

        # Use the custom create_user method above to create
        # the user.
        user = self.create_user(email, name, password)

        # Add the required is_superuser and is_staff properties
        # which must be set to True for superusers
        user.is_superuser = True
        user.is_staff = True
        # Save the user to the database with the new properties
        user.save()

        # Always return the user!
        return user

```

> This is the recommended approach described in the documentation for [creating a custom user model](https://docs.djangoproject.com/en/3.0/topics/auth/customizing/#substituting-a-custom-user-model). Although possible, itʼs not recommended to inherit from the `UserManager` class directly and override the create methods it provides. See the documentation for alternatives, such as [extending Django’s built in model](https://docs.djangoproject.com/en/3.0/topics/auth/customizing/#extending-django-s-default-user), and suggestions for when to use each of the different approaches.

7. Still working inside of the same `users/models.py`, the second step is to add the custom user model. This one will set the `email` as the primary identifier for the userʼs account and add a custom `name` field as well.

```python
# Inherit from AbstractBaseUser and PermissionsMixin:
class User(AbstractBaseUser, PermissionsMixin):
    """Database model for users"""
    # As with any Django models, we need to define the fields
    # for the model with the type and options:
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    # Any time we call User.objects (such as in objects.all() or objects.filter())
    # make sure to use the custom user manager we created.
    objects = UserManager()

    # Tell Django to use the email field as the unique identifier for the
    # user account instead of its built in behavior of using the username.
    USERNAME_FIELD = 'email'
    # This doesn't mean the field is required (that's defined above in the field options)
    # This refers to the fields that are prompted for when creating a superuser.
    # https://docs.djangoproject.com/en/3.0/topics/auth/customizing/#django.contrib.auth.models.CustomUser.REQUIRED_FIELDS
    REQUIRED_FIELDS = ['name']

    # Standard Python: We'll create a string representation so when
    # the class is output we'll get something meaningful.
    def __str__(self):
        """Return string representation of the user"""
        return self.email
```

8. As with any Django project, if we want to be able to use the model through the admin site, we need to register it. This process will be a little more involved than usual because we need to tell Django specifically how to display the form for creating our users. Navigate to the the `admin.py` file and add the following code:

```python
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from . import models

class UserAdmin(BaseUserAdmin):
    ordering = ['id']
    list_display = ['id', 'email', 'name', 'is_superuser', 'last_login']
    # The fieldsets are used when you edit a new user via the admin site.
    # fieldsets is a list in the form of two tuples, where each pair represents an
    # html <fieldset> on the admin page.  The tuples are in the format:
    # (name, field_options), where name is a string representing the title of
    # the fieldset and field_options is a dictionary of information about the
    # fieldset including the list of fields.
    # Below we're saying create 4 sections, the first section has no name specified
    fieldsets = (
      (None, {'fields': ('email', 'password')}),
      ('Personal Info', {'fields': ('name',)}),
      ('Permissions',
          {
              'fields': (
                  'is_active',
                  'is_staff',
                  'is_superuser',
              )
          }
      ),
      ('Dates', {'fields': ('last_login',)}),
    )
    # add_fieldsets is similar to fieldsets but it is used specifically
    # when you create a new user:
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'name', 'password1', 'password2')
        }),
    )

# register the model and tell Django to use the above UserAdmin
# class to format the pages:
admin.site.register(models.User, UserAdmin)
```

There’s a lot more going on here than normal. We usually can get away with just importing the model and registering it with `admin.site.register(myModel)`. In this case though, we need to override the built in user admin features. So, we import the `UserAdmin` and rename it as `BaseUserAdmin`. Next we create a new `UserAdmin` that inherits from Djangoʼs user admin that we imported and renamed. With that, we can use the [`fieldsets`](https://docs.djangoproject.com/en/3.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.fieldsets) and [`add_fieldsets`](https://docs.djangoproject.com/en/3.0/topics/auth/customizing/#custom-users-and-django-contrib-admin) (_refer to the Note in the documentation of this section_) options to control the admin page layout and accomodate our custom user model.

9. Thereʼs only one more thing to do before we run our database migration. Open the `settings.py` file in your project root and scroll to the bottom and add: `AUTH_USER_MODEL='users.User'`. This says use the `user` app in the installed apps for this project and the `User` class inside of that for the user authentication within the project!

10. Time to run migrations! Go to your virtual environment. If it’s not active, activate it with `pipenv shell`. Now you can run `python3 manage.py makemigrations` followed by `python3 manage.py migrate`.

## Create a Superuser in the Terminal

Now we'll try out creating a superuser. We run this operation to provide us with a user so we can log into the admin panel.

1. Go to your virtual environment. If it’s not active, activate it with `pipenv shell`. Then type:

```bash
# run in the virtual environment:
python3 manage.py createsuperuser
```

If all goes well you should be prompted to create a user with an email, name, password and password confirmation. Followed by a confirmation that the user was created:

```bash
Email: j@j.com
Name: Jen
Password:
Password (again):
Superuser created successfully.
```

2. Now you can login to the Django admin site with this user. In the browser, navigate to: http://localhost:8000/admin and give it a spin! You should be able to create and delete new users there. Note that we haven't handled update via the admin site (we’ll do that via the API).
