[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Django Heroku Deployment Guide

Right now, you know how to build a Django API on your local machine. Time to get your work out into the world by deploying it!

## Objectives

By the end of this, developers should be able to:

- Push latest code to Heroku.
- Setup PostgreSQL Database on Heroku.
- Create Procfile for deployment.

## Deployment Video Recording

In addition to the steps below, feel free to utilize this recorded walk-through of deploying the `django-auth-template`.

[Django Auth Template Deployment Video Recording](https://git.generalassemb.ly/ga-wdi-boston/django-heroku-deployment-guide/pull/12/commits/3bfc3cde882fa40779b3a7dc1c4889dd3b0e0ffb)
- Passcode: `@m9R009E`

## Deploying to Heroku

Follow these steps **in the root of a Django API repository**.

1. If you haven't already, make sure the virtual environment is running with `pipenv shell`.
2. `cd` into your project directory for the remainder of the steps below.
3. We will use a package called [`gunicorn`](https://gunicorn.org/) to make our app feel faster and better utilized. Install it with `pipenv install gunicorn`.
4. Create a file called `Procfile` (don't forget the capital `P`!).
5. Inside the `Procfile`, add the following lines, replacing `yourprojectname` with your project's name (the name of your project folder, which contains `settings.py`, `wsgi.py`, etc. files). The following example assumes the structure `yourprojectname/wsgi.py`:
    - `web: gunicorn yourprojectname.wsgi`
    - `release: python manage.py migrate`
6. Handle static assets. Many of these will be for our admin views right now
    1. Run `python3 manage.py collectstatic` inside of your repository.
    2. Install the [`whitenoise` package](http://whitenoise.evans.io/en/stable/) by running `pipenv install whitenoise`.
    3. Follow the steps from the [whitenoise quickstart for Django apps section](http://whitenoise.evans.io/en/stable/#quickstart-for-django-apps) to modify the `settings.py` file in your project. Do not run the install step, as we did that already.
7. As a safety measure, run `pipenv lock` to ensure the `Pipfile.lock` is up to date.
8. All of our dependencies across projects are right now stores in one `Pipfile` and `Pipfile.lock` in the `django-env` folder. In order to deploy, we need those dependencies in this directory.
     1. Run `pipenv run pip freeze > requirements.txt` **inside the root of your repository**. This will create a new file `requirements.txt` that Heroku can use to properly initialize your project on deployment.
9. Create heroku app with `heroku apps:create yourappname` replacing `yourappname` with the name you want to use for your heroku app.
10. Add the PostgreSQL add-on with `heroku addons:create heroku-postgresql:hobby-dev`.
11. Add config keys with `heroku config:set THING=value`. You'll need:
    - A `SECRET` ex: `heroku config:set SECRET='na807h9asgfa7gsdf'`
    - A `CLIENT_ORIGIN` ex: `heroku config:set CLIENT_ORIGIN=https://my-username.github.io`
        - Note: Make sure there is no trailing slash `/` at the end of the `CLIENT_ORIGIN`
12. Run `heroku config` to confirm you have a `SECRET`, `CLIENT_ORIGIN`, and `DATABASE_URL` (for the PostgreSQL addon).
13. Add, commit, and push to `origin` all changes made from the above steps.
14. The actual deployment happens when you push your code to the `heroku` remote. Make sure you have all the code you want added and committed, then run `git push heroku main`.

## Troubleshooting

**First step upon encountering an issue should be to run `heroku logs --tail` to read the logs of your deployed heroku server.** Then, you can make an issue if you are still unsure.

## Additional Resources

- [Splitting Development and Production Settings](https://www.webforefront.com/django/configuredjangosettings.html)
- [Heroku Gunicorn Docs](https://devcenter.heroku.com/articles/python-gunicorn)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
