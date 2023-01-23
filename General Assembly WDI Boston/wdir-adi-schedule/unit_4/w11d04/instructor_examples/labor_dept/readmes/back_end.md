# Labor Department

Acknowledgements: Thank you Jerrica for this very fine back end!

Next: [React Static Components](react_static_components.md)

## About

Simple two-model contacts API with:

### Models:
#### A One-to-Many Relationship:
  1. People belong to a company
  1. Companies have many people

#### People:
  - unique id
  - name (VARCHAR 255)
  - age (INT)
  - phone (VARCHAR 32)
  - avatar (VARCHAR 255)
  - key_skill (VARCHAR 255)
  - company_id INT

#### Companies:
  - unique id
  - company_name (VARCHAR 255)
  - industry (VARCHAR 255)
  - rating (INT)
  - mission_statement (TEXT)

### Routes:
  1. People
  ```
Prefix Verb   URI Pattern                    Controller#Action
people
       GET    /people(.:format)              people#index
       GET    /people/:id(.:format)          people#show
       POST   /people(.:format)              people#createOne
       POST   /companies/:id/staff(.:format) people#createForCompany
       DELETE /people/:id(.:format)          people#delete
       PUT    /people/:id(.:format)          people#update
  ```
  1. Companies
  ```
  Prefix Verb   URI Pattern                    Controller#Action
  companies
          GET    /companies(.:format)           companies#index
          GET    /companies/:id(.:format)       companies#show
          POST   /companies(.:format)           companies#create
          POST   /people/:id/company(.:format)  companies#createWithStaff
          DELETE /companies/:id(.:format)       companies#delete
          PUT    /companies/:id(.:format)       companies#update
  ```


## Set Up

Recommended: close everything, reboot your computer, all extra windows, all terminal tabs etc.
- open terminal (keep bash here)

- open a new terminal tab for `postgresql`
- open a new terminal tab for `psql` command line
- open a new terminal tab for `rails s` (don't start it yet run `bundle install` first)
- run `bundle install` to set up your gems for this project


### CREATING THE DATABASE in Postgresql

#### More set up
:red_circle: If you already have a `react_contacts` database in your psql database, `dropdb react_contacts` first to start fresh then in the postgres cli:
1. `CREATE DATABASE react_contacts;`
1. `\c react_contacts`
1. `\dt to see tables`
1. `DROP TABLE IF EXISTS companies;`
1. `DROP TABLE IF EXISTS people;`



#### CREATING THE PEOPLE TABLE  

1. `CREATE TABLE people (id SERIAL, name VARCHAR(255), age INT,  phone VARCHAR(32), avatar VARCHAR(255), degree VARCHAR(255), key_skill VARCHAR(255), company_id INT);`

#### CREATING THE COMPANIES TABLE

1. `CREATE TABLE companies (id SERIAL, company_name VARCHAR(255), industry VARCHAR(255), rating INT, mission_statement TEXT);`


1. Check tables are there `\dt to see tables`

## Seeding Data

1. In terminal inside the root of this app, run the command `rails db:seed`

## Seeding Data

1. In terminal inside the root of this app, run the command `rails db:seed`

bug! if the name has a `'` in it, it'll error, just run the seed again

1. in `psql`
1. `SELECT * FROM people;`
1. `SELECT * FROM companies;`
- Note press `q` to get to the end of the data, if needed
- `\q` to quit pgsql

## Find and test routes
- `rails routes` to see the routes available to us
- We're just going to focus on people
- test 'index', 'show', 'put', 'delete' using postman


Try to create this person - If using Postman, be sure to be on a `POST` route `/people` and choose `raw` for body format and `JSON(application/json)`
```js
{
   "name": "Miss Lincolna Beerslee",
   "phone": "841-620-8465",
   "avatar": "https://robohash.org/893.png?size=100x100&set=set4",
   "degree": "",
   "key_skill": "Problem Solving",
   "age": 38,
   "company_id": 1
}
```



Take the newly created id, and try to update Miss Beerslee's age to 39 or anything else you like. Make sure you choose the `PUT` route. (again be sure to select body raw, and JSON(application/json))

example update  PUT `/people/:id`

```js
{
   "name": "Miss Lincolna Beerslee",
   "phone": "606-857-5309",
   "avatar": "https://robohash.org/893.png?size=100x100&set=set4",
   "degree": "",
   "key_skill": "Bug Squashing",
   "age": 39,
   "company_id": 2
}
```

![](https://i.imgur.com/96y9KRe.png)

GOTCHA! The way this update route works is if you leave a field bank it will overwrite it with '' or nil. We'll have to keep this in mind when we work on our update route.


Delete her or any other person. Make sure to select the `DELETE` `people/:id` route.

A successful delete message will read
```js
{
    "deleted": true
}
```
