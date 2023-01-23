DROP DATABASE IF EXISTS westeros;
CREATE DATABASE westeros;
\c westeros

-- 1. Create two tables:
--   `houses` has an id (primary key), name (text), a sigil (text) and a motto (text)
--   `people` has an id (primary key), name (text), weapon (text), and age (integer)


-- 2. Create at least three houses and three people with varying attributes.


-- 3. Write a query to get all attributes of people greater than a certain age *or* having a specific weapon.


-- 4. Change the motto of one of your houses. Look it up by its sigil, since you don't know the ID.


-- 5. Kill off, er, I mean delete one of your people. Look them up by their name, since you don't know the ID.
