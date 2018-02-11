import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

export default class LoginContainer extends React.Component {
    render() {
        // var divStyle = {
        //     width: '200 px'
        // }
        return (
             <div>
                <h1>
                    LoginContainer
                </h1>
                <RaisedButton label="Login" />
                <RaisedButton label="Register" />
                <RaisedButton label="Submit" />
                <Tabs tabItemContainerStyle={{width:'500px'}}>
                    <Tab label = "Login" ></Tab>
                    <Tab label = "Register" ></Tab>
                </Tabs>
            </div>
        );
    }
}

