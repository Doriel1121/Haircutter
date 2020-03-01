import React, { Component } from 'react';
import Logo from './Logo.js';
import {Link, Redirect} from 'react-router-dom';

export default class Regiser extends Component {
    render() {
        return (
            <div>
                <div className="logoposi"><Logo variant="big"/></div>
                <div className="row">
                    <div className="col-2"></div>
                        <div className="col-8">
                            <input id="registerinputs" onChange={this.updateMail} className="logininInput" type="text" placeholder="Full name"/></div>
                        <div className="col-2"></div>
                        
                        <div className="col-2"></div>
                        <div id="registerinputs" className="col-8">
                            <input onChange={this.updateMail} className="logininInput" type="text" placeholder="Your Email"/></div>
                        <div className="col-2"></div>

                        <div className="col-2"></div>
                        <div className="col-8">
                            <input id="registerinputs" onChange={this.updateMail} className="logininInput" type="text" placeholder="Password"/></div>
                        <div className="col-2"></div>

                        <div className="col-2"></div>
                        <div className="col-8">
                            <input id="registerinputs" onChange={this.updateMail} className="logininInput" type="text" placeholder="Repeat password"/></div>
                        <div className="col-2"></div>

                        <div className="col-7"></div>
                        <div className="col-4"><Link to ="/homepage"><button className="btn btn-outline-success"> Register </button></Link></div>
                        <div className="col-1"></div>
                        
                        
                </div>
            </div>
        )
    }
}
