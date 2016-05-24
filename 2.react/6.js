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
        var style = {'border':'1px solid red'};
        return (
            <div style={style}>
                <div >{this.props.name}: {this.state.count}</div>
                <button onClick={this.handleClick}>更新组件</button>
                <SubMessage count={this.state.count}/>
            </div>
        )
    },
    //5.加载此组件到页面当中
    componentDidMount:function(){
        console.log('5.componentDidMount');
    },
    //6.当属性或状态发生改变的时候会执行此方法判断此组件需要更新
    shouldComponentUpdate:function(nextProp,nextState){
        console.log('6.shouldComponentUpdate');
        //如果说改变之后的状态 count<10
        if(nextState.count<5){
            //返回true代表允许 执行更新
            return true;
        }else{
            //返回false代表不允许更新
            return false;
        }
    },
    //7.执行组件更新
    componentWillUpdate:function(){
        console.log('7.componentWillUpdate');
    },
});
var SubMessage = React.createClass({
    //子组件得到更新后的属性
    componentWillReceiveProps:function(){
        console.log('SubMessage componentWillReceiveProps');
    },
    //当属性发生改变时判断此组件是否需要更新
    shouldComponentUpdate:function(nextProp,nextState){
        console.log('SubMessage shouldComponentUpdate');
        if(nextProp.count>3)
            return false;
        else
            return true;
    },
    render:function(){
        console.log('SubMessage render');
        return (
            <h3>当前的计数是: {this.props.count}</h3>
        )
    }
});

ReactDOM.render(
    <MessageBox name="计数器"/>,
    document.getElementById('app')
);