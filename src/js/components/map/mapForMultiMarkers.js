import React, { useState, useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import useSupercluster from 'use-supercluster';
import MapListingMarker from './mapListingMarker';

const Marker = ({ children }) => children;

export default function Map(props) {
  // 1) map setup
  const mapRef = useRef();
  const [zoom, setZoom] = useState(13);
  const [bounds, setbounds] = useState(null);

  const points = props.filteredData.map((listing) => ({
    type: 'Feature',
    properties: {
      cluster: false,
      id: listing.id,
      address: listing.address,
      price: listing.price,
      beds: listing.beds,
      baths: listing.baths,
      sqft: listing.sqft,
      img: listing.img,
    },
    geometry: {
      type: 'Point',
      coordinates: [
        parseFloat(listing.location.longitude),
        parseFloat(listing.location.latitude),
      ],
    },
  })); //converting the fetch data into clusters

  // 3) get clusters
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  const center = {
    lat: 40.728936,
    lng: -73.993655,
  };
  // const center = {
  //   lat: points[0].geometry.coordinates[0],
  //   lng: points[0].geometry.coordinates[1]
  // };
  let bootstrapURLKeys = {};
  if (process.env.REACT_APP_GOOGLE_KEY) {
    bootstrapURLKeys = {
      key: process.env.REACT_APP_GOOGLE_KEY || null,
    };
  }

  return (
    // Important! Always set the container height explicitly
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={bootstrapURLKeys}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setbounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat,
          ]);

          // only filter listing based on map for devices with screen larger than 450px

          // if (window.innerWidth > 648) {
          props.onPan(bounds);
          // } else {
          // props.onPan({ bounds: null });
          // }
        }}
      >
        {/* {console.log('center', center, 'points', points, 'map', mapRef)} */}
        {clusters.map((cluster) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount,
          } = cluster.properties;

          if (isCluster) {
            return (
              <Marker key={cluster.id} lat={latitude} lng={longitude}>
                <div
                  className="cluster-marker"
                  style={{
                    width: `${10 + (pointCount / points.length) * 30}px`,
                    height: `${10 + (pointCount / points.length) * 30}px`,
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );
                    mapRef.current.setZoom(expansionZoom);
                    mapRef.current.panTo({ lat: latitude, lng: longitude });
                  }}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }

          return (
            // showing a single or collection of listing on the same map marker pin

            <MapListingMarker
              key={cluster.properties.id}
              lat={latitude}
              lng={longitude}
              data={cluster.properties}
            ></MapListingMarker>
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
