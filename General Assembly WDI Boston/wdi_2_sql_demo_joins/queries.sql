\c join_demo

-- Inner Join
SELECT b.id, b.title, b.published_on, a.name, a.birthday
    FROM authors a, books b
    WHERE a.id = b.author_id;

-- Left joins
SELECT books.title, authors.name FROM books
  LEFT OUTER JOIN authors
  ON (books.author_id = authors.id);

SELECT * FROM books
  LEFT OUTER JOIN authors
  ON (books.author_id = authors.id);

-- Right joins

-- Outer joins

-- Full joins
