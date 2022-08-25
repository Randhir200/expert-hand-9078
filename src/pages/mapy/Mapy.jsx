import React, { useState, useEffect } from 'react';
import trackingCSS from './mapy.module.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from './LocationMarker';
import MapComponent from './MapComponent';
import DraggableMarker from './DraggableMarker';
export default function Mapy() {
  return (
    <div className={trackingCSS.tracking_body}>
      <div className={`${trackingCSS.sidebar}`}>
        <img src='logo.png' alt='Logo' className='logo' />

        <ul className={trackingCSS.workouts}>
          <form className={`${trackingCSS.form} ${trackingCSS.hidden}`}>
            <div className={trackingCSS.form__row}>
              <label className={trackingCSS.form__label}>Type</label>
              <select
                className={`${trackingCSS.form__input} ${trackingCSS.form__input}`}
              >
                <option value='running'>Running</option>
                <option value='cycling'>Cycling</option>
              </select>
            </div>
            <div className='form__row'>
              <label className='form__label'>Distance</label>
              <input
                className={`${trackingCSS.form__input} ${trackingCSS.form__input}`}
                placeholder='km'
              />
            </div>
            <div className={`${trackingCSS.form__row}`}>
              <label className={trackingCSS.form__label}>Duration</label>
              <input
                className={`${trackingCSS.form__input} ${trackingCSS.form__input}`}
                placeholder='min'
              />
            </div>
            <div className={trackingCSS.form__row}>
              <label className={trackingCSS.form__label}>Cadence</label>
              <input
                className={`${trackingCSS.form__input} ${trackingCSS.form__input}`}
                placeholder='step/min'
              />
            </div>
            <div
              className={`${trackingCSS.form__row} ${trackingCSS.form__row}`}
            >
              <label className={trackingCSS.form__label}>Elev Gain</label>
              <input
                className={`${trackingCSS.form__input} ${trackingCSS.form__input}`}
                placeholder='meters'
              />
            </div>
            <button className={trackingCSS.form__btn}>OK</button>
          </form>
        </ul>
      </div>
      <MapContainer
        id={trackingCSS.map}
        center={{ lat: 51.505, lng: -0.09 }}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <LocationMarker />
        <MapComponent />
        {/* <DraggableMarker /> */}
      </MapContainer>
    </div>
  );
}
