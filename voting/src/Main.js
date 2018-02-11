import React from 'react';
import LoginContainer from './components/LoginSystem/LoginContainer';
import logo from './logo.svg';
import './App.css';

class Main extends React.Component {
  render() {
    var divStyle = {
      width: '200 px'
  }
    return (
      <div className="Main">
      <LoginContainer />
      </div>
    );
  }
}

export default Main;
