/*eslint-disable no-unused-vars*/
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../features/dashboard/Dashboard.jsx';
import Activity from '../features/activity/Activity.jsx';
/*eslint-enable no-unused-vars*/

export default () => (
  <div className="container">
    <Switch>
      <Route exact path='/' component={ Dashboard }/>
      <Route exact path='/activity' component={ Activity }/>
    </Switch>
  </div>
);
