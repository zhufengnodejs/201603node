var getXHR = function(){
    var xhrs = [
        function(){
            return new XMLHttpRequest()
        },
        function(){
            return new ActiveXObject('MsXml2.XMLHTTP')
        },
        function(){
            return new ActiveXObject('MsXml3.XMLHTTP')
        },function(){
            return new ActiveXObject('Microsft.XMLHTTP')
        },
    ]
    for(var i=0;i<xhrs.length;i++){
        var x = xhrs[i];
        try{
            var xhr = x();
        }catch(e){
            continue;
        }
        getXHR = x;
        return xhr;
    }
}