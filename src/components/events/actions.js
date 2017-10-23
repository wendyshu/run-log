export const SEND_ADD_EVENT = 'SEND_ADD_EVENT',
  RECEIVE_ADD_EVENT = 'RECEIVE_ADD_EVENT',
  SEND_EDIT_EVENT = 'SEND_EDIT_EVENT',
  RECEIVE_EDIT_EVENT = 'RECEIVE_EDIT_EVENT',
  SEND_DELETE_EVENT = 'SEND_DELETE_EVENT',
  RECEIVE_DELETE_EVENT = 'RECEIVE_DELETE_EVENT',
  SEND_GET_EVENTS = 'SEND_GET_EVENTS',
  RECEIVE_GET_EVENTS = 'RECEIVE_GET_EVENTS',
  SET_FAVORITE = 'SET_FAVORITE';

const MILLIS_WAIT = 350;

import SampleEvents from 'run-log/sample-events.json';
import { randomUuid } from 'run-log/scripts/utils/uuid';

const Actions = {

  setFavorite: function(eventId, favorite) {
    return {
      type: SET_FAVORITE,
      eventId,
      favorite
    };
  },

  requestDeleteEvent: function(eventId) {
    return {
      type: SEND_DELETE_EVENT,
      eventId
    };
  },

  receiveDeleteEvent: function(eventId) {
    return {
      type: RECEIVE_DELETE_EVENT,
      eventId
    };
  },

  requestEditEvent: function(event) {
    return {
      type: SEND_EDIT_EVENT,
      event
    };
  },

  receiveEditEvent: function(event) {
    return {
      type: RECEIVE_EDIT_EVENT,
      event
    };
  },

  requestAddEvent: function(event) {
    return {
      type: SEND_ADD_EVENT,
      event
    };
  },

  receiveAddEvent: function(event) {
    return {
      type: RECEIVE_ADD_EVENT,
      event
    };
  },

  requestEvents: function() {
    return {
      type: SEND_GET_EVENTS
    };
  },

  receiveEvents: function(json) {
    return {
      type: RECEIVE_GET_EVENTS,
      payload: json,
      receivedAt: Date.now()
    };
  }

}; // Actions

export const setFavorite = Actions.setFavorite;

/**
 * TODO: delete from server, then fetch events
 */
export function deleteEvent(eventId) {
  return simulateAsyncRequest(Actions.requestDeleteEvent(eventId), Actions.receiveDeleteEvent(eventId));
}

/**
 * TODO: post to server, then fetch events
 */
export function editEvent(event) {
  return simulateAsyncRequest(Actions.requestEditEvent(event), Actions.receiveEditEvent(event));
}

/**
 * TODO: post to server, then fetch events
 */
export function addEvent(event) {
  event['@id'] = `urn:uuid:${randomUuid()}`; // TODO: server does this
  return simulateAsyncRequest(Actions.requestAddEvent(event), Actions.receiveAddEvent(event));
}

/**
 * TODO: get from server
 */
export function loadEvents() {
  return simulateAsyncRequest(Actions.requestEvents(), Actions.receiveEvents(SampleEvents));
}

// Helper for simulating HTTP requests
function simulateAsyncRequest(reqAction, resAction) {
  return (dispatch) => {
    dispatch(reqAction);
    return new Promise(function(resolve) {
      setTimeout(() => resolve(dispatch(resAction)), MILLIS_WAIT); // Simulate xhr
    });
  };
}
