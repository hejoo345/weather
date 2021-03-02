import React, { useEffect, useState } from 'react';
import CurrentWeather from './components/current_weather/current_weather';
import styles from './app.module.css';
import TodayHighlights from './components/today_highlights/today_highlights';
import WeekWeather from './components/week_weather/week_weather';

function App({openweathermap}) {

  const [currentWeather , setCurrentWeather] = useState({});
  const [weekWeather, setWeekWeather] = useState({});
  const [location, setLocation] = useState({
    lat: '35.5833',
    lon: '127',
  });

  useEffect(()=>{
    openweathermap.currentWeather(location.lat, location.lon)
    .then(weather => {
      const newWeather = {...weather};
      setCurrentWeather(newWeather);
    });
  },[openweathermap, location]);

  useEffect(()=>{
    openweathermap.weekWeather(location.lat, location.lon)
    .then(weather => {
      const newWeekWeather = {...weather};
      setWeekWeather(newWeekWeather);
    });
  },[openweathermap, location]);

  
  const currentLocation = ()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation((location)=>({
                  ...location,
                  lat: position.coords.latitude.toFixed(6),
                  lon: position.coords.longitude.toFixed(6),
                }));
               },
            (error) => {
                console.error(error);
            }
            );
    }else{
        console.log('지원 x');
    }
  }

  const onSearch = (value)=>{
    console.log(value);
    openweathermap.searchCityWeather(value)
    .then(weather=>{
      const newWeather = {...weather};
      setCurrentWeather(newWeather);
    });
  }

  return (
    <section className={styles.app}>
      <div className={styles.current}>
        <CurrentWeather
        currentWeather={currentWeather}
        currentLocation={currentLocation}
        onSearch={onSearch}/>
      </div>
      <div className={styles.info}>
        <WeekWeather
        weekWeather={weekWeather}/>
        <TodayHighlights 
        currentWeather={currentWeather}/>
      </div>
    </section>
  );
}

export default App;
