import { SELECT_DASHBOARD_TAB } from './actions';

import { TAB_7_DAY } from './constants';

export const INITIAL_STATE = {
  ui: {
    selectedTab: TAB_7_DAY
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
    return state;
  }
}
