import { useState } from 'react';
import {useMapEvents,} from 'react-leaflet/hooks';
import { Marker, Popup } from 'react-leaflet'
export default function MapComponent() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Workout</Popup>
    </Marker>
  )
}
