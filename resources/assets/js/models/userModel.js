myApp.factory('userModel',['$http',function($http){
    var userModel = {};

    userModel.doLogin = function(data){

        return $http({
            headers: {
                'Content-Type':'application/json'
            },
            url: baseUrl + 'auth',
            method: "POST",
            data: {
                email: data.email,
                password: data.password
            }
        }).success(function(response){
            console.log(response);
        }).error(function(data, status, headers){
            console.log(data, status, headers);
            alert('Login Error');
        });
    };

    return userModel
}]);