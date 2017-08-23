import { combineReducers } from 'redux';
import DashboardReducer from './features/dashboard/reducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer
});

export default rootReducer;
