import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'

export default class MilitaryService extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <p>{this.props.startYear} - {this.props.endYear}</p>
                    </Cell>
                    <Cell col={8}>
                        <ul>
                            <li>Rank: {this.props.rank}</li>
                            <li>{this.props.duty}</li>
                            <li>{this.props.award}  </li>
                        </ul>
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}