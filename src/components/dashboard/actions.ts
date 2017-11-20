import { Action } from 'redux';

export const SELECT_DASHBOARD_TAB = 'SELECT_DASHBOARD_TAB';

export class SelectDashboardTabAction implements Action {
  public selectedTab: DashboardTabs.Any;
  public type: 'SELECT_DASHBOARD_TAB';
}

export function selectDashboardTab(tabId: DashboardTabs.Any): SelectDashboardTabAction {
  return {
    selectedTab: tabId,
    type: SELECT_DASHBOARD_TAB,
  };
}
