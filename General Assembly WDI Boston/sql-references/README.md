[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# An Introduction to PostgreSQL Foreign Key References

In the previous material on SQL we used the phrase "relational database" but
didn't delve into what that means.

We'll begin to cover the topic of "relationships" in database terms now.

## Prerequisites

-   [SQL](https://git.generalassemb.ly/ga-wdi-boston/sql)

## Objectives

By the end of this, developers should be able to:

-   Add a foreign key reference to an existing table.
-   Update a row setting a reference to the id of a row in another table.
-   Insert a row which includes a reference to the id of a row in another table.
-   Retrieve rows from two tables using a `JOIN` condition

## Preparation

1.  [Fork and clone](https://generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Create a new branch, `training`, for your work.
1.  Install dependencies if necessary.

## Modeling relationships

Previously we created tables to hold books for a library, patients for a clinic,
and ingredients for a cookbook.

-   In our library, authors are stored as attributes of books.  Does that make
sense?
-   Who does our clinic need to care for the patients?
-   And what does our cookbook need that includes ingredients?

Let's model (diagram) these new objects (things) and their relationship to our
existing objects (things).

## Creating related tables

### Demonstration: Create and populate an authors table

We'll create SQL scripts in `scripts/library` to add an `authors` table and
populate it from data in the `books` table.

### Code along: Create and populate a doctors table

We'll create scripts in `scripts/clinic` to add a `doctors` table and populate
it from `data/doctors.csv`.

### Lab: Create and populate a recipes table

We'll create scripts in `scripts/cookbook` to add a `recipes` table with a `name` column and a `directions` column and populate using `INSERT` statements.

## Adding references from one table to another

Conventionally, a foreign key reference is named for the singular of the name of
the table being referenced, with the column being referenced appended after an
underscore. So if we're adding a reference to the `cities` table and its `id`
column we'll create a column called `city_id`. However, _this convention should
not be followed when there is a semantically superior name available.

Can you give an example of when this convention isn't appropriate?

### Demonstration: Add an author reference to books

We'll create scripts in `scripts/library` to

-   on the `books` table, add a reference to the `id` column of the `authors`
    table.
-   populate the author reference in the `books` table.
-   remove the `author` column from the books table.

Note that references may constrain both the referenced and referencing table.

### Code along: Add a doctor reference to patients

We'll create scripts in `scripts/clinic` to

-   on the `patients` table, add a reference to the `id` column of the
    `doctors` table.
-   populate the doctor reference in the `patients` table for a few patients.

### Lab: Add a recipe reference to ingredients

We'll create scripts in `scripts/cookbook` to

-   on the ingredients table, add a reference to the id column of the recipes
    table.
-   populate the recipe reference in the `ingredients` table for a few
    ingredients.

Does this relationship seem adequate for handling actual recipes?  Why or why
not?

## Retrieving rows from related tables

### Demonstration: Retrieve information about authors and books

We'll create scripts in `scripts/library` to retrieve books by a set of authors
and authors of certain books.

What happens if we try to `DELETE` an author?

### Code along: Retrieve information about doctors and patients

We'll create scripts in `scripts/clinic` to retrieve doctors and a count of
patients that are assigned to them.

### Lab: Retrieve information about recipes and ingredients

We'll create scripts in `scripts/cookbook` to retrieve ingredients for a recipe.

Later we'll see how to connect multiple recipes to the same ingredients.

## Advanced SQL: Joins

Imagine we have filing cabinets and paper spreadsheets instead of a digital
database. You're tasked with assembling information from two paper spreadsheets.
You have a sheet of authors with ids and a sheet of books with author_ids. You
must answer the question: "Which books were written by either Ernest Hemingway
or Shirley Jackson?"

You first take the sheet with authors, find the each author and note their ids
on a third sheet. Then, you look at the books sheet and scan for Hemingway's id
to appear as author id. Each time you come across a matching row, you write all
the data from the books sheet, along with Hemingway's name, on your third sheet.
Then you repeat the process again for Jackson.

When you're done, you have a third sheet that's an artifact of the process. It
can be recreated at any time by following the steps you just went through. You
take your two original sheets and put them back in the filing cabinet for the
next person to use.

The process of collating the information from each of the two sheets to the
third is called a JOIN, and that's why our join clause matches the id from one
table with the foreign key from another.

The resulting third sheet can be called a report, and it represents a particular
presentation of data from two different tables. When we run queries, we generate
reports. The viewing of data and storing of data in SQL are different. The
report is not a table, and the table is not a report.

## Additional Lab:
Assign adults (patients with age 16-64) to General practice doctors (doctors
with specialty General practice). Do so using temporary tables and creating
temporary sequences.

- [More on sequence and temporary sequence](https://www.postgresql.org/docs/9.6/static/sql-createsequence.htm)

## Additional Resources

-   [Constraints](http://www.postgresql.org/docs/9.6/static/ddl-constraints.html) -
 An overview of the variety of constraints that PostgreSQL provides.
-   [CREATE TABLE](http://www.postgresql.org/docs/9.6/static/sql-createtable.html) -
 detailed documentation of PostgreSQL's version of
 the SQL `CREATE TABLE` command.
-   [ALTER TABLE](http://www.postgresql.org/docs/9.6/static/sql-altertable.html) -
 detailed documentation of PostgreSQL's version of the
 SQL `ALTER TABLE` command.
-   [Index Introduction](http://www.postgresql.org/docs/9.6/static/indexes-intro.html) -
 The introductory section of the chapter on indexes in PostgreSQL.
-   [CREATE INDEX](http://www.postgresql.org/docs/9.6/static/sql-createindex.html) -
 detailed documentation of PostgreSQL's version of the
  SQL `CREATE INDEX` command.
-   [UPDATE](http://www.postgresql.org/docs/9.6/static/sql-update.html) -
 detailed documentation of PostgreSQL's version of the SQL `UPDATE` command.
-   [INSERT](http://www.postgresql.org/docs/9.6/static/sql-insert.html) -
 detailed documentation of PostgreSQL's version of the
  SQL `INSERT INTO` command.
-   [Joins Between Tables](http://www.postgresql.org/docs/9.6/static/tutorial-join.html) -
 An introduction to querying multiple tables
-   [SELECT](http://www.postgresql.org/docs/9.6/static/sql-select.html) -
 detailed documentation of PostgreSQL's version of the SQL `SELECT` command.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
