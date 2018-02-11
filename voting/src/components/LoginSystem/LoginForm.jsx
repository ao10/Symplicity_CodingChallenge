import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Vertical, Horizontal } from 'react-stack';

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
            //[event.target.id]: event.target.value,
            //[event.target.id]: event.target.value,
        });
    };

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
            //[event.target.id]: event.target.value,
            //[event.target.id]: event.target.value,
        });
    };

    handleSubmit = event => {
        const formData = {
            username: this.state.username,
            password: this.state.password,
        }
    }

    render() {
        return (
            <div style={this.props.style}>
                <form type="submit">
                    <Vertical alignItems={'center'}>
                        <h1>Login Form</h1>
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
                        <RaisedButton label="Submit" type="submit" onClick={this.handleSubmit}/>
                    </Vertical>
                </form>

            </div>

        );
    }
}