import React, { Component } from 'react';
import Logo from './Logo.js';
import Toolbar from './Toolbar';
import {Link} from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Toolbar/>
                <div className="logoPosi"><Logo variant="big"/></div>
                <div className="row">
                    <div className="col-12 Homepagebtn"><Link to ="/reservation"><button className="rounded-circle">Reservation</button></Link></div>

                </div>
                <div id="homePageHistoryButt" className="row">
                    <div className="col-12 Homepagebtn"><Link to ="/history"><button className="rounded-circle">History</button></Link></div>
                </div>
            </div>
        )
    }
}
