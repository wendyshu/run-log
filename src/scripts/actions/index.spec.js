/*
import { REQUEST_WEATHER, RECEIVE_WEATHER, fetchWeather } from './index';

test('fetch Washington DC weather', done => {
  var count = 0;
  function dispatch(action) {
    count++;
    if (count == 1) {
      expect(action.type).toBe(REQUEST_WEATHER);
    } else if (count == 2) {
      expect(action.type).toBe(RECEIVE_WEATHER);
      expect(action.payload.query.results.channel.location.city).toBe('Washington');
      done();
    }
  }

  return fetchWeather('washington, dc')(dispatch);
});
*/
