var Form = React.createClass({
    getInitialState: function () {
        return {
            inputValue: '默认值',
            selectValue: 'A',
            radioValue: 'B',
            checkValue: ['B', 'C'],
            textAreaValue: '请输入'
        }
    },
    render:function(){
        return (
            <form >
                <input className="form-control" type="text" defaultValue={this.state.inputValue}/>
                <br/>
                <select className="form-control"  defaultValue={this.state.selectValue} >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                </select>
                <br/>
                <RadioButtons def={this.state.radioValue}></RadioButtons><br/>
                <CheckButtons def={this.state.checkValue}></CheckButtons><br/>
                <textarea className="form-control" defaultValue={this.state.textAreaValue}></textarea>
            </form>
        )
    }
});
var RadioButtons = React.createClass({
   render:function(){
       return (
           <div>
               A <input type="radio" value="A" name="myradio" defaultChecked={this.props.def=='A'}/>
               B <input type="radio" value="B" name="myradio" defaultChecked={this.props.def=='B'}/>
               C <input type="radio" value="C" name="myradio" defaultChecked={this.props.def=='C'}/>
           </div>
       )
   }
})

var CheckButtons = React.createClass({
    render:function(){
        return (
            <div>
                A <input type="checkbox" value="A" name="mycheck" defaultChecked={this.props.def.indexOf('A')!=-1}/>
                B <input type="checkbox" value="B" name="mycheck" defaultChecked={this.props.def.indexOf('B')!=-1}/>
                C <input type="checkbox" value="C" name="mycheck" defaultChecked={this.props.def.indexOf('C')!=-1}/>
            </div>
        )
    }
})

ReactDOM.render(
    <Form/>,
    document.getElementById('app')
)