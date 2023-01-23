-- make all ingredient names uppercase
UPDATE ingredients
SET name = UPPER(name);

-- make all ingredient names lowercase
UPDATE ingredients
SET name = LOWER(name);

-- change all tbsp to cup
UPDATE ingredients
SET name = 'cup'
WHERE name = 'tbsp';
