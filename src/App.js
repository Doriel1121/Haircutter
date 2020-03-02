import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import HistoryPage from './components/HistoryPage';


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage/>
          </Route>
          <Route exact path = "/register">
            <RegisterPage/>
          </Route>
          <Route exact path ="/homepage">
            <HomePage/>
          </Route>
          <Route exact path ="/history">
            <HistoryPage/>
          </Route>
        </Switch>
      </Router>
      </div>
    )
  }
}
