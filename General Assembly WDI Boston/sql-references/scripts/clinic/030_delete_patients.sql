-- delete patients whose first letter of their first name and last name are the same

DELETE FROM patients WHERE LEFT(first_name, 1)= LEFT(last_name,1);
