// javascript constructor function
// that acts as an Angular controller.
var CartCtrl = function($scope, $location, $http){

  $scope.getCartLineItems = function(){
      $http.get('/cart').
        success(function(data){
          $scope.lineItems = data;
          console.log("Got Cart line items");
        }).
        error(function(data){
          console.error("Error: getting cart line items");
        });
   };

   $scope.addProductToCart = function(productId){
    $http.post("/products/"+ productId + "/add_to_cart", productId).
      success(function(data){
        console.log("Successfully add product to cart");
      }).
      error(function(data){
        console.error("Error: adding product to cart");
      });
    $location.url('/cart');
  };

  // get all the 
  // getCartLineItems();
}