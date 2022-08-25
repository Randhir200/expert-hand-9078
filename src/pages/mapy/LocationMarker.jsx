import React, { useState, useEffect } from 'react';
import {
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import trackingCSS from './mapy.module.css';
export default function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup style={{ color:"red"}}>You are here</Popup>
    </Marker>
  );
}
