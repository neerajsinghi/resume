import React, { Component } from 'react';
import { Grid, Cell, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>
          
          <h2>Contact Me</h2>
          <hr/>
            <div className="contact-list">
              <Grid>
                <Cell col={6}>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    <br/>
                    <br/>
                    (91) 9873313987/ (91) 8074432391
                  </ListItemContent>
                </Cell>
                <Cell col={6}>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    <br/>
                    <br/>
                    nsinghi2011@gmail.com
                  </ListItemContent>
                </Cell>
              </Grid>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;