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
//const iconsUrl = ``; 

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
    body.innerHTML = ' ';
    (0,_createWeatherCard__WEBPACK_IMPORTED_MODULE_2__["default"])(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsMkRBQTJELHFCQUFxQjtBQUNoRjtBQUNBLDZCQUE2QixlQUFlO0FBQzVDLHFDQUFxQyxxQkFBcUI7QUFDMUQsa0NBQWtDLG1CQUFtQixLQUFLLG1CQUFtQjtBQUM3RSwwQkFBMEIsbUJBQW1CO0FBQzdDLDJCQUEyQixnQkFBZ0I7QUFDM0MsMEJBQTBCLG1CQUFtQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvY3JlYXRlV2VhdGhlckNhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZXRDaXRpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9zdWdnZXN0IGF1dG9jb21wbGV0aW9uIGluIHNlYXJjaGJveCwgY29kZSB3YXMgdGFrZW4gZnJvbSBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2hvd3RvL2hvd3RvX2pzX2F1dG9jb21wbGV0ZS5hc3BcclxuXHJcbmZ1bmN0aW9uIGF1dG9jb21wbGV0ZShpbnAsIGFycikge1xyXG4gIC8qdGhlIGF1dG9jb21wbGV0ZSBmdW5jdGlvbiB0YWtlcyB0d28gYXJndW1lbnRzLFxyXG4gIHRoZSB0ZXh0IGZpZWxkIGVsZW1lbnQgYW5kIGFuIGFycmF5IG9mIHBvc3NpYmxlIGF1dG9jb21wbGV0ZWQgdmFsdWVzOiovXHJcbiAgdmFyIGN1cnJlbnRGb2N1cztcclxuICAvKmV4ZWN1dGUgYSBmdW5jdGlvbiB3aGVuIHNvbWVvbmUgd3JpdGVzIGluIHRoZSB0ZXh0IGZpZWxkOiovXHJcbiAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHZhciBhLCBiLCBpLCB2YWwgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAvKmNsb3NlIGFueSBhbHJlYWR5IG9wZW4gbGlzdHMgb2YgYXV0b2NvbXBsZXRlZCB2YWx1ZXMqL1xyXG4gICAgICBjbG9zZUFsbExpc3RzKCk7XHJcbiAgICAgIGlmICghdmFsKSB7IHJldHVybiBmYWxzZTt9XHJcbiAgICAgIGN1cnJlbnRGb2N1cyA9IC0xO1xyXG4gICAgICAvKmNyZWF0ZSBhIERJViBlbGVtZW50IHRoYXQgd2lsbCBjb250YWluIHRoZSBpdGVtcyAodmFsdWVzKToqL1xyXG4gICAgICBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICAgICAgYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0aGlzLmlkICsgXCJhdXRvY29tcGxldGUtbGlzdFwiKTtcclxuICAgICAgYS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImF1dG9jb21wbGV0ZS1pdGVtc1wiKTtcclxuICAgICAgLyphcHBlbmQgdGhlIERJViBlbGVtZW50IGFzIGEgY2hpbGQgb2YgdGhlIGF1dG9jb21wbGV0ZSBjb250YWluZXI6Ki9cclxuICAgICAgdGhpcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGEpO1xyXG4gICAgICAvKmZvciBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5Li4uKi9cclxuICAgICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8qY2hlY2sgaWYgdGhlIGl0ZW0gc3RhcnRzIHdpdGggdGhlIHNhbWUgbGV0dGVycyBhcyB0aGUgdGV4dCBmaWVsZCB2YWx1ZToqL1xyXG4gICAgICAgIGlmIChhcnJbaV0uc3Vic3RyKDAsIHZhbC5sZW5ndGgpLnRvVXBwZXJDYXNlKCkgPT0gdmFsLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICAgIC8qY3JlYXRlIGEgRElWIGVsZW1lbnQgZm9yIGVhY2ggbWF0Y2hpbmcgZWxlbWVudDoqL1xyXG4gICAgICAgICAgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICAgICAgICAvKm1ha2UgdGhlIG1hdGNoaW5nIGxldHRlcnMgYm9sZDoqL1xyXG4gICAgICAgICAgYi5pbm5lckhUTUwgPSBcIjxzdHJvbmc+XCIgKyBhcnJbaV0uc3Vic3RyKDAsIHZhbC5sZW5ndGgpICsgXCI8L3N0cm9uZz5cIjtcclxuICAgICAgICAgIGIuaW5uZXJIVE1MICs9IGFycltpXS5zdWJzdHIodmFsLmxlbmd0aCk7XHJcbiAgICAgICAgICAvKmluc2VydCBhIGlucHV0IGZpZWxkIHRoYXQgd2lsbCBob2xkIHRoZSBjdXJyZW50IGFycmF5IGl0ZW0ncyB2YWx1ZToqL1xyXG4gICAgICAgICAgYi5pbm5lckhUTUwgKz0gXCI8aW5wdXQgdHlwZT0naGlkZGVuJyB2YWx1ZT0nXCIgKyBhcnJbaV0gKyBcIic+XCI7XHJcbiAgICAgICAgICAvKmV4ZWN1dGUgYSBmdW5jdGlvbiB3aGVuIHNvbWVvbmUgY2xpY2tzIG9uIHRoZSBpdGVtIHZhbHVlIChESVYgZWxlbWVudCk6Ki9cclxuICAgICAgICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgLyppbnNlcnQgdGhlIHZhbHVlIGZvciB0aGUgYXV0b2NvbXBsZXRlIHRleHQgZmllbGQ6Ki9cclxuICAgICAgICAgICAgICBpbnAudmFsdWUgPSB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF0udmFsdWU7XHJcbiAgICAgICAgICAgICAgLypjbG9zZSB0aGUgbGlzdCBvZiBhdXRvY29tcGxldGVkIHZhbHVlcyxcclxuICAgICAgICAgICAgICAob3IgYW55IG90aGVyIG9wZW4gbGlzdHMgb2YgYXV0b2NvbXBsZXRlZCB2YWx1ZXM6Ki9cclxuICAgICAgICAgICAgICBjbG9zZUFsbExpc3RzKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGEuYXBwZW5kQ2hpbGQoYik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfSk7XHJcbiAgLypleGVjdXRlIGEgZnVuY3Rpb24gcHJlc3NlcyBhIGtleSBvbiB0aGUga2V5Ym9hcmQ6Ki9cclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQgKyBcImF1dG9jb21wbGV0ZS1saXN0XCIpO1xyXG4gICAgICBpZiAoeCkgeCA9IHguZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIik7XHJcbiAgICAgIGlmIChlLmtleUNvZGUgPT0gNDApIHtcclxuICAgICAgICAvKklmIHRoZSBhcnJvdyBET1dOIGtleSBpcyBwcmVzc2VkLFxyXG4gICAgICAgIGluY3JlYXNlIHRoZSBjdXJyZW50Rm9jdXMgdmFyaWFibGU6Ki9cclxuICAgICAgICBjdXJyZW50Rm9jdXMrKztcclxuICAgICAgICAvKmFuZCBhbmQgbWFrZSB0aGUgY3VycmVudCBpdGVtIG1vcmUgdmlzaWJsZToqL1xyXG4gICAgICAgIGFkZEFjdGl2ZSh4KTtcclxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMzgpIHsgLy91cFxyXG4gICAgICAgIC8qSWYgdGhlIGFycm93IFVQIGtleSBpcyBwcmVzc2VkLFxyXG4gICAgICAgIGRlY3JlYXNlIHRoZSBjdXJyZW50Rm9jdXMgdmFyaWFibGU6Ki9cclxuICAgICAgICBjdXJyZW50Rm9jdXMtLTtcclxuICAgICAgICAvKmFuZCBhbmQgbWFrZSB0aGUgY3VycmVudCBpdGVtIG1vcmUgdmlzaWJsZToqL1xyXG4gICAgICAgIGFkZEFjdGl2ZSh4KTtcclxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMTMpIHtcclxuICAgICAgICAvKklmIHRoZSBFTlRFUiBrZXkgaXMgcHJlc3NlZCwgcHJldmVudCB0aGUgZm9ybSBmcm9tIGJlaW5nIHN1Ym1pdHRlZCwqL1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoY3VycmVudEZvY3VzID4gLTEpIHtcclxuICAgICAgICAgIC8qYW5kIHNpbXVsYXRlIGEgY2xpY2sgb24gdGhlIFwiYWN0aXZlXCIgaXRlbToqL1xyXG4gICAgICAgICAgaWYgKHgpIHhbY3VycmVudEZvY3VzXS5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH0pO1xyXG4gICAgXHJcbiAgZnVuY3Rpb24gYWRkQWN0aXZlKHgpIHtcclxuICAgIC8qYSBmdW5jdGlvbiB0byBjbGFzc2lmeSBhbiBpdGVtIGFzIFwiYWN0aXZlXCI6Ki9cclxuICAgIGlmICgheCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgLypzdGFydCBieSByZW1vdmluZyB0aGUgXCJhY3RpdmVcIiBjbGFzcyBvbiBhbGwgaXRlbXM6Ki9cclxuICAgIHJlbW92ZUFjdGl2ZSh4KTtcclxuICAgIGlmIChjdXJyZW50Rm9jdXMgPj0geC5sZW5ndGgpIGN1cnJlbnRGb2N1cyA9IDA7XHJcbiAgICBpZiAoY3VycmVudEZvY3VzIDwgMCkgY3VycmVudEZvY3VzID0gKHgubGVuZ3RoIC0gMSk7XHJcbiAgICAvKmFkZCBjbGFzcyBcImF1dG9jb21wbGV0ZS1hY3RpdmVcIjoqL1xyXG4gICAgeFtjdXJyZW50Rm9jdXNdLmNsYXNzTGlzdC5hZGQoXCJhdXRvY29tcGxldGUtYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgZnVuY3Rpb24gcmVtb3ZlQWN0aXZlKHgpIHtcclxuICAgIC8qYSBmdW5jdGlvbiB0byByZW1vdmUgdGhlIFwiYWN0aXZlXCIgY2xhc3MgZnJvbSBhbGwgYXV0b2NvbXBsZXRlIGl0ZW1zOiovXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgeFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYXV0b2NvbXBsZXRlLWFjdGl2ZVwiKTtcclxuICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gIGZ1bmN0aW9uIGNsb3NlQWxsTGlzdHMoZWxtbnQpIHtcclxuICAgIC8qY2xvc2UgYWxsIGF1dG9jb21wbGV0ZSBsaXN0cyBpbiB0aGUgZG9jdW1lbnQsXHJcbiAgICBleGNlcHQgdGhlIG9uZSBwYXNzZWQgYXMgYW4gYXJndW1lbnQ6Ki9cclxuICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImF1dG9jb21wbGV0ZS1pdGVtc1wiKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoZWxtbnQgIT0geFtpXSAmJiBlbG1udCAhPSBpbnApIHtcclxuICAgICAgeFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAgIH1cclxuICAgIFxyXG4vKmV4ZWN1dGUgYSBmdW5jdGlvbiB3aGVuIHNvbWVvbmUgY2xpY2tzIGluIHRoZSBkb2N1bWVudDoqL1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGNsb3NlQWxsTGlzdHMoZS50YXJnZXQpO1xyXG59KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0b2NvbXBsZXRlIiwiZnVuY3Rpb24gY3JlYXRlV2VhdGhlckNhcmQoaWNvblVybCwgd2VhdGhlckRlc2NyaXB0aW9uLCB0ZW1wZXJhdHVyZSwgZmVlbHNMaWtlVGVtcHJhdHVyZSwgbWluTWF4VGVtcHJhdHVyZSwgcHJlc3N1cmUsIHdpbmRQb3dlciwgaHVtaWRpdHksIHN1bnJpc2UsIHN1bnNldCkge1xyXG5cclxuICAgIGxldCBjbG91ZHlCYWNrZ3JvdW5kID0gJ2h0dHBzOi8vbWVkaWEyLmdpcGh5LmNvbS9tZWRpYS9sT2tiTDNNSm5FdEhpL2dpcGh5LmdpZj9jaWQ9NzkwYjc2MTFlMTdkMWEzMGU1NjZmOTU5MWUwZjljNzM1Mzk5ODU3ZjZiMWE4NzkwJnJpZD1naXBoeS5naWYmY3Q9Zyc7XHJcbiAgICBsZXQgcmFpbnlCYWNrZ3JvdW5kID0gJ2h0dHBzOi8vd3d3LnBiaDIuY29tL3dvcmRwcmVzcy93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wMy9jaGVldGFoLmdpZic7XHJcbiAgICBsZXQgY2xlYXJCYWNrZ3JvdW5kID0gJ2h0dHBzOi8vbWVkaWExLmdpcGh5LmNvbS9tZWRpYS9PeHd1aG9MbkljV2swL2dpcGh5LmdpZj9jaWQ9ZWNmMDVlNDdkbDF5bnBneTU0a2xpZm41dW83MmhqcHpscXdncGR2N2Fyemc4Z214JnJpZD1naXBoeS5naWYmY3Q9Zyc7XHJcbiAgICBsZXQgc25vd3lCYWNrZ3JvdW5kID0gJ2h0dHBzOi8vbWVkaWEwLmdpcGh5LmNvbS9tZWRpYS9ibnNXTENHNWJFYWlJL2dpcGh5LmdpZj9jaWQ9NzkwYjc2MTEyMjY4Yzg4ZTk1YzBjM2RjNzExN2JmYmVjMTNlNDQ0Y2Q4N2RlNzJjJnJpZD1naXBoeS5naWYmY3Q9Zyc7XHJcbiAgICBsZXQgbWlzdEJhY2tncm91bmQgPSAnaHR0cHM6Ly9tZWRpYTIuZ2lwaHkuY29tL21lZGlhL3hVQTdiNGFybmJvM1RIZnppMC9naXBoeS5naWY/Y2lkPTc5MGI3NjExZTA0NjU2YjZiMTRmOThkYmQ0ZjFlOGFlNDljYmVmYWE1YzQzZTA0YyZyaWQ9Z2lwaHkuZ2lmJmN0PWcnO1xyXG5cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7IFxyXG4gICAgY29uc29sZS5sb2cod2VhdGhlckRlc2NyaXB0aW9uKVxyXG4gICAgaWYgKHdlYXRoZXJEZXNjcmlwdGlvbiA9PT0gJ0NsZWFyJyB8fCB3ZWF0aGVyRGVzY3JpcHRpb24gPT09ICdmZXcgY2xvdWRzJykge1xyXG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2NsZWFyQmFja2dyb3VuZH0pYFxyXG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24gPT09ICdDbG91ZHMnIHx8IHdlYXRoZXJEZXNjcmlwdGlvbiA9PT0gJ2Jyb2tlbiBjbG91ZHMnKXsgXHJcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y2xvdWR5QmFja2dyb3VuZH0pYFxyXG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24gPT09ICdSYWluJyB8fCB3ZWF0aGVyRGVzY3JpcHRpb24gPT09ICdyYWluJyB8fCB3ZWF0aGVyRGVzY3JpcHRpb24gPT09ICd0aHVuZGVyc3Rvcm0nKXsgXHJcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cmFpbnlCYWNrZ3JvdW5kfSlgXHJcbiAgICB9IGVsc2UgaWYgKHdlYXRoZXJEZXNjcmlwdGlvbiA9PT0gJ1Nub3cnKXsgXHJcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7c25vd3lCYWNrZ3JvdW5kfSlgXHJcbiAgICB9IGVsc2UgaWYgKHdlYXRoZXJEZXNjcmlwdGlvbiA9PT0gJ01pc3QnKXsgXHJcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7bWlzdEJhY2tncm91bmR9KWBcclxuICAgIH0gZWxzZSB7IFxyXG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnaHR0cHM6Ly9tYXJrZXRwbGFjZS5jYW52YS5jb20vRUFEMjk2Mk5LblEvMi8wLzE2MDB3L2NhbnZhLXJhaW5ib3ctZ3JhZGllbnQtcGluay1hbmQtcHVycGxlLXpvb20tdmlydHVhbC1iYWNrZ3JvdW5kLV9UY2pvay1kOWI0LmpwZycpYDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlSW5mb0Rpdihwcm9wZXJ0eSwgdmFsdWUsIGFwcGVuZFRvKSB7IFxyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgaDIuaW5uZXJUZXh0ID0gcHJvcGVydHk7XHJcbiAgICAgICAgaDEuaW5uZXJUZXh0ID0gdmFsdWU7IFxyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChoMik7IFxyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChoMSk7IFxyXG4gICAgICAgIGFwcGVuZFRvLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgd2VhdGhlckNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHdlYXRoZXJDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2VhdGhlckNhcmQnKTtcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3ZWF0aGVyRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnd2VhdGhlcicpO1xyXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaWNvbi5zcmMgPSBpY29uVXJsOyBcclxuICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb25EaXYuc2V0QXR0cmlidXRlKCdpZCcsICd3ZWF0aGVyRGVzY3JpcHRpb24nKTtcclxuICAgIHdlYXRoZXJEZXNjcmlwdGlvbkRpdi5pbm5lclRleHQgPSB3ZWF0aGVyRGVzY3JpcHRpb247IFxyXG4gICAgd2VhdGhlckRpdi5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgIHdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQod2VhdGhlckRlc2NyaXB0aW9uRGl2KTtcclxuXHJcbiAgICBjb25zdCB0ZW1wZXJhdHVyZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGVtcGVyYXR1cmVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0ZW1wZXJhdHVyZScpO1xyXG4gICAgY3JlYXRlSW5mb0RpdignVGVtcHJhdHVyZTonLCB0ZW1wZXJhdHVyZSwgdGVtcGVyYXR1cmVEaXYpO1xyXG4gICAgY3JlYXRlSW5mb0RpdignRmVlbHMgbGlrZTonLCBmZWVsc0xpa2VUZW1wcmF0dXJlLCB0ZW1wZXJhdHVyZURpdik7XHJcbiAgICBjcmVhdGVJbmZvRGl2KCdNaW4tTWF4OicsIG1pbk1heFRlbXByYXR1cmUsIHRlbXBlcmF0dXJlRGl2KTtcclxuXHJcbiAgICBjb25zdCBjb25kaXRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25kaXRpb25zRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29uZGl0aW9ucycpO1xyXG4gICAgY3JlYXRlSW5mb0RpdignUHJlc3N1cmU6JywgcHJlc3N1cmUsIGNvbmRpdGlvbnNEaXYpO1xyXG4gICAgY3JlYXRlSW5mb0RpdignV2luZCBQb3dlcjonLCB3aW5kUG93ZXIsIGNvbmRpdGlvbnNEaXYpO1xyXG4gICAgY3JlYXRlSW5mb0RpdignSHVtaWRpdHk6JywgaHVtaWRpdHksIGNvbmRpdGlvbnNEaXYpO1xyXG5cclxuICAgIGNvbnN0IHN1blJpc2VTZXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHN1blJpc2VTZXREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdzdW5SaXNlU2V0Jyk7XHJcbiAgICBjcmVhdGVJbmZvRGl2KCdTdW5yaXNlOicsIHN1bnJpc2UsIHN1blJpc2VTZXREaXYpO1xyXG4gICAgY3JlYXRlSW5mb0RpdignU3Vuc2V0OicsIHN1bnNldCwgc3VuUmlzZVNldERpdik7XHJcblxyXG4gICAgd2VhdGhlckNhcmQuYXBwZW5kQ2hpbGQod2VhdGhlckRpdik7XHJcbiAgICB3ZWF0aGVyQ2FyZC5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZURpdik7XHJcbiAgICB3ZWF0aGVyQ2FyZC5hcHBlbmRDaGlsZChjb25kaXRpb25zRGl2KTtcclxuICAgIHdlYXRoZXJDYXJkLmFwcGVuZENoaWxkKHN1blJpc2VTZXREaXYpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZCh3ZWF0aGVyQ2FyZClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlV2VhdGhlckNhcmQiLCJhc3luYyBmdW5jdGlvbiBnZXRDaXRpZXMoKSB7XHJcbiAgICB0cnkgeyBcclxuICAgICAgICBjb25zdCBteURhdGEgPSBhd2FpdCBmZXRjaCgnLi4vLi4vc3JjL2N1cnJlbnQuY2l0eS5saXN0Lmpzb24nLCB7IG1vZGU6IFwiY29yc1wiIH0pXHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IG15RGF0YS5qc29uKClcclxuICAgICAgICBjb25zdCBjaXRpZXMgPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IobGV0IGN0IG9mIGpzb24pIHsgXHJcbiAgICAgICAgICAgIGNpdGllcy5wdXNoKGN0Lm5hbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBjaXRpZXNcclxuICAgIH0gY2F0Y2ggeyBcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ25vIGN0cyA9KCcpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldENpdGllcyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGF1dG9jb21wbGV0ZSBmcm9tIFwiLi9hdXRvY29tcGxldGVcIjtcclxuaW1wb3J0IGdldENpdGllcyBmcm9tIFwiLi9nZXRDaXRpZXNcIjsgLy9wYXJzZXMgSlNPTiBjaXRpZXMgYW5kIHJldHVybnMgYXMgYW4gYXJyYXkgZm9yIGF1dG9jb21wbGV0ZVxyXG5pbXBvcnQgY3JlYXRlV2VhdGhlckNhcmQgZnJvbSBcIi4vY3JlYXRlV2VhdGhlckNhcmRcIjtcclxuXHJcbmNvbnN0IGFwaUtleSA9ICcwODZiMmIyNjYyODQ5NWI3OTYzZDJmN2FiNTdmMDBjOCc7XHJcbi8vY29uc3QgaWNvbnNVcmwgPSBgYDsgXHJcblxyXG5jb25zdCBzZWFyY2hib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15SW5wdXRcIik7XHJcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG5cclxuLy9zdWdnZXN0IGF1dG9jb21wbGV0aW9uIGluIHNlYXJjaGJveCwgY29kZSBvZiBhdXRvY29tcGxldGUgZnVuY3Rpb24gd2FzIHRha2VuIGZyb20gaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ob3d0by9ob3d0b19qc19hdXRvY29tcGxldGUuYXNwXHJcbmFzeW5jIGZ1bmN0aW9uIGF1dG9jb21wbGV0ZUNpdGllcygpIHtcclxuICAgIGxldCBjaXRpZXMgPSBhd2FpdCBnZXRDaXRpZXMoKTtcclxuICAgIGF1dG9jb21wbGV0ZShzZWFyY2hib3gsIGNpdGllcyk7XHJcbn07XHJcbmF1dG9jb21wbGV0ZUNpdGllcygpO1xyXG5cclxuXHJcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgIGlmICghc2VhcmNoYm94LnZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlcigpO1xyXG4gICAgYm9keS5pbm5lckhUTUwgPSAnICc7XHJcbiAgICBjcmVhdGVXZWF0aGVyQ2FyZChkYXRhWzBdLCBkYXRhWzFdLCBkYXRhWzJdLCBkYXRhWzNdLCBkYXRhWzRdLCBkYXRhWzVdLCBkYXRhWzZdLCBkYXRhWzddLCBkYXRhWzhdLCBkYXRhWzldKVxyXG59KVxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoKSB7XHJcbiAgICAgICAgdHJ5IHsgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke3NlYXJjaGJveC52YWx1ZX0mYXBwaWQ9JHthcGlLZXl9JnVuaXRzPW1ldHJpY2AsIHsgbW9kZTogXCJjb3JzXCIgfSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgbGV0IGljb25VcmwgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XHJcbiAgICAgICAgbGV0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRhdGEud2VhdGhlclswXS5tYWluO1xyXG4gICAgICAgIGxldCB0ZW1wZXJhdHVyZSA9IGAke2RhdGEubWFpbi50ZW1wfcKwQ2A7XHJcbiAgICAgICAgbGV0IGZlZWxzTGlrZVRlbXByYXR1cmUgPSBgJHtkYXRhLm1haW4uZmVlbHNfbGlrZX3CsENgO1xyXG4gICAgICAgIGxldCBtaW5NYXhUZW1wcmF0dXJlID0gYCR7ZGF0YS5tYWluLnRlbXBfbWlufcKwQy0ke2RhdGEubWFpbi50ZW1wX21heH3CsENgO1xyXG4gICAgICAgIGxldCBwcmVzc3VyZSA9IGAke2RhdGEubWFpbi5wcmVzc3VyZX1IZ2A7XHJcbiAgICAgICAgbGV0IHdpbmRQb3dlciA9IGAke2RhdGEud2luZC5zcGVlZH1tL3NgO1xyXG4gICAgICAgIGxldCBodW1pZGl0eSA9IGAke2RhdGEubWFpbi5odW1pZGl0eX1nLm1eM2A7XHJcbiAgICAgICAgbGV0IHN1bnJpc2UgPSBnZXRFeGFjdFRpbWUoZGF0YS5zeXMuc3VucmlzZSk7XHJcbiAgICAgICAgbGV0IHN1bnNldCA9IGdldEV4YWN0VGltZShkYXRhLnN5cy5zdW5zZXQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICByZXR1cm4gW2ljb25VcmwgLCB3ZWF0aGVyRGVzY3JpcHRpb24sIHRlbXBlcmF0dXJlLCBmZWVsc0xpa2VUZW1wcmF0dXJlLCBtaW5NYXhUZW1wcmF0dXJlLCBwcmVzc3VyZSwgd2luZFBvd2VyLCBodW1pZGl0eSwgc3VucmlzZSwgc3Vuc2V0XVxyXG4gICAgICAgICAgICBcclxuICAgIH0gY2F0Y2ggeyAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VwcycpXHJcbiAgICAgICAgYWxlcnQoJ3NvcnJ5LCBzb21ldGhpbmcgd2VudCB3cm9uZyBhbmQgaWBtIHRvIHRpcmVkIHRvIGltcGxlbWVudCBzb21ldGhpbmcgZWxzZSBidXQgYWxlcnQnKSAgICBcclxuICAgIH1cclxuICAgIFxyXG59IFxyXG5cclxuZnVuY3Rpb24gZ2V0RXhhY3RUaW1lKHRpbWUpIHsgXHJcbiAgICAvL3NsaWNlcyBuZWVkZWQgcGFydCBvZiBkYXRlXHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWUpOyBcclxuICAgIGxldCBzdHJpbmdpZnlEYXRhID0gZGF0ZS50b1N0cmluZygpOyBcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRlLCB0aW1lKVxyXG4gICAgbGV0IHN0YXJ0T2ZUaGVUaW1lID0gc3RyaW5naWZ5RGF0YS5pbmRleE9mKCc6JykgLSAyO1xyXG4gICAgbGV0IGVuZE9mVGhlVGltZSA9IHN0YXJ0T2ZUaGVUaW1lICsgNTtcclxuICAgIGxldCB0aW1pbmcgPSBzdHJpbmdpZnlEYXRhLnNsaWNlKHN0YXJ0T2ZUaGVUaW1lLCBlbmRPZlRoZVRpbWUpXHJcbiAgICBjb25zb2xlLmxvZyh0aW1pbmcpXHJcbiAgICByZXR1cm4gdGltaW5nXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9