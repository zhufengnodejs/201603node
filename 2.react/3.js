//创建一个组件
//render 当使用这个组件的时候，如果渲染
var Hello = React.createClass({
    //约定此组件使用的时候必须提供属性名和属性的类型
    propTypes:{
        name:React.PropTypes.string.isRequired,
        age:React.PropTypes.number.isRequired
    },
    render:function(){
        return <h1>hello {this.props.name} {this.props.children}</h1>
    }
});
var name = 'zfpx';
var age = 7;
ReactDOM.render(
    <Hello name={name} age={age} >
        <span>a</span>,
        <span>b</span>
    </Hello>,
    document.getElementById('app')
);
