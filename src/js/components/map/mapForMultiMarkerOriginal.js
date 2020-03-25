import React, { useState, useEffect, useRef } from 'react';
import useSwr from 'swr';
import GoogleMapReact from 'google-map-react';
import useSupercluster from 'use-supercluster';

import MapListingMarker from './mapListingMarker';

const fetcher = (...args) => fetch(...args).then(response => response.json());

const Marker = ({ children }) => children;

export default function Map(props) {
  // 1) map setup
  const mapRef = useRef();
  const [zoom, setZoom] = useState(14);
  const [bounds, setbounds] = useState(null);

  // 2) load and format data
  // const url =
  //   'https://data.police.uk/api/crimes-street/all-crime?lat=52.62&lng=-1.13';
  // const { data, error } = useSwr(url, fetcher);
  // const crimes = data && !error ? data : [];

  const points = props.filteredData.map(listing => ({
    type: 'Feature',
    properties: {
      cluster: false,
      id: listing.id,
      address: listing.address,
      price: listing.price,
      beds: listing.beds,
      baths: listing.baths,
      sqft: listing.sqft,
      img: listing.img
    },
    geometry: {
      type: 'Point',
      coordinates: [
        parseFloat(listing.location.longitude),
        parseFloat(listing.location.latitude)
      ]
    }
  })); //converting the fetch data into clusters

  // 3) get clusters
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 }
  });

  const center = {
    lat: 40.68425,
    lng: -73.955018
  };

  return (
    // Important! Always set the container height explicitly
    <div className='map'>
      <GoogleMapReact
        // bootstrapURLKeys={{
        //   // key: process.env.REACT_APP_GOOGLE_KEY
        // }}
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
            bounds.nw.lat
          ]);
        }}
      >
        {clusters.map(cluster => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount
          } = cluster.properties;

          if (isCluster) {
            return (
              <Marker key={cluster.id} lat={latitude} lng={longitude}>
                <div
                  className='cluster-marker'
                  style={{
                    width: `${10 + (pointCount / points.length) * 30}px`,
                    height: `${10 + (pointCount / points.length) * 30}px`
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

//clustering example

// import React, { useState, useEffect, useRef } from 'react';
// import useSwr from 'swr';
// import GoogleMapReact from 'google-map-react';
// import useSupercluster from 'use-supercluster';

// const fetcher = (...args) => fetch(...args).then(response => response.json());

// const Marker = ({ children }) => children;

// export default function Map(props) {
//   // 1) map setup
//   const mapRef = useRef();
//   const [zoom, setZoom] = useState(16);
//   const [bounds, setbounds] = useState(null);

//   // 2) load and format data
//   const url =
//     'https://data.police.uk/api/crimes-street/all-crime?lat=52.62&lng=-1.13';
//   const { data, error } = useSwr(url, fetcher);
//   const crimes = data && !error ? data : [];
//   const points = crimes.map(crime => ({
//     type: 'Feature',
//     properties: { cluster: false, crimeId: crime.id, category: crime.category },
//     geometry: {
//       type: 'Point',
//       coordinates: [
//         parseFloat(crime.location.longitude),
//         parseFloat(crime.location.latitude)
//       ]
//     }
//   })); //converting the fetch data into clusters

//   // 3) get clusters
//   const { clusters, supercluster } = useSupercluster({
//     points,
//     bounds,
//     zoom,
//     options: { radius: 75, maxZoom: 20 }
//   });

//   console.log('crimes', crimes);
//   const center = {
//     lat: 40.693464,
//     lng: -73.982698
//     // lat: 52.6376,
//     // lng: 73.982698
//     // lat: 40.84,
//     // lng: -73.85
//   };
//   // zoom: 13

//   // const zoom = props.zoom || 14;
//   //   // console.log('google key', process.env.REACT_APP_GOOGLE_API_KEY);

//   return (
//     // Important! Always set the container height explicitly
//     <div className='map'>
//       <GoogleMapReact
//         bootstrapURLKeys={{
//           // key: process.env.REACT_APP_GOOGLE_KEY
//         }}
//         defaultCenter={center}
//         defaultZoom={zoom}
//         yesIWantToUseGoogleMapApiInternals
//         onGoogleApiLoaded={({ map }) => {
//           mapRef.current = map;
//         }}
//         onChange={({ zoom, bounds }) => {
//           setZoom(zoom);
//           setbounds([
//             bounds.nw.lng,
//             bounds.se.lat,
//             bounds.se.lng,
//             bounds.nw.lat
//           ]);
//         }}
//       >
//         {clusters.map(cluster => {
//           const [longitude, latitude] = cluster.geometry.coordinates;
//           const {
//             cluster: isCluster,
//             point_count: pointCount
//           } = cluster.properties;

//           if (isCluster) {
//             return (
//               <Marker key={cluster.id} lat={latitude} lng={longitude}>
//                 <div
//                   className='cluster-marker'
//                   style={{
//                     width: `${10 + (pointCount / points.length) * 30}px`,
//                     height: `${10 + (pointCount / points.length) * 30}px`
//                   }}
//                   onClick={() => {
//                     const expansionZoom = Math.min(
//                       supercluster.getClusterExpansionZoom(cluster.id),
//                       20
//                     );
//                     mapRef.current.setZoom(expansionZoom);
//                     mapRef.current.panTo({ lat: latitude, lng: longitude });
//                   }}
//                 >
//                   {pointCount}
//                 </div>
//               </Marker>
//             );
//           }

//           return (
//             <Marker
//               key={cluster.properties.crimeId}
//               lat={latitude}
//               lng={longitude}
//             >
//               <button className='crime-marker'>
//                 <div className='banner open-house'>3K</div>
//               </button>
//             </Marker>
//           );
//         })}
//       </GoogleMapReact>
//     </div>
//   );
// }

//*********************END*********************************************** */

//intial code

// export default map;

// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// class map extends Component {
//   static defaultProps = {
//     center: {
//       lat: 40.84,
//       lng: -73.85
//     }
//     // zoom: 13
//   };
//   zoom = this.props.zoom || 14;

//   render() {
//     console.log('google key', process.env.REACT_APP_GOOGLE_API_KEY);
//     return (
//       // Important! Always set the container height explicitly
//       <div className='map'>
//         <GoogleMapReact
//           bootstrapURLKeys={{
//             /* key: Api KEY goes here*/
//           }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.zoom}
//         >
//           {/* <AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' /> */}
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default map;
