-- Assign random doctors to patients between certain ages
-- SQL’s way of handling if/then logic.
-- The CASE statement is followed by at least one pair of WHEN and THEN statements
UPDATE patients p
    SET doctor_id = CASE
                      WHEN DATE_PART('year', AGE(p.born_on)) BETWEEN 1 AND 10
                        then 1
                      WHEN DATE_PART('year', AGE(p.born_on)) BETWEEN 11 AND 20
                        then 2
                      WHEN DATE_PART('year', AGE(p.born_on)) BETWEEN 21 AND 30
                        then 3
                      WHEN DATE_PART('year', AGE(p.born_on)) BETWEEN 31 AND 40
                        then 4
                      WHEN DATE_PART('year', AGE(p.born_on)) BETWEEN 41 AND 50
                        then 5
                      WHEN DATE_PART('year', AGE(p.born_on)) BETWEEN 51 AND 60
                        then 6
                      WHEN DATE_PART('year', AGE(p.born_on)) BETWEEN 61 AND 70
                        then 7
                      WHEN DATE_PART('year', AGE(p.born_on)) BETWEEN 71 AND 80
                        then 8
                    END
