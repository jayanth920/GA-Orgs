# Landlord

OH NOES. An up-and-coming property manager Bob Pizza has too much data now and is having trouble managing it all. He wants us to build him a sick new app. But before he just pays us money he wants to test our chops with Ruby enumerables...

## Part 1 - Practice With Enumerables

Read the comments in `app.rb` to follow the directions practicing enumerables

> Store the enumerable methods into variables and use `puts` to verify the results of your methods.

## Part 2 - Build the App

> Comment out any functional code in app.rb, but save it, you can leverage the code from Part 1 to write out parts of this application.

Bob Pizza is old school and he wants a sick command line interface for this app. Below are Bob's user stories. It is essential that he implement the MVP user stories. **The Silver and Gold user stories are considered to be bonuses.**

### MVP
```
- I should have a numbered interface for my application so that I can just type in a number to access different parts of my program.
- I should be allowed an option to view all the apartments so that I can get an overview of my properties.
- I should be allowed an option view all the tenants so that I can get an overview of my tenants
```

### Silver
```
- I should be allowed an option to view all the apartments with their tenants so that I can get an overview of Occupancy.
- I should be able to find where a tenant lives based on tenant name in case of emergencies.
```

### Gold
```
- I should be allowed to remove a tenant from an apartment so that I can track evictions/lease ends
- I should be allowed to add a tenant to an apartment so that I can track occupancy.
- I should be allowed to create a new apartment so that I can track new properties in my books
- I should be allowed to create a new tenant so that I can track new tenants in my books.
```

## Part 3 -  Refactor Using Ruby Classes

Bob Pizza likes what you built. But he looks at your code and wants a custom made object to represent your tenants and apartments.

### Step 3a - Defining our models.
Create a `models` folder. In this folder, create two files `apartment.rb` and `tenant.rb`.

Link these two files at the top of `app.rb`...

```ruby
require_relative "models/apartment"
require_relative "models/tenant"
```

In the two files, create class definitions for an `apartment` and a `tenant`.

In `models/apartment.rb`...

```ruby
class Apartment
  # Place your code here
end  
```

In `models/tenant.rb`...

```ruby
class Tenant
  # Place your code here
end  
```

Make sure all your instance variables(attributes) are accessible within the instances of your class through getter and setters methods.

### Step 3b - Converting existing data into instances of the classes we've defined in Step 1.

Here's some starter code...

```ruby
require_relative "data"
require_relative "models/apartment"
require_relative "models/tenant"
apartments = data[:apartments]
tenants = data[:tenants]
ruby_apartments = []
ruby_tenants = []
```

> We're going to use the variables `ruby_apartments` and `ruby_tenants` to differentiate between the original arrays (`apartments` and `tenants`) and the arrays we'll be putting our ruby class objects into.

Using the `.each` enumerable, loop through the exisiting apartments and tenants arrays we worked with yesterday.

In the loops...
- Create a new instance of a class you've defined
- Push that new instance into the corresponding ruby array.

> We can also instead use the `.map` enumerable to condense the above code that uses `.each`.

### Step 3c - Convert to using Ruby classes

Take all of the code you wrote in Part 1. Replace all variables of `apartments` with `ruby_apartments` and all `tenants` with `ruby_tenants`.

Most likely, all of the code broke when converting these variables. That's because we we're using the hash syntax during thursday nights HW. Convert the enumerables you wrote for Part 1 of this assignment. The enumerables should now use the getter methods you defined earlier.

### Step 3d - Convert the rest of your app

Convert however far you got with your CLI application into using Ruby Class Objects instead of hashes.

## BONUS

Create a class method `.all` for `Tenant` and/or `Apartment`. When called on the class it will return all of the instances that have been created through this class.
