import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Toggle from 'material-ui/Toggle';

export default class Fruit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            expanded: false,
        }
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    handleToggle = (event, toggle) => {
        this.setState({expanded: toggle});
    };

    handleExpand = () => {
        this.setState({expanded: true});
    };
    
    handleReduce = () => {
        this.setState({expanded: false});
    };

    render() {
        return (
            <div>
                <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                    <CardHeader
                        //title="Apple Header"
                        //subtitle="Apple Subtitle"
                        //avatar=""
                    />
                    <Avatar />
                    <CardTitle title={this.props.fruitName} subtitle="Apple subtitle" />
                    <CardText>Vote for me please!</CardText>
                    <h1 expandable={true}>
                    SURPRISE, IT ME!
                    <FlatButton label="Hide Voters" onClick={this.handleReduce}/>
                    </h1>
                    <CardActions>
                        <FlatButton label="Add vote" />
                        <FlatButton label="Minus vote" />
                        <FlatButton label="See voters" onClick={this.handleExpand}/>
                    </CardActions>
                </Card>
            </div>
        )
    }
}