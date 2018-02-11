import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default class LoginContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            slideIndex: 0,
        }
    };
    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        })
    }
    render() {
        // var divStyle = {
        //     width: '200 px'
        // }
        return (
             <div>
                <h1>LoginContainer</h1>
                <RaisedButton label="Login" />
                <RaisedButton label="Register" />
                <RaisedButton label="Submit" />
                <Tabs 
                    tabItemContainerStyle={{width:'500px'}}
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab label="Login" value={0} ></Tab>
                    <Tab label="Register" value={1} ></Tab>
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <LoginForm />
                    <RegisterForm />
                </SwipeableViews>
            </div>
        );
    }
}

