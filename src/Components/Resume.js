import React , {Component} from 'react'
import {Grid, Cell} from 'react-mdl'
import resumeImg from "../resumeImg.jpeg"
import Education from './Education'
import MilitaryService from './MilitaryService'
import Skills from './Skills'
import resumeFile from '../cv.pdf'

export default class Resume extends Component{
    render(){
        return(
            <div className = "resume-body">
                <Grid>
                    <Cell className = "resume-left" col={4}>
                        <div style ={{textAlign: "center"}}>
                            <img src = {resumeImg} />
                        </div>
                    <h2>Yael Tuvia</h2>
                    <h4 style ={{color: "grey"}}>Junior Programmer</h4>
                    <hr style ={{borderTop: "3px solid #833fb2", width: "50%"}}/>
                    <p>Fresh Graduate of BS.c in Computer Science at Ben-Gurion University of the Negev.
                        Looking for my first job. Highly motivated and ready to work hard.
                    </p>
                    <hr style ={{borderTop: "3px solid #833fb2", width: "50%"}}/>
                    <h5>Address</h5>
                    <p>Yossef Baratz 9 , Holon</p>
                    <h5>Phone</h5>
                    <p>+972(0)547598300</p>
                    <h5>Email</h5>
                    <p>yael159753@gmail.com</p>
                    <h5><a href = "https://yaeltuvia.netlify.com/">Personal Website</a></h5>
                    <hr style ={{borderTop: "3px solid #833fb2", width: "50%"}}/>
                    <a href = {resumeFile} download>
                        Click to download my full resume</a>
                    
                    </Cell>

                    <Cell className = "resume-right" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear = {2016} 
                            endYear = {2019} 
                            schoolName = "Ben Gurion University of The Negev"
                            schoolDescription = {'Relevant Courses (final grade): "System Programming"- in CPP and Java(91),'+
                            '"Intro to Computer Science" in Java (86), “Compiler Principles” – in Ocaml and' +
                            'Assembly(90), “Operating Systems”(83).'}
                            />
                        <Education 
                            startYear = {2009} 
                            endYear = {2012} 
                            schoolName = "Atidim high school"
                            schoolDescription = {'Graduated with GPA of 105 (by BGU). ' +
                                'Specializations (5 points): Mathematics, English, Computer Science(10 points),'+
                                'Chemistry, Physics.'
                                }
                            />
                            <hr style={{borderTop: "3px solid #e22947"}} />
                            <h2>Military Service</h2>
                            <MilitaryService
                                startYear = {2012}
                                endYear = {2015}
                                rank = "first lieutenant."
                                duty = "Served at the department of information systems at Home Front Command."
                                award = "Was awarded a certificate of excellence from the C4I Unit commander on April 2015."
                            />
                            <hr style={{borderTop: "3px solid #e22947"}} />
                            <h2>Skills</h2>
                            <Skills
                                skill = "HTML/CSS"
                                progress = {90} />
                             <Skills
                                skill = "JavaScript"
                                progress = {80} />
                             <Skills
                                skill = "React"
                                progress = {80} />
                            <Skills
                                skill = "Java"
                                progress = {80} />
                            <Skills
                                skill = "Python"
                                progress = {70} />
                            <Skills
                            skill = "Node JS"
                            progress = {40} />
                            
                    </Cell>
                </Grid>
           
            </div>
        )
    }
}