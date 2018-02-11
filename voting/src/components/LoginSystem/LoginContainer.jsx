import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Dimensions from 'react-dimensions';
import { Vertical, Horizontal } from 'react-stack';

export default class LoginContainer extends React.Component {
    constructor(props) {
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
        var divStyle = {
           // background:'green',
//            'vertical-align':'middle',
            display:'flex',
  //          'align-items':'center',
            justifyContent:'center',
      //      'text-align':'center'
        }
        return (
            <div style={{marginTop: '10%'}}
                //containerWidth={this.props.containerWidth}
                //containerHeight={this.props.containerHeight}
            >
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
                    style={{width:'500px'}}
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <LoginForm style={divStyle}/>
                    <RegisterForm style={divStyle}/>
                </SwipeableViews>
                </Vertical>
            </div>
        );
    }
}

Dimensions()(LoginContainer)
