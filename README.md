# weather
🌈 날씨 정보(현재 날씨, 오늘 날씨 주요 정보, 현재부터 일주일 간의 날씨)를 알려주는 웹이다. 

디폴트 위치는 임의로 지정되어 있고, 현재 위치를 받아 올 수 있다.

여러 지역을 북마크 해두고 쉽게 찾아볼 수 있다.

데모 링크: https://6040e44c890cea1e51a4feb6--huiju-weather.netlify.app

## Build With
- HTML
- CSS Module
- React.js / React Hooks
- OpenWeather API

## Screen Shots
<img width="800" alt="스크린샷 2021-05-03 오후 11 01 23" src="https://user-images.githubusercontent.com/67685741/116885981-7df6d400-ac63-11eb-86ea-8018e20f44f6.png">

<img width="395" alt="109972412-99fcf880-7d3a-11eb-81b8-b30af17cc6ac" src="https://user-images.githubusercontent.com/67685741/116886097-9e269300-ac63-11eb-9ed5-f06b7e31a6fe.png">

## What I Learned
- navigator 인터페이스 사용해서 현재 위치를 알아내기
- LocalStorage에 값을 저장하고 받아오는 법
- API와 통신중 초기 객체가 비어서 오류가 나는 경우 => 객체에 들어있는 아무 키 하나를 정해서 그 값의 유무에 따라 화면에 나오도록 했다.
```
  {
	currentWeather.name && (
      <div className={styles.detail}>
          <span className={styles.description}>{currentWeather.weather[0].description}</span>
          <span className={styles.name}>{currentWeather.name}, {currentWeather.sys.country}</span>
      </div>
   )}
```
