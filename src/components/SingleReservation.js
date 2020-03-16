import React, { Component } from 'react'

export default class SingleResrvation extends Component {

    updateStatus=()=>{
        var status
        if (this.props.single.status=== "free") {
            status= "cancel"
        }else if (this.props.single.status === "cancel") {
            status= "free"
        }else if (this.props.single.status === "taken") {
            status="taken"
        }
        this.props.update(this.props.single,status)
    }

    render() {
        var backgroundColor;
        if (this.props.single.status === "free") {
            backgroundColor='res btn btn-success'
        }
        if (this.props.single.status === "taken") {
            backgroundColor='res btn btn-danger'
        }
        if (this.props.single.status === "cancel") {
            backgroundColor='res btn btn-warning'
        }
        
        return (
            <tbody>  
                <tr>
                <td> {this.props.single.timezone} </td>
                <td><button className={backgroundColor}  onClick={this.updateStatus}>
                {this.props.single.status}</button></td>
                </tr>
            </tbody>
        )
    }
}
