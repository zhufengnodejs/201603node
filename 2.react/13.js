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
        var inputValue =   this.refs.inputText.value;
        var selectValue =   this.refs.selectText.value;
        var areaValue =   this.refs.areaText.value;
        this.setState({inputValue:inputValue});
        this.setState({selectValue:selectValue});
        this.setState({textAreaValue:areaValue});
        console.log(this.state);
        return false;
    },
    handleRadio:function(e){
        this.setState({radioValue:e.target.value});
    },
    handleCheck:function(e){

    },
    render:function(){
        return (
            <form onSubmit={this.submit} >
                <input ref="inputText" className="form-control" type="text" defaultValue={this.state.inputValue}/>
                <br/>
                <select onChange={this.handleSelect} ref="selectText" className="form-control"  defaultValue={this.state.selectValue} >
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