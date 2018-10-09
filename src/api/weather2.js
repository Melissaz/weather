
import axios from 'axios';


const CONDITION_BASE_URL=
'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/conditions/q/Australia/';

const FORECAST_BASE_URL =
'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/forecast10day/q/Australia/';



export function fetchConditionData(city){
    const url = `${CONDITION_BASE_URL}${city}.json`;
    return axios.get(url).then(response => response.data.current_observation);
}

export function fetchForecast(city){
    const url = `${FORECAST_BASE_URL}${city}.json`;
    return axios.get(url).then(response => response.data.forecast.simpleforecast.forecastday);
}
