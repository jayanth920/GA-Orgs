# Deploying Ruby on Rails to Heroku Lab

In this lab we will learn to use [Heroku](https://www.heroku.com/), a cloud hosting platform that supports Ruby on Rails.

This application has been pre-built for you and there is no need to change anything with the application itself.

The application is a simple CRUD app built around Posts

## Learning Goals

* [Install Heroku Toolbelt](https://toolbelt.heroku.com/) and [setup a Heroku account](https://id.heroku.com/signup)
* Deploy to Heroku using Git
* Learn to reference the Heroku documentation

## References for when you hit problems

* [Heroku Dev Center](https://devcenter.heroku.com/)
* [Heroku - Getting Started](https://devcenter.heroku.com/articles/quickstart)
* [Heroku - Deploying Ruby on Rails](https://devcenter.heroku.com/articles/rails3)

## Instructions

The project is pre-made for you, and there is no need for you to change any of the Rails code. Do not change any of the Rails code until you have successfully deployed the application to Heroku.

1. Fork and clone [this project from Github](https://github.com/tibbon/heroku_deploy_lab) to your laptop.
2. Create a free Heroku account on the [Heroku website](https://id.heroku.com/signup/devcenter). You will need to confirm your email address, and then provide Heroku with a password which you should remember.
3. [Download and install the Heroku Toolbelt](https://toolbelt.heroku.com/) for your operating system.
4. Change into the directory for this `heroku_deploy_lab` Rails project in the bash prompt
5. From this bash prompt, run `heroku login`. Provide Heroku with the email and password that you set in step 2.
6. Run `heroku create`. This will setup a new application remote for you. This does not automatically deploy the application. You only need do this once per application.
7. Look at the `Gemfile` and note that I have included the `pg` gem for the production environment (Heroku is our production environment) on line 11. I have moved the `sqlite3` gem into the test and development environment groups on line 14. You do not have to change any files for the application to deploy.
8. Run `git push heroku master`. This will take around 2 minutes to fully run.
9. Run `heroku run rake db:migrate` to run our database migrations on Heroku.
10. Run `heroku open` to view your newly deployed site in the browser.
11. If you would like to run it locally, run `rake db:migrate` and then `rails s`.
12. Any changes you make to the code will not show up on Heroku until you have created a new commit and pushed them to the heroku remote on the master branch.