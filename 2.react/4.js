var ToDoList = React.createClass({
    //渲染的方法
    render: function () {
        //返回一个组件 最好用小括号括起来
        return (
            <ul className="list-group">
                {
                    //迭代数组中的每个元素，用返回的新组件替换掉原来的老内容
                    React.Children.map(this.props.children, function (child) {
                    return <li className="list-group-item">{child}</li>;
                })
                }
            </ul>
        )
    }
});

ReactDOM.render(
    <ToDoList>
        <span>吃饭</span>
        <span>上课</span>
        <span>睡觉</span>
    </ToDoList>,
    document.getElementById('app')
);