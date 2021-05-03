import React, { useEffect, useState } from 'react';
import CurrentWeather from './components/current_weather/current_weather';
import styles from './app.module.css';
import TodayHighlights from './components/today_highlights/today_highlights';
import WeekWeather from './components/week_weather/week_weather';
import Bookmark from './components/bookmark/bookmark';

function App({openweathermap}) {

  const [currentWeather , setCurrentWeather] = useState({});
  const [weekWeather, setWeekWeather] = useState({});
  const [location, setLocation] = useState({
    lat: '35.5833',
    lon: '127',
  });
  const [bookmark, setBookmark] = useState(JSON.parse(localStorage.getItem('bookmark'))||[]);

  useEffect(()=>{
    openweathermap.currentWeather(location.lat, location.lon)
    .then(weather => {
      setCurrentWeather(weather);
    });
  },[openweathermap, location]);

  useEffect(()=>{
    openweathermap.weekWeather(location.lat, location.lon)
    .then(weather => {
      setWeekWeather(weather);
    });
  },[openweathermap, location]);

  
  const currentLocation = ()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation((location)=>({
                  ...location,
                  lat: position.coords.latitude.toFixed(6),
                  lon: position.coords.longitude.toFixed(6),
                }));
               },
            (error) => {
                console.error(error);
            }
            );
    }else{
        console.log('지원 x');
    }
  }

  const onSearch = (value)=>{
    openweathermap.searchCityWeather(value)
    .then(weather=>{
      if(weather.cod === '404'){ // 지역 검색 오류난 경우
        throw new Error('city not found');
      }
      setCurrentWeather(weather);
      setLocation((location)=>({
        ...location,
        lat: weather.coord.lat.toFixed(6),
        lon: weather.coord.lon.toFixed(6),
      }));
    })
    .catch(()=>{
      alert('지역명을 올바르게 입력해주세요.');
    });
  }

  const addBookmark = (cityName)=>{
    setBookmark((bookmark)=>{
      const newBookmark = [...bookmark];
      newBookmark.push(cityName);
      localStorage.setItem('bookmark',JSON.stringify(newBookmark));
      return newBookmark;
    })
  }

  const removeBookmark = (cityName)=>{
    const newBookmarks = bookmark.filter(item=>item!==cityName);
    localStorage.setItem('bookmark',JSON.stringify(newBookmarks));
    setBookmark(newBookmarks);
  }

  return (
    <section className={styles.app}>
      <div className={styles.main}>
        <div className={styles.current}>
          <CurrentWeather
            currentWeather={currentWeather}
            currentLocation={currentLocation}
            onSearch={onSearch}
            addBookmark={addBookmark}
            bookmark={bookmark}/>
        </div>
        <div className={styles.info}>
          <WeekWeather
          weekWeather={weekWeather}/>
          <TodayHighlights 
          currentWeather={currentWeather}/>
        </div>
      </div>
      <div className={styles.bookmark}>
        <Bookmark bookmark={bookmark}
        onSearch={onSearch}
        removeBookmark={removeBookmark}/>
      </div>
    </section>
  );
}

export default App;
