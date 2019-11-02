import React, {Component} from 'react'
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './main'
import { Link } from 'react-router-dom'

export default class PortfolioLayout extends Component{

    render(){
        return(
            <div className="demo-big-content">
                <Layout>
        <Header className = "nav-bar" 
            title = {<Link to ="/" 
            style ={{color: "white" ,
                    textDecoration: "none"}}>
                    Home</Link>}

            scroll>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title = {<Link to ="/" 
                            style = {{color: "black" ,
                                    textDecoration: "none"}}>
                                    Home</Link>}>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>
        )
    }
}