angular.module('StoreFront').factory('productData',['$http', function($http){
	var productData = {products: [
		{	name: 'Loading Products', description: "", price: ''} 
		]};

    // Load all products from Rails
    productData.loadProducts = function(){
      $http.get('./products.json').success(function(data){
        productData.products = data;
        console.log('Successfully loaded products.');

      }).error(function(){
        console.log('Failed to load products');
      });
    }; // loadProducts function

    // Load a single product from Rails
    productData.loadProduct = function(productId){
      $http.get('./products/'+ productId + '.json').success(function(data){
        productData.product = data;
        console.log('Successfully loaded product.');

      }).error(function(){
        console.log('Failed to load product');
      });
  }; // loadProduct function

  productData.createProduct = function(newProduct){
    if(newProduct.newProductName == '' || newProduct.newProductdescription == '' || newProduct.newProductPrice == ''){
      alert("Name, Description or Price is blank!");
      return false;
    }

    var data = {new_product: {
      name: newProduct.newProductName,
      description: newProduct.newProductDescription,
      price: newProduct.newProductPrice,
    }};

    $http.post('./products.json', data).
      success(function(data){
        productData.products.push(data);
        console.log("Successfully created a new product");
      }).
      error(function(){
        console.error("Failed to create a new product");
       });

    return true;
  };


  return productData
}]);
