import React from 'react';
import axios from 'axios';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

export default class Rankings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rankingData: null,

        }
    }

    componentDidMount(){
        axios.get("http://localhost:8080/rankings").then(
            response => {
//                console.log(response)
                var sortResponse = response.data;
//                sortResponse.sort(function(a,b){
//                    if(a.numVotes < b.numVotes)
//                        return -1;
//                 });
                console.log(sortResponse);
                this.setState({rankingData: sortResponse})
            })
    }

    render() {
        return (
            <List>                
                <ListItem primaryText={this.state.rankingData[0].fruitName}   />
                <ListItem primaryText="Banana"  />
                <ListItem primaryText="Orange"  />
                <ListItem primaryText="Pineapple" />
            </List>
        )
    }
}
