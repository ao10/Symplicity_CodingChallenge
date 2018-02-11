import React from 'react';

export default class RegisterForm extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            // <div style={this.props.divStyle}>
            <div style={this.props.style}>
                <h1>Register Form</h1>
            </div>
        );
    }
}