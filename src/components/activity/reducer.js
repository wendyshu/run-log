import { OPEN_ENTRY_MODAL, CLOSE_ENTRY_MODAL } from './actions';

function showEntryModal(show) {
  return {
    ui: {
      showEntryModal: show
    }
  };
}

const INITIAL_STATE = showEntryModal(false);

/**
 * Reducer function for dashboard.
 */
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case OPEN_ENTRY_MODAL:
    return Object.assign({}, state, showEntryModal(true));
  case CLOSE_ENTRY_MODAL:
    return Object.assign({}, state, showEntryModal(false));
  default:
    return state;
  }
}
