import React, { Component } from 'react';
import Toolbar from './Toolbar';
import Logo from './Logo'
export default class HistoryPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userHairCuts:[{date:"12.02.2020", price:50, key:1},
                {date:"12/02/2020", price:50, key:2},
                {date:"10/01/2020", price:50, key:3},
                {date:"20/12/2019", price:40, key:4},
                {date:"08/10/2019", price:40, key:5},]
        }
    }
    
    render() {
        return (
            <div>
                <Toolbar/>
                <h3 className="historyTitle"> Previous cuts </h3>
                <div className="container">
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th className="tableTh">
                            Date
                        </th>
                        <th className="tableTh">
                            Price
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                            {this.state.userHairCuts.map((element, key)=>{
                                return(
                                    <tr key={element.key}>
                                        <td>
                                            {element.date}
                                        </td>
                                        <td className="insideMap">
                                            {element.price}
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                </table>
                </div>
                <div className="historyLogo"><Logo variant="little"/></div>
            </div>
        )
    }
}
