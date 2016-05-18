angular.module('zfpxMod',['firebase']);
angular.module('zfpxMod').controller('contactCtrl',function($scope,$firebaseArray){
    var base = new Firebase('https://201603node.firebaseio.com/');
    var contactBase = $firebaseArray(base);
    $scope.contacts = contactBase;
});