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
                    <div className="col-12"><Link to ="/reservation"><button className="btn-lg btn-block">Reservation</button></Link></div>

                </div>
                <div id="homePageHistoryButt" className="row">
                    <div className="col-12"><Link to ="/history"><button className="btn-lg btn-block">History</button></Link></div>
                </div>
            </div>
        )
    }
}
