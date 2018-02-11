import React from 'react';
import LoginContainer from './components/LoginSystem/LoginContainer';
import './App.css';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <LoginContainer/>
      </div>
    );
  }
}

export default Main;
