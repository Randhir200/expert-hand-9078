import { useState, useEffect } from 'react';
import { useMapEvents } from 'react-leaflet/hooks';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
export default function MapComponent() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    auto() {
      map.locate();
    },
    locationfound(e) {
      if (position===null) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      }
    },
  });
  map.on('click', (mapEvent) => {
    let { lat, lng } = mapEvent.latlng;
    let coords = [lat, lng];
    setPosition([...coords]);
  });
  console.log(position);
  useEffect(() => {}, []);
  return position === null ? null : (
    <Marker style={{ color: 'red' }} position={position}>
      <Popup>Workout</Popup>
    </Marker>
  );
}
