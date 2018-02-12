import React from 'react';
import LoginContainer from './components/LoginSystem/LoginContainer';
import FruitContainer from './components/Dashboard/FruitContainer';
import './App.css';

class Main extends React.Component {
  constructor(){
    super();
    this.state = {
      statusCode: null,
    }
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  handleStatusChange = value => {
    this.setState({
      statusCode: value,
    })
  }

  render() {
    //If login is successful, take them to the dashboard!
    if(this.state.statusCode == 200){
      return(
        <div className="Main">
        <FruitContainer/>
        </div>
      )
    }
    return (
      <div className="Main">
        <LoginContainer
          handleStatus={this.handleStatusChange}
        />
      </div>
    );
  }
}

export default Main;
