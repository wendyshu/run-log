/**
 * Available dashboard tabs.
 */
declare namespace DashboardTabs {

  export const TAB_7_DAY: string = 'TAB_7_DAY',
    TAB_30_DAY: string = 'TAB_30_DAY',
    TAB_365_DAY: string = 'TAB_365_DAY',
    TAB_ALL: string = 'TAB_ALL';

  export type Any = DashboardTabs.TAB_7_DAY | DashboardTabs.TAB_30_DAY | DashboardTabs.TAB_365_DAY | DashboardTabs.TAB_ALL;
}
