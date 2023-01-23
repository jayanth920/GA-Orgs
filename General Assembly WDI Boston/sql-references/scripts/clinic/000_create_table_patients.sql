-- create a table to store information about patients
CREATE TABLE patients(
  id SERIAL PRIMARY KEY,
  last_name TEXT,
  first_name TEXT,
  gender TEXT,
  height INTEGER,
  weight INTEGER,
  born_on DATE
);
