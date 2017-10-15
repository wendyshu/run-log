import { SEND_ADD_EVENT, RECEIVE_ADD_EVENT, SEND_EDIT_EVENT, RECEIVE_EDIT_EVENT, SEND_DELETE_EVENT, RECEIVE_DELETE_EVENT, SEND_GET_EVENTS, RECEIVE_GET_EVENTS } from './actions';

const INITIAL_STATE = {
  loaded: false,
  data: []
};

/**
 * Reducer function for books application.
 */
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEND_ADD_EVENT:
  case SEND_EDIT_EVENT:
  case SEND_DELETE_EVENT:
  case SEND_GET_EVENTS:
    return Object.assign({}, state, {
      loading: true
    });
  case RECEIVE_ADD_EVENT:
    return Object.assign({}, state, {
      loading: false,
      data: [ action.event, ...state.data ]
    });
  case RECEIVE_EDIT_EVENT:
    return Object.assign({}, state, {
      loading: false,
      data: state.data.map(e => {
        if (e['@id'] === action.event['@id']) {
          return action.event;
        } else {
          return e;
        }
      })
    });
  case RECEIVE_DELETE_EVENT:
    return Object.assign({}, state, {
      loading: false,
      data: state.data.filter(e => e['@id'] !== action.eventId)
    });
  case RECEIVE_GET_EVENTS:
    return Object.assign({}, state, {
      loading: false,
      data: action.payload.events
    });
  default:
    return state;
  }
}
