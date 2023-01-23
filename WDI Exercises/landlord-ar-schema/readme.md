# Landlord AR & Schema

## Active Record and Schema
* Create a `landlord_schema.sql` It should contain the following:
  - Tenants table (with the follow attributes):
    - id
    - name
    - age
    - gender
    - apartment_id

  - Apartments table (with the follow attributes):
    - id
    - address
    - monthly_rent
    - sqft
    - num_beds
    - num_baths

* Create the landlord database and load the schema to it.

* Connect to the database with ruby

* Define AR classes /w associations in the `models` folder for:
  - Tenant
  - Apartment

* Create a Seed file that (follow comments in `seed.rb`):
  - Creates at least 3 instances of the apartment class
  - Creates at least 9 instances of the Tenant class. At least 5 should belong to an apartment
  - queries for all instances of the Tenant class and stores it in a variable of your choice
  - queries for all instances of the Tenant class that belong to one of the Apartments you created and stories it in a variable of your choosing.
  - Updates attributes using attribute helper methods for one of the objects you've created
  - Saves an object that you updated using attribute helpers to the Database
  - Updates an object using the update methods
  - Deletes one of the objects you've created

#### bonus
- Create a commandline application that utilizes what you know about AR in order to create new apartments and people.

#### mega bonus
- extend functionality of the command line app where you, the landlord, can assign people to apartments, evict tenants, change rent and .... whatever you want!
