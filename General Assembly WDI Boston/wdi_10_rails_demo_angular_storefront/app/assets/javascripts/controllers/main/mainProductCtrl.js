var ProductCtrl = function($scope, $routeParams, $http, productData){                                              
  $scope.data = productData.products[0];

  productData.loadProduct($routeParams.productId);
  $scope.data.product = productData.products[$routeParams.productId - 1]

 

}; 