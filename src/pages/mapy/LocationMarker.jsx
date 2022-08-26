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
  setWorkout
}) {
  const [position, setPosition] = useState(null);
  const [bbox, setBbox] = useState([]);
  const map = useMap();
  let type;
  class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);
    constructor(coords, distance, duration) {
      this.coords = coords; // [lat, lng]
      this.distance = distance; // in Km
      this.duration = duration; // in minute
    }
  }

  class Running extends Workout {
    type = 'running';
    constructor(coords, distance, duration, cadence) {
      super(coords, distance, duration);
      this.cadence = cadence;
      this.calcPace();
    }
    calcPace() {
      //   min/km
      this.pace = this.duration / this.distance;
      return this.pace;
    }
  }

  class Cycling extends Workout {
    type = 'cycling';
    constructor(coords, distance, duration, elevationGain) {
      super(coords, distance, duration);
      this.elevationGain = elevationGain;
      this.calcSpeed();
    }
    calcSpeed() {
      //  km/h
      this.speed = this.distance / (this.duration / 60);
      return this.speed;
    }
  }

  const run1 = new Running([23.60156, 85.12131], 30, 60, 170);
  const cycle1 = new Cycling([23.60156, 85.12131], 30, 30, 523);
  //////////////////////
  // Application Architecture
  class App {
    #mapEvent;
    #workouts = [];
    constructor() {
      this._toggleElevationField();
    }

    _getPosition() {
      map.locate().on('locationfound', function (e) {
        setPosition(e.latlng);
        // map.flyTo(e.latlng, map.getZoom());
        // const radius = e.accuracy;
        // const circle = L.circle(e.latlng, radius);
        // circle.addTo(map);
        setBbox(e.bounds.toBBoxString().split(','));
      });
    }

    _loadMap() {
      //handling clicks on map
      map.on('click', (mapE) => {
        this.#mapEvent = mapE;
        this._showForm();
      });
    }

    _showForm() {
      formEl.current.classList.remove(trackingCSS.hidden);
      inpDis.current.focus();

      //Clear input fields
      inpDis.current.value = inpDu.current.value = inpCad.current.value = '';

      //Validate function
      const validate = (...inputs) =>
        inputs.every((inp) => Number.isFinite(inp));
      const allPositiveNum = (...inputs) => inputs.every((inp) => inp > 0);
      //Display marker
      formEl.current.addEventListener('submit', (e) => {
        e.preventDefault();
        //Get data from form
        const distance = +inpDis.current.value;
        const duration = +inpDu.current.value;
        let { lat, lng } = this.#mapEvent.latlng;
        let workout;
        //If workout running, then create running object
        if (type === 'running') {
          //Check if data is valid
          const cadence = +inpCad.current.value;
          if (
            !validate(distance, duration, cadence) &&
            !allPositiveNum(distance, duration, cadence)
          ) {
            alert('have to be positive number');
          }
          workout = new Running([lat, lng], distance, duration, cadence);
        }

        // //If workout cycling, then create cycling object
        if (type === 'cycling') {
          //Check if data is valid
          const elevationGain = +inpElv.current.value;
          if (
            !validate(distance, duration, elevationGain) &&
            !allPositiveNum(distance, duration)
          ) {
            alert('have to be positive number');
          }
          workout = new Cycling([lat, lng], distance, duration, elevationGain);
        }

        //Add new object to workout array
        this.#workouts.push(workout);
        console.log(workout);
        setWorkout(this.#workouts);

        //Render workout on map as a marker
        this.renderWorkOutMarker(workout);

        //Hide form and input fields
      });
    }
    //Render workout on list
    renderWorkOutMarker(workout) {
      let coords = workout.coords;
      setPosition([...coords]);
      L.marker(coords)
        .addTo(map)
        .bindPopup(
          L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            title: `${workout.type === 'running' ? 'Running' : 'Cycling'}`,
            className: `${workout.type}-popup`,
            autoPan: false,
          })
        )
        .setPopupContent(`${type === 'running' ? 'Running' : 'Cycling'}`)
        .openPopup();
    }

    _toggleElevationField() {
      inpTyp.current.addEventListener('change', () => {
        type = inpTyp.current.value;
        handleActive();
      });
    }

    _renderWorkout(workout) {
      const html = ``
    }
  }
  let app = new App();
  useEffect(() => {
    app._loadMap();
    app._getPosition();
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
