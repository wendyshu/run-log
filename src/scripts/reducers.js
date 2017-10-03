import { combineReducers } from 'redux';
import DashboardReducer from '../components/dashboard/reducer';
import LoadEventsReducer from '../components/loadEvents/reducer';
import ManageEventsReducer from '../components/activity/reducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  events: LoadEventsReducer,
  manage: ManageEventsReducer
});

export default rootReducer;
