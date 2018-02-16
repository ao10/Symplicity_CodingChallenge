import React from 'react';
import LoginContainer from './components/LoginSystem/LoginContainer';
import FruitContainer from './components/Dashboard/FruitContainer';
import './App.css';

class Main extends React.Component {
  constructor(){
    super();
    this.state = {
      statusCode: null,
      name: null,
    }
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  handleStatusChange = (value, username) => {
    this.setState({
      statusCode: value,
      name: username,
    })
  }

  render() {
    //If login is successful, take them to the dashboard!
    if(this.state.statusCode == 200){
      return(
        <div className="Main">
        {/* We pass in the user's name so we know who casted the vote. */}
        <FruitContainer username={this.state.name}/>
        {/* <FruitRankings /> */}
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
