import React from 'react';
// import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import { BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";

import Home from './components/Home.js'
import TodoList from './components/TodoList'
import Table from './components/Table'
import { Button } from 'antd';

function App() {
  // class App extends React.Component{
  return (
   
    <Router>
    <div className="App">
        <Link to="/" style={{marginRight:10}}><Button type="primary">home</Button></Link>
        <Link to="/todoList"  style={{marginRight:10}}><Button type="primary">todolist</Button></Link>
        <Link to="/table"  style={{marginRight:10}}><Button type="primary">Table</Button></Link>
        <Route exact path="/" component={Home}>
          {/* <Home/> */}
          </Route>
        <hr/>
        <Route path="/todoList" component = {TodoList}>
          {/* <TodoList></TodoList> */}

          
          </Route>
     
          <Route path="/table" component = {Table}></Route>
      
    </div>
    </Router>
  );
// }
}

export default App;
