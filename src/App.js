import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content} from 'react-mdl';
import { Grid, Cell } from 'react-mdl'
import Landing from './components/landingpage'
import Projects from './components/projects';

import AboutMe from './components/aboutme';
import Contact from './components/contact';
import Map from './components/map';
import { StickyContainer, Sticky } from 'react-sticky';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeOfID: ''
    };
    this.handleChangeProject = this.handleChangeProject.bind(this);
    this.handleChangeAbout = this.handleChangeAbout.bind(this);
    this.handleChangeContact = this.handleChangeContact.bind(this);
    this.handleChangeLanding = this.handleChangeLanding.bind(this);

  }
  
  handleChangeLanding(){
    this.setState({typeOfID:''})
  }
  handleChangeProject() {
    this.setState({ typeOfID: 'projects' });
  }
  handleChangeAbout() {
    this.setState({ typeOfID: 'aboutme' });
  }
  handleChangeContact() {
    this.setState({ typeOfID: 'contact' });
  }
  
  render(){
  return (
    

    <div className="demo-big-content">
      <Layout>
      <StickyContainer>
        {/* Other elements can be in between `StickyContainer` and `Sticky`,
        but certain styles can break the positioning logic used. */}
        <Sticky>
          {({
            style,
 
            // the following are also available but unused in this example
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          }) => (

        <Header scroll className="header-color" title={<a className={this.state.typeOfID === '' ? 'headerSelected':''} onClick={this.handleChangeLanding} style={{ fontFamily: 'Times, sans-serif',fontWeight:'bold', textDecoration:'none', color: 'white' }} href="#landing">Neeraj Singhi</a>} >

          <Navigation  ripple activeTab={1} onChange={(tabId) => {}}>
            <a className={this.state.typeOfID === 'projects' ? 'selected':''} onClick={this.handleChangeProject} href="#projects" >Projects</a>
            <a className={this.state.typeOfID ==='aboutme' ? 'selected':''} onClick={this.handleChangeAbout} href="#aboutme" >About Me</a>
            <a className={this.state.typeOfID === 'contact' ? 'selected':''} onClick={this.handleChangeContact} href="#contact" >Contact</a>
          </Navigation>
        </Header>
         )}
         </Sticky>
         {/* ... */}
       </StickyContainer>

        <Content>
          <div className="page-content" style={{padding:'0em' ,width:'100%' ,margin:'0em'}}>
          <Grid className="demo-grid-1" id="landing" onMouseEnter={this.handleChangeLanding} style={{padding:'0em' ,width:'100%' ,margin:'0em'}}>
            <Cell col={12}  style={{padding:'0em' ,width:'100%' ,margin:'0em'}}><Landing /></Cell>
          </Grid>
          <Grid className="demo-grid-2" id="projects" ref="projects" onMouseEnter={this.handleChangeProject} style={{padding:'0em' ,width:'100%' ,margin:'0em'}}>
            
            <Cell col={12}  style={{padding:'0em' ,width:'100%' ,margin:'0em'}}><Projects /></Cell>
            
          </Grid>
          <Grid className="demo-grid-3" id="aboutme" ref="aboutme" onMouseEnter={this.handleChangeAbout} style={{padding:'0em' ,width:'100%' ,margin:'0em'}}>
            <Cell col={12}  style={{padding:'0em' ,width:'100%' ,margin:'0em'}}><AboutMe /></Cell>
          </Grid>
          <Grid className="demo-grid-4" id="contact" ref="contact" onMouseEnter={this.handleChangeContact} style={{padding:'0em' ,width:'100%' ,margin:'0em'}}>
            <Cell col={12}  style={{padding:'0em' ,width:'100%' ,margin:'0em'}}><Contact /></Cell>
          </Grid>
          <Grid className="demo-grid-4" id="contact" ref="contact" onMouseEnter={this.handleChangeContact} style={{padding:'0em' ,width:'100%' ,margin:'0em'}}>
            <Cell col={12}  style={{padding:'0em' ,width:'100%' ,margin:'0em'}}><Map /></Cell>
          </Grid>
          </div>
        </Content>
        

      </Layout>
    </div>
  );
}
}
export default App;
