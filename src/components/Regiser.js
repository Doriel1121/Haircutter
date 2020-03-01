import React, { Component } from 'react';
import Logo from './Logo.js';
import {Link,} from 'react-router-dom';
import Toolbar from './Toolbar.js';

export default class Regiser extends Component {
    render() {
        return (
            <div>
                <Toolbar/>
                <div className="logoPosi"><Logo variant="big"/></div>
                <div className="row">
                    <div className="col-2"></div>
                        <div className="col-8">
                            <input className="loginInput" type="text" placeholder="Full name"/></div>
                        <div className="col-2"></div>
                        
                        <div className="col-2"></div>
                        <div  className="col-8">
                            <input  className="loginInput" type="text" placeholder="Your Email"/></div>
                        <div className="col-2"></div>

                        <div className="col-2"></div>
                        <div className="col-8">
                            <input  className="loginInput" type="text" placeholder="Password"/></div>
                        <div className="col-2"></div>

                        <div className="col-2"></div>
                        <div className="col-8">
                            <input  className="loginInput" type="text" placeholder="Repeat password"/></div>
                        <div className="col-2"></div>

                        <div className="col-7"></div>
                        <div className="col-4"><Link to ="/homepage"><button className="btn btn-outline-success"> Register </button></Link></div>
                        <div className="col-1"></div>  
                </div>
            </div>
        )
    }
}
