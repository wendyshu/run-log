import { SELECT_DASHBOARD_TAB } from '../actions';

const INITIAL_STATE = {
  ui: {
    selectedTab: '7d'
  }
};

/**
 * Reducer function for books application.
 */
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SELECT_DASHBOARD_TAB:
    return Object.assign({}, state, {
      ui: {
        selectedTab: action.selectedTab
      }
    });
  default:
    return INITIAL_STATE;
  }
}
