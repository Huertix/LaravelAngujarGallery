myApp.controller('userController', ['$scope','$location', 'userModel', function($scope, $location, userModel){
    angular.extend($scope, {
       doLogin: function(loginForm){
           console.log($scope.login.email);
           console.log($scope.login.password);

           var data = {
               email: $scope.login.email,
               password: $scope.login.password
           };

           userModel.doLogin(data).then(function () {
               $location.path('/dashboard');
           });
       }
    });
}]);
//# sourceMappingURL=controllers.js.map
