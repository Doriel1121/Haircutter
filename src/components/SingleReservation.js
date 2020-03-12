import React, { Component } from 'react'

export default class SingleResrvation extends Component {
    render() {
        return (
            <div>
                <td> {this.props.single.timezone} </td>
                <td><button>{this.props.single.status}</button></td>
            </div>
        )
    }
}
