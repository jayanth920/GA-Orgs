DROP DATABASE IF EXISTS bookstore;
CREATE DATABASE bookstore;
\c bookstore

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title TEXT,
  body TEXT,
  author_name TEXT,
  price MONEY,
  published_on DATE,
  genre TEXT
);

INSERT INTO books (title, author_name, price, published_on, genre)
  VALUES ('Twilight', 'Stephenie Meyer', 10.99, '2011-08-15', 'Young Adult');

INSERT INTO books (title, author_name, price, published_on, genre)
  VALUES ('New Moon', 'Stephenie Meyer', 12.99, '2011-08-05', 'Young Adult');

INSERT INTO books (title, author_name, price, published_on, genre)
  VALUES ('Eclipse', 'Stephenie Meyer', 13.99, '2010-06-01', 'Young Adult');

INSERT INTO books (title, author_name, price, published_on, genre)
  VALUES ('Breaking Dawn', 'Stephenie Meyer', 10.99, '2012-09-25', 'Young Adult');

INSERT INTO books (title, author_name, price, published_on, genre)
  VALUES ('A Dance with Dragons', 'George RR Martin', 18.99, '1994-04-15', 'Fantasy');

\echo 'All books: '
SELECT * FROM books;

\echo 'Most Expensive book'
SELECT * FROM books ORDER BY price DESC LIMIT 1;

\echo 'Oldest book'
SELECT * FROM books ORDER BY published_on LIMIT 1;

\echo 'Books that start with a B'
-- Uses a regular expression/pattern matching
-- http://www.postgresql.org/docs/9.3/static/functions-matching.html

SELECT * FROM books WHERE title ILIKE 'b%';


\echo 'Cost to replace books from 2011'
SELECT SUM(price) FROM books WHERE date_part('year', published_on) = '2011';
















