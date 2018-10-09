

// const CONDITION_BASE_URL=
// 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/conditions/q/Australia/';

// const FORECAST_BASE_URL =
// 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/forecast10day/q/Australia/';


// const conditionXHR = new XMLHttpRequest();
// const forecastXHR = new XMLHttpRequest();

// export function fetchConditionData(city, onLoad){
//     conditionXHR.open('GET',`${CONDITION_BASE_URL}${city}.json`);
//     conditionXHR.send();
//     conditionXHR.onload = () =>{
//         if(conditionXHR.status === 200){
//             const dataObj = JSON.parse(conditionXHR.responseText);
//             onLoad(dataObj.current_observation)
//         }
//     }
// }

// export function fetchForecast(){

// }