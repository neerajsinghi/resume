import React, { Component } from 'react';
import{Grid,Cell} from 'react-mdl';
import GoogleMapReact from 'google-map-react';

const Marker = props => {
    return <div className="SuperAwesomePin"></div>
  }
const handleApiLoaded = (map, maps) => {
     new maps.Marker({
        position: {
            lat: 28.661501760647543,
            lng: 77.13305711746216
          },
        map,
        title: 'F-267/E Sudershan Park New Delhi 110015'
      });
};

class Map extends Component {
    static defaultProps = {
        center: {
          lat: 28.661501760647543,
          lng: 77.13305711746216
        },
        zoom: 17
      };
     
  render() {
    return(
      <div style={{background: '#2C7744',color:'white', height: '67vh'}}>
        <Grid>
          <Cell  col={6}>
            <div style={{textAlign:'center' , height: '50vh', width: '100%'}}>
                <h2>My Location</h2>
            <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD5_CXp9sP-LDEhFihSy0lNtR9BUvq_tGQ' }}
          defaultCenter={this.props.center}
  defaultZoom={this.props.zoom}
  yesIWantToUseGoogleMapApiInternals
  onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
>
<Marker lat={28.6498816} lng={77.13751040000001} />
  
        </GoogleMapReact>
             </div>
          </Cell>
          <Cell  col={3} style={{textAlign:'center'}}>
          <h2>Find Me</h2>
        <div className="social-links" >

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/neeraj-singhi-52945b8a" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/neerajsinghi" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                </div>
  </Cell>

        </Grid>
      </div>
    )
  }
}

export default Map;