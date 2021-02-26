import React, { useEffect, useState } from 'react';
import CurrentWeather from './components/current_weather/current_weather';
import styles from './app.module.css';
import TodayHighlights from './components/today_highlights/today_highlights';
import WeekWeather from './components/week_weather/week_weather';

function App({openweathermap}) {

  const [currentWeather , setCurrentWeather] = useState({});
  const [location, setLocation] = useState({
    lat: '35.5833',
    lon: '127',
  });

  useEffect(()=>{
    openweathermap.currentWeather(location.lat, location.lon)
    .then(weather => {
      const newWeather = {...weather}
      setCurrentWeather(newWeather)
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
                // console.log(`latitude 위도 : ${position.coords.latitude}`);
                // console.log(`longitude 경도 : ${position.coords.longitude}`);
            },
            (error) => {
                console.error(error);
            }
            );
    }else{
        console.log('지원 x');
    }
  }

  return (
    <section className={styles.app}>
      <div className={styles.current}>
        <CurrentWeather
        currentWeather={currentWeather}
        currentLocation={currentLocation}/>
      </div>
      <div className={styles.info}>
        <WeekWeather/>
        <TodayHighlights/>
      </div>
    </section>
  );
}

export default App;
