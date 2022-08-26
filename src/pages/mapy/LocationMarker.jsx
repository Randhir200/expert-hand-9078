import React, { useState, useEffect } from 'react';
import { Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import { Icon, latLng } from 'leaflet';
import './mapy.css';
import trackingCSS from './mapy.module.css';
import L from 'leaflet';

export default function LocationMarker({
  formEl,
  inpDis,
  inpDu,
  inpCad,
  inpTyp,
  inpElv,
  handleActive,
}) {
  const [position, setPosition] = useState(null);
  const [bbox, setBbox] = useState([]);
  const map = useMap();
  let mapEvent;
  inpTyp.current.addEventListener('change', () => {
    handleActive();
  });
  useEffect(() => {
    map.locate().on('locationfound', function (e) {
      setPosition(e.latlng);
      // map.flyTo(e.latlng, map.getZoom());
      // const radius = e.accuracy;
      // const circle = L.circle(e.latlng, radius);
      // circle.addTo(map);
      setBbox(e.bounds.toBBoxString().split(','));
    });

    //handling clicks on map
    map.on('click', (mapE) => {
      mapEvent = mapE;
      handleHiddenClass();
    });

    function handleHiddenClass() {
      // console.log(formEl);
      formEl.current.classList.remove(trackingCSS.hidden);
      inpDis.current.focus();

      //Clear input fields
      inpDis.current.value = inpDu.current.value = inpCad.current.value = '';
      //Display marker
      formEl.current.addEventListener('submit', (e) => {
        e.preventDefault();
        let { lat, lng } = mapEvent.latlng;
        let coords = [lat, lng];
        setPosition([...coords]);
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              title: 'Workout',
              className: 'running-popup',
              autoPan: false,
            })
          )
          .setPopupContent('Workout')
          .openPopup();
      });
    }
  }, [map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        You are here. <br />
        Map bbox: <br />
        <b>Southwest lng</b>: {bbox[0]} <br />
        <b>Southwest lat</b>: {bbox[1]} <br />
        <b>Northeast lng</b>: {bbox[2]} <br />
        <b>Northeast lat</b>: {bbox[3]}
      </Popup>
    </Marker>
  );
}
