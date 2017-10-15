export const ADD_EVENT = 'ADD_EVENT';

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/*
 * TODO: post to server, then fetch events...
 */
export function addEvent(event) {
  event['@id'] = `urn:uuid:${uuid()}`; // TODO: server does this
  return {
    type: ADD_EVENT,
    event
  };
}

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
