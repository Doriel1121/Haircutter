import React, { Component } from 'react';
import Logo from './Logo.js';
import {Link, Redirect} from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            user:[{mail:"doriel@gmail.com", password:12345678},
                {mail:"timna@gmail.com", password:87654321}],
             mail:[],
             password:"",
             mailOk:"",
             passOk:""
        }
    }

    updateMail=(m)=>{
        var mail = m.target.value
        this.state.user.forEach((element)=>{
        if (mail !== element.mail ) {
            document.getElementById("errormessage").innerHTML="You need to register"
        }else{
            this.setState({mail:mail})
            this.setState({mailOk:1})
            return true
        }
    })
    }

    updatePass=(p)=>{
        var pass =p.target.value
        this.state.user.forEach((element)=>{
            if (this.state.mail == element.mail && pass == element.password) {
                this.setState({password:pass})
                this.setState({passOk:1})
                return true
            }
        })
    }

    InfoValidation=()=>{
        if (this.state.mailOk==1 && this.state.passOk==1) {
           return <Redirect to= "/homepage"/> 
        }
    }
    
    render() {
        return (
            <div>
           <div className="logoposi"> <Logo  variant="big"/></div>
            <div id="firstrow" className="row">
                        <div className="col-1"></div>
                        <div id="logininfo" className="col-1">
                            <p>Email</p>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-9">
                            <input onChange={this.updateMail} className="logininInput" type="text" placeholder="Your mail"/>
                            <br/> <p id="errormessage"></p>
                        </div>
               
                        <div className="col-1"></div>
                        <div id="loginInput" className="col-1">
                            <p>Password</p>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-9">
                            <input onChange={this.updatePass} type="password" placeholder="Password"/>
                        </div>
                        <div className="col-7"></div>
                        <div  id="buttonStyle" className="col-4"><Link to ="/homepage"><button className="btn btn-outline-success" onClick={this.InfoValidation}> Log-in </button></Link></div>
                        <div className="col-1"></div>

                        <div className="col-7"></div>
                        <div className="col-4"><Link to ="/register"><button className="btn btn-outline-success"> Register </button></Link></div>
                        <div className="col-1"></div>
                </div>
            </div>
        )
    }
}
