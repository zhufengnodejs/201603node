angular.module('zfpxMod',['firebase']);
angular.module('zfpxMod').controller('contactCtrl',function($scope,$firebaseArray){
    var base = new Firebase('https://201603node.firebaseio.com/');
    var contactBase = $firebaseArray(base);
    $scope.contacts = contactBase;
    $scope.addContactForm = false;
    $scope.contact = {};
    $scope.add = function(){
        $scope.contact = {};
        $scope.addContactForm= !$scope.addContactForm
    }
    $scope.edit = function(item){
        $scope.contact = item;
        $scope.addContactForm = true;
    }
    $scope.select = function(contact){
        $scope.contact = contact;
    }
    $scope.addContact = function(){
        var $id = $scope.contact.$id;
        if($id){
            contactBase.$save($scope.contact).then(function(ref){
                $scope.contact = {};
                $scope.addContactForm = false;
                $scope.msg = '联系人修改成功!';
            })
        }else{
            contactBase.$add($scope.contact).then(function(ref){
                var id = ref.key();
                $scope.contact = {};
                $scope.addContactForm = false;
                $scope.msg = '联系人添加成功!';
            });
        }

        return false;
    }
});