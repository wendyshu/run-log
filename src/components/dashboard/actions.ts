import { Action } from 'redux';

//
// TODO: once callers are .ts, switch to string enum
//
const TAB_7_DAY: string = 'TAB_7_DAY',
  TAB_30_DAY: string = 'TAB_30_DAY',
  TAB_365_DAY: string = 'TAB_365_DAY',
  TAB_ALL: string = 'TAB_ALL';

export { TAB_7_DAY, TAB_30_DAY, TAB_365_DAY, TAB_ALL };

export type DashboardTabId = 'TAB_7_DAY' | 'TAB_30_DAY' | 'TAB_365_DAY' | 'TAB_ALL';

export const SELECT_DASHBOARD_TAB = 'SELECT_DASHBOARD_TAB';

export class SelectDashboardTabAction implements Action {
  public selectedTab: DashboardTabId;
  public type: 'SELECT_DASHBOARD_TAB';
}

// TODO: tabId is enum
export function selectDashboardTab(tabId: DashboardTabId): SelectDashboardTabAction {
  return {
    selectedTab: tabId,
    type: SELECT_DASHBOARD_TAB,
  };
}
