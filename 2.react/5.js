var LikeButton = React.createClass({
    //设置初始状态
    getInitialState:function(){
      return {like:true};//返回状态对象
    },
    //获取默认的属性
    getDefaultProps:function(){
      return {name:'郭德纲'};
    },
    //定义一个事件处理函数
    handleClick:function(){
        // 改变state
        this.setState({like:!this.state.like});
    },
    render:function(){
        return (
            <p>
                我 <button onClick={this.handleClick}>{this.state.like?'喜欢':'讨厌'}</button> {this.props.name}
            </p>
        )
    }
});

ReactDOM.render(
    <LikeButton name="章子怡"/>,
    document.getElementById('app')
);