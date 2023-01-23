ALTER TABLE books
  ADD COLUMN author_id INTEGER REFERENCES authors(id);
CREATE INDEX ON books(author_id);

-- The CREATE INDEX statement is used to create indexes in tables.

-- Indexes are used to retrieve data from the database very fast. The users cannot see the indexes, they are just used to speed up searches/queries.
