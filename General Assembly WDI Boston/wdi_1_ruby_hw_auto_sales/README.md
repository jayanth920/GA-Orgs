# Honest Tom's Dealership

*"...and if you sign today, we'll throw in an extended warranty!"*

In this assignment we'll be writing a collection of Ruby classes for a "car lot" application. We'll be able to create a car lot that contains both new and used cars for sale, and used cars may have damages recorded. We will *not* be writing the application interface itself &ndash; no terminal interaction is needed. As the developer you can interact with your classes using `binding.pry` and test files.

## Guidelines

* Write test files for each of your classes in the `bin` directory. Add to and run your test files *frequently* to make sure all the pieces are still working together as you expect.
* Make frequent, logical, granular Git commits with descriptive messages.
* Use getters, setters, public methods, private methods, and class constants appropriately. Combine methods and use inheritance when needed to avoid duplication of code.

## Specifications

Think carefully about the order you'll want to build these in. For instance, it might make sense to leave `CarLot` for last, since it needs cars to function. Also think about which of these bullet points are fundamental properties that need to be stored on the object as instance variables, and which ones will be methods that calculate a result using the values of the instance variables.

### `CarLot`
* has a name
* may have one or more cars, represented by `Car` objects
* has a "lot value" (total price of all cars on the lot)
* has a way to search for cars by make, model, or year

### `Car`
* has a make, model, and year of manufacture
* has an MSRP (original retail price)
* has a value (MSRP modified by depreciation, taking the year of manufacture into account)
* all cars have a constant depreciation of 5% per year
* has a markup (can be set to any value, representing the car lot's profit margin)
* has a price (value modified by the markup)

### `UsedCar`
* inherits from `Car`
* has a mileage
* may have one or more damages, represented by `Damage` objects
* has a way to query whether the car is damaged (has at least one damage)
* has a value (same calculation as a new car, modified by mileage depreciation and subtracting the cost to repair all current damages)
* all used cars have a constant mileage depreciation of 1% per 10,000 miles (0.0001% per mile)

### `Damage`
* has a description
* has a cost to repair

## Extra Challenges

* Add the ability to mark cars as "sold". A sold car no longer contributes to the "lot value", but does contribute to a new "lot revenue" property. Methods on the car lot should allow retrieving either unsold or sold cars. The transition from unsold to sold should be *one-way*.
* Add an auto-generated unique ID for each car that is 1 higher than the ID of the last car created (starting at 1 for the first car). You'll need to use a class variable for this.
