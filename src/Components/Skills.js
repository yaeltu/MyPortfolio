import React, {Component} from 'react'
import {Grid, Cell , ProgressBar} from 'react-mdl'


export default class Skills extends Component{
    render(){
        return(
            <Grid>
                <Cell col = {12}>
                    <div style ={{display: "flex"}}>
                        {this.props.skill} 
                        <ProgressBar 
                            progress= {this.props.progress} 
                            style = {{margin: "auto", width: "75%"}} />
                    </div>
                </Cell>
            </Grid>
        )
    }
}