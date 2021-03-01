import React from 'react';
import styles from './today_highlights.module.css';

const TodayHighlights = ({currentWeather}) => {
    // if(!currentWeather.name) console.log('비었음');
    // console.log(currentWeather);
    let sunrise = '';
    let sunset = '';
    if(currentWeather.name){
        sunrise = new Date(currentWeather.sys.sunrise * 1000);
        sunset = new Date(currentWeather.sys.sunset * 1000);
    }
    return(
        
        <section className={styles.container}>
            <h1>Today's highlight</h1>
            {currentWeather.name &&(
            <ul>
                <li className={styles.windInfo}>
                    <span>Wind Status</span>
                    <div className={styles.wind}>
                        <span className={styles.windSpeed}>{currentWeather.wind.speed}</span>
                        <span>m/s</span>
                    </div>
                </li>
                <li className={styles.rainInfo}>
                    <span>Rain</span>
                    <div className={styles.rain}>
                        {/* <span className={styles.rain}>{currentWeather.rian.1h}</span> */}
                        <span>mm</span>
                    </div>
                </li>
                <li className={styles.humidityInfo}>
                    <span>Humidity</span>
                    <div className={styles.humidity}>
                        <span className={styles.rain}>{currentWeather.main.humidity}</span>
                        <span>%</span>
                    </div>
                </li>
                <li className={styles.sunInfo}>
                    <span>Sunrise & Sunset</span>
                    <div className={styles.sun}>
                        <span className={styles.sunrise}>{`${sunrise.getHours()}:${sunrise.getMinutes()}`}</span>
                        <span className={styles.sunset}>{`${sunset.getHours()}:${sunset.getMinutes()}`}</span>
                    </div>
                </li>
            </ul>
            )}
        </section>
        
    )};

export default TodayHighlights;