import { SHOW_MODAL, HIDE_MODAL } from './actions';

function showModal(show) {
  return {
    ui: {
      showModal: show
    }
  };
}

const INITIAL_STATE = showModal(false);

/**
 * Reducer function for dashboard.
 */
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SHOW_MODAL:
    return Object.assign({}, state, showModal(true));
  case HIDE_MODAL:
    return Object.assign({}, state, showModal(false));
  default:
    return state;
  }
}
