import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Toolbar extends Component {
    render() {
        return (
            <div>
                <nav  className="navbar">
                <Link to ="/homepage"><a className="title" href="#">Home</a></Link>
                <a className="title" href="#">About</a>
                <button className="navbar-toggler" type="button"><span className="toolBarlogout">Log-out</span>
                </button>
              </nav>
            </div>
        )
    }
}
