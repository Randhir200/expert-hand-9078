import React, { useState, useEffect, useRef } from 'react';
import trackingCSS from './mapy.module.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from './LocationMarker';
export default function Mapy() {
  const [isActive, setIsActive] = useState(true);
  const [workout, setWorkout] = useState([]);
  const formElement = useRef(null);
  const inputDistance = useRef(null);
  const inputDuration = useRef(null);
  const inputCadence = useRef(null);
  const inputType = useRef(null);
  const inputElevation = useRef(null);
  function handleActive() {
    setIsActive(!isActive);
  }
  return (
    <div className={trackingCSS.tracking_body}>
      <div className={`${trackingCSS.sidebar}`}>
        <img
          width='100'
          height='100'
          src='https://matrixiq.com/wp-content/uploads/2022/04/Track-all-of-your-vehicles-on-one-platform.svg'
          alt='Logo'
          className={trackingCSS.logo}
        />

        <ul className={trackingCSS.workouts}>
          <form
            ref={formElement}
            className={`${trackingCSS.form} ${trackingCSS.hidden}`}
          >
            <div className={trackingCSS.form__row}>
              <label className={trackingCSS.form__label}>Type</label>
              <select
                type='select'
                required
                ref={inputType}
                className={`${trackingCSS.form__input} ${trackingCSS.form__input} 'form__input--type'`}
              >
                <option value='null'>Select</option>
                <option value='running'>Running</option>
                <option value='cycling'>Cycling</option>
              </select>
            </div>
            <div className={trackingCSS.form__row}>
              <label className={`${trackingCSS.form__label}`}>Distance</label>
              <input
                ref={inputDistance}
                className={`${trackingCSS.form__input} ''form__input--distance''`}
                placeholder='km'
              />
            </div>
            <div className={`${trackingCSS.form__row}`}>
              <label className={trackingCSS.form__label}>Duration</label>
              <input
                ref={inputDuration}
                placeholder='min'
                className={`${trackingCSS.form__input} ${trackingCSS.form__input}`}
              />
            </div>
            <div
              className={`${trackingCSS.form__row} ${
                isActive ? trackingCSS.form__row_hidden : ''
              }`}
            >
              <label className={trackingCSS.form__label}>Cadence</label>

              <input
                ref={inputCadence}
                className={`${trackingCSS.form__input} ${trackingCSS.form__input}`}
                placeholder='step/min'
              />
            </div>

            <div
              className={`${trackingCSS.form__row} ${
                !isActive ? trackingCSS.form__row_hidden : ''
              }`}
            >
              <label className={trackingCSS.form__label}>Elev Gain</label>
              <input
                ref={inputElevation}
                className={`${trackingCSS.form__input} ${trackingCSS.form__input}`}
                placeholder='meters'
              />
            </div>

            <button className={trackingCSS.form__btn}>OK</button>
          </form>

        {
          workout.map((el)=>(
            <li key={el.id}
            className={`${trackingCSS.workout} ${el.type==='running'?trackingCSS.workout__running:trackingCSS.workout__cycling}`}
            data-id='1234567890'
          >
            <h2 className={trackingCSS.workout__title}>{el.type} on April 14</h2>
            <div className={trackingCSS.workout__details}>
              <span className={trackingCSS.workout__icon}>🏃‍♂️</span>
              <span className={trackingCSS.workout__value}>5.2</span>
              <span className={trackingCSS.workout__unit}>km</span>
            </div>
            <div className={trackingCSS.workout__details}>
              <span className={trackingCSS.workout__icon}>⏱</span>
              <span className={trackingCSS.workout__value}>24</span>
              <span className={trackingCSS.workout__unit}>min</span>
            </div>
            <div className={trackingCSS.workout__details}>
              <span className={trackingCSS.workout__icon}>⚡️</span>
              <span className={trackingCSS.workout__value}>4.6</span>
              <span className={trackingCSS.workout__unit}>min/km</span>
            </div>
            <div className={trackingCSS.workout__details}>
              <span className={trackingCSS.workout__icon}>🦶🏼</span>
              <span className={trackingCSS.workout__value}>178</span>
              <span className={trackingCSS.workout__unit}>spm</span>
            </div>
          </li>
          ))
            
        }
          
         
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
        <LocationMarker
          formEl={formElement}
          inpDis={inputDistance}
          inpDu={inputDuration}
          inpCad={inputCadence}
          inpElv={inputElevation}
          inpTyp={inputType}
          handleActive={handleActive}
          setWorkout={setWorkout}
        />
      </MapContainer>
    </div>
  );
}
