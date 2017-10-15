import { SHOW_MODAL, HIDE_MODAL } from './actions';

function showModal(show, editEvent) {
  return {
    ui: {
      showModal: show
    },
    editEvent
  };
}

const INITIAL_STATE = showModal(null);

/**
 * Reducer function for dashboard.
 */
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SHOW_MODAL:
    return Object.assign({}, state, showModal(action.modal, action.editEvent));
  case HIDE_MODAL:
    return Object.assign({}, state, showModal(null));
  default:
    return state;
  }
}
