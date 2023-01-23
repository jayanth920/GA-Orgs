DROP DATABASE classroom_demo;

CREATE DATABASE classroom_demo;
\c classroom_demo

CREATE TABLE students (
  first_name TEXT,
  last_name TEXT,
  gpa NUMERIC(3, 2),
  birthday DATE
);

CREATE TABLE teachers (
  first_name TEXT,
  last_name TEXT,
  salary MONEY,
  birthday DATE
);

ALTER TABLE teachers ADD start_date DATE;

ALTER TABLE students DROP COLUMN gpa;

INSERT INTO students (first_name, last_name, birthday)
  VALUES ('Teddy', 'Cleveland', '1991-09-28');

INSERT INTO students (first_name, last_name, birthday)
  VALUES ('Kim', 'Leland', '1987-07-13');

INSERT INTO students (first_name, last_name, birthday)
  VALUES ('Kelly', 'Simons', '1986-12-13');

INSERT INTO teachers (first_name, last_name, start_date, salary, birthday)
  VALUES ('Mary', 'Fisher', '1997-09-01', 35000, '1958-08-27');

SELECT * FROM students;
SELECT * FROM teachers;
