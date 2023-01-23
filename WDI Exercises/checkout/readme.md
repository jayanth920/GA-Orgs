# Checkout

Debugging is so much more fun when it's about money!

This shopping cart isn't quite living up to our expectations. We're losing money on shipping.  We're losing money on handling.  We're losing customers due to errors.

Correct the errors and get us back on track.

1. Fork & Clone in ~/wdi/exercises.
- Change to the "checkout" dir.
- Open index.html
- Fix scripts/shopping_cart.js (and only shopping_cart.js)

## Shipping Fees:

Weight:
- < 5lbs:     $0
- 5 - 50lbs:  $5
- Over 50lbs: $10

Size:
- Small: $0
- Large: $50
- Ludricous: $2550

Add all appropriate shipping fees.

## Debugging Suggestions:

Remember, take small steps.  Get one thing working, commit, and move to the next.  Don't be afraid to comment out some code. If you need to, replace it with a simple hard-coded value for a little while.

If something looks overwhelming, break it down.  Look at one function at a time.  Each function has its own responsibility.


You do not need to change any code in the app.shoppingCart.render() function.  

### Suggested progression:

1. Inspect app.ShoppingCart.  What properties and methods does it have?  What is their responsibility?
- Get the unordered "items" list to work.
- Simplify.  Comment out some items in app.initialize to get a simple example.
- Get each function to work without errors.
- Calculate the correct Subtotal.
- Calculate the Shipping.
- Calculate the Total Cost.


## Done?

When completed, you should see:
```
Items

Name: EloquentJavascript | Price: $20.00
Name: Raspberry Pi | Price: $35.50
Name: Trampoline | Price: $339.50
Name: Tesla X1 | Price: $79,900.00

Subtotal:   $80,295.00
Shipping:    $2,615.00
Total cost: $82,910.00
```

## Bonus

Bonus 1: Books always have free shipping, regardless of size or weight.

Bonus 2: Render the shipping cost for each item (requires changes to app.shoppingCart.render).
