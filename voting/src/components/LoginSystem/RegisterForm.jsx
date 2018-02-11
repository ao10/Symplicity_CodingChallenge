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
    }
    handleChange(e){
        var change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }
    // handleChange = event => {
    //     this.setState({
    //         username: event.target.value,
    //     });
    // };

    render() {
        return (
            // <div style={this.props.divStyle}>
            <div style={this.props.style}>
                <Vertical alignItems={'center'}>
                    <h1>Register Form</h1>
                    <TextField
                        id="text-field-controlled"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange.bind(this)}
                    />
                    <TextField
                        id="text-field-controlled"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange.bind(this)}
                    />
                    <TextField
                        id="text-field-controlled"
                        placeholder="E-mail"
                        value={this.state.email}
                        onChange={this.handleChange.bind(this)}
                    />
                    <RaisedButton label="Submit"/>
                </Vertical>
            </div>
        );
    }
}