import { REQUEST_WEATHER, RECEIVE_WEATHER } from '../actions';

const INITIAL_STATE = { years: [] };

/**
 * Reducer function for books application.
 */
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVE_WEATHER:
    return { ...state, results: action.payload.query.results.channel };
  case REQUEST_WEATHER:
  default:
    return INITIAL_STATE;
  }
}
