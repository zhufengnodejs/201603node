var names = ['刘德华','张怡宁','郭德纲'];
var items = [
    <div>Hello,刘德华</div>,
    <div>Hello,张怡宁</div>,
    <div>Hello,郭德纲</div>
]

ReactDOM.render(
    <div>
        {
            names.map(function(item,index){
               return <div key={index}>Hello,{item}</div>
             })
        }
    </div>,
    document.getElementById('app')
);