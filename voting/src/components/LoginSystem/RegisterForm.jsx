import React from 'react';
import TextField from 'material-ui/TextField';
import { Vertical, Horizontal } from 'react-stack';
import RaisedButton from 'material-ui/RaisedButton';

export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }
    
    handleUsernameChange = event => {
        this.setState({
            username: event.target.value,
        });
    };
    handlePasswordChange = event => {
        this.setState({
            password:event.target.value
        });
    };
    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    };
    handleSubmit = event => {
        const formData = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }
    }


    render() {
        return (
            // <div style={this.props.divStyle}>
            <div style={this.props.style}>
                <form type="submit">
                    <Vertical alignItems={'center'}>
                        <h1>Register Form</h1>
                        <TextField
                            id="text-field-controlled"
                            floatingLabelText="Username"
                            value={this.state.username}
                            onChange={this.handleUsernameChange}
                        />
                        <TextField
                            id="text-field-controlled"
                            floatingLabelText="Password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                        />
                        <TextField
                            id="text-field-controlled"
                            floatingLabelText="E-mail"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        />
                        <RaisedButton label="Submit" type="submit" onClick={this.handleSubmit}/>
                    </Vertical>
                </form>
            </div>
        );
    }
}