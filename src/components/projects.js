import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText,  } from 'react-mdl';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrkdjn0ilyAhSQYjyKmwab7zVv_GifzTTO_TTaXAhJyNBdCaqJ) center / cover '
                        }}>Plunes Backend</CardTitle>
                        <CardText>
                            <ul style={{textAlign:'justify'}}>
                            <li>Creating Various API's1</li>
                            <li>Designing the backend</li>
                            <li>Involment in various key decisions</li>
                            </ul> 
            </CardText>
                       
                    </Card >
                    {/* Project 2
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }
                    }>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrkdjn0ilyAhSQYjyKmwab7zVv_GifzTTO_TTaXAhJyNBdCaqJ) center / cover '
                        }}>Go Project #1</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrkdjn0ilyAhSQYjyKmwab7zVv_GifzTTO_TTaXAhJyNBdCaqJ) center / cover '
                        }}>Go Project #1</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                                         </Card > */}
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                {/* Project 1 */}
                < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{
                         height: '176px',color:'black', background:
                            'url(https://www.ca.com/us/products/ca-unified-infrastructure-management/_jcr_content/productdetail/background_style/background-style-par/structure_two_column_451638650/two-columns-one/background_style_a22/background-style-par/adaptiveimage_2ff.img.full.high.png/1554476591290.png) center / cover '
                    }}>CA UIM</CardTitle>
                    <CardText>
                        <ul style={{textAlign:'justify'}}>
                            <li>Enhancement of various Modules</li>
                            <li>Creating new features</li>
                            <li>Sustainance of the various Modules</li>
                            </ul> 
        </CardText>
                   
                </Card >
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                {/* Project 1 */}
                < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#fff', height: '176px', background:
                            'url(https://myavat.s3.ap-south-1.amazonaws.com/myresume.JPG) center / cover '
                    }}>My Portfolio Website</CardTitle>
                    <CardText>
                        <ul style={{textAlign:'justify'}}>
                        <li>Learned React from Tutlorial by <a href='https://www.youtube.com/playlist?list=PL3KAvm6JMiowqFTXj3oPQkhP7aCgRHFTm'>(Paul Hana)</a></li>
                        <li>Uploading the website to AWS</li>
                        <li>Run it on the cloud</li>
                        </ul> 
        </CardText>
        </ Card>
        </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrkdjn0ilyAhSQYjyKmwab7zVv_GifzTTO_TTaXAhJyNBdCaqJ) center / cover '
                        }}>Plunes Backend</CardTitle>
                        <CardText>
                            <ul style={{textAlign:'justify'}}>
                            <li>Doing CRUD operations</li>
                            <li>Designing the schema</li>
                            <li>Involment in various key decisions</li>
                            </ul> 
            </CardText>
            </ Card>
            </div>
            )
        } else if (this.state.activeTab === 4) {
            return (
<div className="projects-grid">
                {/* Project 1 */}
                < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{
                         height: '176px',color:'black', background:
                            'url(https://www.ca.com/us/products/ca-unified-infrastructure-management/_jcr_content/productdetail/background_style/background-style-par/structure_two_column_451638650/two-columns-one/background_style_a22/background-style-par/adaptiveimage_2ff.img.full.high.png/1554476591290.png) center / cover '
                    }}>CA UIM</CardTitle>
                    <CardText>
                        <ul style={{textAlign:'justify'}}>
                            <li>Enhancement of various Modules</li>
                            <li>Creating new features</li>
                            <li>Sustainance of the various Modules</li>
                            </ul> 
        </CardText>
                   
                </Card >
                </div>            )
        }
    }
    render() {
        return (
            <div className="category-tabs" style={{textAlign:'center'}}>
                          <h2>My Projects</h2>
                          <hr/>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} repple>
                    <Tab>Golang</Tab>
                    <Tab>C/C++</Tab>
                    <Tab>React</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>SQL Server</Tab>

                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Project;