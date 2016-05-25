var Form = React.createClass({
    getInitialState: function () {
        return {
            inputValue: '默认值',
            selectValue: 'A',
            textAreaValue: '请输入',
            radioValue: 'B',
            checkValue: ['B', 'C'],
        }
    },
    submit:function(e){
        e.preventDefault();
        var form = this.state;
        var inputValue =   this.refs.inputText.value;
        var selectValue =   this.refs.selectText.value;
        var areaValue =   this.refs.areaText.value;
        //setState是异步的，如果要写后续逻辑必须写在回调函数中
        this.setState({inputValue:inputValue,
            selectValue:selectValue,
            textAreaValue:areaValue
        },function(){
            console.log(this.state);
        }.bind(this));//绑定this指针为form组件
        console.log(this.state);
        return false;
    },
    handleRadio:function(e){
        this.setState({radioValue:e.target.value});
    },
    handleCheck:function(e){
        //先取出原来的复选框数组
        var checkValues = this.state.checkValue;
        //得到当前选中的复选框的值
        var newVal = e.target.value;
        //获取复选框的值在原来数组中的索引
        var index = checkValues.indexOf(newVal);
        //如果索引等于-1的话 意味着原来没选 中，现在要选 中，就是把这个值添加到原来的数组中
        if(index==-1){
            checkValues.push(newVal);
        }else{
            //否则就是要移除，即从原来数组中删除掉
            checkValues.splice(index,1);
        }
    },
    render:function(){
        return (
            <form onSubmit={this.submit} >
                <input ref="inputText" className="form-control" type="text" defaultValue={this.state.inputValue}/>
                <br/>
                <select ref="selectText" className="form-control"  defaultValue={this.state.selectValue} >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                </select>
                <br/>
                <RadioButtons handleRadio={this.handleRadio} def={this.state.radioValue}></RadioButtons><br/>
                <CheckButtons handleCheck={this.handleCheck} def={this.state.checkValue}></CheckButtons><br/>
                <textarea ref="areaText" className="form-control" defaultValue={this.state.textAreaValue}></textarea>
                <input type="submit" value="提交 "/>
            </form>
        )
    }
});
var RadioButtons = React.createClass({

   render:function(){
       return (
           <div>
               A <input onChange={this.props.handleRadio} type="radio" value="A" name="myradio" defaultChecked={this.props.def=='A'}/>
               B <input  onChange={this.props.handleRadio} type="radio" value="B" name="myradio" defaultChecked={this.props.def=='B'}/>
               C <input  onChange={this.props.handleRadio} type="radio" value="C" name="myradio" defaultChecked={this.props.def=='C'}/>
           </div>
       )
   }
})

var CheckButtons = React.createClass({
    render:function(){
        return (
            <div>
                A <input onChange={this.props.handleCheck} type="checkbox" value="A" name="mycheck" defaultChecked={this.props.def.indexOf('A')!=-1}/>
                B <input onChange={this.props.handleCheck}  type="checkbox" value="B" name="mycheck" defaultChecked={this.props.def.indexOf('B')!=-1}/>
                C <input onChange={this.props.handleCheck}  type="checkbox" value="C" name="mycheck" defaultChecked={this.props.def.indexOf('C')!=-1}/>
            </div>
        )
    }
})

ReactDOM.render(
    <Form/>,
    document.getElementById('app')
)