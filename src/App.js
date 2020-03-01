import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import RegiserPage from './components/RegiserPage';
import Homepage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';


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
            <RegiserPage/>
          </Route>
          <Route exact path ="/homepage">
            <Homepage/>
          </Route>
        </Switch>
      </Router>
      </div>
    )
  }
}
