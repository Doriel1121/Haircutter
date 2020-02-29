import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Login from './components/Login';
// import Logo from './components/Logo.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage';
import Register from './components/Register.js';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       flag:0
    }
  }

  showMe=()=>{
    if (this.state.flag==0) { 
      return <div>
        <Login/>
      </div>
    }
    if (this.state.flag==1) {
     return  <div>
       <Homepage/>
      </div>
  }
}
updateFlag=(f)=>{
this.setState({flag:f})
}
  
  render() {

  return (
    <div className="App">
      <Router>

      <Switch>z

    <Route exact path= "/">
    <Login flag = {this.updateFlag}/>
   </Route>

   <Route exact path= "/Register">
    <Register />
   </Route>


      </Switch>



      </Router>

     {this.showMe()}
    </div>
  );
}
}
