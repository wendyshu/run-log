/*eslint-disable no-unused-vars*/
import React from 'react';
import { Link } from 'react-router-dom';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { NavItem } from 'react-bootstrap';
/*eslint-enable no-unused-vars*/

import config from 'run-log/config.json';
import { clearState } from 'run-log/scripts/actions';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Header extends React.Component {

  handleLogout() {
    const url = `${config.baseUrl}/api/v1/logout`;
    fetch(url, {
      credentials: 'include'
    }).then(() => {
      this.props.clearState();
      // Redirect to root, but avoid warning
      //   "Hash history cannot PUSH the same path"
      if (this.props.history.location.pathname !== '/') {
        this.props.history.push('/');
      }
    });
  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar-content"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <span className="navbar-brand">Run Log</span>
          </div>
          <div className="navbar-collapse collapse" id="navbar-content">
            <ul className="nav navbar-nav navbar-left">
              <IndexLinkContainer activeClassName="active" to="/">
                <NavItem>Dashboard</NavItem>
              </IndexLinkContainer>
              <IndexLinkContainer activeClassName="active" to="/activity">
                <NavItem>Manage</NavItem>
              </IndexLinkContainer>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a onClick={this.handleLogout.bind(this)}>Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  } // render
} // Header

function mapDispatchToProps(dispatch) {
  return {
    clearState: () => dispatch(clearState()),
  };
}

const component = connect(null, mapDispatchToProps, null, { pure: false })(Header);
export default withRouter(component);
