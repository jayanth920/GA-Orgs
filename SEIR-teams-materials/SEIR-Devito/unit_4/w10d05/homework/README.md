[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Art Museum Database

![](https://imgur.com/iqF28P9.png)

Your art enthusiast and museum curator friend has asked you to make them an app that can keep track of museums and art pieces. So let's get started on creating the backend API!

#### Learning Objectives

- Setting up a ruby on rails backend
- One-to-many relationship

#### Prerequisites

- Rails
- Ruby
- SQL

---

## Getting Started

1. In today's homework folder, create a new rails project and name it `museum_api`
   - Don't forget to `--skip-git` since we're already working in a git repo
   - Don't forget to set the database to postgres

1. `cd` into the project and create the database for the project
   - What command do you need to run?

1. Run the rails server
   - What command do you need to run?
   - Getting an error? Don't forget to also start postgres!

1. Check `localhost:3000` in your browser to make sure set up went smoothly

## Deliverables

Since your friend just asked you to make the app, all you really know about it is how he wants it to function. In other words, he's really just given you a bunch of user stories -- so it's up to you to decide how your workflow will go while creating the app! Take a look at all the stories below first, then decide how you want to tackle the app, _then_ get coding!

### User Stories

   1. As a user, I should be able to add an art piece

   1. As a user, I should be able to see all art pieces
      - When looking at all art pieces, I should also be able to see what museum each one belongs to, if any

   1. As a user, I should be able to see a single art piece
      - When looking at a single art piece, I should also be able to see what museum it belongs to, if any

   1. As a user, I should be able to update an art piece

   1. As a user, I should be able to delete an art piece

   1. As a user, I should be able to see all museums
      - When looking at all museums, I should also be able to see all art pieces each one owns, if any

   1. As a user, I should be able to see a single museum
      - When looking at a single museum, I should also be able to see what art pieces it has, if any

### Models

   All your friend told you about the models he wants is given below. However, from his description of the app, we also know that we want a one-to-many relationship between the two models since he wants to be able to see what museum art pieces belong to, as well as what art pieces a museum has. So, knowing that, think: which table will need the foreign id column?

   #### Art
   - title
   - artist
   - type (e.g. painting, sculpture, etc.)
   - year (it was made, if ambiguous general era like 1800 is okay)

   #### Museum
   - name
   - location
   - guided_tours_available

### Seed Data

   Don't want to look up a bunch of art pieces and museums and input them individually to test? We've provided some data below! Alternatively, use the Faker gem and try to use the seed file so you can just run `rails db:seed`. Look back at the lab if you need a reminder on how to do so.

   **NOTE**: If you use any of the data below, please note that you'll need to update the data to create the one-to-many relationship! Please also note the names of the tables! If your table, column names, or datatypes for each column are different, update the data below to match your tables!

   ***Art***:
   <details><summary>See the SQL statements</summary>
      <pre><code>
      INSERT INTO art (title, artist, type, year) VALUES ('Starry Night', 'Vincent Van Gogh', 'Painting', 1889);
      INSERT INTO art (title, artist, type, year) VALUES ('The Persistence of Memory', 'Salvador Dali', 'Painting', 1931);
      INSERT INTO art (title, artist, type, year) VALUES ('Mona Lisa', 'Leonardo Da Vinci', 'Painting', 1503);
      INSERT INTO art (title, artist, type, year) VALUES ('The Old Guitarist', 'Pablo Picasso', 'Painting', 1903);
      INSERT INTO art (title, artist, type, year) VALUES ('The Water Lily Pond', 'Claude Monet', 'Painting', 1899);
      INSERT INTO art (title, artist, type, year) VALUES ('View of Toledo', 'El Greco', 'Painting', 1600);
      INSERT INTO art (title, artist, type, year) VALUES ('Girl with a Pearl Earring', 'Johannes Vermeer', 'Painting', 1665);
      INSERT INTO art (title, artist, type, year) VALUES ('View of Delft', 'Johannes Vermeer', 'Painting', 1661);
      INSERT INTO art (title, artist, type, year) VALUES ('Birth of Venus', 'andro Botticelli', 'Painting', 1480);
      </code></pre>
   </details>
   <details><summary>See what museum each art piece is displayed at</summary>
   <ul>
      <li> The Starry Night @ Museum of Modern Art (New York)
      <li> The Persistence of Memory @ Museum of Modern Art (New York)
      <li> Mona Lisa @ The Louvre
      <li> The Old Guitarist @ The Art Institute of Chicago
      <li> The Water Lily Pond @ Metropolitan Museum of Art
      <li> View of Toldeo @ Metropolitan Museum of Art
      <li> Girl with a Pearl Earring @ Mauritshuis
      <li> View of Delft @ Mauritshuis
      <li> Birth of Venus @ Uffizi Gallery
   </ul>
   </details>
   <br>

   ***Museums***:
   <details><summary>See the SQL statements</summary>
      <pre><code>
      INSERT INTO museum (name, location, guided_tours_available) VALUES ('Museum of Modern Art', 'New York', true);
      INSERT INTO museum (name, location, guided_tours_available) VALUES ('Louvre', 'Paris', true);
      INSERT INTO museum (name, location, guided_tours_available) VALUES ('The Art Institue of Chicago', 'Chicago', true);
      INSERT INTO museum (name, location, guided_tours_available) VALUES ('Metropolitan Museum of Arts', 'New York', true);
      INSERT INTO museum (name, location, guided_tours_available) VALUES ('Mauritshuis', 'The Hague Netherlands', true);
      INSERT INTO museum (name, location, guided_tours_available) VALUES ('Uffizi Gallery', 'Florence Italy', true);
      </code></pre>
   </details>

## Hungry for More?

Make a custom route that returns a random art piece from a museum

For example, if I went to a route like `museums/1/random`, it would...

   1. Find the museum with an index of 1
   2. Find all art pieces that are displayed at that museum
   3. Return one of those art pieces at random

We aren't learning this in class, but there is another type of relationship aside from one-to-many called: many-to-many. See if you can figure it out by creating a third model for user accounts.

   1. User accounts should be able to list all the paintings they've seen
   1. User accounts should be able to list all museums they've visited
   1. Update your museum routes so that it now displays a list of user accounts who have visited the museum
   1. Update your art routes so that it now displays a list of user accounts who have visited the museum

## Submission Guidelines

- Create an issue in the classroom repo to submit your homework
- Must be submitted no later than **before the next class at 10 AM Eastern.**

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
