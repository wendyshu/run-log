// If loading from json asset...
/*
import Books from '../../assets/yahoo-weather-sample.json';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return {
    type: FETCH_WEATHER,
    payload: Books
  };
}
*/

require('es6-promise').polyfill();
require('isomorphic-fetch');

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
function requestWeather() {
  return {
    type: REQUEST_WEATHER
  };
}

export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
function receiveWeather(json) {
  return {
    type: RECEIVE_WEATHER,
    payload: json,
    receivedAt: Date.now()
  };
}

// See: https://developer.yahoo.com/weather/
function weatherUrl(place) {
  return `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${encodeURIComponent(place)}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
}

export function fetchWeather(place) {
  const url = weatherUrl(place);
  return function (dispatch) {
    dispatch(requestWeather());
    return fetch(url)
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json =>
        dispatch(receiveWeather(json))
      );
  };
}
