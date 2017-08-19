/*eslint-disable no-unused-vars*/
import React from 'react';
import { Link } from 'react-router-dom';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { NavItem } from 'react-bootstrap';
/*eslint-enable no-unused-vars*/

export default () => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <span className="navbar-brand">Run Log</span>
      </div>
      <ul className="nav navbar-nav nav-pills">
        <IndexLinkContainer activeClassName="active" to="/">
          <NavItem>Home</NavItem>
        </IndexLinkContainer>
        <IndexLinkContainer activeClassName="active" to="/activity">
          <NavItem>Activity</NavItem>
        </IndexLinkContainer>
      </ul>
    </div>
  </nav>
);
