import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Dimensions from 'react-dimensions';
import { Vertical, Horizontal } from 'react-stack';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { Router, Route, Switch } from 'react-router'; 

export default class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
            statusCode: null,
        }
        //Bind the 'this' context to the handlers
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdateChange = this.handleUpdateChange.bind(this);
    };
    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        })
    }

    handleUpdateChange = (value, username) => {
        this.props.handleStatus(value, username);
    }


    render() {
        var divStyle = {
            display: 'flex',
            justifyContent: 'center',
        }
        // if(this.state.statusCode == 200){
        //     return <div><h1>IT WORKS!</h1></div>
        // }
        return (
            <div style={{ marginTop: '10%' }}>
                <h1>Voting App</h1>
            <Vertical alignItems={'center'}>
                <Tabs
                    tabItemContainerStyle={{ width: '500px' }}
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab label="Login" value={0} ></Tab>
                    <Tab label="Register" value={1} ></Tab>
                </Tabs>
                <SwipeableViews
                    style={{ width: '500px', height:'autopx' }}
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleUpdateChange}
                >
                    <LoginForm 
                        style={divStyle} 
                        handleStatus={this.handleUpdateChange}
                    />
                    <RegisterForm style={divStyle} />
                </SwipeableViews>
            </Vertical>
            </div >
        );
    }
}

// Dimensions()(LoginContainer)
