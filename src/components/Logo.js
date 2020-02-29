import React, { Component } from 'react';
// import './HairLogo.png';

export default class Logo extends Component {
    constructor(props) {
        super(props)
    
    }
printBig=()=>{
    
    return <div>
    <img style={{width:120 }} src="/cut.jpg" alt="pic"/> <br/>
    <p style={{fontSize:30, fontWeight:"bold", marginTop:0}}>HabeshaCut</p>
    </div>
}
printLittle=()=>{
    return <div>
    <img style={{width:60 }} src="/cut.jpg" alt="pic"/> 
    <p style={{fontSize:30, fontWeight:"bold", marginTop:0,    display: "inline",position: "relative",
    bottom: 40,
    left: 10}}>HabeshaCut</p>
    </div> 
}

    
    render() {
        if (this.props.variant== "big") {
            return this.printBig()
        }else{
            return this.printLittle()
        }
       
    }
}
