---
title: Bank Database Table Design
type: Homework
duration: "1:00"
creator:
    name: Micah Rich
    city: LA
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Bank Database Table Design

## Introduction

This assignment has two parts:

1. Read about relationships between database tables and using **Entity Relationship Diagrams** to describe them
2. Create an ERD for a hypothetical banking database. The requirements for the diagram you will create appear [after the reading](#exercise).

#### Why multiple tables?

All week we've been working with data - nice, easy data that fit into individual tables.  I'm sure you've thought of a situation where a particular datapoint could exist in two different tables, right?  Is that efficient?  Well, consider this example:

You work for a blog and manage the comments for a recent article, one you expect will generate a lot of comments.  You decided to set up one table to keep track of all the comments posted for this particular article.

After the article goes live, you get your first comment:

| comment_id | comment_text           | user_first_name | user_last_name | user_email              | user_birthday |
|------------|------------------------|-----------------|----------------|-------------------------|---------------|
| 1          | I love this article!!! | Tommy           | Hopscotch      | hopinmyscotch@gmail.com | 10/10/87      |

Ok, the second one comes in:

| comment_id | comment_text                        | user_first_name | user_last_name | user_email              | user_birthday |
|------------|-------------------------------------|-----------------|----------------|-------------------------|---------------|
| 1          | I love this article!!!              | Tommy           | Hopscotch      | hopinmyscotch@gmail.com | 10/10/87      |
| 2          | Actually, you made a typo on lien 6 | Tommy           | Hopscotch      | hopinmyscotch@gmail.com | 10/10/87      |

Next comment is up!

| comment_id | comment_text                                                             | user_first_name | user_last_name | user_email              | user_birthday |
|------------|--------------------------------------------------------------------------|-----------------|----------------|-------------------------|---------------|
| 1          | I love this article!!!                                                   | Tommy           | Hopscotch      | hopinmyscotch@gmail.com | 10/10/87      |
| 2          | Actually, you made a typo on lien 6                                      | Tommy           | Hopscotch      | hopinmyscotch@gmail.com | 10/10/87      |
| 3          | Interesting comment coming from you, Tommy - "lien"?! Read a book, bruh. | Ineeda          | Life           | getsome@gmail.com       | 5/5/88        |

Ok...Tommy is back...

| comment_id | comment_text                                                             | user_first_name | user_last_name | user_email              | user_birthday |
|------------|--------------------------------------------------------------------------|-----------------|----------------|-------------------------|---------------|
| 1          | I love this article!!!                                                   | Tommy           | Hopscotch      | hopinmyscotch@gmail.com | 10/10/87      |
| 2          | Actually, you made a typo on lien 6                                      | Tommy           | Hopscotch      | hopinmyscotch@gmail.com | 10/10/87      |
| 3          | Interesting comment coming from you, Tommy - "lien"?! Read a book, bruh. | Ineeda          | Life           | getsome@gmail.com       | 5/5/88        |
| 4          | You know what I meant, Ineeda, you big stupid head.                      | Tommy           | Hopscotch      | hopinmyscotch@gmail.com | 10/10/87      |

Get in there, Ineeda!

| comment_id | comment_text                                                             | user_first_name | user_last_name | user_email              | user_birthday |
|------------|--------------------------------------------------------------------------|-----------------|----------------|-------------------------|---------------|
| 1          | I love this article!!!                                                   | Tommy           | Hopscotch      | hopinmyscotch@gmail.com | 10/10/87      |
| 2          | Actually, you made a typo on lien 6                                      | Tommy           | Hopscotch      | hopinmyscotch@gmail.com | 10/10/87      |
| 3          | Interesting comment coming from you, Tommy - "lien"?! Read a book, bruh. | Ineeda          | Life           | getsome@gmail.com       | 5/5/88        |
| 4          | You know what I meant, Ineeda, you big stupid face.                      | Tommy           | Hopscotch      | hopinmyscotch@gmail.com | 10/10/87      |
| 5          | YOU'RE A DOODIE HEAD!!                                                   | Ineeda          | Life           | getsome@gmail.com       | 5/5/88        |

Do you see any issues with storing data like this? Predict a solution!

Instead of having the same information added to this table, over and over, we could set up a table for users...

| user_id | user_first_name | user_last_name | user_email              | user_birthday |
|---------|-----------------|----------------|-------------------------|---------------|
| 1       | Tommy           | Hopscotch      | hopinmyscotch@gmail.com | 10/10/87      |
| 2       | Ineeda          | Life           | getsome@gmail.com       | 5/5/88        |

...and use the information from that users table in our comments table:

| comment_id | comment_text                                                             | user_id
|------------|--------------------------------------------------------------------------|---------
| 1          | I love this article!!!                                                   | 1       
| 2          | Actually, you made a typo on lien 6                                      | 1       
| 3          | Interesting comment coming from you, Tommy - "lien"?! Read a book, bruh. | 2       
| 4          | You know what I meant, Ineeda, you big stupid face.                      | 1       
| 5          | YOU'RE A DOODIE HEAD!!                                                   | 2       


This way we don't repeat!  Now you can see the glory of creating and using table relationships!

#### Primary Key vs. Foreign Key

In the previous example, to make those table relationships work, we used a combination of primary and foreign keys.

The users table has a primary key named `user_id`. It has a unique value for each row in that table.

The comments table also has a primary key. It's called `comment_id`, and has a unique value for every entry in _that_ table. The comments table also contains a *foreign key* which is a column that references the primary key of another table. In this example, the `user_id` column in the comments table is a foreign key that references the primary key of the users table.

Having a foreign key gives you the opportunity to combine data from two tables using a *join* statement in SQL. In this example, you would join the two tables where `users.user_id = comments.user_id`.

If the comments table didn't have a foreign key referencing the users table, then we wouldn't have any way to tie them together, and we'd just have to repeat all the user info over and over in the comments table like in the original example. Primary and foreign keys are essential to avoiding repeating data over and over.

#### Entity Relationship Diagrams (ERDs)

An ERD is a tool for describing the relationships between tables in a database. It's often called a "crow's foot" diagram, because the symbol for "many" (explained below) looks like a bird's foot.

The idea is to have a box for each table. Inside each box, you'll list the columns of that table, and indicate which are primary keys and foreign keys. Then you'll connect the boxes with lines that use crow's foot notation to describe the relationships between the tables.

ERD / Crow's Foot Notations:

![crows foot notation cheat sheet](http://www.vivekmchawla.com/content/images/2013/Dec/ERD_Relationship_Symbols_Quick_Reference-1.png)

##### One to One Relationship
- not frequently used, but important to know it's an option
- both tables can have only one record on either side of the relationship; each primary key value relates to only one (or no) record in the related table
- imagine a Library table ```has_one``` location, and a location ```belongs_to``` a specific library - that lets us look up solely by location, and see the connected library
- often, in situations like that, you can make the location an attribute of the library, but when a location has, for example, multiple fields (address 1, address 2, state, zip, etc.), it might make sense to create another table for addresses and set up a ```has_one``` relationship

##### One to Many Relationship
- the most common type of database relationship
- the primary key table contains only one record that relates to none, one, or many records in the related table
- an author ```has_many``` books, but a book ```belongs_to``` only one author

##### Many to Many Relationship
- also very frequent
- each record in both tables can relate to any number of records (or no records) in the other table.
- a book probably "has many" categories, and a category also probably "has many" books

Keep in mind, the ```belongs_to``` part always goes on the opposite side of the ```has_many``` or ```has_one```. And the way it's stored is that the ID of the model that "has" something is stored in a field on the child, like "customer_id" or "author_id".  In our example with authors and books, the Book model ```belongs_to``` the Author model, while the Author, as mentioned, ```has_many``` books.

## Exercise

It's time to put your database design skills to work! Draw out an entity relationship diagram, complete with table names, column names, and relationships for at least three tables a Bank database would need. The required tables are Accounts, Users, and Transactions.

#### Requirements

- Draw an entity relationship (a.k.a. crow's foot) diagram with 3 tables described above
- Specify relationships between tables (one to one, one to many, many to one) using lines between the tables with the correct crow's foot notation symbol at each end
- Indicate which columns are primary keys and which are foreign keys; list all the columns you think each table will need inside the box for each table

**Bonus:**
- Add more tables

#### Deliverable

You can make your diagram by hand on paper, or electronically ([draw.io](https://www.draw.io/) is pretty good if you want to give it a try).
Submit via pull request a photo of your drawing, or an impage or PDF file if you can export it, or a link if it's stored online.

---

## Licensing
1. All content is licensed under a CC­BY­NC­SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact [legal@ga.co](mailto:legal@ga.co).
