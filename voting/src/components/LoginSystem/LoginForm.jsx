import React from 'react';

export default class LoginForm extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={this.props.style}>
            <h1>Login Form</h1>
            </div>
        );
    }
}