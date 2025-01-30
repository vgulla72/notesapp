import React, { useState } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import PlacesAutocomplete from 'react-places-autocomplete';

function MapComponent() {
  const [center, setCenter] = useState({ lat: 40.7128, lng: -74.0060 });

  const handlePlaceSelect = (place) => {
    setCenter({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
  };

  return (
    <div>
      <PlacesAutocomplete
        onSelect={handlePlaceSelect}
      />
      <APIProvider apiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <Map
          center={center}
          zoom={12}
          mapId="YOUR_MAP_ID"
          gestureHandling="greedy" 
        >
          <Marker position={center} />
        </Map>
      </APIProvider>
    </div>
  );
}

export default MapComponent;
