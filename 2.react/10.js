var Focus = React.createClass({
    handleClick:function(){
        //得到原生的DOM对象
        //this.refs.textInput.focus();
        //转成jquery对象
        var input =  $(this.refs.textInput);
        input.focus();
        input.val('hello');
        input.css('color','red');
    },
    render:function(){
        return (
            <div>
                <input type="text" ref="textInput"/>
                <input value="焦点" type="button" onClick={this.handleClick}/>
            </div>
        )
    }
});

ReactDOM.render(
    <Focus/>,
    document.getElementById('app')
);