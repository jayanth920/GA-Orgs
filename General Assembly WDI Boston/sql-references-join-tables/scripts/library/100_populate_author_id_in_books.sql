UPDATE books
SET author_id = authors.id
FROM authors
WHERE books.author = authors.name
;

-- set reference id on the books table to equal the id from the authors table where the author in the books table is the same as the name in the authors table
