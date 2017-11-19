import { SELECT_DASHBOARD_TAB, TAB_7_DAY } from './actions';

export const INITIAL_STATE = {
  ui: {
    selectedTab: TAB_7_DAY
  }
};

/**
 * Reducer function for dashboard.
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
    return state;
  }
}
