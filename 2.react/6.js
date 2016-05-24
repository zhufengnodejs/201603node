var MessageBox = React.createClass({
    //1.获取默认的属性
    getDefaultProps:function(){
        console.log('1.getDefaultProps');
        return {
            name:'提示'
        }
    },
    //2.获取初始状态
    getInitialState:function(){
        console.log('2.getInitialState');
        return {
            count:0
        }
    },
    //3.此组件将要被加载到页面当中去
    componentWillMount:function(){
        console.log('3.componentWillMount');
    },
    handleClick:function(){
        this.setState({count:this.state.count+1});
    },
    //4.把此组件加载到页面中
    render:function(){
        console.log('4.render');
        return (
            <div>
                <h1>{this.props.name}: {this.state.count}</h1>
                <button onClick={this.handleClick}>更新组件</button>
            </div>
        )
    },
    //
    componentDidMount:function(){
        console.log('5.componentDidMount');
    },
    //当属性或状态发生改变的时候会执行此方法判断此组件需要更新
    shouldComponentUpdate:function(nextProp,nextState){
        console.log('6.shouldComponentUpdate');
        console.log(nextState);
        //如果说改变之后的状态 count<10
        if(nextState.count<5){
            //返回true代表允许 执行更新
            return true;
        }else{
            //返回false代表不允许更新
            return false;
        }
    },
    componentWillUpdate:function(){
        console.log('7.componentWillUpdate');
    },
});

ReactDOM.render(
    <MessageBox name="计数器"/>,
    document.getElementById('app')
);