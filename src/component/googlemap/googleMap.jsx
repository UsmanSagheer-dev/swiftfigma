import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY" // Replace with your actual API Key
  });

  const [map, setMap] = React.useState(null);

  // Log when map is loaded
  const onLoad = React.useCallback((map) => {
    console.log('Map Loaded');
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  // Log when map is unmounted
  const onUnmount = React.useCallback((map) => {
    console.log('Map Unloaded');
    setMap(null);
  }, []);

  // Handle errors
  if (loadError) {
    console.error('Error loading map:', loadError);
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
  ) : <div>Loading Map...</div>;
}

export default React.memo(MyComponent);
