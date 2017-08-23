import { combineReducers } from 'redux';
import LoadEventsReducer from '../features/loadEvents/reducer';
import DashboardReducer from '../features/dashboard/reducer';

const rootReducer = combineReducers({
  events: LoadEventsReducer,
  dashboard: DashboardReducer
});

export default rootReducer;
