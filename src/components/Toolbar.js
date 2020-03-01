import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Toolbar extends Component {
    render() {
        return (
            <div >
              <nav  className="navbar">
                <Link to ="/homepage"><a className="title" href="#">Home</a></Link>
                <Link><a className="title" href="#">About</a></Link>
                <Link><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="toolbarlogout">Log-out</span>
                </button></Link>
              </nav>
            </div>
        )
    }
}
