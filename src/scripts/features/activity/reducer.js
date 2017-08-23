import { LOAD_ACTIVITY, RECEIVE_ACTIVITY } from './actions';

const INITIAL_STATE = {
  ui: {
    loading: false
  },
  events: []
};

/**
 * Reducer function for books application.
 */
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOAD_ACTIVITY:
    return Object.assign({}, state, {
      ui: {
        loading: true
      }
    });
  case RECEIVE_ACTIVITY:
    return Object.assign({}, state, {
      ui: {
        loading: false
      },
      events: action.payload.events
    });
  default:
    return INITIAL_STATE;
  }
}
