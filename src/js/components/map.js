import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class map extends Component {
  static defaultProps = {
    center: {
      lat: 40.84,
      lng: -73.85
    }
    // zoom: 13
  };
  zoom = this.props.zoom || 14;

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className='map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA57Jn0HUCF0nHc3v5uZO_VoWWV__PCKT0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.zoom}
        >
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default map;
