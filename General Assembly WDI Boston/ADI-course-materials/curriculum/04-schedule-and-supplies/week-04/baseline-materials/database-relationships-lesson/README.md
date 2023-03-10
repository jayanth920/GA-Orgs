---
title: Database Relationships
type: lesson
duration: "1:05"
creator:
    name: Micah Rich
    city: LA
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Database Relationships

### LEARNING OBJECTIVES
*After this lesson, you will be able to:*
- Draw entity relationship diagrams with crow's foot notation for ideas for Android apps
- Describe how tables relate to each other using foreign keys
- Explain the different relationship types – has_many_through, has_and_belongs_to_many, belongs_to

### STUDENT PRE-WORK
*Before this lesson, you should already be able to:*
- Write basic SQL queries
- Describe how tables relate to records and columns

### INSTRUCTOR PREP
*Before this lesson, instructors will need to:*
- Read through the lesson
- Add additional instructor notes as needed
- Edit language or examples to fit your ideas and teaching style
- Open, read, run, and edit (optional) the starter and solution code to ensure it's working and that you agree with how the code was written

### LESSON GUIDE

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 10 min  | [Opening](#opening-10-mins)  | Discuss lesson objectives |
| 10 min  | [Guided Practice](#guided-practice-primary-vs-foreign-key-10-mins)  |  Primary vs. Foreign Key |
| 20 min  | [Demo](#demo-relationships-on-a-whiteboard-20-mins)  | Relationships on a whiteboard |
| 20 min  | [Independent Practice](#independent-practice-20-minutes)  |   |
| 5 min  | [Conclusion](#conclusion-5-mins)  | Review / Recap |

## Opening (10 mins)

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

> Check: With the person next to you, take 30 seconds to describe some issues you see with storing data like this? Predict a solution!

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

> Check: Ask the students what advantages we get from separating our data into multiple tables?

## Guided Practice:  Primary vs. Foreign Key (10 mins)

In the previous example, to make those table relationships work, we used a combination of primary and foreign keys.

Take 6 minutes to research the difference between primary and foreign keys, and point out examples of each in the previous users/comments database scenario. Be ready to share your explanation with the rest of the class.

> Check: Allow 3 minutes for 2-3 student groups to present.

## Demo: Relationships on a whiteboard (20 mins)

> Note: Use the author/book/category example from earlier in the week to demonstrate creating relationships by making an ERD on the white board; you should use crow's foot notation, making a point to demonstrate it on the board with our existing table drawings

> ![crows foot notation cheat sheet](http://www.vivekmchawla.com/content/images/2013/Dec/ERD_Relationship_Symbols_Quick_Reference-1.png)

Relationships happen when we start seeing multiple duplicative information or when one object needs to "connect" to another object.

There are 3 different kinds:

### One to One
- not frequently used, but important to know it's an option
- both tables can have only one record on either side of the relationship; each primary key value relates to only one (or no) record in the related table
- imagine a Library table ```has_one``` location, and a location ```belongs_to``` a specific library - that lets us look up solely by location, and see the connected library
- often, in situations like that, you can make the location an attribute of the library, but when a location has, for example, multiple fields (address 1, address 2, state, zip, etc.), it might make sense to create another table for addresses and set up a ```has_one``` relationship

### One to Many
- the most common type of database relationship
- the primary key table contains only one record that relates to none, one, or many records in the related table
- an author ```has_many``` books, but a book ```belongs_to``` only one author

### Many to Many
- also very frequent
- each record in both tables can relate to any number of records (or no records) in the other table.
- a book probably "has many" categories, and a category also probably "has many" books

Keep in mind, the ```belongs_to``` part always goes on the opposite side of the ```has_many``` or ```has_one```. And the way it's stored is that the ID of the model that "has" something is stored in a field on the child, like "customer_id" or "author_id".  In our example with authors and books, the Book model ```belongs_to``` the Author model, while the Author, as mentioned, ```has_many``` books.

> Check: One of the simplest ways to picture these relationships are by putting them in context of a family with multiple children. Take 3 minutes and find a way to describe each relationship in terms of the connections between family members.

## Independent Practice (20 minutes)

 Working with a partner, draw out some Entity Relation Diagrams like we have on the board, with crow's foot notation like we have.

 Try drawing one (or more, if you're fast) of the following:

 - A social media site, with users and posts/tweets/pins
 - An online ordering system, with customers and orders
 - A bar drink system, with orders, customers, drinks, and/or liquors

## Conclusion (5 mins)

- How do you represent a relational database in drawings? How would you describe the metaphor of storing data like a spreadsheet?
- What are the three types of relationships, and what are some examples of how you would you use them?
