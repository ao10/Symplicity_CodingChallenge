import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Vertical, Horizontal } from 'react-stack';
import axios from 'axios';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        });
    };

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        });
    };

    handleSubmit = event => {
        //Don't let page refresh after submitting form
        event.preventDefault();
        const formData = {
            username: this.state.username,
            password: this.state.password,
        }
        //Make a POST call to the server using axios.
        if (this.state.username == '' || this.state.password == '') {
            console.log("Please fill all fields")
        }
        else {
            axios.post('http://localhost:8080/login', formData)
                .then(response => {
                    if(response.status == 404){
                        alert("Account not found. Please create a new account.");               
                    }
                    if(response.status == 200){
                        alert("Login successful!");
                    }
                })
                .catch( error => {
                    console.log(error.response);
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
                        <RaisedButton label="Login" type="submit" onClick={this.handleSubmit} />
                    </Vertical>
                </form>

            </div>

        );
    }
}