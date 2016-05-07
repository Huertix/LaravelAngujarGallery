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
