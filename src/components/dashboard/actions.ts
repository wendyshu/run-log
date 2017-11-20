import { Action } from 'redux';

export const TAB_7_DAY = 'TAB_7_DAY',
  TAB_30_DAY = 'TAB_30_DAY',
  TAB_365_DAY = 'TAB_365_DAY',
  TAB_ALL = 'TAB_ALL';

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
