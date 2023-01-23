
## Set up CRUD for Companies


Here is some data to get started. You got this!

In `psql`:

```sql
CREATE TABLE companies (id SERIAL, name VARCHAR(160), industry VARCHAR(160));

INSERT INTO companies (name, industry) VALUES ('Bream-Hall', 'Hospitality');
INSERT INTO companies (name, industry) VALUES ('Raviga', 'Construction');
INSERT INTO companies (name, industry) VALUES ('Maleant Data Systems Solutions', 'Real-Estate');
INSERT INTO companies (name, industry) VALUES ('Bachmanity', 'Education');
INSERT INTO companies (name, industry) VALUES ('Aviato', 'Advertising');
INSERT INTO companies (name, industry) VALUES ('Hooli', 'Government');
INSERT INTO companies (name, industry) VALUES ('SeeFood Technologies Inc', 'Healthcare');
INSERT INTO companies (name, industry) VALUES ('Pied Piper', 'IT');
INSERT INTO companies (name, industry) VALUES ('Infotrade', 'Legal');
INSERT INTO companies (name, industry) VALUES ('Endframe', 'Mining');
SELECT * FROM companies;
```

Data brought to you by [faker](https://github.com/stympy/faker)
