import React from 'react';
import SearchBar from '../search_bar/search_bar';
import styles from './current_weather.module.css';

const CurrentWeather = ({currentWeather,currentLocation}) => {
    const day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const date = new Date(currentWeather.dt * 1000);
    console.log(date);

    return(
        <section className={styles.main}>
            <div className={styles.search}>
                <SearchBar/>
                <div className={styles.locationIcon} onClick={currentLocation}>
                    <span><i className="fas fa-location-arrow" ></i></span>
                </div>
            </div>
            {currentWeather.name && (
            <div className={styles.info}>
                <img src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`} alt='날씨아이콘'></img>
                <div className={styles.tempInfo}>
                    <span className={styles.temp}>{currentWeather.main.temp-273.15}</span>
                    <span className={styles.tempIcon}>°C</span>
                </div>
                <div className={styles.dateInfo}>
                    <span className={styles.day}>{day[date.getDay()]},</span>
                    <span className={styles.hour}>{date.getHours()}시</span>
                </div>
            </div>)}
            {currentWeather.name && (
            <div className={styles.detail}>
                <span className={styles.description}>{currentWeather.weather[0].description}</span>
                <span className={styles.name}>{currentWeather.name}, {currentWeather.sys.country}</span>
            </div>)}
            
        </section>

    )
};

export default CurrentWeather;