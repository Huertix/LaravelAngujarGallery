STEPS:

1º Install laravel -> composer create-project laravel/laravel [projectname]
1.1º npm install
2º Install angular depens. with bower ->
    bower init
    bower install angular --save
    bower install angular-route --save
    bower install angular-cookies --save
    bower install bootstrap --save

3º Setup app.js & gulpfile ->
    create app.js in resources/assets

    mix.scripts([
            'app.js'
        ], 'public/js/app.js');

    run gulp in root dir

4º Define routes in app.js

5º Define first controller in controllers/userController.js

6º add scripts in master.blade.php
6.1º add ng.app & ng-view

7º create users controller -> php artisan make:controller userController

8º fill in with methods/routes    ---> check routes with php artisan route:list

9º update route.php ->
    Route::resource('user','UserController');
    Route::post('auth','UserController@checkAuth');

10º migrate
11º user seed -> php artisan db:seed

12º complete usercontroler.js with $http & $location

13º Refactor userController and create userModel.

14º update gulp file

15º