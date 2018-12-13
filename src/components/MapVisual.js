import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

 
const Maker = () => <div className="maker"></div>;
 
class MapVisual extends Component {
  constructor(props) {
    super(props);
      this.state = {
        lat: this.props.latitude,
        lng : this.props.longitude
      }
  }
  static defaultProps = {
    center: {
      lat: 29.7604,
      lng: -95.3698
    },
    zoom: 5
  };
 
  render() {
  
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: 'calc(100vh - 65px)', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBL67yJdkwdO7yMdukSpp70ALG-pUacUQ8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
    
        >
          <Maker
            lat={this.props.latitude}
            lng={this.props.longitude}

          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MapVisual;