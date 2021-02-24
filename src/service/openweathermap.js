class OpenWeatherMap{
    constructor(key){
        this.key = key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async currentWeather(){
        return await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=35.3631294&lon=129.0508055&appid=${this.key}`,
                this.requestOptions)
                .then(response => response.json())
                .then(result=>result);
        // const result = await response.json();
        // return result;
    }
}
export default OpenWeatherMap;