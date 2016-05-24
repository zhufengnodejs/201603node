//创建一个组件
//render 当使用这个组件的时候，如果渲染
var Hello = React.createClass({
    render:function(){
        return <h1>hello {this.props.name}</h1>
    }
});

ReactDOM.render(
    <div><Hello name="zfpx"/><Hello name="beijing"/></div>,
    document.getElementById('app')
);
