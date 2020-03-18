import React, { Component } from 'react';
import Toolbar from './Toolbar';
import Logo from './Logo.js';

export default class AboutPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             About:{Name:"Haim",Location:"hamargalit 47",MyWords:"Barberia was first opened in 1980 by my father Mesfen, the barber shop is filled with history and childhood for me,what made me took care of it for the last 10 years and run it. we specialized in men cuts painting and beard styling."},
             Criticizes:[{Name:"john doe",date:"12-12-2019",text:"great barber and even better vibe"},
             {Name:"john doe",date:"12-10-2019",text:"perfect"},
             {Name:"john doe",date:"01-12-2018",text:"love you guys"},]
        }
    }
    
    render() {
        return (
            <div>
                <Toolbar/>
                
                <div>
                <div className="card mb-3" style={{maxWidth: 540}}>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img style={{width:90, borderRadius:50}} src="/od.jpg" class="card-img" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                        <h3>{this.state.About.Name}</h3>
                        <span style={{fontWeight:"bold"}}>Address: </span>{this.state.About.Location}
                          <h5 className="card-title">My Space</h5>
                          <p className="card-text">{this.state.About.MyWords}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>

                {this.state.Criticizes.map((element)=>{
                    return <div style={{height:100}} className="criticize">
                        <span className="criticName">{element.Name}</span> <br/>
                        {element.text}<br/> <p className="dateOfCritic">{element.date} </p>
                    </div>
                    
                })}



                <div className="AboutLogo"><Logo variant="little"/></div>
            </div>
        )
    }
}
