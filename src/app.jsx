import React from 'react';
import './app.css';
import CurrentWeather from './components/current_weather/current_weather';

function App({openweathermap}) {
  return (
    <CurrentWeather
    openweathermap={openweathermap}/>
  );
}

export default App;
