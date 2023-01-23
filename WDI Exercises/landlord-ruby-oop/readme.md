# Landlord Ruby OOP

## Ruby OOP - Creating the classes

Create a directory named `models`.

Define classes for __Tenant__ and __Apartment__.

Create a file for each of the classes.

A tenant should have the following attributes:

* name
* age
* gender

An apartment should have the following attributes:

* address (a single string including floor and unit numbers if applicable)
* monthy_rent
* sqft
* num_beds
* num_baths
* renters (the tenant or tenants living in the apartment)

### And Then...

Define an instance method `add_tenant` on the apartment class that allows you
to add tenants to an existing apartment. Do not add the tenant to the apartment
if the number of tenants would exceed the number of beds
