import React, { memo } from 'react';
import SearchBar from '../search_bar/search_bar';
import styles from './current_weather.module.css';

const CurrentWeather = memo(({currentWeather,currentLocation,onSearch,addBookmark}) => {
    const day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const date = new Date(currentWeather.dt * 1000);
    console.log(currentWeather);

    const items = JSON.parse(localStorage.getItem('items'))||[]; // 북마크되어 있는 도시들 담김
    const includeCheck = items.includes(currentWeather.name); //도시 이름 체크 있으면 true
    const addBookmarkHandle=(e)=>{
        e.preventDefault();
        const cityId = currentWeather.id;
        const cityName = currentWeather.name;
        addBookmark(cityId, cityName);
    }

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
                <div className={styles.imgAndDes}>
                    <img className={styles.img} src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt='날씨아이콘'></img>
                    <span className={styles.description}>{currentWeather.weather[0].description}</span>
                </div>
                <div className={styles.loca}>
                    <span className={styles.locaIcon}><i className="fas fa-map-marker-alt"></i></span>
                    <span className={styles.name}>{currentWeather.name}, {currentWeather.sys.country}</span>
                </div>
            </div>)}
            <div className={styles.add} onClick={addBookmarkHandle}>
                <span className={styles.addIcon}><i className="fas fa-plus"></i></span>
            </div>
            
        </section>

    )
})

export default CurrentWeather;