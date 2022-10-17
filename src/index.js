import autocomplete from "./autocomplete";
import getCities from "./getCities";

const apiKey = '086b2b26628495b7963d2f7ab57f00c8';
const city = "Berlin";



async function autocompleteCities() { 
    let cities = await getCities();
    autocomplete(document.getElementById("myInput"), cities);
}

async function getData() { 
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, { mode: "cors" });
    const data = await response.json();
    console.log(data)
}

getData();
autocompleteCities();