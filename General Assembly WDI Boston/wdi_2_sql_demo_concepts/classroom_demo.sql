-- Drops database in case it already exists
DROP DATABASE classroom_demo;

-- Creates a database called classroom demo
CREATE DATABASE classroom_demo;

-- Connect to database
\c classroom_demo

-- Create a table of students
CREATE TABLE students (
  id SERIAL PRIMARY KEY, -- autoincrement, can't be null, must be unique
  first_name TEXT,
  last_name TEXT,
  ssn TEXT UNIQUE,
  gpa NUMERIC(3, 2), -- example: 3.82
  birthday DATE NOT NULL
);

CREATE TABLE teachers (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  salary MONEY,
  birthday DATE
);

---- ABOVE IS SETUP, DONT DROP THE TABLE AFTER THIS LINE

INSERT INTO students (first_name, last_name, ssn, birthday)
  VALUES ('Teddy', 'Cleveland', '123-12-1234', '1991-09-28');

INSERT INTO students (first_name, last_name, ssn, birthday)
  VALUES ('Freddy', 'Cleveland', '123-22-1234', '1991-09-28');

-- DROP the gpa from students

ALTER TABLE students DROP COLUMN gpa;

-- Teachers don't need a salary, they do this because they love to teach
ALTER TABLE teachers DROP COLUMN salary;

-- Give teachers a start date
ALTER TABLE teachers ADD start_date DATE;

-- Show me all the students
SELECT * FROM students;

SELECT * FROM teachers;




























