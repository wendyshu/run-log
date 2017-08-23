import { combineReducers } from 'redux';
import DashboardReducer from './reduce_dashboard';

const rootReducer = combineReducers({
  dashboard: DashboardReducer
});

export default rootReducer;
