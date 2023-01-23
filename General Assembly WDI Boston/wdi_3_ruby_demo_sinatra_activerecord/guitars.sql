DROP TABLE guitars;

CREATE TABLE guitars
(
  id SERIAL PRIMARY KEY,
  model VARCHAR(255),
  year INT,
  make VARCHAR(255),
  color VARCHAR(255)
);