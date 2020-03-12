import React, { Component } from 'react';
import SingleReservation from './SingleReservation';

export default class ReservatioPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             haircutDetails:[{timezone:"11:00", status:"free"},
             {timezone:"11:20", status:"free"},
             {timezone:"11:40", status:"free"},
             {timezone:"12:00", status:"free"},
             {timezone:"12:20", status:"free"},
             {timezone:"12:40", status:"free"},
             {timezone:"13:00", status:"free"},
             {timezone:"13:20", status:"free"},
             {timezone:"13:40", status:"free"},
             {timezone:"14:00", status:"free"},
             {timezone:"14:20", status:"free"},
             {timezone:"14:40", status:"free"},
             {timezone:"15:00", status:"free"},
             {timezone:"15:20", status:"free"},
             {timezone:"15:40", status:"free"},
             {timezone:"16:00", status:"free"},]
        }
    }
    
    render() {
        return (
            <div>
                <table className="table">
                        <tr>
                          <th>sunday </th>  
                        </tr>
                {this.state.haircutDetails.map((element)=>{
                    return <tr> <SingleReservation single={element}/> </tr>
                    
                })}
                
                </table>
            </div>
        )
    }
}
