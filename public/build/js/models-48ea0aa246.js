myApp.factory('userModel',['$http','$q','$window',function($http, $q, $window){

    var userModel = {};

    var userInfo;

    userModel.doLogin = function(data){

        var deferred = $q.defer();

        $http({
            headers: {
                'Content-Type':'application/json'
            },
            url: baseUrl + 'auth',
            method: "POST",
            data: {
                email: data.email,
                password: data.password
            }
        }).then(function(result){
            userInfo = {
                accessToken: result.data.access_token,
                userEmail: result.data.email
            };
            $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
            deferred.resolve(userInfo);
        }, function(error){
            deferred.reject(error);
            alert('Login Error');
        });

        return deferred.promise;
    };

    userModel.getUserInfo = function(){
        return userInfo;
    };

    return userModel
}]);
//# sourceMappingURL=models.js.map
