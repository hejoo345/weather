import React, { memo } from 'react';
import SearchBar from '../search_bar/search_bar';
import styles from './current_weather.module.css';

const CurrentWeather = memo(({currentWeather,currentLocation,onSearch}) => {
    const day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const date = new Date(currentWeather.dt * 1000);
    console.log(currentWeather);

    return(
        <section className={styles.main}>
            <div className={styles.search}>
                <SearchBar
                onSearch={onSearch}/>
                <div className={styles.locationIcon} onClick={currentLocation}>
                    <span><i className="fas fa-location-arrow" ></i></span>
                </div>
            </div>
            {currentWeather.name && (
            <div className={styles.info}>
                <img className={styles.img} src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt='날씨아이콘'></img>
                <div className={styles.tempInfo}>
                    <span className={styles.temp}>{parseInt(currentWeather.main.temp-273.15)}</span>
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
                <span className={styles.name}><i className="fas fa-map-marker-alt"></i>{currentWeather.name}, {currentWeather.sys.country}</span>
            </div>)}
            
        </section>

    )
})

export default CurrentWeather;