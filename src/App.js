import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import HistoryPage from './components/HistoryPage';
import ReservationPage from './components/ReservationPage';
import AboutPage from './components/AboutPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import {isMobile} from 'react-device-detect';


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      Name:""
    }
  }

  updateTheName=(N)=>{
    this.setState({Name:N})
  }

  render() {
    if (isMobile) {
      return (
        <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <LoginPage/>
            </Route>
            <Route exact path = "/register">
              <RegisterPage nameOfCritisizer={this.updateTheName}/>
            </Route>
            <Route exact path ="/homepage">
              <HomePage/>
            </Route>
            <Route exact path ="/history">
              <HistoryPage/>
            </Route>
            <Route exact path="/reservation">
              <ReservationPage/>
            </Route>
            <Route exact path ="/about">
              <AboutPage name={this.state.Name}/>
            </Route>
          </Switch>
        </Router>
        </div>
      )
    }else{return <div className="App">Please change to mobile state and refresh  </div>}
    
  }
}
