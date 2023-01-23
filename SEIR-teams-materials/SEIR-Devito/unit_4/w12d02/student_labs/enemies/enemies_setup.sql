DROP TABLE superheros;
CREATE TABLE superheros (id SERIAL, name VARCHAR(40), battlecry VARCHAR(100));
INSERT INTO superheros (name, battlecry)
  VALUES ('Adequate Man', 'That is good enough. Time for a nap.');
INSERT INTO superheros (name, battlecry)
  VALUES ('Spider Pig', 'Oink!');
INSERT INTO superheros (name, battlecry)
  VALUES ('The Accountant', 'Shh! I am WORKING!');

DROP TABLE scientists;
CREATE TABLE scientists (id SERIAL, name VARCHAR(40), lair_type VARCHAR(40));
INSERT INTO scientists (name, lair_type)
  VALUES ('Waffle Man', 'IHOP');
INSERT INTO scientists (name, lair_type)
  VALUES ('Ordinary Guy', 'Modest Cape Cod style house');
INSERT INTO scientists (name, lair_type)
  VALUES ('Krieger', 'Cloning Factory');
