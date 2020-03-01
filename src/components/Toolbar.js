import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Toolbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                <Link to ="/homepage"><p className="title" href="#">Home</p></Link>
                <p className="title" href="#">About</p>
                <p className="title"><Link to ="/"><button className="navbar-toggler" type="button"><span className="toolBarlogout">Log-out</span>
                </button></Link></p>
              </nav>
            </div>
        )
    }
}
