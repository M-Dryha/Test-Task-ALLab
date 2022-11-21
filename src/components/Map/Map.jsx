import React from 'react';
// import { Map as LeafletMap, GeoJSON, Marker, Popup } from 'react-leaflet';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// import worldGeoJSON from 'geojson-world-map'

const GeoJsonMap = location => {
  const lat = location.location.lat;
  const long = location.location.long;
  console.log('lat', lat);
  console.log('long', long);
  return (
    //   <LeafletMap
    //     center={[50, 10]}
    //     zoom={6}
    //     maxZoom={10}
    //     attributionControl={true}
    //     zoomControl={true}
    //     doubleClickZoom={true}
    //     scrollWheelZoom={true}
    //     dragging={true}
    //     animate={true}
    //     easeLinearity={0.35}
    //   >
    //     <GeoJSON
    //       data={worldGeoJSON}
    //       style={() => ({
    //         color: '#4a83ec',
    //         weight: 0.5,
    //         fillColor: '#1a1d62',
    //         fillOpacity: 1,
    //       })}
    //     />
    //     <Marker position={[17.761356, 59.020266]}>
    //       <Popup>Popup for any custom information.</Popup>
    //     </Marker>
    //   </LeafletMap>
    <MapContainer
      center={[lat, long]}
      zoom={9}
      scrollWheelZoom={false}
      className="h-[206px] w-[400px] rounded-lg "
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, long]}>
        <Popup>
          A pretty job. <br /> Easily to find it.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default GeoJsonMap;
