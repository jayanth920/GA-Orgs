//////////////////////////////////////////////
/// Department
//////////////////////////////////////////////
module.exports = Dept;

var Product = require('./product.js');

// generate id
Dept.getID = (function(){
  var id = 0;

  return function(){
    var origID = id;
    id = id + 1;
    return origID;
  };
})();

function Dept(name){
  this.products = [];
  this.name = name;
  this.id = Dept.getID();
};

Dept.prototype.addProduct = function(name, description, wholesalePrice){
  this.products.push(new Product(name, description, wholesalePrice));
};
