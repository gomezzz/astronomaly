import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

/**
 * Class to display arbitrary data in key pairs in a neat card
 */
export class ObjectDisplayer extends React.PureComponent{
    /**
     * You have to have a docstring here even if empty or it won't compile
     * 
     */
    constructor(props){
        super(props);
    }
    render(){
        let display_text = '';
        const keys = Object.keys(this.props.object);
        for (const key of keys){
            display_text += key +': ' + this.props.object[key]+"\n";
        }

        return(
            <Card raised={true} style={{maxHeight: 200, overflow: 'auto'}}>          
                <Typography color="textSecondary" gutterBottom>
                    {this.props.title}
                </Typography>
                <Typography 
                    variant="body1" 
                    component="p" 
                    paragraph={true} 
                    overflow="visible"
                    style={{whiteSpace:"pre"}}>
                    {display_text}
                </Typography>
            </Card>
        )
    }
}