-- count number of patients each doctor has except for General practice doctors

SELECT dr.last_name, COUNT(*), dr.specialty
FROM patients p
INNER JOIN doctors dr
  ON p.doctor_id = dr.id
WHERE dr.specialty <> 'General practice'
-- WHERE dr.specialty = 'General practice'
GROUP BY dr.last_name, dr.specialty
ORDER BY COUNT(*) ASC;

-- Script should be run with line 5 first and line 6 commented out to show that
-- we did not assign any patients a doctor unless the doctor's specialty was
-- General practice. Afterwards line 5 should be commented out and line 6 should
-- be uncommented to show that we were successful in assigning patients a
-- doctor.


-- Nice way to show developers what's happening.
-- To see all patients with doctors & all of the pertenant informaiton
-- SELECT *
-- FROM patients p
-- INNER JOIN doctors dr
--   on p.doctor_id = dr.id
