// create a data structure for maintaining a collection of items in a shopping cart (e.g. phone, book, skis)

var shoppingCart = {
                      phone: {price: 10, name: 'Nexus'},
                      book: {price: 8, name: 'Harry Potter'},
                      skis: {price: 5, name: 'Rossignol'}
                    };

// in this case, I've set up shopping cart as an object itself
// each property is an item for sale, and the value of each property
// is another object

shoppingCart; // returns the whole shopping cart object
shoppingCart.phone; // returns just the phone object
shoppingCart.phone.price // 10
shoppingCart.phone.name // 'Nexus'


// create a function that will calculate the sale price for a single item or all items based on a given discount rate

var salePrice = function(item, discount) {
  // here, item is being passed in as an object
  // discount is just an integer
  return item.price - discount;
}

salePrice(shoppingCart.phone, 4); // returns 6, which is 10-4
