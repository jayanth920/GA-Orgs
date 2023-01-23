-- GOAL:
--- Assign adults (patients with age 16-64)
--- to General practice doctors (doctors with specialty General practice)

-- Create a temporary sequence for doctor IDs
-- this will give us a single row table to keep track of a sequence (count) for doctor IDs
-- The sequence starting at 0 then (1, 2, 3...) every time we use NEXTVAL
--  Sequence Name: doctor_join_id_seq
--  nextval
--  ------
--    0
-- more on sequence and temporary sequence https://www.postgresql.org/docs/9.6/static/sql-createsequence.html
CREATE TEMPORARY SEQUENCE doctor_join_id_seq MINVALUE 0;

-- Create a temporary sequence for patient IDs
CREATE TEMPORARY SEQUENCE patient_join_id_seq MINVALUE 0;

-- Create a temporary table called doctor_ids
CREATE TEMPORARY TABLE doctor_ids AS (
  -- the table will have a column named ID and join_id
  -- join_id will be incremented based on the NEXTVAL of the temporary sequence
  SELECT id, NEXTVAL('doctor_join_id_seq') AS join_id
  -- the id column will be populated with doctors who have 'General Practice' as a specialty
  FROM doctors
  WHERE specialty = 'General practice'
);
--  Table Name: doctor_ids
--    id   | join_id
--  ------ | ------
--    10   |    1

-- Create a temporary table called patient_ids
CREATE TEMPORARY TABLE patient_ids AS (
  SELECT id, NEXTVAL('patient_join_id_seq') AS join_id
  -- the id column will be populated with patients who have an age between 16 and 64
  FROM patients
  WHERE date_part('year', age(born_on)) BETWEEN 16 AND 64
);

-- Update the patients table with a doctor_id column
-- for patients that are in the temporary patient_ids table
-- with a doctor in the temporary doctor_ids table
-- (patient 1 with doctor 1, patient 2 with doctor 2)
-- if there are more patients than doctors then a doctor will be assigned more than once
-- (patient 5 with doctor 5, patient 6 with doctor 1, patient 7 with doctor 2)
UPDATE patients p
SET doctor_id = ids.doctor_id
FROM (SELECT p.id AS patient_id, dr.id AS doctor_id
      FROM doctor_ids dr
        INNER JOIN patient_ids p
          ON dr.join_id = (p.join_id % CURRVAL('doctor_join_id_seq'))) AS ids
WHERE p.id = ids.patient_id;
