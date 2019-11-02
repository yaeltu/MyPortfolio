import React , {Component} from 'react'
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'
import { Player } from 'video-react';
import  { Modal }  from 'react-bootstrap';
import "../../node_modules/video-react/dist/video-react.css";



export default class ProjectCard extends Component{
    constructor(){
        super();
        this.state = {
            visible: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render(){
        return(
            <Card shadow ={5} style ={{minWidth: "200px", 
                                       margin: "auto", 
                                       display: "inline-block",
                                       marginRight: "30px"}}>
                      <CardTitle style ={{color: this.props.projectType == "NodeJS" ? "black" : "white",
                                          height: "200px", 
                                          background: "url(" + this.props.url + ") center / cover"}}>
                         <h4 style = {{marginTop: "180px", fontWeight: "bold",}}>
                            {this.props.projectType} Project #{this.props.projectId} 
                         </h4>
                      </CardTitle>
                      <CardText>
                         {this.props.description}
                      </CardText>
                      <CardActions border>
                          <Button colored href = {this.props.gitHubLink} >GitHub </Button>
                          <Button style = {{display: this.props.projectType != "React" ? "none" : "inline-block"}}
                           colored 
                           onClick = {this.openModal}>Live Demo </Button>

                            <Modal 
                            show={this.state.visible} 
                            onHide={this.closeModal}
                            size = "lg">
                                <Modal.Body>
                                <Player
                                    fluid = {false}
                                    width = {770}
                                    height = {500}
                                    playsInline
                                    poster = {this.props.poster}
                                    src= {this.props.liveDemo}
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={this.closeModal}>
                                    Close
                                </Button>
                                </Modal.Footer>
                            </Modal>
                                        
                      </CardActions>
                      <CardMenu style ={{color: this.props.projectType == "NodeJS" ? "black" : "white"}}>
                          <IconButton name ="share" />
                      </CardMenu>
                      
                  </Card>  
        )
    }
}