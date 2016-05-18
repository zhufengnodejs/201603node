angular.module('zfpxMod',['ngRoute']);

angular.module('zfpxMod').config(function($routeProvider){
    $routeProvider.when('/main',{
        templateUrl:'main.html',
        controller:'MainCtrl'
    }).when('/contact',{
        templateUrl:'contact.html',
        controller:'ContactCtrl'
    }).otherwise({
        redirectTo:'/main'
    });
});
angular.module('zfpxMod').controller('MainCtrl',function($scope,$http){
    $http.get('services.json').then(function(response){
        $scope.services = response.data;
    });
});