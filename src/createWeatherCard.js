function createWeatherCard(iconUrl, weatherDescription, temperature, feelsLikeTemprature, minMaxTemprature, pressure, windPower, humidity, sunrise, sunset) {

    let cloudyBackground = 'https://media2.giphy.com/media/lOkbL3MJnEtHi/giphy.gif?cid=790b7611e17d1a30e566f9591e0f9c735399857f6b1a8790&rid=giphy.gif&ct=g';
    let rainyBackground = 'https://www.pbh2.com/wordpress/wp-content/uploads/2014/03/cheetah.gif';
    let clearBackground = 'https://media1.giphy.com/media/OxwuhoLnIcWk0/giphy.gif?cid=ecf05e47dl1ynpgy54klifn5uo72hjpzlqwgpdv7arzg8gmx&rid=giphy.gif&ct=g';
    let snowyBackground = 'https://media0.giphy.com/media/bnsWLCG5bEaiI/giphy.gif?cid=790b76112268c88e95c0c3dc7117bfbec13e444cd87de72c&rid=giphy.gif&ct=g';
    let mistBackground = 'https://media2.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.gif?cid=790b7611e04656b6b14f98dbd4f1e8ae49cbefaa5c43e04c&rid=giphy.gif&ct=g';

    const body = document.querySelector('body'); 
    console.log(weatherDescription)
    if (weatherDescription === 'Clear' || weatherDescription === 'few clouds') {
        body.style.backgroundImage = `url(${clearBackground})`
    } else if (weatherDescription === 'Clouds' || weatherDescription === 'broken clouds'){ 
        body.style.backgroundImage = `url(${cloudyBackground})`
    } else if (weatherDescription === 'Rain' || weatherDescription === 'rain' || weatherDescription === 'thunderstorm'){ 
        body.style.backgroundImage = `url(${rainyBackground})`
    } else if (weatherDescription === 'Snow'){ 
        body.style.backgroundImage = `url(${snowyBackground})`
    } else if (weatherDescription === 'Mist'){ 
        body.style.backgroundImage = `url(${mistBackground})`
    } else { 
        body.style.backgroundImage = `url('https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-zoom-virtual-background-_Tcjok-d9b4.jpg')`;
    }
    
    

    function createInfoDiv(property, value, appendTo) { 
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const h1 = document.createElement('h1');
        h2.innerText = property;
        h1.innerText = value; 
        div.appendChild(h2); 
        div.appendChild(h1); 
        appendTo.appendChild(div);
    }

    const weatherCard = document.createElement('div');
    weatherCard.setAttribute('id', 'weatherCard');

    const weatherDiv = document.createElement('div');
    weatherDiv.setAttribute('id', 'weather');
    const icon = document.createElement('img');
    icon.src = iconUrl; 
    const weatherDescriptionDiv = document.createElement('h1');
    weatherDescriptionDiv.setAttribute('id', 'weatherDescription');
    weatherDescriptionDiv.innerText = weatherDescription; 
    weatherDiv.appendChild(icon);
    weatherDiv.appendChild(weatherDescriptionDiv);

    const temperatureDiv = document.createElement('div');
    temperatureDiv.setAttribute('id', 'temperature');
    createInfoDiv('Temprature:', temperature, temperatureDiv);
    createInfoDiv('Feels like:', feelsLikeTemprature, temperatureDiv);
    createInfoDiv('Min-Max:', minMaxTemprature, temperatureDiv);

    const conditionsDiv = document.createElement('div');
    conditionsDiv.setAttribute('id', 'conditions');
    createInfoDiv('Pressure:', pressure, conditionsDiv);
    createInfoDiv('Wind Power:', windPower, conditionsDiv);
    createInfoDiv('Humidity:', humidity, conditionsDiv);

    const sunRiseSetDiv = document.createElement('div');
    sunRiseSetDiv.setAttribute('id', 'sunRiseSet');
    createInfoDiv('Sunrise:', sunrise, sunRiseSetDiv);
    createInfoDiv('Sunset:', sunset, sunRiseSetDiv);

    weatherCard.appendChild(weatherDiv);
    weatherCard.appendChild(temperatureDiv);
    weatherCard.appendChild(conditionsDiv);
    weatherCard.appendChild(sunRiseSetDiv);
    body.appendChild(weatherCard)
}

export default createWeatherCard