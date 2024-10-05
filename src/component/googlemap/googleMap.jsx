import React from "react";

const GoogleMap = () => {
  return (
    <>
     
        <div className="mapouter" style={{ display: "table" }}>
          <div
            className="gmap_canvas"
            style={{
              overflow: "hidden",
              position: "relative",
              height: "400px",
              width: "300px",
              background: "#fff",
              "@media (max-width: 786px)": {
                width: "100%",
              },
            }}
          >
            <iframe
              src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              style={{
                width: "300px",
                height: "400px",
                position: "relative",
                zIndex: "2",
                "@media (max-width: 1194px)": {
                 width: "100%",
                },
              }}
              title="Google Map"
            ></iframe>
            <a
              href="https://fnfmods.net/fnf-test/"
              style={{
                color: "#fff",
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: "0",
              }}
            >
              fnf test
            </a>
          </div>
        </div>
      
    </>
  );
};

export default GoogleMap;

// import React from 'react';
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// function MyComponent() {
//   const { isLoaded, loadError } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "YOUR_API_KEY"
//   });

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback((map) => {
//     console.log('Map Loaded');
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);
//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback((map) => {
//     console.log('Map Unloaded');
//     setMap(null);
//   }, []);

//   if (loadError) {
//     console.error('Error loading map:', loadError);
//     return <div>Map cannot be loaded right now, sorry.</div>;
//   }

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >

//         <></>
//       </GoogleMap>
//   ) : <div>Loading Map...</div>;
// }

// export default React.memo(MyComponent);
