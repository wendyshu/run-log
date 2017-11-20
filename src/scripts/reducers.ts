import { combineReducers, Reducer } from 'redux';
import ModalsReducer from 'run-log/components/activity/modals/reducer';
import DashboardReducer from 'run-log/components/dashboard/reducer';
import EventsReducer from 'run-log/components/events/reducer';

// TODO: combineReducers is not typesafe. (Modify property names below, still compiles.)
export interface RootState {
  dashboard: State.Dashboard;
  events: State.Events;
  modals: State.Modals;
}

const rootReducer = combineReducers<RootState>({
  dashboard: DashboardReducer,
  events: EventsReducer,
  modals: ModalsReducer,
});

export default rootReducer;
