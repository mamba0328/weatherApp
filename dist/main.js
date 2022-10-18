/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/autocomplete.js":
/*!*****************************!*\
  !*** ./src/autocomplete.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//suggest autocompletion in searchbox, code was taken from https://www.w3schools.com/howto/howto_js_autocomplete.asp

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
    
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
    }
    
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
    }
    
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
    }
    
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (autocomplete);

/***/ }),

/***/ "./src/createWeatherCard.js":
/*!**********************************!*\
  !*** ./src/createWeatherCard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createWeatherCard(iconUrl, weatherDescription, temperature, feelsLikeTemprature, minMaxTemprature, pressure, windPower, humidity, sunrise, sunset) {

    let cloudyBackground = 'https://media2.giphy.com/media/lOkbL3MJnEtHi/giphy.gif?cid=790b7611e17d1a30e566f9591e0f9c735399857f6b1a8790&rid=giphy.gif&ct=g';
    let rainyBackground = 'https://www.pbh2.com/wordpress/wp-content/uploads/2014/03/cheetah.gif';
    let clearBackground = 'https://media1.giphy.com/media/OxwuhoLnIcWk0/giphy.gif?cid=ecf05e47dl1ynpgy54klifn5uo72hjpzlqwgpdv7arzg8gmx&rid=giphy.gif&ct=g';
    let snowyBackground = 'https://media0.giphy.com/media/bnsWLCG5bEaiI/giphy.gif?cid=790b76112268c88e95c0c3dc7117bfbec13e444cd87de72c&rid=giphy.gif&ct=g';
    let mistBackground = 'https://media2.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.gif?cid=790b7611e04656b6b14f98dbd4f1e8ae49cbefaa5c43e04c&rid=giphy.gif&ct=g';

    //changes bodys backgorund based on weatherDescription
    const body = document.querySelector('body'); 
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
    
    //creates exit button 
    const arrowLeft = document.createElement('div');
    arrowLeft.classList.add('long-arrow-left');

    //creates card
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
    body.appendChild(arrowLeft)
    body.appendChild(weatherCard)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWeatherCard);

/***/ }),

/***/ "./src/getCities.js":
/*!**************************!*\
  !*** ./src/getCities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function getCities() {
    try { 
        const myData = await fetch('../../src/current.city.list.json', { mode: "cors" })
        const json = await myData.json()
        const cities = [];
        
        for(let ct of json) { 
            cities.push(ct.name)
        }
        
        return cities
    } catch { 
        return console.log('no cts =(')
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCities);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete */ "./src/autocomplete.js");
/* harmony import */ var _getCities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCities */ "./src/getCities.js");
/* harmony import */ var _createWeatherCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createWeatherCard */ "./src/createWeatherCard.js");

 //parses JSON cities and returns as an array for autocomplete


const apiKey = '086b2b26628495b7963d2f7ab57f00c8';

const searchbox = document.getElementById("myInput");
const searchButton = document.getElementById('search');
const body = document.querySelector('body')

//suggest autocompletion in searchbox, code of autocomplete function was taken from https://www.w3schools.com/howto/howto_js_autocomplete.asp
async function autocompleteCities() {
    let cities = await (0,_getCities__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_autocomplete__WEBPACK_IMPORTED_MODULE_0__["default"])(searchbox, cities);
};
autocompleteCities();


searchButton.addEventListener('click', async () => {
    if (!searchbox.value) {
        return
    }

    const data = await getWeather();
    if (!data) {
        return
    }
    body.innerHTML = ' ';
    (0,_createWeatherCard__WEBPACK_IMPORTED_MODULE_2__["default"])(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9]);
})

body.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'long-arrow-left') {
        document.location.reload();
    }
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNEO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRixnQkFBZ0IsU0FBUyxPQUFPLGtCQUFrQixjQUFjO0FBQzFKO0FBQ0E7QUFDQSwyREFBMkQscUJBQXFCO0FBQ2hGO0FBQ0EsNkJBQTZCLGVBQWU7QUFDNUMscUNBQXFDLHFCQUFxQjtBQUMxRCxrQ0FBa0MsbUJBQW1CLEtBQUssbUJBQW1CO0FBQzdFLDBCQUEwQixtQkFBbUI7QUFDN0MsMkJBQTJCLGdCQUFnQjtBQUMzQywwQkFBMEIsbUJBQW1CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9hdXRvY29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9jcmVhdGVXZWF0aGVyQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2dldENpdGllcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3N1Z2dlc3QgYXV0b2NvbXBsZXRpb24gaW4gc2VhcmNoYm94LCBjb2RlIHdhcyB0YWtlbiBmcm9tIGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vaG93dG8vaG93dG9fanNfYXV0b2NvbXBsZXRlLmFzcFxyXG5cclxuZnVuY3Rpb24gYXV0b2NvbXBsZXRlKGlucCwgYXJyKSB7XHJcbiAgLyp0aGUgYXV0b2NvbXBsZXRlIGZ1bmN0aW9uIHRha2VzIHR3byBhcmd1bWVudHMsXHJcbiAgdGhlIHRleHQgZmllbGQgZWxlbWVudCBhbmQgYW4gYXJyYXkgb2YgcG9zc2libGUgYXV0b2NvbXBsZXRlZCB2YWx1ZXM6Ki9cclxuICB2YXIgY3VycmVudEZvY3VzO1xyXG4gIC8qZXhlY3V0ZSBhIGZ1bmN0aW9uIHdoZW4gc29tZW9uZSB3cml0ZXMgaW4gdGhlIHRleHQgZmllbGQ6Ki9cclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdmFyIGEsIGIsIGksIHZhbCA9IHRoaXMudmFsdWU7XHJcbiAgICAgIC8qY2xvc2UgYW55IGFscmVhZHkgb3BlbiBsaXN0cyBvZiBhdXRvY29tcGxldGVkIHZhbHVlcyovXHJcbiAgICAgIGNsb3NlQWxsTGlzdHMoKTtcclxuICAgICAgaWYgKCF2YWwpIHsgcmV0dXJuIGZhbHNlO31cclxuICAgICAgY3VycmVudEZvY3VzID0gLTE7XHJcbiAgICAgIC8qY3JlYXRlIGEgRElWIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGl0ZW1zICh2YWx1ZXMpOiovXHJcbiAgICAgIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gICAgICBhLnNldEF0dHJpYnV0ZShcImlkXCIsIHRoaXMuaWQgKyBcImF1dG9jb21wbGV0ZS1saXN0XCIpO1xyXG4gICAgICBhLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXV0b2NvbXBsZXRlLWl0ZW1zXCIpO1xyXG4gICAgICAvKmFwcGVuZCB0aGUgRElWIGVsZW1lbnQgYXMgYSBjaGlsZCBvZiB0aGUgYXV0b2NvbXBsZXRlIGNvbnRhaW5lcjoqL1xyXG4gICAgICB0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgIC8qZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuLi4qL1xyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLypjaGVjayBpZiB0aGUgaXRlbSBzdGFydHMgd2l0aCB0aGUgc2FtZSBsZXR0ZXJzIGFzIHRoZSB0ZXh0IGZpZWxkIHZhbHVlOiovXHJcbiAgICAgICAgaWYgKGFycltpXS5zdWJzdHIoMCwgdmFsLmxlbmd0aCkudG9VcHBlckNhc2UoKSA9PSB2YWwudG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgICAgLypjcmVhdGUgYSBESVYgZWxlbWVudCBmb3IgZWFjaCBtYXRjaGluZyBlbGVtZW50OiovXHJcbiAgICAgICAgICBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICAgICAgICAgIC8qbWFrZSB0aGUgbWF0Y2hpbmcgbGV0dGVycyBib2xkOiovXHJcbiAgICAgICAgICBiLmlubmVySFRNTCA9IFwiPHN0cm9uZz5cIiArIGFycltpXS5zdWJzdHIoMCwgdmFsLmxlbmd0aCkgKyBcIjwvc3Ryb25nPlwiO1xyXG4gICAgICAgICAgYi5pbm5lckhUTUwgKz0gYXJyW2ldLnN1YnN0cih2YWwubGVuZ3RoKTtcclxuICAgICAgICAgIC8qaW5zZXJ0IGEgaW5wdXQgZmllbGQgdGhhdCB3aWxsIGhvbGQgdGhlIGN1cnJlbnQgYXJyYXkgaXRlbSdzIHZhbHVlOiovXHJcbiAgICAgICAgICBiLmlubmVySFRNTCArPSBcIjxpbnB1dCB0eXBlPSdoaWRkZW4nIHZhbHVlPSdcIiArIGFycltpXSArIFwiJz5cIjtcclxuICAgICAgICAgIC8qZXhlY3V0ZSBhIGZ1bmN0aW9uIHdoZW4gc29tZW9uZSBjbGlja3Mgb24gdGhlIGl0ZW0gdmFsdWUgKERJViBlbGVtZW50KToqL1xyXG4gICAgICAgICAgICAgIGIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAvKmluc2VydCB0aGUgdmFsdWUgZm9yIHRoZSBhdXRvY29tcGxldGUgdGV4dCBmaWVsZDoqL1xyXG4gICAgICAgICAgICAgIGlucC52YWx1ZSA9IHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXS52YWx1ZTtcclxuICAgICAgICAgICAgICAvKmNsb3NlIHRoZSBsaXN0IG9mIGF1dG9jb21wbGV0ZWQgdmFsdWVzLFxyXG4gICAgICAgICAgICAgIChvciBhbnkgb3RoZXIgb3BlbiBsaXN0cyBvZiBhdXRvY29tcGxldGVkIHZhbHVlczoqL1xyXG4gICAgICAgICAgICAgIGNsb3NlQWxsTGlzdHMoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYS5hcHBlbmRDaGlsZChiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9KTtcclxuICAvKmV4ZWN1dGUgYSBmdW5jdGlvbiBwcmVzc2VzIGEga2V5IG9uIHRoZSBrZXlib2FyZDoqL1xyXG4gIGlucC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCArIFwiYXV0b2NvbXBsZXRlLWxpc3RcIik7XHJcbiAgICAgIGlmICh4KSB4ID0geC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKTtcclxuICAgICAgaWYgKGUua2V5Q29kZSA9PSA0MCkge1xyXG4gICAgICAgIC8qSWYgdGhlIGFycm93IERPV04ga2V5IGlzIHByZXNzZWQsXHJcbiAgICAgICAgaW5jcmVhc2UgdGhlIGN1cnJlbnRGb2N1cyB2YXJpYWJsZToqL1xyXG4gICAgICAgIGN1cnJlbnRGb2N1cysrO1xyXG4gICAgICAgIC8qYW5kIGFuZCBtYWtlIHRoZSBjdXJyZW50IGl0ZW0gbW9yZSB2aXNpYmxlOiovXHJcbiAgICAgICAgYWRkQWN0aXZlKHgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzOCkgeyAvL3VwXHJcbiAgICAgICAgLypJZiB0aGUgYXJyb3cgVVAga2V5IGlzIHByZXNzZWQsXHJcbiAgICAgICAgZGVjcmVhc2UgdGhlIGN1cnJlbnRGb2N1cyB2YXJpYWJsZToqL1xyXG4gICAgICAgIGN1cnJlbnRGb2N1cy0tO1xyXG4gICAgICAgIC8qYW5kIGFuZCBtYWtlIHRoZSBjdXJyZW50IGl0ZW0gbW9yZSB2aXNpYmxlOiovXHJcbiAgICAgICAgYWRkQWN0aXZlKHgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAxMykge1xyXG4gICAgICAgIC8qSWYgdGhlIEVOVEVSIGtleSBpcyBwcmVzc2VkLCBwcmV2ZW50IHRoZSBmb3JtIGZyb20gYmVpbmcgc3VibWl0dGVkLCovXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChjdXJyZW50Rm9jdXMgPiAtMSkge1xyXG4gICAgICAgICAgLyphbmQgc2ltdWxhdGUgYSBjbGljayBvbiB0aGUgXCJhY3RpdmVcIiBpdGVtOiovXHJcbiAgICAgICAgICBpZiAoeCkgeFtjdXJyZW50Rm9jdXNdLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfSk7XHJcbiAgICBcclxuICBmdW5jdGlvbiBhZGRBY3RpdmUoeCkge1xyXG4gICAgLyphIGZ1bmN0aW9uIHRvIGNsYXNzaWZ5IGFuIGl0ZW0gYXMgXCJhY3RpdmVcIjoqL1xyXG4gICAgaWYgKCF4KSByZXR1cm4gZmFsc2U7XHJcbiAgICAvKnN0YXJ0IGJ5IHJlbW92aW5nIHRoZSBcImFjdGl2ZVwiIGNsYXNzIG9uIGFsbCBpdGVtczoqL1xyXG4gICAgcmVtb3ZlQWN0aXZlKHgpO1xyXG4gICAgaWYgKGN1cnJlbnRGb2N1cyA+PSB4Lmxlbmd0aCkgY3VycmVudEZvY3VzID0gMDtcclxuICAgIGlmIChjdXJyZW50Rm9jdXMgPCAwKSBjdXJyZW50Rm9jdXMgPSAoeC5sZW5ndGggLSAxKTtcclxuICAgIC8qYWRkIGNsYXNzIFwiYXV0b2NvbXBsZXRlLWFjdGl2ZVwiOiovXHJcbiAgICB4W2N1cnJlbnRGb2N1c10uY2xhc3NMaXN0LmFkZChcImF1dG9jb21wbGV0ZS1hY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgICBcclxuICBmdW5jdGlvbiByZW1vdmVBY3RpdmUoeCkge1xyXG4gICAgLyphIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgXCJhY3RpdmVcIiBjbGFzcyBmcm9tIGFsbCBhdXRvY29tcGxldGUgaXRlbXM6Ki9cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB4W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhdXRvY29tcGxldGUtYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgZnVuY3Rpb24gY2xvc2VBbGxMaXN0cyhlbG1udCkge1xyXG4gICAgLypjbG9zZSBhbGwgYXV0b2NvbXBsZXRlIGxpc3RzIGluIHRoZSBkb2N1bWVudCxcclxuICAgIGV4Y2VwdCB0aGUgb25lIHBhc3NlZCBhcyBhbiBhcmd1bWVudDoqL1xyXG4gICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXV0b2NvbXBsZXRlLWl0ZW1zXCIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChlbG1udCAhPSB4W2ldICYmIGVsbW50ICE9IGlucCkge1xyXG4gICAgICB4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICAgfVxyXG4gICAgXHJcbi8qZXhlY3V0ZSBhIGZ1bmN0aW9uIHdoZW4gc29tZW9uZSBjbGlja3MgaW4gdGhlIGRvY3VtZW50OiovXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgY2xvc2VBbGxMaXN0cyhlLnRhcmdldCk7XHJcbn0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRvY29tcGxldGUiLCJmdW5jdGlvbiBjcmVhdGVXZWF0aGVyQ2FyZChpY29uVXJsLCB3ZWF0aGVyRGVzY3JpcHRpb24sIHRlbXBlcmF0dXJlLCBmZWVsc0xpa2VUZW1wcmF0dXJlLCBtaW5NYXhUZW1wcmF0dXJlLCBwcmVzc3VyZSwgd2luZFBvd2VyLCBodW1pZGl0eSwgc3VucmlzZSwgc3Vuc2V0KSB7XHJcblxyXG4gICAgbGV0IGNsb3VkeUJhY2tncm91bmQgPSAnaHR0cHM6Ly9tZWRpYTIuZ2lwaHkuY29tL21lZGlhL2xPa2JMM01KbkV0SGkvZ2lwaHkuZ2lmP2NpZD03OTBiNzYxMWUxN2QxYTMwZTU2NmY5NTkxZTBmOWM3MzUzOTk4NTdmNmIxYTg3OTAmcmlkPWdpcGh5LmdpZiZjdD1nJztcclxuICAgIGxldCByYWlueUJhY2tncm91bmQgPSAnaHR0cHM6Ly93d3cucGJoMi5jb20vd29yZHByZXNzL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzAzL2NoZWV0YWguZ2lmJztcclxuICAgIGxldCBjbGVhckJhY2tncm91bmQgPSAnaHR0cHM6Ly9tZWRpYTEuZ2lwaHkuY29tL21lZGlhL094d3Vob0xuSWNXazAvZ2lwaHkuZ2lmP2NpZD1lY2YwNWU0N2RsMXlucGd5NTRrbGlmbjV1bzcyaGpwemxxd2dwZHY3YXJ6ZzhnbXgmcmlkPWdpcGh5LmdpZiZjdD1nJztcclxuICAgIGxldCBzbm93eUJhY2tncm91bmQgPSAnaHR0cHM6Ly9tZWRpYTAuZ2lwaHkuY29tL21lZGlhL2Juc1dMQ0c1YkVhaUkvZ2lwaHkuZ2lmP2NpZD03OTBiNzYxMTIyNjhjODhlOTVjMGMzZGM3MTE3YmZiZWMxM2U0NDRjZDg3ZGU3MmMmcmlkPWdpcGh5LmdpZiZjdD1nJztcclxuICAgIGxldCBtaXN0QmFja2dyb3VuZCA9ICdodHRwczovL21lZGlhMi5naXBoeS5jb20vbWVkaWEveFVBN2I0YXJuYm8zVEhmemkwL2dpcGh5LmdpZj9jaWQ9NzkwYjc2MTFlMDQ2NTZiNmIxNGY5OGRiZDRmMWU4YWU0OWNiZWZhYTVjNDNlMDRjJnJpZD1naXBoeS5naWYmY3Q9Zyc7XHJcblxyXG4gICAgLy9jaGFuZ2VzIGJvZHlzIGJhY2tnb3J1bmQgYmFzZWQgb24gd2VhdGhlckRlc2NyaXB0aW9uXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpOyBcclxuICAgIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24gPT09ICdDbGVhcicgfHwgd2VhdGhlckRlc2NyaXB0aW9uID09PSAnZmV3IGNsb3VkcycpIHtcclxuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjbGVhckJhY2tncm91bmR9KWBcclxuICAgIH0gZWxzZSBpZiAod2VhdGhlckRlc2NyaXB0aW9uID09PSAnQ2xvdWRzJyB8fCB3ZWF0aGVyRGVzY3JpcHRpb24gPT09ICdicm9rZW4gY2xvdWRzJyl7IFxyXG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2Nsb3VkeUJhY2tncm91bmR9KWBcclxuICAgIH0gZWxzZSBpZiAod2VhdGhlckRlc2NyaXB0aW9uID09PSAnUmFpbicgfHwgd2VhdGhlckRlc2NyaXB0aW9uID09PSAncmFpbicgfHwgd2VhdGhlckRlc2NyaXB0aW9uID09PSAndGh1bmRlcnN0b3JtJyl7IFxyXG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3JhaW55QmFja2dyb3VuZH0pYFxyXG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24gPT09ICdTbm93Jyl7IFxyXG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3Nub3d5QmFja2dyb3VuZH0pYFxyXG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24gPT09ICdNaXN0Jyl7IFxyXG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke21pc3RCYWNrZ3JvdW5kfSlgXHJcbiAgICB9IGVsc2UgeyBcclxuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJ2h0dHBzOi8vbWFya2V0cGxhY2UuY2FudmEuY29tL0VBRDI5NjJOS25RLzIvMC8xNjAwdy9jYW52YS1yYWluYm93LWdyYWRpZW50LXBpbmstYW5kLXB1cnBsZS16b29tLXZpcnR1YWwtYmFja2dyb3VuZC1fVGNqb2stZDliNC5qcGcnKWA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vY3JlYXRlcyBleGl0IGJ1dHRvbiBcclxuICAgIGNvbnN0IGFycm93TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYXJyb3dMZWZ0LmNsYXNzTGlzdC5hZGQoJ2xvbmctYXJyb3ctbGVmdCcpO1xyXG5cclxuICAgIC8vY3JlYXRlcyBjYXJkXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVJbmZvRGl2KHByb3BlcnR5LCB2YWx1ZSwgYXBwZW5kVG8pIHsgXHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBoMi5pbm5lclRleHQgPSBwcm9wZXJ0eTtcclxuICAgICAgICBoMS5pbm5lclRleHQgPSB2YWx1ZTsgXHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGgyKTsgXHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGgxKTsgXHJcbiAgICAgICAgYXBwZW5kVG8uYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB3ZWF0aGVyQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgd2VhdGhlckNhcmQuc2V0QXR0cmlidXRlKCdpZCcsICd3ZWF0aGVyQ2FyZCcpO1xyXG5cclxuICAgIGNvbnN0IHdlYXRoZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHdlYXRoZXJEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd3ZWF0aGVyJyk7XHJcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpY29uLnNyYyA9IGljb25Vcmw7IFxyXG4gICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHdlYXRoZXJEZXNjcmlwdGlvbkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlYXRoZXJEZXNjcmlwdGlvbicpO1xyXG4gICAgd2VhdGhlckRlc2NyaXB0aW9uRGl2LmlubmVyVGV4dCA9IHdlYXRoZXJEZXNjcmlwdGlvbjsgXHJcbiAgICB3ZWF0aGVyRGl2LmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgd2VhdGhlckRpdi5hcHBlbmRDaGlsZCh3ZWF0aGVyRGVzY3JpcHRpb25EaXYpO1xyXG5cclxuICAgIGNvbnN0IHRlbXBlcmF0dXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0ZW1wZXJhdHVyZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RlbXBlcmF0dXJlJyk7XHJcbiAgICBjcmVhdGVJbmZvRGl2KCdUZW1wcmF0dXJlOicsIHRlbXBlcmF0dXJlLCB0ZW1wZXJhdHVyZURpdik7XHJcbiAgICBjcmVhdGVJbmZvRGl2KCdGZWVscyBsaWtlOicsIGZlZWxzTGlrZVRlbXByYXR1cmUsIHRlbXBlcmF0dXJlRGl2KTtcclxuICAgIGNyZWF0ZUluZm9EaXYoJ01pbi1NYXg6JywgbWluTWF4VGVtcHJhdHVyZSwgdGVtcGVyYXR1cmVEaXYpO1xyXG5cclxuICAgIGNvbnN0IGNvbmRpdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbmRpdGlvbnNEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjb25kaXRpb25zJyk7XHJcbiAgICBjcmVhdGVJbmZvRGl2KCdQcmVzc3VyZTonLCBwcmVzc3VyZSwgY29uZGl0aW9uc0Rpdik7XHJcbiAgICBjcmVhdGVJbmZvRGl2KCdXaW5kIFBvd2VyOicsIHdpbmRQb3dlciwgY29uZGl0aW9uc0Rpdik7XHJcbiAgICBjcmVhdGVJbmZvRGl2KCdIdW1pZGl0eTonLCBodW1pZGl0eSwgY29uZGl0aW9uc0Rpdik7XHJcblxyXG4gICAgY29uc3Qgc3VuUmlzZVNldERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3VuUmlzZVNldERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1blJpc2VTZXQnKTtcclxuICAgIGNyZWF0ZUluZm9EaXYoJ1N1bnJpc2U6Jywgc3VucmlzZSwgc3VuUmlzZVNldERpdik7XHJcbiAgICBjcmVhdGVJbmZvRGl2KCdTdW5zZXQ6Jywgc3Vuc2V0LCBzdW5SaXNlU2V0RGl2KTtcclxuXHJcbiAgICB3ZWF0aGVyQ2FyZC5hcHBlbmRDaGlsZCh3ZWF0aGVyRGl2KTtcclxuICAgIHdlYXRoZXJDYXJkLmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlRGl2KTtcclxuICAgIHdlYXRoZXJDYXJkLmFwcGVuZENoaWxkKGNvbmRpdGlvbnNEaXYpO1xyXG4gICAgd2VhdGhlckNhcmQuYXBwZW5kQ2hpbGQoc3VuUmlzZVNldERpdik7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGFycm93TGVmdClcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQod2VhdGhlckNhcmQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVdlYXRoZXJDYXJkIiwiYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0aWVzKCkge1xyXG4gICAgdHJ5IHsgXHJcbiAgICAgICAgY29uc3QgbXlEYXRhID0gYXdhaXQgZmV0Y2goJy4uLy4uL3NyYy9jdXJyZW50LmNpdHkubGlzdC5qc29uJywgeyBtb2RlOiBcImNvcnNcIiB9KVxyXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBteURhdGEuanNvbigpXHJcbiAgICAgICAgY29uc3QgY2l0aWVzID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBjdCBvZiBqc29uKSB7IFxyXG4gICAgICAgICAgICBjaXRpZXMucHVzaChjdC5uYW1lKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gY2l0aWVzXHJcbiAgICB9IGNhdGNoIHsgXHJcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdubyBjdHMgPSgnKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRDaXRpZXMiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBhdXRvY29tcGxldGUgZnJvbSBcIi4vYXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCBnZXRDaXRpZXMgZnJvbSBcIi4vZ2V0Q2l0aWVzXCI7IC8vcGFyc2VzIEpTT04gY2l0aWVzIGFuZCByZXR1cm5zIGFzIGFuIGFycmF5IGZvciBhdXRvY29tcGxldGVcclxuaW1wb3J0IGNyZWF0ZVdlYXRoZXJDYXJkIGZyb20gXCIuL2NyZWF0ZVdlYXRoZXJDYXJkXCI7XHJcblxyXG5jb25zdCBhcGlLZXkgPSAnMDg2YjJiMjY2Mjg0OTViNzk2M2QyZjdhYjU3ZjAwYzgnO1xyXG5cclxuY29uc3Qgc2VhcmNoYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUlucHV0XCIpO1xyXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuXHJcbi8vc3VnZ2VzdCBhdXRvY29tcGxldGlvbiBpbiBzZWFyY2hib3gsIGNvZGUgb2YgYXV0b2NvbXBsZXRlIGZ1bmN0aW9uIHdhcyB0YWtlbiBmcm9tIGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vaG93dG8vaG93dG9fanNfYXV0b2NvbXBsZXRlLmFzcFxyXG5hc3luYyBmdW5jdGlvbiBhdXRvY29tcGxldGVDaXRpZXMoKSB7XHJcbiAgICBsZXQgY2l0aWVzID0gYXdhaXQgZ2V0Q2l0aWVzKCk7XHJcbiAgICBhdXRvY29tcGxldGUoc2VhcmNoYm94LCBjaXRpZXMpO1xyXG59O1xyXG5hdXRvY29tcGxldGVDaXRpZXMoKTtcclxuXHJcblxyXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIXNlYXJjaGJveC52YWx1ZSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKCk7XHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGJvZHkuaW5uZXJIVE1MID0gJyAnO1xyXG4gICAgY3JlYXRlV2VhdGhlckNhcmQoZGF0YVswXSwgZGF0YVsxXSwgZGF0YVsyXSwgZGF0YVszXSwgZGF0YVs0XSwgZGF0YVs1XSwgZGF0YVs2XSwgZGF0YVs3XSwgZGF0YVs4XSwgZGF0YVs5XSk7XHJcbn0pXHJcblxyXG5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT09ICdsb25nLWFycm93LWxlZnQnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xyXG4gICAgICAgIHRyeSB7IFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtzZWFyY2hib3gudmFsdWV9JmFwcGlkPSR7YXBpS2V5fSZ1bml0cz1tZXRyaWNgLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGxldCBpY29uVXJsID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGEud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xyXG4gICAgICAgIGxldCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkYXRhLndlYXRoZXJbMF0ubWFpbjtcclxuICAgICAgICBsZXQgdGVtcGVyYXR1cmUgPSBgJHtkYXRhLm1haW4udGVtcH3CsENgO1xyXG4gICAgICAgIGxldCBmZWVsc0xpa2VUZW1wcmF0dXJlID0gYCR7ZGF0YS5tYWluLmZlZWxzX2xpa2V9wrBDYDtcclxuICAgICAgICBsZXQgbWluTWF4VGVtcHJhdHVyZSA9IGAke2RhdGEubWFpbi50ZW1wX21pbn3CsEMtJHtkYXRhLm1haW4udGVtcF9tYXh9wrBDYDtcclxuICAgICAgICBsZXQgcHJlc3N1cmUgPSBgJHtkYXRhLm1haW4ucHJlc3N1cmV9SGdgO1xyXG4gICAgICAgIGxldCB3aW5kUG93ZXIgPSBgJHtkYXRhLndpbmQuc3BlZWR9bS9zYDtcclxuICAgICAgICBsZXQgaHVtaWRpdHkgPSBgJHtkYXRhLm1haW4uaHVtaWRpdHl9Zy5tXjNgO1xyXG4gICAgICAgIGxldCBzdW5yaXNlID0gZ2V0RXhhY3RUaW1lKGRhdGEuc3lzLnN1bnJpc2UpO1xyXG4gICAgICAgIGxldCBzdW5zZXQgPSBnZXRFeGFjdFRpbWUoZGF0YS5zeXMuc3Vuc2V0KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIFtpY29uVXJsICwgd2VhdGhlckRlc2NyaXB0aW9uLCB0ZW1wZXJhdHVyZSwgZmVlbHNMaWtlVGVtcHJhdHVyZSwgbWluTWF4VGVtcHJhdHVyZSwgcHJlc3N1cmUsIHdpbmRQb3dlciwgaHVtaWRpdHksIHN1bnJpc2UsIHN1bnNldF1cclxuICAgICAgICAgICAgXHJcbiAgICB9IGNhdGNoIHsgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd1cHMnKVxyXG4gICAgICAgIGFsZXJ0KCdzb3JyeSwgc29tZXRoaW5nIHdlbnQgd3JvbmcgYW5kIGlgbSB0byB0aXJlZCB0byBpbXBsZW1lbnQgc29tZXRoaW5nIGVsc2UgYnV0IGFsZXJ0JykgICAgXHJcbiAgICB9XHJcbiAgICBcclxufSBcclxuXHJcbmZ1bmN0aW9uIGdldEV4YWN0VGltZSh0aW1lKSB7IFxyXG4gICAgLy9zbGljZXMgbmVlZGVkIHBhcnQgb2YgZGF0ZVxyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lKTsgXHJcbiAgICBsZXQgc3RyaW5naWZ5RGF0YSA9IGRhdGUudG9TdHJpbmcoKTsgXHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0ZSwgdGltZSlcclxuICAgIGxldCBzdGFydE9mVGhlVGltZSA9IHN0cmluZ2lmeURhdGEuaW5kZXhPZignOicpIC0gMjtcclxuICAgIGxldCBlbmRPZlRoZVRpbWUgPSBzdGFydE9mVGhlVGltZSArIDU7XHJcbiAgICBsZXQgdGltaW5nID0gc3RyaW5naWZ5RGF0YS5zbGljZShzdGFydE9mVGhlVGltZSwgZW5kT2ZUaGVUaW1lKVxyXG4gICAgY29uc29sZS5sb2codGltaW5nKVxyXG4gICAgcmV0dXJuIHRpbWluZ1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==