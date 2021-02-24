import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import OpenWeatherMap from './service/openweathermap';

const openweathermap = new OpenWeatherMap(process.env.REACT_APP_OPENWEATHERMAP_KEY);
ReactDOM.render(
  <React.StrictMode>
    <App openweathermap={openweathermap}/>
  </React.StrictMode>,
  document.getElementById('root')
);

