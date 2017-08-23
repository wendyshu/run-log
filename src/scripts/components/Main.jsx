/*eslint-disable no-unused-vars*/
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import Activity from './Activity.jsx';
/*eslint-enable no-unused-vars*/

export default () => (
  <div className="container">
    <Switch>
      <Route exact path='/' component={ Dashboard }/>
      <Route exact path='/activity' render={ Activity }/>
    </Switch>
  </div>
);
