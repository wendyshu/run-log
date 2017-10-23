import { combineReducers } from 'redux';
import ModalsReducer from 'run-log/components/activity/modals/reducer';
import DashboardReducer from 'run-log/components/dashboard/reducer';
import EventsReducer from 'run-log/components/events/reducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  events: EventsReducer,
  modals: ModalsReducer
});

export default rootReducer;
