DROP DATABASE IF EXISTS join_demo;
CREATE DATABASE join_demo;
\c join_demo

CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  birthday DATE
);

CREATE INDEX ON authors (name);
CREATE INDEX ON authors (birthday);

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title TEXT,
  published_on DATE,
  price NUMERIC(5,2) CONSTRAINT positive_price CHECK (price > 0),
  author_id INTEGER REFERENCES authors
);

CREATE INDEX ON books (title);
CREATE INDEX ON books (published_on);
CREATE INDEX ON books (price);
CREATE INDEX ON books (author_id);
