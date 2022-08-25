import React from 'react';
import trackingCSS from './mapy.module.css';
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

          {/* <!-- <li className="workout workout--running" data-id="1234567890">
          <h2 className="workout__title">Running on April 14</h2>
          <div className="workout__details">
            <span className="workout__icon">🏃‍♂️</span>
            <span className="workout__value">5.2</span>
            <span className="workout__unit">km</span>
          </div>
          <div className="workout__details">
            <span className="workout__icon">⏱</span>
            <span className="workout__value">24</span>
            <span className="workout__unit">min</span>
          </div>
          <div className="workout__details">
            <span className="workout__icon">⚡️</span>
            <span className="workout__value">4.6</span>
            <span className="workout__unit">min/km</span>
          </div>
          <div className="workout__details">
            <span className="workout__icon">🦶🏼</span>
            <span className="workout__value">178</span>
            <span className="workout__unit">spm</span>
          </div>
        </li>

        <li className="workout workout--cycling" data-id="1234567891">
          <h2 className="workout__title">Cycling on April 5</h2>
          <div className="workout__details">
            <span className="workout__icon">🚴‍♀️</span>
            <span className="workout__value">27</span>
            <span className="workout__unit">km</span>
          </div>
          <div className="workout__details">
            <span className="workout__icon">⏱</span>
            <span className="workout__value">95</span>
            <span className="workout__unit">min</span>
          </div>
          <div className="workout__details">
            <span className="workout__icon">⚡️</span>
            <span className="workout__value">16</span>
            <span className="workout__unit">km/h</span>
          </div>
          <div className="workout__details">
            <span className="workout__icon">⛰</span>
            <span className="workout__value">223</span>
            <span className="workout__unit">m</span>
          </div>
        </li> --> */}
        </ul>
      </div>
      <div id={trackingCSS.map}></div>
    </div>
  );
}
