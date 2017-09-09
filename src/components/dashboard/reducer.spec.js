import reducer, { INITIAL_STATE } from './reducer';

import { selectDashboardTab } from './actions';

import { TAB_7_DAY, TAB_ALL } from './constants';

test('reducer handles non-expected actions', () => {
  expect( reducer(undefined, {type: 'FOO'}) ).toEqual( INITIAL_STATE );
});

test('reducer handle selection without pre-existing state', () => {
  expect( reducer(undefined, selectDashboardTab(TAB_7_DAY)) ).toEqual({
    ui: {
      selectedTab: TAB_7_DAY
    }
  });
});

test('reducer handle selection with pre-existing state', () => {
  expect( reducer({ 'foo': 'bar' }, selectDashboardTab(TAB_ALL)) ).toEqual({
    ui: {
      selectedTab: TAB_ALL
    },
    'foo': 'bar'
  });
});
