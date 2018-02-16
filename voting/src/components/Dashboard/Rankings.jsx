import React from 'react';
import axios from 'axios';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

export default class Rankings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        axios.get("http://localhost:8080/rankings").then(
            response => {
                console.log(response)
            })
    }

    render() {
        return (
            <List>                
                <ListItem primaryText="Apple" />
                <ListItem primaryText="Banana"  />
                <ListItem primaryText="Orange" />
                <ListItem primaryText="Pineapple" />
            </List>
        )
    }
}
