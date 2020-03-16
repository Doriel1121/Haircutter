import React, { Component } from 'react'

export default class SingleResrvation extends Component {

    updateStatus=()=>{
        var condition
        if (this.props.single.status=== "free") {
            condition= "cancel"
            this.props.update(this.props.single,condition )
        }else if (this.props.single.status === "cancel") {
            condition= "free"
            this.props.update(this.props.single,condition )
        }
    }

    render() {
        var backgroundColor;
        if (this.props.single.status === "free") {
            backgroundColor='green'
        }
        if (this.props.single.status === "taken") {
            backgroundColor='red'
        }
        if (this.props.single.status === "cancel") {
            backgroundColor='yellow'
        }
        
        return (
            <tbody>  
                <tr>
                <td> {this.props.single.timezone} </td>
                <td><button className="statusButtonColor" style={{backgroundColor:backgroundColor}} onClick={this.updateStatus}>
                {this.props.single.status}</button></td>
                </tr>
            </tbody>
        )
    }
}
