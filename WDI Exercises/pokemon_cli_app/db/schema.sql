DROP TABLE IF EXISTS trainers;
DROP TABLE IF EXISTS pokemons;

CREATE TABLE trainers (
  id SERIAL PRIMARY KEY,
  username TEXT,
  team TEXT,
  level INT
);

CREATE TABLE pokemons (
  id SERIAL PRIMARY KEY,
  name TEXT,
  cp INT,
  fighting_type TEXT,
  trainer_id INT
);
