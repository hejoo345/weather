import React from 'react';
import styles from './week_item.module.css';

const WeekItem = ({weather}) => {
    const day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const date = new Date(weather.dt * 1000);
    return(
        
            <div className={styles.container}>
                <span>{day[date.getDay()]}</span>
                <img className={styles.img} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='날씨아이콘'></img>
                <div className={styles.tempInfo}>
                    <span className={styles.maxTemp}>{parseInt(weather.temp.max-273.15)}</span>
                    <span className={styles.minTemp}>{parseInt(weather.temp.min-273.15)}</span>
                </div>
            </div>
    )};

export default WeekItem;