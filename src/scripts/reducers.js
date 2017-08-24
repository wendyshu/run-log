import { combineReducers } from 'redux';
import LoadEventsReducer from '../components/loadEvents/reducer';
import DashboardReducer from '../components/dashboard/reducer';

const rootReducer = combineReducers({
  events: LoadEventsReducer,
  dashboard: DashboardReducer
});

export default rootReducer;
