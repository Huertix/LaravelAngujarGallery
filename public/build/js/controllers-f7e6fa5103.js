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
       },
        doLogout: function(){
            userModel.doUserLogout();
            $location.path('/');
        }
    });
}]);
myApp.controller('globalController', ['$scope', function($scope){
    $scope.global = {};
    $scope.global.navUrl = 'templates/partials/nav.html';
}]);
myApp.controller('navController', ['$scope','userModel', function($scope, userModel){
    angular.extend($scope, {
        user: userModel.getUserObject(),
        navUrl: [
            {
            link: 'Home',
            url: '/dashboard',
            subMenu: [
                {
                link: 'View Gallery',
                url: '/gallery/view'
                },
                {
                    link: 'AddGallery',
                    url: '/gallery/add'
                }
            ]},
            {
                link: 'Test',
                url: '/dashboard',
            }
        ]
    });
}]);

//# sourceMappingURL=controllers.js.map
