import React from 'react';
import Fruit from './Fruit';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import { Vertical, Horizontal } from 'react-stack';

export default class FruitContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            votedOn: false,
            fruits: ["Apple", "Orange", "Banana", "Pineapple"],
            votedFruit: null,
        }
        this.handleVoteStatus = this.handleVoteStatus.bind(this);
    }

    handleVoteStatus = (value) => {
        //If fruit is already voted on, undo the state/CSS.
        //If another fruit has been voted for already, undo that fruit.
        console.log(value);
        this.setState({votedOn:true});
        //value is always going to be whatever fruit clicked the vote button
        for (var i = 0; i < this.state.fruits.length; i++){
            if (this.state.fruits[i] == value){
                this.setState({votedFruit: this.state.fruits[i]})
                //console.log(i);
                break;
            }
        }
    }

    render() {
        if(this.state.votedOn == true){
//            console.log(this.state.votedFruit)
            var style = {
                backgroundColor:'gray',
            }
        }
        else{
            style = null;
        }
        return (
            <div>
                <h1>What's your favorite fruit?</h1>
                <Horizontal>
                <Fruit fruitName="Apple"  onVote={this.handleVoteStatus}/>
                <Fruit fruitName="Orange" onVote={this.handleVoteStatus}/>
                <Fruit fruitName="Banana" onVote={this.handleVoteStatus}/>
                <Fruit fruitName="Pineapple" onVote={this.handleVoteStatus}/>
                </Horizontal>
                <br />
                <RaisedButton label="Cast Vote!"/>
            </div>
        )
    }
}