![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Lab: Credit Card Class

Write a class to describe a `CreditCard`.

The `CreditCard` class should have the following attributes:

- Credit card # (16-digits)

> Note: Do *not* check a real credit card number into version control.

- Expiration Date (two digit month, two digit year)
- CCV (3 digit number on the back)
- Name
- Billing Zip Code (5-digits)

It should have the following methods:

- `initialize` - Used for creating a new credit card.
- `valid?` - This checks the validity of the credit card. Check that it has a name, proper length zip code, 16-digit number and an expiration date in the future.

##### BONUS 1
Credit cards are usually validated using a [Luhn algorthm](http://en.wikipedia.org/wiki/Luhn_algorithm); add a method to your CreditCard class to validate the card number using the Luhn method, and incorporate that method into 'valid?'.

##### BONUS 2
This repo has some tests in it using a Ruby testing tool called Rspec; Rspec code looks very similar to another testing tool that you've already used, Jasmine. If you have time, create a new repo and re-create your Credit Card class using a test-driven approach.
