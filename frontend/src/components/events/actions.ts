import q from 'es6-promise';
q.polyfill();
import fetch from 'isomorphic-fetch';

import config from 'run-log/config.json';

import { Action, Dispatch } from 'redux';

// TODO: remove
import { randomUuid } from 'run-log/scripts/utils/uuid';

// const EventsUrl = `${config.baseUrl}/api/v1/events`;
const EventsUrl = `${config.baseUrl}/events`;

const MILLIS_WAIT = 350;

class FavoriteAction implements Action {
  public eventId: string;
  public favorite: boolean;
  public type: 'SET_FAVORITE';
}

class DeleteAction implements Action {
  public eventId: string;
  public type: 'SEND_DELETE_EVENT' | 'RECEIVE_DELETE_EVENT';
}

class CrudAction implements Action {
  public event: Events.Any;
  public type:
    | 'SEND_EDIT_EVENT'
    | 'RECEIVE_EDIT_EVENT'
    | 'SEND_ADD_EVENT'
    | 'RECEIVE_ADD_EVENT';
}

class SendGetAction implements Action {
  public type: 'SEND_GET_EVENTS';
}

class ReceiveGetAction implements Action {
  public payload: any; // TODO: payload type
  public receivedAt: number;
  public type: 'RECEIVE_GET_EVENTS';
}

export type EventsAction =
  | FavoriteAction
  | DeleteAction
  | CrudAction
  | SendGetAction
  | ReceiveGetAction;

const Actions = {
  setFavorite(eventId: string, favorite: boolean): FavoriteAction {
    return {
      eventId,
      favorite,
      type: 'SET_FAVORITE',
    };
  },

  requestDeleteEvent(eventId: string): DeleteAction {
    return {
      eventId,
      type: 'SEND_DELETE_EVENT',
    };
  },

  receiveDeleteEvent(eventId: string): DeleteAction {
    return {
      eventId,
      type: 'RECEIVE_DELETE_EVENT',
    };
  },

  requestEditEvent(event: Events.Any): CrudAction {
    return {
      event,
      type: 'SEND_EDIT_EVENT',
    };
  },

  receiveEditEvent(event: Events.Any): CrudAction {
    return {
      event,
      type: 'RECEIVE_EDIT_EVENT',
    };
  },

  requestAddEvent(event: any): CrudAction {
    return {
      event,
      type: 'SEND_ADD_EVENT',
    };
  },

  receiveAddEvent(event: any): CrudAction {
    return {
      event,
      type: 'RECEIVE_ADD_EVENT',
    };
  },

  requestEvents(): SendGetAction {
    return {
      type: 'SEND_GET_EVENTS',
    };
  },

  receiveEvents(json: any): ReceiveGetAction {
    return {
      payload: json,
      receivedAt: Date.now(),
      type: 'RECEIVE_GET_EVENTS',
    };
  },
}; // Actions

export const setFavorite = Actions.setFavorite;

/**
 * TODO: delete from server, then fetch events
 */
export function deleteEvent(eventId: string) {
  return simulateAsyncRequest(
    Actions.requestDeleteEvent(eventId),
    Actions.receiveDeleteEvent(eventId)
  );
}

export function editEvent(event: Events.Any) {
  return (dispatch: Dispatch<Action>) => {
    // TODO: implement authentication using Amazon Cognito
    return fetch(EventsUrl, {
      body: JSON.stringify({
        events: [ event ]
      }),
      method: "PUT"
    }).then((events: any) => loadEvents()(dispatch));
  };
}

export function addEvent(event: Events.Any) {
  event['@id'] = `urn:uuid:${randomUuid()}`; // TODO: increment largest id
  // add and edit are same endpoint using PUT...
  return editEvent(event);
}

/**
 * TODO: get from server
 */
export function loadEvents() {
  return (dispatch: Dispatch<Action>) => {
    dispatch(Actions.requestEvents());

    // TODO: implement authentication using Amazon Cognito

    // fetch(EventsUrl, {
    //   credentials: 'include',
    // })
    fetch(EventsUrl)
      .then((response: any) => response.json())
      .then((events: any) => dispatch(Actions.receiveEvents(events)));
  };
}

// Helper for simulating HTTP requests
function simulateAsyncRequest(
  reqAction: EventsAction,
  resAction: EventsAction
) {
  return (dispatch: Dispatch<Action>) => {
    dispatch(reqAction);
    return new Promise(resolve => {
      setTimeout(() => resolve(dispatch(resAction)), MILLIS_WAIT); // Simulate xhr
    });
  };
}
