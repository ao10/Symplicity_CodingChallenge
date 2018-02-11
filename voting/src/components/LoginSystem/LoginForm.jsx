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
        //this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value,
            [event.target.id]: event.target.value,
        });
    };

    render() {
        return (
            <div style={this.props.style}>
                <form>
                    <Vertical alignItems={'center'}>
                        <h1>Login Form</h1>
                        <br />
                        <TextField
                            id="text-field-controlled"
                            hintText="Username"
                            value={this.state.username}
                            onChange={this.handleChange.bind(this)}
                        />
                        <TextField
                            id="text-field-controlled"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange.bind(this)}
                        />
                        <RaisedButton label="Submit" />
                    </Vertical>
                </form>

            </div>

        );
    }
}