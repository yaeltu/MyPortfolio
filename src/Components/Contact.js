import React , {Component} from 'react'
import {List , ListItem, ListItemContent} from 'react-mdl'


export default class Contact extends Component{
    render(){
        return(
            <div className = "contact-body">
                 <h1>Contact Me</h1>
                <div className = "contact-items">
                <List>
                    <ListItem>
                         <ListItemContent id = "phone-icon" 
                         style ={{fontSize: "30px",
                                fontFamily: "Anton",
                                marginLeft: "150px"}}> 
                            <i className="fas fa-phone-volume" ></i>
                                +972(0)547598300
                            </ListItemContent>
                    </ListItem>
                    
                    <ListItem>
                        <ListItemContent 
                        style ={{fontSize: "30px", 
                                fontFamily: "Anton",
                                marginLeft: "100px"}}>
                            <i className="fas fa-envelope"></i>
                                yael159753@gmail.com
                            </ListItemContent>
                    </ListItem>
                    </List>
                </div>
                <hr />
                
            </div>
        )
    }
}