/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/

import PropTypes from 'prop-types';

import {
  selectDashboardTab,
  TAB_7_DAY,
  TAB_30_DAY,
  TAB_365_DAY,
  TAB_ALL
} from './actions';
import { connect } from 'react-redux';

class DashboardTabs extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTab(id, label) {
    const classes = this.props.selectedTab === id ? 'active' : '';
    return (
      <li role="presentation" className={classes}>
        <a onClick={() => this.props.selectDashboardTab(id)}>{label}</a>
      </li>
    );
  }

  render() {
    return (
      <ul className="nav nav-tabs">
        {this.renderTab(TAB_7_DAY, '7 day')}
        {this.renderTab(TAB_30_DAY, '30 day')}
        {this.renderTab(TAB_365_DAY, '365 day')}
        {this.renderTab(TAB_ALL, 'All')}
      </ul>
    );
  }
}

DashboardTabs.propTypes = {
  selectedTab: PropTypes.oneOf([TAB_7_DAY, TAB_30_DAY, TAB_365_DAY, TAB_ALL])
};

export default connect(null, { selectDashboardTab })(DashboardTabs);
