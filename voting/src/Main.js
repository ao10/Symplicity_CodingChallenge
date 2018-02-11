import React from 'react';
import LoginContainer from './components/LoginSystem/LoginContainer';
import './App.css';

class Main extends React.Component {
  render() {
  //   var divStyle = {
  //     width: '200 px',
  //     color: 'green',
  // }
    return (
      <div className="Main">
      <LoginContainer  
        // style={divStyle} 
        //containerWidth={'50%'} 
        //containerHeight={'50%'}
      />
      </div>
    );
  }
}

export default Main;
