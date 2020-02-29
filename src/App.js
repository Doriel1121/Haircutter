import React, { Component } from 'react';
import Logo from './components/Logo';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import './App.css';

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
        <homepage/>
      </div>)
    }
  }
  
  render() {
    return (
      <div className="App">
        <Login flag={this.updateFlag}/>
        {this.showMe()}
      </div>
    )
  }
}
