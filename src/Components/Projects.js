import React , {Component} from 'react'
import {Tabs, Tab, Grid, Cell} from 'react-mdl'
import ProjectCard from './ProjectCard'
import myPortfoilioDemo from '../LiveDemos/MyPortfolioDemo.mp4'
import myPortfolioPoster from '../LiveDemosPosters/MyPortfolioPoster.png'
import toDoListDemo from '../LiveDemos/toDoListDemo.mp4'
import toDoListPoster from '../LiveDemosPosters/toDoListPoster.png'
import memeGenDemo from '../LiveDemos/memeGenDemo.mp4'
import memeGenPoster from '../LiveDemosPosters/memeGenPoster.png'

export default class Projects extends Component{
    constructor(){
        super();
        this.state = {
            activeTab: 0
        }
        
    }

    tabChangeHandler = tabId =>{
        this.setState({activeTab: tabId})
    }

    toggleCategories = () =>{
        if(this.state.activeTab === 0){
            return(<div>
                  <ProjectCard url = "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png"
                                projectType = "React"
                                projectId = "1"
                                description = "My Personal Website"
                                poster = {myPortfolioPoster} 
                                liveDemo = {myPortfoilioDemo}
                                gitHubLink = "https://github.com/yaeltu/MyPortfolio" />
                  <ProjectCard url = "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png"
                                projectType = "React"
                                projectId = "2"
                                description = "Todo List"
                                poster = {toDoListPoster} 
                                liveDemo = {toDoListDemo}
                                gitHubLink = "https://github.com/yaeltu/toDoList" />
                   <ProjectCard url = "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png"
                                projectType = "React"
                                projectId = "3"
                                description = "Meme Generator"
                                poster = {memeGenPoster}
                                liveDemo = {memeGenDemo}
                                gitHubLink = "https://github.com/yaeltu/memeGenerator"
                                />
            </div>)
        }
        else if(this.state.activeTab === 1){
            return(<div>
                <ProjectCard url = "https://is5-ssl.mzstatic.com/image/thumb/Purple2/v4/49/b7/19/49b71935-f472-9c9c-03be-8388a6fd4b00/mzl.fazslfja.png/1200x630bb.jpg"
                                projectType = "Python"
                                projectId = "1"
                                description = {"University project about the involvment of african-american " +
                                "actors, directors and producers in the movies industry through the years." }
                                gitHubLink = "https://github.com/yaeltu/AfricanAmericanMoviesIndustry"/>
            </div>)
        }
        else if(this.state.activeTab === 2){
            return(<div>
               <ProjectCard url = "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png"
                                projectType = "NodeJS"
                                projectId = "1"
                                description = {"Football service for clients who want to get information " +
                                "about upcoming or played matches and tournaments."}
                                gitHubLink = "https://github.com/yaeltu/FootballService" />
            </div>)
        }
    }

    render(){
        return(
            <div className = "category-tabs projects-body" >
                <Tabs activeTab = {this.state.activeTab} 
                onChange = { tabId => this.tabChangeHandler(tabId)}
                ripple>
                    <Tab>React</Tab>
                    <Tab>Python</Tab>
                    <Tab>NodeJS</Tab>
                </Tabs>

                <section className ="projects-grid">    
                    <Grid className = "projects-grid">
                        <Cell col ={12}>
                            <div className = "content">
                                {this.toggleCategories()}
                               
                            </div>
                        </Cell>
                    </Grid>
                    
                </section>
               
            </div>
        )
    }
}