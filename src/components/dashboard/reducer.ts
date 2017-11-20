import { SELECT_DASHBOARD_TAB, SelectDashboardTabAction, TAB_7_DAY } from './actions';

export const INITIAL_STATE: State.Dashboard = {
  ui: {
    selectedTab: TAB_7_DAY,
  },
};

/**
 * Reducer function for dashboard.
 */
export default function(
  state: State.Dashboard = INITIAL_STATE,
  action: SelectDashboardTabAction,
): State.Dashboard {
  switch (action.type) {
  case SELECT_DASHBOARD_TAB:
    return Object.assign({}, state, {
      ui: {
        selectedTab: action.selectedTab,
      },
    });
  default:
    return state;
  }
}
