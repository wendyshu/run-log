import { combineReducers } from 'redux';
import ModalsReducer from '../components/activity/modals/reducer';
import DashboardReducer from '../components/dashboard/reducer';
import LoadEventsReducer from '../components/loadEvents/reducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  events: LoadEventsReducer,
  modals: ModalsReducer
});

export default rootReducer;
