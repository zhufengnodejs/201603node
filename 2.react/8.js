var Panel = React.createClass({
    render:function(){
        return (
            <div className="panel panel-default">
                <PanelHead  title={this.props.title}/>
                <PanelBody content={this.props.content}/>
            </div>
        )
    }
});

var PanelHead = React.createClass({
    render:function(){
        return (
            <div className="panel-heading">{this.props.title}</div>
        )
    }
});


var PanelBody = React.createClass({
    render:function(){
        return (
            <div className="panel-body">
                {this.props.content}
            </div>
        )
    }
});

ReactDOM.render(
    <Panel title="标题" content="内容"/>,
    document.getElementById('app')
)