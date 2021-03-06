import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Toggle from 'material-ui/Toggle';

export default class Fruit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fruitName: this.props.fruitName,
            expanded: false,
            votedOn: false,
            votedFruit: this.props.votedFruit,
        }
        this.handleExpandChange = this.handleExpandChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleExpand = this.handleExpand.bind(this);
        this.handleReduce = this.handleReduce.bind(this);
        this.handleVote = this.handleVote.bind(this);
    }

    handleExpandChange = (expanded) => {
        this.setState({ expanded: expanded });
    };

    handleToggle = (event, toggle) => {
        this.setState({ expanded: toggle });
    };

    handleExpand = () => {
        this.setState({ expanded: true });
    };

    handleReduce = () => {
        this.setState({ expanded: false });
    };

    handleVote = () => {
        this.props.onVote(this.state.fruitName)
    }
    render() {
        if (this.props.fruitName == this.props.votedFruit) {
            var style = {
                backgroundColor: "lightgrey",
            }
        }
        else {
            style = null;
        }

        return (
            <div>
                <Card style={style} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                    <CardHeader
                    />
                    <Avatar />
                    <CardTitle title={this.props.fruitName} subtitle={this.props.fruitName} />
                    {/* USE PUT UPDATE TO UPDATE A USER'S VOTES. */}
                    <CardText>Vote for me please!</CardText>
                    <h1 expandable={true}>
                        List of voters go here.
                    <FlatButton label="Hide Voters" onClick={this.handleReduce} />
                    </h1>
                    <CardActions>
                        <FlatButton label="Vote for me!" onClick={this.handleVote} />
                        <FlatButton label="See voters" onClick={this.handleExpand} />
                    </CardActions>
                </Card>
            </div>
        )
    }
}