/*eslint-disable no-unused-vars*/
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../features/dashboard/Dashboard.jsx';
import Activity from '../features/activity/Activity.jsx';
/*eslint-enable no-unused-vars*/

//
// TODOs:
//  1. convert to component, and
//  2. load data from here instead of activity component so available to entire
//     app. (state.events instead of state.activity.events)
//  3. Show network indicator.
//  4. Convert just this logic to ActivityLoader higher-order component.
//
export default () => (
  <div className="container">
    <Switch>
      <Route exact path='/' component={ Dashboard }/>
      <Route exact path='/activity' component={ Activity }/>
    </Switch>
  </div>
);
