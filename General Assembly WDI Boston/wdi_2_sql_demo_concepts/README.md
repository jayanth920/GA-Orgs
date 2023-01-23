# Database/SQL Concepts Demo

We connect to [PostgreSQL](http://en.wikipedia.org/wiki/PostgreSQL), our [object-relational database management system](http://en.wikipedia.org/wiki/Object-relational_database_management_system), using [SQL](http://en.wikipedia.org/wiki/SQL).

Some important terms for you to define as we go along:

* table
* row
* column
* query
* relation
* schema
* data type
* function
* interface
* psql

In order to do anything with PostgreSQL, we must first be running our PostgreSQL server. To do this run your `/Applications/Postgre93.app` program, and you'll see a small elephant appear in your top status bar.

We manually access PostgreSQL using the `psql` commandline client. Open your terminal and run that now. To exit from `psql` type `\quit` (including the backslash).

#### Creating Databases

Before we can do much, we need to create a *database* to hold your *tables*. To do this run `createdb classroom_demo` from the bash shell - it won't return any text if it works. But now if we run `psql -d classroom_demo` it will connect to the classroom_demo database.

Alternatively, you could have run the command `CREATE DATABASE classroom_demo` from the psql shell, and then connected using `\c classroom_demo`.

#### Creating Tables

Now we'll need to create a table where we'll keep students. Each student has a first_name, last_name, gpa, phone_number and birthday. We can type this manually into the *psql* terminal, but its often easier to do it in a text editor, and then copy/paste into the psql terminal.

```sql

CREATE TABLE students (
  id serial PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  gpa NUMERIC(3, 2),
  birthday DATE
);
```

We can see that we've created the table (and any other tables that might exist) by typing `\dt` in *psql*.

Let's create another table called `teachers`. Teachers will have first_name, last_name, birthday and yearly_salary.

```sql

CREATE TABLE teachers (
  id serial PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  salary MONEY,
  birthday DATE
);
```

We can also run these commands by putting them into a `.sql` file and executing them by typing `psql -f example.sql`, or in our instance here `psql -f classroom.sql`. In our `classroom.sql` file we have to create and connect to the right database.

```sql

CREATE DATABASE classroom_demo;
\c classroom_demo

CREATE TABLE students (
  id serial PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  gpa NUMERIC(3, 2),
  birthday DATE
);

CREATE TABLE teachers (
  id serial PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  salary MONEY,
  birthday DATE
);
```

If you run it a second time, you may see an error like:
```

  psql:classroom.sql:1: ERROR:  database "classroom_demo" already exists
  You are now connected to database "classroom_demo" as user "davidfisher".
  psql:classroom.sql:9: ERROR:  relation "students" already exists
  psql:classroom.sql:16: ERROR:  relation "teachers" already exists
```

#### Dropping (deleting) tables and databases

This is because you've already made the classroom_demo database, and the students and teachers tables. Depending on what we're doing, we *may* want to drop everything at first.

You can delete (drop) a table with `DROP TABLE table_name`. In this case `DROP TABLE students` would drop the students table and all of its contents. You can drop a database with `DROP DATABASE database_name` or in this case `DROP DATABASE classroom_demo`.

#### Altering Tables

Dropping tables loses *all* of the data held in the table. Sometimes we just need to add a new column, or alter an existing one. Adding and removing columms is easy. Let's say we wanted to add a `start_date` column to the `teachers` table.

```sql
ALTER TABLE teachers ADD start_date DATE;
```

Dropping a column is easy too, but keep in mind that it removes all the for that column permanently:

```sql
ALTER TABLE students DROP COLUMN gpa;
```

Changing the type of a column is harder, because we have to do [type conversion](http://www.postgresql.org/docs/9.3/static/typeconv.html). Let's hold off on this for the moment, but let's say that some changes are easier than others, and some are much harder.[If you'd like to read on it, there's more info here](http://www.postgresql.org/docs/9.1/static/sql-altertable.html).

#### Inserting Rows

Databases aren't very useful without data. Once we've setup the *schema* of the table, we should insert data into the table.

```sql
INSERT INTO students (first_name, last_name, birthday)
  VALUES ('Teddy', 'Cleveland', '1991-09-28');

INSERT INTO students (first_name, last_name, birthday)
  VALUES ('Kim', 'Leland', '1987-07-13');

INSERT INTO students (first_name, last_name, birthday)
  VALUES ('Kelly', 'Simons', '1986-12-13');

INSERT INTO teachers (first_name, last_name, start_date, salary)
  VALUES ('Mary', 'Fisher', '1997-09-01', 35000);
```

#### A Selected preview of SELECT

You can see all of the items in a table with the following command. We'll cover this more in depth soon, but here's just a quick preview.

```sql
SELECT * FROM students;
SELECT * FROM teachers;

```

### Your Turn

Follow along with the prompts/comments in the `televisions.sql` and `computers.sql` files and write the needed SQL code to make those prompts happen. Run each of the files to ensure that they don't have syntax errors.
