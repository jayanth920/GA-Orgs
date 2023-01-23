![](/ga_cog.png)

---
Title: Instaphoto <br>
Type: Lab <br>
Creator: Jerrica Bobadilla<Br>
Modified by: Mark De May<br>
Competencies: Rails, One-to-Many relationships

---

# Instaphoto

![](https://imgur.com/CSP45cO.png)

> You've decided there aren't nearly enough photo sharing apps out there, so let's make a new one!

## Activity

#### Set up a new rails project
1. Inside the `homework` folder for today, set up a new rails project and name it `instaphoto` like so:

    `rails new instaphoto -d postgresql --skip-git`

    :red_circle: Don't forget the --skip-git flag so that you don't initialize a repo within a repo!
1. Create a database called `instaphoto`
1. Create a table for `users` with the following columns, it's up to you to decide the datatypes
    - id
    - username
1. Create a table called `photos` with the following columns, you decide what data type each column should be:
    - id
    - img_url
    - caption
    - likes
    - date
    - user id

You don't need to create full CRUD for either model. Just make the routes listed below.

`users` routes:
  - index
  - show
  - create

`photos` routes:
  - index
  - create

##### User Stories

1. As a user, I can create an account
1. As a user, I can add a photo to my account
1. As a user, I can see all users with their photos. (This is the users' index route)
1. As a user, I can see all photos in my account. (This is the users' show route)
1. As a user, I can see all photos with the user name. (This is the photos' index route)

## Hungry for More

1. Create full CRUD for both models.
1. Use the [faker](https://github.com/stympy/faker) gem to seed your database. Faker::Placeholdit creates urls to images.
