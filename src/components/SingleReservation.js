import React, { Component } from 'react'

export default class SingleResrvation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             buttonColor:""
        }
    }
    
    colorOF=()=>{
        if (this.props.single.status === "taken") {
            this.setState({buttonColor:"red"})
        }
    }

    updateStatus=()=>{
        var condition
        var color
        if (this.props.single.status=== "free") {
            condition= "cancel"
            color= "yellow"
            this.props.update(this.props.single,condition,color )
        }else if (this.props.single.status === "cancel") {
            condition= "free"
            color="green"
            this.props.update(this.props.single,condition,color )
        }
    }
    render() {
        return (
            <tbody>
                <tr>
                <td> {this.props.single.timezone} </td>
                <td><button className="statusButtonColor" style={{backgroundColor:this.props.single.color}} onClick={this.updateStatus}>
                {this.props.single.status}</button></td>
                </tr>
            </tbody>
        )
    }
}
