import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import { Vertical, Horizontal } from 'react-stack';
import axios from 'axios';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            statusCode: null,
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update = (e) => {
        alert(e.target.value);
        this.props.onUpdate(e.target.value);
        this.setState({statusCode: e.target.value});
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

    handleStatusChange = (value, username) => {
        this.props.handleStatus(value, username);
    }

    handleSubmit = event => {
        //Don't let page refresh after submitting form
        event.preventDefault();
        const formData = {
            username: this.state.username,
            password: this.state.password,
            statusCode: this.state.statusCode,
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
                        //Turn the JSON response into a string.
                        var id = JSON.stringify(response.data.id).replace(/"/g,"");
                        this.handleStatusChange(200, id);                        
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
                        <RaisedButton label="Login" type="submit" onClick={this.handleSubmit}/>
                    </Vertical>
                </form>
            </div>

        );
    }
}