![](/ga_cog.png)

---
Title: Superhero vs. Evil Scientist<br>
Type: Lab<br>
Creator: Mark De May<br>

---

# Superhero vs Evil Scientist

## Activity

Let's give forgetful superheroes a hand in remembering who their nemeses are. Create a many-to-many relationship between superheroes and evil scientists using a linking table. A rails project has already been set up for you that has everything you need for superheros and evil scientists.

### Set Up

`cd` into `enemies` and run these commands:
```
bundle
rails db:create
psql -f enemies_setup.sql enemies_development
```

You should be ready to go. Start your rails server and test things out in `postman` by doing a `get` on `localhost:3000/superheros` and `localhost:3000/scientists`

### The Linking Table

Using the superheros and scientists tables already in the project you're going to add a new table to create a many-to-many relationship between them. The new table should have these columns:
  - id
  - superhero_id
  - scientist_id

Create full CRUD for the new table.

Once you've created the new table, update the show and index routes for superheros to include their archenemies. Then update the show and index routes for scientists to include their archenemies.

### User Stories

 - As a user, I can create a new relationship between a superhero and an evil scientist
 - As a user, when I look at all superheros, it includes an array of their enemy scientist's information.
 - As a user, when I look at one superhero, it includes an array of their enemy scientist's information.
 - As a user, when I look at all scientists, it includes an array of their enemy superhero's information.
 - As a user, when I look at one scientist, it includes an array of their enemy superhero's information.

##### Leading Questions to Think About

 - What routes will we need for this join table?
 - What actions will the new controller need?
