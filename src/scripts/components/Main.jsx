/*eslint-disable no-unused-vars*/
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoadEvents from '../../components/loadEvents/LoadEvents.jsx';
import Dashboard from '../../components/dashboard/Dashboard.jsx';
import Activity from '../../components/activity/Activity.jsx';
/*eslint-enable no-unused-vars*/

export default () => (
  <LoadEvents>
    <div className="container">
      <Switch>
        <Route exact path='/' component={ Dashboard }/>
        <Route exact path='/activity' component={ Activity }/>
      </Switch>
    </div>
  </LoadEvents>
);
