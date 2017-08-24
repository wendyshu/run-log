export const SELECT_DASHBOARD_TAB = 'SELECT_DASHBOARD_TAB';
export function selectDashboardTab(id) {
  return {
    type: SELECT_DASHBOARD_TAB,
    selectedTab: id
  };
}
