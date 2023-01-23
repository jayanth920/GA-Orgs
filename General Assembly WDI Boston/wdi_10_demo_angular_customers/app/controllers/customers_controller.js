// Create a controller named "CustomersController".
// We pass it a scope, whats a scope.
customersApp.controller("CustomersController", function($scope, customersFactory ){
    function init(){
        customersFactory.getCustomers().success(function(data){
            $scope.customers = data;
        });
    };

    init();
});
