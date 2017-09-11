export const LOAD_EVENTS = 'LOAD_EVENTS';

const MILLIS_WAIT = 350;

function requestEvents() {
  return {
    type: LOAD_EVENTS
  };
}

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
function receiveEvents(json) {
  return {
    type: RECEIVE_EVENTS,
    payload: json,
    receivedAt: Date.now()
  };
}

import SampleEvents from '../../sample-events.json';

export function loadEvents() {
  return function (dispatch) {
    dispatch(requestEvents());
    return new Promise(function(resolve) {
      setTimeout(() => resolve(dispatch(receiveEvents(SampleEvents))), MILLIS_WAIT); // Simulate xhr
    });
  };
}
