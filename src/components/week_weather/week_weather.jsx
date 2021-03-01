import React, { memo, useEffect, useState } from 'react';
import WeekItem from './week_item';
import styles from './week_weather.module.css';

const WeekWeather = memo(({weekWeather}) => {
    console.log(weekWeather);
    

    return(
        <section className={styles.container}>
            <h1>Week</h1>
            <ul className={styles.weathers}>
            {
                Object.keys(weekWeather).map(key=>(
                    <WeekItem
                    key={key}
                    weather={weekWeather[key]}/>
                ))
            }
            </ul>
        </section>
    )});

export default WeekWeather;