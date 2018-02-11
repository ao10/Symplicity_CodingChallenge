import React from 'react';
import TextField from 'material-ui/TextField';
import { Vertical, Horizontal } from 'react-stack';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

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
            password: event.target.value
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
        //Make a POST call to the server using axios.
        if (this.state.username == '' || this.state.password == '' || this.state.email == '') {
            console.log("Please fill all fields")
        }
        else {
            axios.post('http://localhost:8080/register', formData)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    alert(error);
                })
        }
    }

    render() {
        return (
            <div style={this.props.style}>
                <form type="submit">
                    <Vertical alignItems={'center'}>
                        <TextField
                            floatingLabelText="Username"
                            value={this.state.username}
                            onChange={this.handleUsernameChange}
                            required
                        />
                        <TextField
                            type="password"
                            floatingLabelText="Password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            required
                        />
                        <TextField
                            floatingLabelText="E-mail"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            required
                        />
                        <RaisedButton label="Create Account" type="submit" onClick={this.handleSubmit} />
                    </Vertical>
                </form>
            </div>
        );
    }
}