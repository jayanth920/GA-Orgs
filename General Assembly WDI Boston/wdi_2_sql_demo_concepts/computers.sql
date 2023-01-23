-- In case there is already a computers_lab database, drop it
DROP DATABASE IF EXISTS computers_lab;


-- Create a computers_lab database
CREATE DATABASE computers_lab;


-- Connect to the computers_demo databases
\c computers_lab


-- Create a computers_models table
-- The table should have id, make, model, cpu_speed, memory_size,
--  price, release_date, photo_url, storage_amount, number_usb_ports,
--  number_firewire_ports, number_thunderbolt_ports

CREATE TABLE computers_models (
  id SERIAL PRIMARY KEY,
  make TEXT,
  model TEXT,
  cpu_speed INTEGER,
  memory_size INTEGER,
  price MONEY,
  release_date DATE,
  photo_url TEXT,
  storage_amount INTEGER,
  number_usb_ports INTEGER,
  number_firewire_ports INTEGER,
  number_thunderbolt_ports INTEGER
);



-- Alter the computers_models, removing the storage_amount column
-- and add storage_type and storage_size columns
ALTER TABLE computers_models DROP COLUMN storage_amount;
ALTER TABLE computers_models ADD storage_type TEXT;
ALTER TABLE computers_models ADD storage_size INTEGER;


-- Insert 10 computers into the computers_models table
INSERT INTO computers_models (make, model, price)
  VALUES ('Apple', 'Macbook Pro 15 Retina', 3500);


-- Select all entries from the computers_models table
SELECT * FROM computers_models;
