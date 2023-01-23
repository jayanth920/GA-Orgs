-- COUNT() function returns the number of rows that matches a specified criteria

-- The INNER JOIN keyword selects records that have matching values in both tables.

-- show how authors who have written more than 2 books
SELECT a.name, COUNT(*)
FROM authors a
INNER JOIN books b
  ON b.author_id = a.id
GROUP BY a.id
HAVING COUNT(*) > 2
ORDER BY COUNT(*) DESC;

-- select books by Agatha Christie & Ernest Hemingway
SELECT b.title, a.name
FROM books b
INNER JOIN authors a
  ON b.author_id = a.id
WHERE a.name IN ('Agatha Christie', 'Ernest Hemingway')
ORDER BY a.name;
