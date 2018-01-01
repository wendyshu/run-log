import { Action, combineReducers, Reducer } from 'redux';
import ModalsReducer, {
  INITIAL_STATE as MODALS_INIT,
} from 'run-log/components/activity/modals/reducer';
import AuthenticateReducer, {
  INITIAL_STATE as AUTH_INIT,
} from 'run-log/components/auth/reducer';
import DashboardReducer, {
  INITIAL_STATE as DASHBOARD_INIT,
} from 'run-log/components/dashboard/reducer';
import EventsReducer, {
  INITIAL_STATE as EVENTS_INIT,
} from 'run-log/components/events/reducer';
import { CLEAR_STATE } from './actions';

// TODO: combineReducers is not typesafe. (Modify property names below, still compiles.)
export interface RootState {
  authenticate: any;
  dashboard: State.Dashboard;
  events: State.Events;
  modals: State.Modals;
}

// https://stackoverflow.com/a/35641992
const appReducer = combineReducers<RootState>({
  authenticate: AuthenticateReducer,
  dashboard: DashboardReducer,
  events: EventsReducer,
  modals: ModalsReducer,
});

const rootReducer = (state: RootState, action: Action) => {
  if (action.type === CLEAR_STATE) {
    state = {
      // type safe initial state
      authenticate: AUTH_INIT,
      dashboard: DASHBOARD_INIT,
      events: EVENTS_INIT,
      modals: MODALS_INIT,
    };
  }
  return appReducer(state, action);
};

export default rootReducer;
