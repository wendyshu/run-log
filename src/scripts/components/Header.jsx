/*eslint-disable no-unused-vars*/
import React from 'react';
import { Link } from 'react-router-dom';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { NavItem } from 'react-bootstrap';
/*eslint-enable no-unused-vars*/

export default () => (
  <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-content" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <span className="navbar-brand">Run Log</span>
      </div>
      <div className="navbar-collapse collapse" id="navbar-content">
        <ul className="nav navbar-nav">
          <IndexLinkContainer activeClassName="active" to="/">
            <NavItem>Dashboard</NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer activeClassName="active" to="/activity">
            <NavItem>Manage</NavItem>
          </IndexLinkContainer>
        </ul>
      </div>
    </div>
  </nav>
);
