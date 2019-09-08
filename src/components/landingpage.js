import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
     <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <br/>
            <br/>
            
            <img
              src="https://myavat.s3.ap-south-1.amazonaws.com/myAvatar.jpg"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack  Developer</h1>

              <hr />

              <p> GoLang | C/C++ | React | MongoDB | SQL Server </p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/neeraj-singhi-52945b8a" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/neerajsinghi" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

              </div>
            </div>
            <br/>
            <br/>
          </Cell>
        </Grid>
        </div>
       
      </div>
     
     
      )
  }
}

export default Landing;