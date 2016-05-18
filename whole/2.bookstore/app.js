angular.module('zfpxMod', ['ngRoute']);

angular.module('zfpxMod').config(function ($routeProvider) {
    $routeProvider.when('/list', {
        templateUrl: 'booklist.html',
        controller: 'bookCtrl'
    }).when('/detail/:id', {
        templateUrl: 'detail.html',
        controller: 'DetailCtrl'
    }).otherwise({
        redirectTo: '/list'
    })
});
angular.module('zfpxMod').controller('bookCtrl',function($scope,$http){
    $http.get('books.json').then(function(response){
        $scope.books = response.data;
    });
});

angular.module('zfpxMod').controller('DetailCtrl',function($scope,$http,$routeParams){
    $http.get('books.json').then(function(response){
       $scope.book =  response.data.filter(function(book){
            return book.id == $routeParams.id;
        })[0];

    });
});
