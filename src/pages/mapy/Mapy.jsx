import React, { useState, useEffect, useRef } from 'react';
import trackingCSS from './mapy.module.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from './LocationMarker';
import TaskMapy from '../Private/TaskMapy';
let data;
export default function Mapy() {
  const [isActive, setIsActive] = useState(false);
  const [workouts, setWorkouts] = useState([]);
  const formElement = useRef(null);
  const inputDistance = useRef(null);
  const inputDuration = useRef(null);
  const inputCadence = useRef(null);
  const inputType = useRef(null);
  const inputElevation = useRef(null);
  const listElement = useRef(null);
  const [view, setView] = useState({});
  function handleWorkouts(workout) {
    data.push(workout);
    localStorage.setItem('workouts', JSON.stringify(data));
    setWorkouts([...data]);
  }

  function handleList(e) {
    const workoutEl = e.target.closest('.mapy_workout__rfXP1');
    let workout = workouts.find((el) => el.id === workoutEl.dataset.id);
    setView(workout);
    setIsActive(!isActive);
  }

  useEffect(() => {
    data = JSON.parse(localStorage.getItem('workouts')) || [];
    setWorkouts(data);
  }, []);
  return (
    <>
    <TaskMapy/>
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
            <div className={`${trackingCSS.form__row}`}>
              <label className={trackingCSS.form__label}>Cadence</label>

              <input
                ref={inputCadence}
                className={`${trackingCSS.form__input} ${trackingCSS.form__input}`}
                placeholder='step/min'
              />
            </div>

            <div
              className={`${trackingCSS.form__row} ${trackingCSS.form__row_hidden}`}
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

          {workouts.map((el) => (
            <li
              onClick={(e) => handleList(e)}
              key={el.id}
              className={`${trackingCSS.workout} ${
                el.type === 'running'
                  ? trackingCSS.workout__running
                  : trackingCSS.workout__cycling
              }`}
              data-id={el.id}
            >
              <h2 className={trackingCSS.workout__title}>{el.description}</h2>
              <div className={trackingCSS.workout__details}>
                <span className={trackingCSS.workout__icon}>
                  {el.type === 'running' ? '🏃🏾‍♂️' : '🚴🏾‍♀️'}
                </span>
                <span className={trackingCSS.workout__value}>
                  {el.distance}
                </span>
                <span className={trackingCSS.workout__unit}>km</span>
              </div>
              <div className={trackingCSS.workout__details}>
                <span className={trackingCSS.workout__icon}>⏱</span>
                <span className={trackingCSS.workout__value}>
                  {el.duration}
                </span>
                <span className={trackingCSS.workout__unit}>min</span>
              </div>
              {el.type === 'running' ? (
                <>
                  <div className={trackingCSS.workout__details}>
                    <span className={trackingCSS.workout__icon}>⚡️</span>
                    <span className={trackingCSS.workout__value}>
                      {el.cadence}
                    </span>
                    <span className={trackingCSS.workout__unit}>min/km</span>
                  </div>
                  <div className={trackingCSS.workout__details}>
                    <span className={trackingCSS.workout__icon}>🦶🏼</span>
                    <span className={trackingCSS.workout__value}>
                      {el.pace}
                    </span>
                    <span className={trackingCSS.workout__unit}>spm</span>
                  </div>
                </>
              ) : (
                <>
                  <div className={trackingCSS.workout__details}>
                    <span className={trackingCSS.workout__icon}>⚡️</span>
                    <span className={trackingCSS.workout__value}>
                      {el.elevationGain}
                    </span>
                    <span className={trackingCSS.workout__unit}>meters</span>
                  </div>
                  <div className={trackingCSS.workout__details}>
                    <span className={trackingCSS.workout__icon}>🚲</span>
                    <span className={trackingCSS.workout__value}>
                      {el.speed}
                    </span>
                    <span className={trackingCSS.workout__unit}>speed</span>
                  </div>
                </>
              )}
            </li>
          ))}
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
          setWorkout={setWorkouts}
          handleWorkouts={handleWorkouts}
          listEl={listElement}
          view={view}
          isActive={isActive}
          workouts={workouts}
        />
      </MapContainer>
    </div>
    </>
  );
}
