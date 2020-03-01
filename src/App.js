import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Regiser from './components/Regiser';
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
            <Login/>
          </Route>
          <Route exact path = "/register">
            <Regiser/>
          </Route>
        </Switch>
      </Router>
      </div>
    )
  }
}
