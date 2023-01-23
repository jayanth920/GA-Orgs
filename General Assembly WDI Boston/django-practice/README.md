[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Django Practice

Time for more practice with Django relationships!

## Prerequisites

- [`django-relationships`](https://git.generalassemb.ly/ga-wdi-boston/django-relationships)

## Instructions

1. Fork and clone this repository **into the `django-env` folder**.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create and checkout to a new branch, `training`, for your work.
1. Make sure the `django-env` virtual environment is running with `pipenv shell`.
1. Change into the new `django-practice` directory.
2. Start a new project with `django-admin startproject relationships .` (don't forget the `.`!)
3. Create a psql database named "django-cafeteria"
    1. Type `psql` to get into interactive shell
    2. Run `CREATE DATABASE "django-cafeteria";`
    3. Exit shell
    OR:
    1. `createdb "django-cafeteria"`
4. Update project database settings to use PostgreSQL and your database name
5. Start a new app with `django-admin startapp cafeteria`.
6. Generate and run migrations with `python3 manage.py makemigrations` and `python3 manage.py migrate`
7. Run the server with `python3 manage.py runserver`
8. Follow the instructions in [`exercise.md`](exercise.md)
9. When finished, push to your fork and submit a pull request.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
