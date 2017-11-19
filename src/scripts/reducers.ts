import { combineReducers, Reducer } from 'redux';
import ModalsReducer from 'run-log/components/activity/modals/reducer';
import DashboardReducer, { DashboardState } from 'run-log/components/dashboard/reducer';
import EventsReducer, { EventsState } from 'run-log/components/events/reducer';

// TODO: combineReducers is not typesafe. (Modify property names below, still compiles.)
export interface RootState {
  dashboard: DashboardState;
  events: EventsState;
  modals: any; // TODO: typesafe modals reducer
}

const rootReducer = combineReducers<RootState>({
  dashboard: DashboardReducer,
  events: EventsReducer,
  modals: ModalsReducer,
});

export default rootReducer;
