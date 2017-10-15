import { combineReducers } from 'redux';
import ModalsReducer from '../components/activity/modals/reducer';
import DashboardReducer from '../components/dashboard/reducer';
import EventsReducer from '../components/events/reducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  events: EventsReducer,
  modals: ModalsReducer
});

export default rootReducer;
