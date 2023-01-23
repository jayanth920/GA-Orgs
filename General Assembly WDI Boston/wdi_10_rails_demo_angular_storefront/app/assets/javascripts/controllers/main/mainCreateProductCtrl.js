var CreateProductCtrl = function($scope, $location, productData){
	$scope.data = productData.data;
  productData.loadProducts();

  $scope.formData = { 
    newProductName: '',
    newProductDescription: '',
    newProductPrice: ''
  };

  $scope.navNewPost = function(){
    $location.url('/product/new');
  };
  $scope.navHome = function(){
    $location.url('/');
  };

  $scope.createProduct = function(){
    console.log($scope.formData);
    productData.createProduct($scope.formData);
  };

  $scope.clearProduct = function(){
    $scope.formData.newProductName = '';
    $scope.formData.newProductDescription = '';
    $scope.formData.newProductPrice = '';
  };

};


