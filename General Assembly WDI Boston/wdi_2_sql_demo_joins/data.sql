\c join_demo

INSERT INTO authors (name, birthday)
  VALUES ('JK Rowling', 'July 31, 1965'),
  ('Stephen King', 'September 21, 1947'),
  ('Louisa May Alcott', 'November 29, 1832'),
  ('Henry David Thoreau', 'July 12, 1817'),
  ('Jane Austen', 'December 16, 1775'),
  ('Emily Brontë', 'July 30, 1818'),
  ('Maya Angelou', 'April 4, 1928'),
  ('Virginia Woolf', 'January 25, 1882'),
  ('Ursula K. Le Guin', 'October 21, 1929'),
  ('J. R. R. Tolkien', 'January 3, 1892'),
  ('Harper Lee', 'April 28, 1926'),
  ('Truman Capote', 'September 30, 1924');


WITH ins (author, title, published_on, price) AS
(VALUES
  ('JK Rowling', 'Harry Potter and the Philosophers Stone', 'June 26, 1997', 24.95),
  ('JK Rowling', 'Harry Potter and the Chamber of Secrets', 'July 2, 1998', 24.95),
  ('JK Rowling', 'Harry Potter and the Prisoner of Azkaban', 'July 8, 1999', 24.95),
  ('JK Rowling', 'Harry Potter and the Goblet of Fire', 'July 8, 2000', 24.95),
  ('JK Rowling', 'Harry Potter and the Order of the Phoenix', 'June 23, 2003', 24.95),
  ('JK Rowling', 'Harry Potter and the Half-Blood Prince', 'July 16, 2005', 24.95),
  ('JK Rowling', 'Harry Potter and the Deathly Hallows', 'July 21, 2007', 24.95),
  ('JK Rowling', 'The Casual Vacancy ', 'September 27, 2012', 14.95),
  ('Stephen King', 'Carrie', 'April 5, 1974', 11.95),
  ('Stephen King', 'Salems Lot', 'October 17, 1975', 9.95),
  ('Stephen King', 'The Shining', 'January 28, 1977', 11.95),
  ('Stephen King', 'The Stand', 'September 1, 1978', 10.95),
  ('Stephen King', 'It', 'September 15, 1986', 9.95),
  ('Stephen King', 'The Tommyknockers', 'November 10, 1987', 11.99),
  ('Louisa May Alcott', 'Little Women', 'January 1, 1868', 4.95),
  ('Henry David Thoreau', 'Walden', 'August 9, 1854', 4.95),
  ('Henry David Thoreau', 'Resistance to Civil Government ', 'July 16, 1849', 2.95),
  ('Jane Austen', 'Sense and Sensibility', 'January 1, 1811', 5.95),
  ('Jane Austen', 'Pride and Prejudice', 'January 28, 1813', 4.95),
  ('Emily Brontë', 'Wuthering Heights', 'December 1, 1847', 3.95),
  ('Maya Angelou', 'I Know Why the Caged Bird Sings', 'January 1, 1969', 8.95),
  ('Maya Angelou', 'A Song Flung Up to Heaven', 'January 1, 2002', 7.95),
  ('Harper Lee', 'To Kill A Mockingbird', 'July 11, 1960', 6.95)
)
INSERT INTO books
  (author_id, title, published_on, price)
SELECT
  authors.id, ins.title, ins.published_on::date, ins.price
FROM
  authors JOIN ins
    ON ins.author = authors.name;

