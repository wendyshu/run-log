import { combineReducers } from 'redux';
import AddEventReducer from '../components/activity/addEvent/reducer';
import DashboardReducer from '../components/dashboard/reducer';
import LoadEventsReducer from '../components/loadEvents/reducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  events: LoadEventsReducer,
  addEvent: AddEventReducer
});

export default rootReducer;
