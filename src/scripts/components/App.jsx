/*eslint-disable no-unused-vars*/
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WeatherJumbotron from '../containers/WeatherJumbotron.jsx';
/*eslint-enable no-unused-vars*/

const LocalWeather = <WeatherJumbotron place="washington, dc" />;

export default () => (
  <main>
    <Switch>
      <Route exact path='/' render={ () => LocalWeather }/>
    </Switch>
  </main>
);
