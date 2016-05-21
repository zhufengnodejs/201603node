angular.module('zfpxMod',['firebase']);
angular.module('zfpxMod').controller('contactCtrl',function($scope,$firebaseArray){
    //创建firebase实例 base,传入数据库的地址
    var base = new Firebase('https://201603node.firebaseio.com/');
    //创建$firebaseArray，它可以绑定到$scope上
    //是一个对象数组 然后可以在页面里迭代此数组
    //firebaseArray 代表我们的数据库集合
    var firebaseArray = $firebaseArray(base);
    console.log(Object.prototype.toString.call(firebaseArray));
    $scope.contacts = firebaseArray;
    //这是是否时数增加表单的标识位 true 显示 false 隐藏
    $scope.addContactForm = false;
    //构建默认的联系人对象
    $scope.contact = {};
   //开始增加联系人
    $scope.add = function(){
        $scope.contact = {};//清空表单
        //是否显示表单布尔值 取反
        $scope.addContactForm= !$scope.addContactForm
    }

    //开始编辑联系人
    $scope.edit = function(item){
        //把当前的联系赋给 控制器的 $scope的contact对象
        $scope.contact = item;
        //显示增加联系人表单
        $scope.addContactForm = true;
    }
    //选中当前元素 把当前联系人赋给$scope.contact
    $scope.select = function(contact){
        $scope.contact = contact;
    }
    //增加一个联系人方法
    $scope.addContact = function(){
        //先获取当前联系人的ID
        var $id = $scope.contact.$id;
        //判断id是否存在
        if($id){
            contactBase.$save($scope.contact).then(function(ref){
                $scope.contact = {};//清空表单
                $scope.addContactForm = false;//隐藏表单
                $scope.msg = '联系人修改成功!';//显示提示消息
            })
        }else{
            //调用集合的$add方法增加一个联系人
            contactBase.$add($scope.contact).then(function(ref){//ref代表保存后的对象 它会增加 $id
                var id = ref.key();//得到ID
                $scope.contact = {};//清空表单
                $scope.addContactForm = false;//不要再显示增加表单了
                $scope.msg = '联系人添加成功!';
            });
        }

        return false;
    }
});