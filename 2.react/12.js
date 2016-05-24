var mix = {
    getInitialState:function(){
        return {count:1}
    }
}
var mix2 = {
    getDefaultProps:function(){
        return {name:'计数器'}
    }
}
var Counter1 = React.createClass({
    mixins:[mix,mix2],
    render:function(){
        return(
            <div>111{this.props.name}:{this.state.count}</div>
        )
    }
});
var Counter2 = React.createClass({
    mixins:[mix],
    render:function(){
        return(
            <div>22{this.state.count}</div>
        )
    }
});


ReactDOM.render(
    <div>
        <Counter1></Counter1>
        <Counter2></Counter2>
    </div>,
    document.getElementById('app')
)