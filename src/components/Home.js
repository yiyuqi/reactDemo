import React , {Component} from 'react'
import Header from './Header.js'
import Axios from './Axios'

import { Button } from 'antd';
class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            msg:'我是home组件',
            userName : '',
             obj : {
                name:'张三',
                age:'13'
            }
        }
    }
    run (a,e){
  
         e.target.style.color = 'red'
        console.log(e.target.getAttribute('aid'))
    }
    run1 = () =>{
        console.log(77)
    }
    inputChange = (e) =>{
        // console.log( e.target.value)
        this.setState({
            userName : e.target.value
        })
        let val = this.refs.username.value
       console.log(val)
    }
    getInput= ()=>{
        console.log(this.state.userName     )
    }
    render(){
       
        return(
            <div>


                <Header {...this.state}></Header>
                <Axios></Axios>
            
                {this.state.msg}
                <button aid="4342" onClick = {this.run.bind(this,3)}>执行1</button>
                <button onClick = {this.run1}>执行2</button>
                {/* 获取表单的值 监听表单改变事件 */}
                <input ref = "username" onChange = {this.inputChange}/> <button onClick = {this.getInput}>获取表单</button>
            </div>
            
        )
    }
}

export default Home


