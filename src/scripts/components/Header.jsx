/*eslint-disable no-unused-vars*/
import React from 'react';
import { Link } from 'react-router-dom';
/*eslint-enable no-unused-vars*/

export default () => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <span className="navbar-brand">Run Log</span>
      </div>
      <ul className="nav navbar-nav nav-pills">
        <li role="presentation" className="active"><a href="/#/">Home</a></li>
        <li role="presentation"><a href="/#/activity">Activity</a></li>
      </ul>
    </div>
  </nav>
);
