import React from 'react';
import Fruit from './Fruit';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import { Vertical, Horizontal } from 'react-stack';

export default class FruitContainer extends React.Component {
    render() {
        return (
            <div>
                <h1>What's your favorite fruit?</h1>
                <Horizontal>
                <Fruit fruitName="Apple"/>
                <Fruit fruitName="Orange"/>
                <Fruit fruitName="Banana"/>
                <Fruit fruitName="Pineapple"/>
                </Horizontal>
                <br />
                <RaisedButton label="Cast Vote!"/>
            </div>
        )
    }
}