import { LOAD_ACTIVITY, RECEIVE_ACTIVITY } from './actions';

const INITIAL_STATE = {
  loaded: false,
  data: []
};

/**
 * Reducer function for books application.
 */
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOAD_ACTIVITY:
    return Object.assign({}, state, {
      loading: true
    });
  case RECEIVE_ACTIVITY:
    return Object.assign({}, state, {
      loading: false,
      data: action.payload.events
    });
  default:
    return INITIAL_STATE;
  }
}
