class OpenWeatherMap{
    constructor(key){
        this.key = key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async currentWeather(lat, lon){
        return await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.key}`,
                this.requestOptions)
                .then(response => response.json())
                .then(result=>result);
    }

    async weekWeather(lat, lon){
        return await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${this.key}`,
                this.requestOptions)
                .then(response => response.json())
                .then(result=>result.daily);
    }

    async searchCityWeather(city){
        return await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.key}`,
                this.requestOptions)
                .then(response => response.json())
                .then(result=>result);
    }


}
export default OpenWeatherMap;