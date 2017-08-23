import { combineReducers } from 'redux';
import ActivityReducer from './features/activity/reducer';
import DashboardReducer from './features/dashboard/reducer';

const rootReducer = combineReducers({
  activity: ActivityReducer,
  dashboard: DashboardReducer
});

export default rootReducer;
