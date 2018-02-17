import React from 'react';
import axios from 'axios';
import Fruit from './Fruit';
import Rankings from './Rankings';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import { Vertical, Horizontal } from 'react-stack';

export default class FruitContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votedOn: false,
            fruits: ["Apple", "Orange", "Banana", "Pineapple"],
            currentFruit: null,
            voterName: this.props.username,
            rankings:[],            
        }
        this.handleVoteStatus = this.handleVoteStatus.bind(this);
        this.handleSubmitVote = this.handleSubmitVote.bind(this);
    }

    handleVoteStatus = (value) => {
        //If fruit is already voted on, undo the state/CSS.
        //If another fruit has been voted for already, undo that fruit.
        console.log(value);
        this.setState({ votedOn: true });
        //value is always going to be whatever fruit clicked the vote button
        for (var i = 0; i < this.state.fruits.length; i++) {
            if (this.state.fruits[i] == value) {
                this.setState({ currentFruit: this.state.fruits[i] })
                //console.log(i);
                //break;
            }
        }
    }

    handleSubmitVote = () => {
        const requestBody = {
            vote: this.state.currentFruit,
            username: this.state.voterName,
        }
        axios.put('http://symplicity-challenge-server.herokuapp.com/vote', requestBody).then(
            response => {
                console.log(response);
                alert(response.data.message);
            })
            .catch(error => {
                alert(error);
            })
    }


    render() {
        return (
            <div>
                <h1>What's your favorite fruit?</h1>
                <Horizontal>
                    <Fruit fruitName="Apple" onVote={this.handleVoteStatus} votedFruit={this.state.currentFruit} />
                    <Fruit fruitName="Orange" onVote={this.handleVoteStatus} votedFruit={this.state.currentFruit} />
                    <Fruit fruitName="Banana" onVote={this.handleVoteStatus} votedFruit={this.state.currentFruit} />
                    <Fruit fruitName="Pineapple" onVote={this.handleVoteStatus} votedFruit={this.state.currentFruit} />
                </Horizontal>
                <br />
                <RaisedButton label="Cast Vote!" onClick={this.handleSubmitVote} />
                <hr />
                <Rankings />
            </div>
        )
    }
}