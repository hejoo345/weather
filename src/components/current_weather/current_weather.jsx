import React, { useEffect, useState } from 'react';
import styles from './current_weather.module.css';

const CurrentWeather = ({openweathermap}) => {
    const [location, setLocation] = useState({
        lat: '35.5833',
        lon: '127',
    });

    useEffect(()=>{
        openweathermap.currentWeather()
        .then(console.log);;
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

    return(
        <>
        <button onClick={currentLocation}>현재 위치</button>
        <h1>{location.lat},{location.lon}</h1>
        </>

    )
};

export default CurrentWeather;