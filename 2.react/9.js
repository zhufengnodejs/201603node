var Pager = React.createClass({
    render:function(){
        return (
            <nav>
                <ul className="pagination">
                    {
                        React.Children.map(this.props.children,function(item){
                            return <li ><a href="#" >{item}</a></li>
                        })
                    }
                </ul>
            </nav>
        )
    }
});
ReactDOM.render(
    <Pager>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </Pager>,
    document.getElementById('app')
);