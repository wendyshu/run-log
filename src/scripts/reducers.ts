import { combineReducers, Reducer } from 'redux';
import ModalsReducer from 'run-log/components/activity/modals/reducer';
import AuthenticateReducer from 'run-log/components/auth/reducer';
import DashboardReducer from 'run-log/components/dashboard/reducer';
import EventsReducer from 'run-log/components/events/reducer';

// TODO: combineReducers is not typesafe. (Modify property names below, still compiles.)
export interface RootState {
  authenticate: any;
  dashboard: State.Dashboard;
  events: State.Events;
  modals: State.Modals;
}

const rootReducer = combineReducers<RootState>({
  authenticate: AuthenticateReducer,
  dashboard: DashboardReducer,
  events: EventsReducer,
  modals: ModalsReducer,
});

export default rootReducer;
