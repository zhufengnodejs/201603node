var Suggestion = React.createClass({
    getInitialState:function(){
      return {content:[]}
    },
    handleChange:function(){
        //this 是我们的组件的实例对象
      var value = this.refs.keyword.value;
      $.ajax({
          url:'http://www.baidu.com/su',//请求的URL
          type:'get',//请求的方式
          dataType:'jsonp',//响应的类型
          jsonp:'cb',//指定回调函数的名称
          data:{wd:value}, // 传递的参数
          context:this,//绑定success回调函数中的this
          processData:true,//会把data转成查询字符串拼在url中
          success:function(result){
              //取得联想词的数组
              var data = result.s;
              //转成组件的数组
              data = data.map(function(item){
                  return <li className="list-group-item">{item}</li>
              });
                //设置状态
              this.setState({content:data});
          }
      })
    },
    render:function(){
        return (
            <div>
                <input type="text" ref="keyword" onChange={this.handleChange}/>
                <ul ref="content" className="list-group">
                    {this.state.content}
                </ul>
            </div>
        )
    }
})

ReactDOM.render(
    <Suggestion/>,
    document.getElementById('app')
);