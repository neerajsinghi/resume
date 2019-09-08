import React, { Component } from 'react';
import { Grid, Cell  } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div className="about-me-grid" >
        <Grid>
          <Cell col={12}>
        <h2>About Me</h2>
        <hr/> 
        <br/>
        <p>I am a software engineer experienced with software development and maintainence on Enterprice level softwares. I have a Master of Engineering(M.E.) degree from BITS Pilani.
          <br/>
          I have worked mainly on C/C++ with sql server as the database in the backend for majority of my career. But Currently i am working with GoLang with mongodb and reactjs as frontend. I am interested in learning new languages and technologies. 
        </p>
        </Cell>
        </Grid>
        </div>
        
    )
  }
}

export default About;