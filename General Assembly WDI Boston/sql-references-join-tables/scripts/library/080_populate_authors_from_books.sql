-- Populate authors table using data in books table

INSERT INTO authors(name)
SELECT DISTINCT author
FROM books
ORDER BY author;


-- The SELECT DISTINCT statement is used to return only distinct (different) values.

-- Inside a table, a column often contains many duplicate values; and sometimes you only want to list the different (distinct) values.


-- ORDER BY keyword is used to sort the result-set in ascending or descending order.
