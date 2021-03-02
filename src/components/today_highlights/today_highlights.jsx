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
                    <span>Wind Status  <i className="fas fa-wind"></i></span>
                    <div className={styles.wind}>
                        <span className={styles.windSpeed}>{currentWeather.wind.speed}</span>
                        <span>m/s</span>
                    </div>
                </li>
                <li className={styles.cloudInfo}>
                    <span>Cloud  <i className="fas fa-cloud"></i></span>
                    <div className={styles.cloud}>
                        <span className={styles.cloudNum}>{currentWeather.clouds.all}</span>
                        <span>%</span>
                    </div>
                </li>
                <li className={styles.humidityInfo}>
                    <span>Humidity  <i className="fas fa-tint"></i></span>
                    <div className={styles.humidity}>
                        <span className={styles.humidityNum}>{currentWeather.main.humidity}</span>
                        <span>%</span>
                    </div>
                </li>
                <li className={styles.sunInfo}>
                    <span>Sunrise & Sunset</span>
                    <div className={styles.sun}>
                        <div className={styles.sunUp}>
                            <div className={styles.up}>
                                <span><i className="fas fa-arrow-up"></i></span>
                            </div>
                            <span className={styles.sunrise}>{`${sunrise.getHours()}:${sunrise.getMinutes()} AM`}</span>
                        </div>
                        <div className={styles.sunDown}>
                            <div className={styles.down}>
                                <span><i className="fas fa-arrow-down"></i></span>
                            </div>
                            <span className={styles.sunset}>{`${sunset.getHours()}:${sunset.getMinutes()} PM`}</span>
                        </div>
                    </div>
                </li>
            </ul>
            )}
        </section>
        
    )};

export default TodayHighlights;