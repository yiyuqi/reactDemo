import React , {Component} from 'react'
import axios from 'axios'

class Axios extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
    }
    getData=()=>{
        let that = this
        const api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        axios.get(api)
  .then( (response) =>{
    // handle success
    let {data} = response
    console.log(response);
   
    this.setState({
        list :  response.data.result
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
    }
    render(){
        return (
            <div>
                这是axios
                <button onClick = {this.getData}>异步获取数据</button>
            <ul>
                {
                    this.state.list.map((item,key)=>{
                        return <li key={key}>{item.title}</li>
                    })
                }
            </ul>
            </div>
        )
    }
}

export default Axios

//  组件加载的时候触发的函数
// constructor componentWillMount render componentDidMount
// 组件数据更新的时候触发的生命周期函数
// shouldComponentUpdate componentWillUpdate render compoentDidUpdate
// 在父组件里面改变props传值时候触发  
// componentWillReceiveProps

// 组件销毁的时候触发
// componentWillUnmount