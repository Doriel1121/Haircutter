import React, { Component } from 'react';
import Logo from './components/Logo';
import Login from './components/Login';
import Homepage from './components/Homepage';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import './App.css';
import Toolbar from './components/Toolbar';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       flag:0
    }
  }
  updateFlag=(f)=>{
    this.setState({flag:f})
  }
  showMe=()=>{
    if (this.state.flag == 1) {
      return( 
      <div> 
        <Register/>
      </div>)
    }
  }
  
  render() {
    return (
      <div className="App">

      <Router>

      <Switch>

      <Route exact path="/">
        {/* <Login/> */}
      </Route>

      <Route exact path = "/homepage">
      <Homepage/>
      </Route>


      </Switch>


      </Router>

        <Login flag={this.updateFlag}/>
        {this.showMe()}
      </div>
    )
  }
}
