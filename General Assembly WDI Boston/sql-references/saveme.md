![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# An Introduction to PostgreSQL Foreign Keys

## Instructions

Fork and clone this repository.

## Objectives

By the end of this lesson, students should be able to:

-   Add a foreign key reference to an existing table.
-   Insert a row which includes a reference to the id of a row in another table.
-   Update a row setting a reference to the id of a row in another table.
-   Retrieve rows from two tables using a `JOIN` condition

## Prerequisites

-   [An introduction to relational databases](https://github.com/ga-wdi-boston/sql-crud)

## Putting the 'Relation' in 'Relational Database'

In conversations about Postgres, SQL and the like,
 you may hear the term **_relational database_** thrown around.
In the previous material on SQL,
 you learned how to create, modify, and destroy rows and tables.
How do 'relationships' (whatever that means) fit into that context?

Suppose that we had two separate tables of information in our database,
`developers` and `lunches` (see below).
Each developer brings their own lunch,
 and none of them want to eat each others' lunches,
 so we have to make sure that each lunch lines up with the right developer.
How might we do that?

**developers**

| id | first_name | last_name  | favorite language |
|:--:|:----------:|:--------:|:-----------------:|
|  1 | Antony     | Donovan  | C                 |
|  2 | Jason      | Weeks    | JavaScript        |
|  3 | Lauren     | Fazah    | Ruby              |
|  4 | Ross       | Degnen   | LOLCODE           |

**lunches**

| id | main_course                          | side_dish          |
|:--:|:------------------------------------:|:------------------:|
|  1 | salmon and tuna sushi rolls          | chili              |
|  2 | cheese sandwich on gluten-free bread | salad              |
|  3 | roast beef sandwich                  | chips              |
|  4 | chicken sandwich                     | steamed vegetables |

What if we were to put nametags on each of the lunches,
 so that we could know which developer brought which lunch?

**lunches**

| id | developer | main_course                          | side_dish          |
|:--:|:---------:|:------------------------------------:|:------------------:|
|  1 | Lauren    | salmon and tuna sushi rolls          | chili              |
|  2 | Antony    | cheese sandwich on gluten-free bread | salad              |
|  3 | Ross      | roast beef sandwich                  | chips              |
|  4 | Jason     | chicken sandwich                     | steamed vegetables |

We've now associated (i.e. related)
 each `lunch` record with a `developer` record.
But what if another developer with a duplicate name joins the mix?
It might be better to use something unique, like the `id` column, instead.

| id | developer_id | main_course                          | side_dish          |
|:--:|:------------:|:------------------------------------:|:------------------:|
|  1 |            3 | salmon and tuna sushi rolls          | chili              |
|  2 |            1 | cheese sandwich on gluten-free bread | salad              |
|  3 |            4 | roast beef sandwich                  | chips              |
|  4 |            2 | chicken sandwich                     | steamed vegetables |

The `developer_id` column refers to data in the `developers` table,
 but it's actually a column in the `lunches` table.
This is what's known as a **foreign key**.

In terms of actual implementation in an **RDBMS**
 ( _relational database management system_ ),
 a column can be defined as holding foreign keys
 using a modifier on a table definition called a **constraint**.
Some examples of constraints are below.

-   NOT NULL
-   UNIQUE
-   PRIMARY KEY
-   FOREIGN KEY
-   CHECK

Each of these constraints allows you to put some bounds
on the values that can be put into specific columns.
The FOREIGN KEY constraint in particular makes sure that
 values in that column are always valid `id` values
 in the table that the column refers to.

When adding a FOREIGN KEY constraint to a column,
 an INDEX constraint is also usually added to that same column
 in order to speed access to matched rows.
 The combination of FOREIGN KEY and INDEX tells the RDBMS
 how you intend to use the tables you've related.

In the 'developers and lunches' example,
one lunch was associated with one developer.
This is called a **1 to 1** relationship.
However, there are several other possible arangements,
including **1 to (0 or 1)**, **1 to (0+)**, and **(0+) to (0+)**.
The last two are frequently called 'one-to-many' and 'many-to-many';
we'll look at the first of these now, and the second in later materials.

## Setup

### Code Along : Create a Database

Let's create a working database for the next few exercises
  using the **[CREATE DATABASE](http://www.postgresql.org/docs/9.4/static/sql-createdatabase.html)** command;
  we'll name it `sql-join`, and base it on the
  `sql-crud` database from the previous SQL material.

**bash**

```bash
psql
```

**psql**

```sql
psql (9.4.5)
Type "help" for help.

wdi=> CREATE DATABASE "sql-join" TEMPLATE "sql-crud";
CREATE DATABASE
wdi=> \c sql-join
You are now connected to database "sql-join" as user "wdi".
sql-join=>
```

---

## Create a Foreign Key

### Demo : Create a Foreign Key

Take a look at how a foreign key can be added to an existing table: `people`.
Specifically, we'll add a reference to the city in which each person was born.

Adding a new foreign key column is just like adding any other new column --
it's an `ALTER TABLE` operation.

 Watch as i:

-   Create a `people` table
-   Create a `cities` table
-   Alter `people` table to have `born_in_id` and relate it to the `cities`
 table.

### Code Along : Create a Foreign Key

Let's try creating some more foreign keys.
First, let's create an `addresses` table which references the `cities` table.

In the `data` directory,
 there's a CSV file called `addresses.csv` with a lot of address data in it.
The columns are 'no' (i.e. number) and 'name',
 so let's represent these columns as INTEGER and CHARACTER VARYING / VARCHAR,
 respectively.
As mentioned, we also want each address to reference the city that it's in,
 so let's add another column to do that.

```sql
CREATE TABLE addresses(
  id SERIAL PRIMARY KEY,
  no INTEGER,
  name VARCHAR, -- CHARACTER VARYING
  city_id INTEGER REFERENCES cities -- defaults to (id)
);
```

Now we're going to alter the table a bit;
 this time we'll add a reference
 from the `people` table to the `addresses` table.

```sql
ALTER TABLE people
  ADD COLUMN address_id INTEGER REFERENCES addresses
;
```

### Lab : Create a Foreign Key

Write SQL code inside the various script files that adds an owner reference to
the pets table.  You will need to repeat many of the steps we have just
performed in order to do this.

---

## Relate Rows in Different Tables

### Demo : Relate Rows in Different Tables

Now that we've created some foreign key columns, it's possible to insert new
rows into those tables that reference other tables, or even to update existing
rows and add new references that way. We could easily do this with the
born_in_id column we just created.

Note that a foreign key constraint will disallow invalid values in the
referencing column.

-   Insets a city into the `cities` table
-   Insert a person in the `people` table that refrences a the city

### Code Along : Relate Rows in Different Tables

We'll start by inserting a new address into the `addresses` table
 that's associated with Somerville.

```sql
INSERT INTO addresses(no,name, city_id)
  VALUES (255, 'Elm Street', 1)
  -- In `cities`, Somerville has an ID of 1
;
```

Let's check to make sure we updated the entry:

```sql
SELECT name FROM addresses WHERE city_id = 1;
```

Now that we have created the table let's bulk upload the data. In
`bulk_load/addresses.psql` write the command to bull upload information from
the addresses csv file.

```bash
\copy addresses(no,name) from 'data/addresses.csv' with(header true, format csv)
```

and in psql let's run the script

```bash
\i <path/to/file>
```

Let's bulk upload some people using the same process as well.

Now update the `people` table
 by associating people with some addresses.

```sql
UPDATE people AS p        -- alias `people` as p
  SET address_id = a.id
    FROM addresses AS a   -- alias `addresses` as a
      WHERE a.id = p.id   -- arbitarily associate person 1 with address 1
;
```

You people IDs and address IDs may not be in sync, you may need to do some math
here.

### Lab : Relate Rows in Different Tables

Define owner references for some existing pets.
Then, pick at least two people to be folks with too many pets --
 these people should have large numbers of pets associated with them.
Finally, for each one of these 'pet hoarders',
 add a new pet and associate it with a hoarder.

---

## Read Data Across Related Tables

### Demo : Read Data Across Related Tables

Now that our rows are related,
 it would be nice if we could read across multiple tables at once -
 for instance, to see how many people lived in some particular city.

One possible way to accomplish this is to add a special clause,
 called a JOIN clause,
 to a SELECT command;
 this allows queries to return associated data from two tables as
 a single row.

Note: The number may vary here due to IDs in the database, and the math you
used earlier.

```sql
SELECT c.name, COUNT(*)
  FROM people p
  INNER JOIN cities c ON p.born_in_id = c.id
    GROUP BY c.name
  -- list cities by how many people were born there
;
```

```sql
SELECT c.name, COUNT(*)
  FROM people p
  INNER JOIN cities c ON p.address_id = c.id
    GROUP BY c.name
;
```

Depending on the type of JOIN we use,
 we can grab different sets of rows from one table or the other.
An 'inner join' of two tables, A and B, grabs only those rows in table A
 that have a matching row in table B, and vice versa.
Thus, if we're using an INNER JOIN, we can even reverse the order of the tables
 without changing anything.

```sql
SELECT c.name, COUNT(*)
  FROM cities c
  INNER JOIN people p ON p.born_in_id = c.id
    GROUP BY c.name
  -- list cities by how many people were born there
;
```

We could also look at people born in a particular city.

```sql
SELECT p.first_name, p.last_name
  FROM people p
  INNER JOIN cities c ON p.born_in_id = c.id
    WHERE c.name = 'Somerville'
;
```

### Code Along : Read Data Across Related Tables

Let's write some queries that focus on people, addresses, and cities.

We'll run the script in `update/addresses.sql` to
arbitrarily associates addresses with cities.  Be sure to check that the people
IDs and addresses correctly align.

To get a list of all people, along with their address and city,
we could write

```sql
SELECT p.last_name, p.first_name, a.name AS street
  FROM people p
  INNER JOIN addresses a  ON p.address_id = a.id
;
```

### Lab : Read Data Across Related Tables

Run this SQL code to arbitrarily assign pets to people.

```sql
UPDATE pets
  SET owner_id = 7
    WHERE kind = 'fish' AND name LIKE 'S%'
;

UPDATE pets
  SET owner_id = 11
    WHERE kind = 'bird'
;

UPDATE pets
  SET owner_id = 21
   WHERE kind = 'cat'
;

UPDATE pets
  SET owner_id = 42
    WHERE kind = 'dog'
;
```

Now use SELECT to come up with a list of all of the hoarders -
that's anyone with more than 3 dogs, 4 birds, 5 cats, or 20 fish.

> HINT: Look up UNION and see what it does.

---

## References

-   [Constraints](http://www.postgresql.org/docs/9.4/static/ddl-constraints.html) -
 An overview of the variety of constraints that PostgreSQL provides.
-   [CREATE TABLE](http://www.postgresql.org/docs/9.4/static/sql-createtable.html) -
 detailed documentation of PostgreSQL's version of
 the SQL `CREATE TABLE` command.
-   [ALTER TABLE](http://www.postgresql.org/docs/9.4/static/sql-altertable.html) -
 detailed documentation of PostgreSQL's version of the
 SQL `ALTER TABLE` command.
-   [Index Introduction](http://www.postgresql.org/docs/9.4/static/indexes-intro.html) -
 The introductory section of the chapter on indexes in PostgreSQL.
-   [CREATE INDEX](http://www.postgresql.org/docs/9.4/static/sql-createindex.html) -
 detailed documentation of PostgreSQL's version of the
  SQL `CREATE INDEX` command.
-   [UPDATE](http://www.postgresql.org/docs/9.4/static/sql-update.html) -
 detailed documentation of PostgreSQL's version of the SQL `UPDATE` command.
-   [INSERT](http://www.postgresql.org/docs/9.4/static/sql-insert.html) -
 detailed documentation of PostgreSQL's version of the
  SQL `INSERT INTO` command.
-   [Joins Between Tables](http://www.postgresql.org/docs/9.4/static/tutorial-join.html) -
 An introduction to querying multiple tables
-   [SELECT](http://www.postgresql.org/docs/9.4/static/sql-select.html) -
 detailed documentation of PostgreSQL's version of the SQL `SELECT` command.
