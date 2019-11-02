import React , {Component} from 'react'
import {Grid , Cell} from 'react-mdl'

export default class LandingPage extends Component{
    render(){
        return(
            <div style ={{width: "100%", margin: "auto"}}>
                <Grid className = "landing-grid">
                    <Cell col ={12} >
                        <div className = "banner" >
                            <div className = "social-links">
                                {/* facebook */}
                                <a href = "https://www.facebook.com/yael.tuvia.5"
                                target = "_blank" rel = "noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                                </a>
                                {/* linkedin */}
                                <a href = "https://www.linkedin.com/in/yael-tuvia-812755b0/"
                                target = "_blank" rel = "noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                                </a>
                                {/* github */}
                                <a href = "https://github.com/yaeltu"
                                target = "_blank" rel = "noopener noreferrer">
                                <i className="fab fa-github"></i>
                                </a>
                            
                            </div>
                        
                          <p> HTML | CSS | Java | Python | React | JavaScript</p>
                        </div>
                       
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}