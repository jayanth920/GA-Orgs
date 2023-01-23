module.exports = Product;

//////////////////////////////////////////////
/// Product
//////////////////////////////////////////////

// create a class method that will genreate an id.
Product.getID = (function(){
  var id = 0;

  return function(){
    var origID = id;
    id = id + 1;
    return origID;
  };
})();

function Product(name, description, wholesalePrice){
  this.name = name;
  this.description = description;
  this.id = Product.getID();
  this.wholesalePrice = wholesalePrice;
}
Product.prototype.setRetailPrice = function(price){
  this.retailPrice = price;
};
Product.prototype.setSalePrice = function(price){
  this.salePrice = price;
};

Product.prototype.display = function(){
  return 'Product: name: ' + this.name + ', description: ' + this.description + ', wholesalePrice: ' + this.wholesalePrice;
};
