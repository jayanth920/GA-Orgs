--deletes ingredients with the word 'onion' in it
DELETE FROM ingredients WHERE lower(name) LIKE '%onion%';
