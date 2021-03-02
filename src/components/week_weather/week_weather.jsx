import React, { memo, useState } from 'react';
import WeekItem from './week_item';
import styles from './week_weather.module.css';

const WeekWeather = memo(({weekWeather}) => {

    return(
        <section className={styles.container}>
            <h1>Week</h1>
            <div className={styles.weathers}>
            {
                Object.keys(weekWeather).map(key=>(
                    <WeekItem
                    key={key}
                    weather={weekWeather[key]}/>
                ))
            }
            </div>
        </section>
    )});

export default WeekWeather;