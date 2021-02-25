import React from 'react';
import CurrentWeather from './components/current_weather/current_weather';
import styles from './app.module.css';
import TodayHighlights from './components/today_highlights/today_highlights';
import WeekWeather from './components/week_weather/week_weather';

function App({openweathermap}) {
  return (
    <section className={styles.app}>
      <div className={styles.current}>
        <CurrentWeather
        openweathermap={openweathermap}/>
      </div>
      <div className={styles.info}>
        <WeekWeather/>
        <TodayHighlights/>
      </div>
    </section>
  );
}

export default App;
