import React, { useState, useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import './mapy.css';
import trackingCSS from './mapy.module.css';
import L from 'leaflet';

function LocationMarker({
  formEl,
  inpDis,
  inpDu,
  inpCad,
  inpTyp,
  inpElv,
  handleWorkouts,
  view,
  isActive,
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

    _setDescription() {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      this.description = `${this.type[0].toUpperCase()}${this.type.slice(
        1
      )} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }
  }

  class Running extends Workout {
    type = 'running';
    constructor(coords, distance, duration, cadence) {
      super(coords, distance, duration);
      this.cadence = cadence;
      this.calcPace();
      this._setDescription();
    }
    calcPace() {
      //   min/km
      this.pace = (this.duration / this.distance).toFixed(2);
      return this.pace;
    }
  }

  class Cycling extends Workout {
    type = 'cycling';
    constructor(coords, distance, duration, elevationGain) {
      super(coords, distance, duration);
      this.elevationGain = elevationGain;
      this.calcSpeed();
      this._setDescription();
    }
    calcSpeed() {
      //  km/h
      this.speed = (this.distance / (this.duration / 60)).toFixed(2);
      return this.speed;
    }
  }

  //////////////////////
  // Application Architecture
  class App {
    #mapEvent;
    workouts = [];
    constructor() {
      this.workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    }

    _getPosition() {
      map.locate().on('locationfound', function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom(13));
        // const radius = e.accuracy;
        // const circle = L.circle(e.latlng, radius);
        // circle.addTo(map);
        setBbox(e.bounds.toBBoxString().split(','));
      });
      console.log(this.workouts);
      this.workouts.map((el) => {
        this.renderWorkOutMarker(el);
        console.log('load');
      });
    }

    _loadMap() {
      //handling clicks on map
      map.on('click', (mapE) => {
        this.#mapEvent = mapE;
        //Display Form
        formEl.current.classList.remove(trackingCSS.hidden);
        //focus on select field
        inpDis.current.focus();
      });
    }

    _showForm() {
      //Validate function
      const validate = (...inputs) =>
        inputs.every((inp) => Number.isFinite(inp));
      const allPositiveNum = (...inputs) => inputs.every((inp) => inp > 0);
      //set data
      formEl.current.addEventListener('submit', (e) => {
        e.preventDefault();
        //Get data from form
        type = inpTyp.current.value;
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
        this.workouts.push(workout);
        handleWorkouts(workout);
        //Render workout on map as a marker
        this.renderWorkOutMarker(workout);

        //Hide form and input fields
        formEl.current.classList.add(trackingCSS.hidden);
        inpDis.current.value =
          inpDu.current.value =
          inpCad.current.value =
          inpElv.current.value =
            '';
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
            title: `${workout.description}`,
            className: `${workout.type}-popup`,
            autoPan: false,
          })
        )
        .setPopupContent(
          `${workout.type === 'running' ? '🏃🏾‍♂️' : '🚴🏾‍♀️'} ${workout.description}`
        )
        .openPopup();
    }

    _toggleElevationField() {
      inpTyp.current.addEventListener('change', () => {
        type = inpTyp.current.value;
        inpCad.current
          .closest('.mapy_form__row__iAZFP ')
          .classList.toggle('mapy_form__row_hidden__RyRoC');

        if (inpElv.current.closest('.mapy_form__row_hidden__RyRoC') !== null) {
          inpElv.current
            .closest('.mapy_form__row__iAZFP')
            .classList.remove('mapy_form__row_hidden__RyRoC');
        } else {
          inpElv.current
            .closest('.mapy_form__row__iAZFP')
            .classList.add('mapy_form__row_hidden__RyRoC');
        }
      });
    }

    _moveToPopup(e) {
      map.setView(e.coords, 13, { animate: true, pan: { duration: 1 } });
    }
  }
  let app = new App();
  if (isActive) {
    app._moveToPopup(view);
  }
  useEffect(() => {
    app._getPosition();
    app._loadMap();
    app._toggleElevationField();
    app._showForm();
  }, []);
}

export default LocationMarker;
