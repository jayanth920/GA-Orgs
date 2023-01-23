![GA Logo](https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png)

# Homework: Set Up a Django Application & Virtual Environment

In our final unit, we'll be learning some new technologies and frameworks, and understanding how the skills we've built are translatable across languages. Specifically, we'll need to make sure our machines have Python 3, the latest version of our second programming language, and Postgres, the relational database management system we'll learn about in this unit. Then we'll use those to set up some starter code for a Django application. 

This is an exercise in following directions precisely, which is a meta-skill to keep building as we grow as developers, and we're releasing some responsibility here to you to execute them. Keep these steps handy to build out future Django apps. 

## Installing Python 3 and Postgres (PSQL)

### Part 1: Installing Python3

![Python Logo](https://www.python.org/static/community_logos/python-logo-master-v3-TM.png)

All Macs come with an older version of Python (2.7) pre-installed as a dependency for the operating system. However, we need a newer version of Python for development, as we'll be building applications using a Python-based framework that uses the latest versions. 

In your terminal, check the version of Python3 running on your machine:

  ```
  python3 --version
  ```
  
If you see an output, you are ready for the next step. If your output was `command not found`, follow the steps below:

#### Mac Users

To install Python 3, we'll use Homebrew. We'll also be installing a package manager for Python: 

```bash
brew install python pipenv
```

#### Linux/Ubuntu Users

We'll use `apt-get` to install Python 3. 

```bash
  sudo apt-get update
  sudo apt-get install -y python3.9 python3-pip
  pip3 install pipenv
```

#### Verify Install

If you run `which python3` or `python3 --version` from the command line, you should see some version of Python 3. 

### Part 2: Postgres Install

In Unit 4, we'll also be learning how to use Postgres, which is a SQL database management system. 

![psql Elephant](https://postgresapp.com/img/PostgresAppIconLarge.png)

>Note: If you have previously installed Postgres via other means, particularly via EnterpriseDB, you will have all kinds of weird issues with this install. If you have the EnterpriseDB install of Postgres on your machine, take time to completely remove it now.  Otherwise, onward...

#### Mac Users

By far the most painless method for installing Postgres on a Mac these days is to use Postgres App.

Head on over and follow the [straightforward setup instructions](https://postgresapp.com/)

##### Note:

This step is meant to be run as ONE command, not two, and MUST be run so you can access the `psql` commands from the CLI:
![psql step 3](https://i.imgur.com/Krhe0VT.png)

##### You're all set.

You might need to quit and restart your terminal to be able to just type `psql` and have it open the Postgres CLI.  But right away, you should be able to open the Postgres app by clicking the elephant icon in your taskbar and double-clicking on the db that matches your username.

#### Ubuntu Users

Follow the directions [here](https://www.postgresql.org/download/linux/ubuntu/) to download PostgreSQL using `apt-get`.

#### WSL Users

Follow the installation directions [here](https://harshityadav95.medium.com/postgresql-in-windows-subsystem-for-linux-wsl-6dc751ac1ff3). 

##### Verify Install

If you run `psql` from the command line, it should open a Postgres shell. Alternatively, you can run `psql --version` and should see an output.


## Setting Up a New Django Application - `tunr_django`

We'll be using Django as our backend framework for the next few lectures of Unit 4. Let's set up our Django project in advance of our Django lectures. In this tutorial, we will create and install Django on a new project called `tunr_django`. Follow the steps below.

**⚠️ It is important to follow these directions PRECISELY and execute the commands AS WRITTEN. Read through the directions below and get a high-level understanding of the steps to follow before implmenting. If you make an error, your app will likely not function as intended and you'll need to start over.**

1. Navigate to your sandbox folder and make a `tunr_django` directory inside your sandbox folder. Navigate into your folder.

  ```
  mkdir tunr_django
  cd tunr_django
  ```

2. Next, we're going to build a virtual environment. Virtual environments allow us to have multiple versions of Python on the same system and manage project dependencies and to use a specific version of Python for different projects. To manage our dependencies and virtual environments, we're going to use a tool called [pipenv](https://pipenv.readthedocs.io/) so make sure you have it installed with `pipenv --version`.

  If you don't have pipenv installed, easy! Homebrew to the rescue:

  ```
  brew install pipenv
```

3. Let's "activate" our virtual environment to ensure every subsequent command will use the virtual environment we created. Run the following command from the project root:

  ```
  pipenv shell
  ```

4. Open up the project in VS Code and take a look at the `Pipfile`. It should look similar to this:

  ```
  [[source]]
  name = "pypi"
  url = "https://pypi.org/simple"
  verify_ssl = true

  [dev-packages]

  [packages]
  django = "*"
  psycopg2-binary = "*"

  [requires]
  python_version = "3.7"
  ```

  Make sure `python_version` is set to a version that is 3 or greater. If the version mentioned in the `Pipfile` is already 3 or greater, then you can skip to the next step (i.e., install django).
  
  If it's set to an older version of Python (e.g., `2.7`), then you'd need to change it to the version of Python 3 that's available on your machine. You can check the version number by running `python3 -V` from your terminal. For example, if the version is `3.7.6`, then you'd have to update the `python_version` line in the `Pipfile` to `python_version="3.7.6"`.

5. Install django inside the current folder `tunr_django`:

  ```
  pipenv install django
  ```

  Running the above command will install Django and create the virtual environment where your dependencies for this project will be managed. Pipenv works a lot like npm does: it'll install our dependencies and track them in a `Pipfile`. This is similar to how `npm` works, the main difference being that pipenv does all the work for us by putting the dependencies in a separate location, so we don't have to worry about adding things to `.gitignore`.

6. Next, we're going to install the library for connecting Django to PostgreSQL:

  ```
  pipenv install psycopg2-binary
  ```

7. All we've done so far is install our dependencies and create our virtual environment. Now, we want to start our Django project:

  ```
  pipenv run django-admin startproject tunr_django .
  ```

  > Make sure you put the . on the end! This creates the project in the current directory instead of creating a new subfolder.

  Let's break down this command, because there are a few parts to it:

  - `django-admin` is the command line interface for interacting with Django. It
    has a few commands, of which `startproject` is the one to start a new Django
    project.
  - `tunr_django` is the name of our project. We add `.` after it so that the
    project is created in the current directory (the default is to create a new
    Django project in a new director).
  - `pipenv run` is required because we want to use the version of Django that we
    just installed using pipenv. If we leave off this part of the command, we'll
    use the version of the Django CLI that is installed globally (if there is
    one).

8. Let's also create our app (make sure you're running the following command within the virtual environment you created in step 3):

  ```
  $ django-admin startapp tunr
  ```

  Note: if django-admin doesn't work, you can replace it with `python3 manage.py`, assuming `manage.py` is in your current directory. Again, make sure you're running the following command within the virtual environment you created in step 3.

  This step creates an "app" inside of our project repo called `tunr`. `tunr_django` is the base django project, where we handle our routes. `tunr` is where we write our models, controllers, and templates.

  We can have many "apps" inside of a django project. This allows us to modularize our code, giving us flexibility and separation of concerns and making our code self-contained.
  
  Your project file structure should look like this (if it doesn't, you'll need to start over and ensure you follow the steps correctly): 
  
  <img width="1009" alt="Screen Shot 2021-10-11 at 1 01 49 PM" src="https://media.git.generalassemb.ly/user/21811/files/73066200-2a93-11ec-8f5f-eb63a01b8347">


9. We need to include the app we generated. In `tunr_django/settings.py` find the `INSTALLED_APPS` constant dictionary. On the bottom line of the `INSTALLED_APPS` list, add `tunr`. Whenever you create a new app, you have to include it in the project.

  ```
  INSTALLED_APPS = [
      'django.contrib.admin',
      'django.contrib.auth',
      'django.contrib.contenttypes',
      'django.contrib.sessions',
      'django.contrib.messages',
      'django.contrib.staticfiles',
      'tunr'
  ]
  ```

10. Next, we need to create our database. By default, Django uses sqlite for its database. We'll use postgres instead, because it's more robust and better for web applications. 

- To ensure Postgres is running on your computer, **on macOS**:

Open the `Postgres` application. You should see an elephant icon in the menu bar at the top of your screen and a green `Running` in the application.

![Screen Shot 2021-10-11 at 12 34 26 PM](https://user-images.githubusercontent.com/53010153/136831657-36896ad3-a3f0-409b-92d6-4f017b59884f.png)

- To ensure Postgres is running on your computer, **on Linux**:

Run the following. Postgres will only work if you see a green circle and the words "active (running)" somewhere in the output.
```
service postgresql status
```

After running postgres, create a new file called `settings.sql` in the project root directory:

  ```
  touch settings.sql
  ```

  Inside `settings.sql`, add the following:

  ```
  -- settings.sql
  CREATE DATABASE tunr;
  CREATE USER tunruser WITH PASSWORD 'tunr';
  GRANT ALL PRIVILEGES ON DATABASE tunr TO tunruser;
  ```

  Then run the following command from the root directory:

  ```
  $ psql -U postgres -f settings.sql
  ```
  
### Troubleshooting
Getting a `psql: FATAL: role “postgres” does not exist` error? 

Check out [this StackOverflow article](https://stackoverflow.com/questions/15301826/psql-fatal-role-postgres-does-not-exist).
  

11. Next, we need to connect our app to the database. In `tunr_django/settings.py`, find the `DATABASES` constant dictionary. Let's edit it to look like this:

  ```
  DATABASES = {
      'default': {
          'ENGINE': 'django.db.backends.postgresql',
          'NAME': 'tunr',
          'USER': 'tunruser',
          'PASSWORD': 'tunr',
          'HOST': 'localhost'
      }
  }
  ```

12. Now, in the terminal start the Django server by running

  ```
  python3 manage.py runserver
  ```

  `manage.py` contains a lot of management commands for Django. We'll see more later, but [here](https://docs.djangoproject.com/en/2.1/ref/django-admin/) is the full documentation if you are interested in what's going on behind the scenes. You can see a list of commands that `manage.py` offers by typing:

  ```
  python3 manage.py
  ```


13. Finally, navigate to `localhost:8000`. You should see a page welcoming you to Django!


![Screen Shot 2021-10-11 at 1 07 15 PM](https://media.git.generalassemb.ly/user/21811/files/3129eb80-2a94-11ec-9b83-e85f1bbd94db)

Note: When you run your Django server, you should see a warning about unapplied migrations, which is normal and will not interfere with the running of your application. We'll learn about these during our Django lecture.

![Screen Shot 2021-10-11 at 1 06 51 PM](https://media.git.generalassemb.ly/user/21811/files/338c4580-2a94-11ec-9daf-b9c1b11697e5)

## Submission
Please open a Github issue on this repo indicating whether or not the installation was successful for you, along with a screenshot of the Django welcome page.
  
  **_If you are running into errors or issues, please file a Github issue on this repo and attach screenshots of all the errors you are getting so an instructor can assist you with setup prior to the Django lecture._**
    
  
***Submission due by the date on your cohort calendar***
  
  
