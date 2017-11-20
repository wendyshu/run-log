import reducer, { INITIAL_STATE } from './reducer';

import { TAB_7_DAY, TAB_ALL, selectDashboardTab } from './actions';

test('reducer handles non-expected actions', () => {
  const state = reducer(undefined, {type: 'FOO'});
  expect(state).toEqual( INITIAL_STATE );
});

test('reducer handle selection without pre-existing state', () => {
  const state = reducer(undefined, selectDashboardTab(TAB_7_DAY));
  expect(state).toEqual({
    ui: {
      selectedTab: TAB_7_DAY
    }
  });
});

test('reducer handle selection with pre-existing state', () => {
  const state = reducer({ 'foo': 'bar' }, selectDashboardTab(TAB_ALL));
  expect(state).toEqual({
    ui: {
      selectedTab: TAB_ALL
    },
    'foo': 'bar'
  });
});
