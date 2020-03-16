import React, { Component } from 'react';
import SingleReservation from './SingleReservation';
import Logo from './Logo.js';
import Toolbar from './Toolbar';

export default class ReservatioPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             haircutDetails:[{ id:1,timezone:"11:00 - 11:20", status:"free"},
             {id:2,timezone:"11:20 - 11:40", status:"free"},
             {id:3,timezone:"11:40 - 12:00", status:"taken"},
             {id:4,timezone:"12:00 - 12:20", status:"free"},
             {id:5,timezone:"12:20 - 12:40", status:"cancel"},
             {id:6,timezone:"12:40 - 13:00", status:"free"},
             {id:7,timezone:"13:00 - 13:20", status:"free"},
             ],
             Days:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        }
    }

    updateReservationStatus=(single, newStatus)=>{
        let arr= this.state.haircutDetails
        let singleTimeZone= single
        singleTimeZone.status=newStatus
        for(let i=0 ; i<arr.length; i++){
          if (arr[i].id == singleTimeZone.id) {
              arr[i]=singleTimeZone
              this.setState({haircutDetails:arr})
          }  
        }
    }
    
    render() {
        return (
            <div>
                <Toolbar/>
                <div className="container">
                <h2 className="reserOptions">Whenever you want</h2>
                <div className="tableDiv"><table className="table">
                        <thead className="thead-dark">
                            <tr>
                          <th colSpan="2"> {this.state.Days[2]} </th>  
                          </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th> Hours</th>
                            <th> Status</th>
                            </tr>
                        </tbody>
                {this.state.haircutDetails.map((element,key)=>{
                    return <SingleReservation key={element.id} update={this.updateReservationStatus} single={element}/>  
                })}
                </table>
                </div>
                <div className="ResLogoStyle"><Logo variant= "little"/></div>
                </div>
            </div>
        )
    }
}
