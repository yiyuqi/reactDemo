import React, {Component} from 'react'
class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }

    }
    add(){
        let data = this.refs.name.value;
        console.log(data)
        let tempList = this.state.list;
        tempList.push(data)
        this.refs.name.value = ''
        this.setState({
            list:tempList
        })

    }
    remove(key){
        let tempList = this.state.list;
        tempList.splice(key,1)
        
        this.setState({
            list:tempList
        })
    }
    render(){
        let reactDom =  this.state.list.map((item,key)=>{
            return <li key = {key}>{item} <span key={key} onClick = {this.remove.bind(this,key)}>删除</span></li>
         })
        return(
            <div>
                
                <input ref = "name"/>
                <input type="button" defaultValue="增加" onClick = {this.add.bind(this)}/>
                <hr/>
                <h3>展示</h3>
                <ul>
                    {reactDom}
                {/* {
                    this.state.list.map((item,key)=>{
                       return <li key = {key}>{item} <span key={key} onClick = {this.remove.bind(this,key)}>删除</span></li>
                    })
                } */}
                </ul>
            </div>
        )
    }

}
export default TodoList