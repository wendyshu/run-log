import { DashboardTabId, SELECT_DASHBOARD_TAB, SelectDashboardTabAction } from './actions';

export class DashboardState {
  public ui: { selectedTab: DashboardTabId };
}

export const INITIAL_STATE: DashboardState = {
  ui: {
    selectedTab: 'TAB_7_DAY',
  },
};

/**
 * Reducer function for dashboard.
 */
export default function(
  state: DashboardState = INITIAL_STATE,
  action: SelectDashboardTabAction,
): DashboardState {
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
