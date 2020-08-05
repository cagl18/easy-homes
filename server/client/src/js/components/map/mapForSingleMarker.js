import React from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ children }) => children;

const Map = (props) => {
  return (
    // Important! Always set the container height explicitly
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_KEY,
        }}
        // defaultCenter={props.location}
        center={props.location}
        defaultZoom={props.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <Marker lat={props.location.lat} lng={props.location.lng}>
          <img
            src="https://static.thenounproject.com/png/9093-200.png"
            style={{ width: '36px', height: '36px' }}
            alt="location pin marker"
          />
        </Marker>
      </GoogleMapReact>
    </div>
  );
};

export default Map;
