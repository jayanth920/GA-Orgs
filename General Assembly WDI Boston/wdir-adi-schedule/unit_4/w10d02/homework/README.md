![](/ga_cog.png)

---
Title: Amiibo Tracker <br>
Type: Homework <br>
Creator: Jerrica Bobadilla <br>
Modified by: Mark De May

---

# Amiibo Database
![](https://cdn02.nintendo-europe.com/media/images/10_share_images/others_3/amiibo_4/H2x1_amiibo_lineup_image950w.jpg)

## Activity
> You've been hired by Nintendo (wow, congratulations!) to create a new backend database to keep track of all the Amiibo's they've created thus far. The person upkeeping their previous database has gone MIA, so it's up to you to create a new one, let's get started!

## Set Up

1. Set up a new rails project in today's homework folder and name the directory `amiibo-tracker`
      - :red_circle: Don't forget to set the database to postgresql _and_ to `--skip-git`!
1. Set up a postgres database called `amiibo-tracker`
1. Create a `games` table inside your database, see below to find out what columns you'll need
1. Create an `amiibo` table inside your database, see below to find out what columns you'll need
1. You'll have a one-to-many relationship between `games` and `amiibo`

## User Stories

All Nintendo has told you about what they want is that...

  - As a user, I can add new games into the database to keep track of what's already been released and what's still in production
    - As a user I can add the following information about each game:
      - game_name: varchar(32)
      - image: text
      - has_been_released: boolean
  - As a user, I can get all games in the database
  - As a user, I can get an individual game's information from the database
  - As a user, I can remove a game from the database in case any of them get pulled out of production
  - As a user, I can edit a game's information

  - As a user, I can add new amiibos into the database to keep track of what's already been released and what's still in production
    - As a user I can add the following information about each amiibo:
        - character_name: varchar(32)  
        - game_id: int
        - image: text
        - has_been_released: boolean
  - As a user, I can get all amiibos in the database. Include the amiibo's game name and game image.
  - As a user, I can get an individual amiibo's information from the database.  Include the amiibo's game name and game image.
  - As a user, I can remove an amiibo from the database in case any of them get pulled out of production
  - As a user, I can edit an amiibo's information

Don't forget to test all your routes with Postman as you go -- this is Nintendo we're talking about, after all!
  - <details><summary>:exclamation: Remember to use "raw" when post/putting, like so</summary>

    ![](https://i.imgur.com/Np3NCID.png)
    </details>
