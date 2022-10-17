import autocomplete from "./autocomplete";
import getCities from "./getCities"; //parses JSON cities and returns as an array for autocomplete
import createWeatherCard from "./createWeatherCard";

const apiKey = '086b2b26628495b7963d2f7ab57f00c8';
//const iconsUrl = ``; 

const searchbox = document.getElementById("myInput");
const searchButton = document.getElementById('search');
const body = document.querySelector('body')

//suggest autocompletion in searchbox, code of autocomplete function was taken from https://www.w3schools.com/howto/howto_js_autocomplete.asp
async function autocompleteCities() {
    let cities = await getCities();
    autocomplete(searchbox, cities);
};
autocompleteCities();


searchButton.addEventListener('click', async () => {
    if (!searchbox.value) {
        return
    }
    const data = await getWeather();
    body.innerHTML = ' ';
    createWeatherCard(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9])
})


async function getWeather() {
        try { 
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchbox.value}&appid=${apiKey}&units=metric`, { mode: "cors" });
        const data = await response.json();

        let iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        let weatherDescription = data.weather[0].main;
        let temperature = `${data.main.temp}°C`;
        let feelsLikeTemprature = `${data.main.feels_like}°C`;
        let minMaxTemprature = `${data.main.temp_min}°C-${data.main.temp_max}°C`;
        let pressure = `${data.main.pressure}Hg`;
        let windPower = `${data.wind.speed}m/s`;
        let humidity = `${data.main.humidity}g.m^3`;
        let sunrise = getExactTime(data.sys.sunrise);
        let sunset = getExactTime(data.sys.sunset);
            
        return [iconUrl , weatherDescription, temperature, feelsLikeTemprature, minMaxTemprature, pressure, windPower, humidity, sunrise, sunset]
            
    } catch {     
        console.log('ups')
        alert('sorry, something went wrong and i`m to tired to implement something else but alert')    
    }
    
} 

function getExactTime(time) { 
    //slices needed part of date
    let date = new Date(time); 
    let stringifyData = date.toString(); 

    console.log(date, time)
    let startOfTheTime = stringifyData.indexOf(':') - 2;
    let endOfTheTime = startOfTheTime + 5;
    let timing = stringifyData.slice(startOfTheTime, endOfTheTime)
    console.log(timing)
    return timing
}
