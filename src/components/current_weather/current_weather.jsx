import React, { useEffect, useState } from 'react';
import SearchBar from '../search_bar/search_bar';
import styles from './current_weather.module.css';

const CurrentWeather = ({openweathermap}) => {
    const [location, setLocation] = useState({
        lat: '35.5833',
        lon: '127',
    });


    useEffect(()=>{
        // openweathermap.currentWeather(location.lat, location.lon)
        // .then(console.log);
    });
    
    const currentLocation = ()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        ...location,
                        lat: position.coords.latitude.toFixed(6),
                        lon: position.coords.longitude.toFixed(6),
                    });
                    console.log(`latitude 위도 : ${position.coords.latitude}`);
                    console.log(`longitude 경도 : ${position.coords.longitude}`);
                },
                (error) => {
                    console.error(error);
                }
                );
        }else{
            console.log('지원 x');
        }
    }

    // const getWeather
        {/* <button onClick={currentLocation}>현재 위치</button> */}
    return(
        <section className={styles.main}>
            <div className={styles.search}>
                <SearchBar/>
                <i className="fas fa-location-arrow"></i>
            </div>
            <div className={styles.info}>
                <img alt='날씨아이콘'></img>
                <span>기온 12도</span>
                <span>Monday, 01:27</span>
            </div>
            <div className={styles.detail}>
                <span>right rain</span>
                <span>Yangsan</span>
            </div>
        </section>

    )
};

export default CurrentWeather;