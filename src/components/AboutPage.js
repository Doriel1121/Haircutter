import React, { Component } from 'react';
import Toolbar from './Toolbar';
import Logo from './Logo.js';

export default class AboutPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             About:{Name:"Omer dayan",Location:"hamargalit 47",MyWords:"Barberia was first opened in 1980 by my father Mesfen, the barber shop is filled with history and childhood for me,what made me took care of it for the last 10 years and run it. we specialized in men cuts painting and beard styling."},
             Criticizes:[{id:1,Name:"john doe",date:"12-12-2019",text:"great barber and even better vibe"},
             {id:2,Name:"john doe",date:"12-10-2019",text:"perfect"},
             {id:3,Name:"john doe",date:"01-12-2018",text:"love you guys"},]
        }
    }
    
    render() {
        return (
            <div>
                <Toolbar/>
                    <div style={{backgroundColor:"white", paddingTop: "30px"}} className="row no-gutters">
                      <div className="col-md-4">
                          <div className="container">
                          <div className="row">
                              <div className="col-6">
                              <img style={{width:90, borderRadius:50, marginTop:20}} src="/od.jpg" className="card-img" alt="..."/>
                              </div>
                              <div style={{textAlign:"left"}} className="col-6"><h3 className="nameTitle">{this.state.About.Name}</h3></div>
                          </div>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                        <span style={{fontWeight:"bold"}}>Address: </span>{this.state.About.Location}
                          <p className="card-text">{this.state.About.MyWords}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                    <div className="container con" >
                {this.state.Criticizes.map((element, key)=>{
                    return <div key={element.id} className="criticize">
                        <span className="criticName">{element.Name}</span> <br/>
                        {element.text}<br/> <p className="dateOfCritic">{element.date} </p>
                    </div>
                })}
                </div>
                <div className="AboutLogo"><Logo variant="little"/></div>
            </div>
        )
    }
}
