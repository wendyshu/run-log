/*eslint-disable no-unused-vars*/
import React from 'react';
import { selectDashboardTab } from './actions';
import DashboardStats from '../dashboardWidgets/DashboardStats.jsx';
import DashboardAggregateStats from '../dashboardWidgets/DashboardAggregateStats.jsx';
/*eslint-enable no-unused-vars*/

import moment from 'moment';

import { TAB_7_DAY, TAB_30_DAY, TAB_365_DAY, TAB_ALL } from './constants';
import { connect } from 'react-redux';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  renderTab(id, label) {
    const classes = this.props.dashboard.ui.selectedTab === id ? 'active' : '';
    return (
      <li role="presentation" className={classes}>
        <a onClick={() => this.props.selectDashboardTab(id)}>{label}</a>
      </li>
    );
  }

  statsLabel() {
    switch (this.props.dashboard.ui.selectedTab) {
    case TAB_7_DAY:
      return 'This Week';
    case TAB_30_DAY:
      return 'This Month';
    case TAB_365_DAY:
      return 'This Year';
    case TAB_ALL:
      return 'Lifetime';
    }
  }

  tabStartMoment() {
    switch (this.props.dashboard.ui.selectedTab) {
    case TAB_7_DAY:
      return moment().startOf('week');
    case TAB_30_DAY:
      return moment().startOf('month');
    case TAB_365_DAY:
      return moment().startOf('year');
    case TAB_ALL:
      return moment(0);
    }
  }

  tabEvents() {
    return this.props.events.data
      .filter(e => e['@type'] === 'Run')
      .filter(e => moment(e.date).diff(this.tabStartMoment()) >= 0);
  }

  render() {
    return (
      <div className="dashboard">

        <div className="row">
          <div className="col-xs-12">
            <div className="jumbotron">
              <h1>Featured Distance Run</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu ex, imperdiet non pulvinar sit amet, finibus non justo. Ut et rutrum quam. Sed dignissim arcu bibendum tortor lobortis ultrices.</p>
            </div>
          </div>
        </div> {/* .row */}

        <div className="row">
          <div className="col-sm-12">
            <ul className="nav nav-tabs">
              { this.renderTab(TAB_7_DAY, '7 day') }
              { this.renderTab(TAB_30_DAY, '30 day') }
              { this.renderTab(TAB_365_DAY, '365 day') }
              { this.renderTab(TAB_ALL, 'All') }
            </ul>
          </div>
        </div> {/* .row */}

        <div className="row">
          <div className="col-md-6">
            <h2><div className="label label-info">Distance</div></h2>
            <div className="widget-stub col-xs-12">(chart)</div>
          </div>
          <div className="col-md-6">
            <h2><div className="label label-info">{this.statsLabel()}</div></h2>
            <DashboardAggregateStats events={this.tabEvents()} />
          </div>
        </div> {/* .row */}

        <div className="row">
          <div className="col-md-6">
            <h2><div className="label label-info">Breakdown</div></h2>
            <div className="widget-stub col-xs-12">(chart)</div>
          </div>
          <div className="col-md-6">
            <h2><div className="label label-info">Shoes</div></h2>
            <DashboardStats stats={[
              { name:'Lorem Ipsum', value:'N/A' },
              { name:'Lorem Ipsum', value:'N/A' },
              { name:'Lorem Ipsum', value:'N/A' }
            ]}/>
          </div>
        </div> {/* .row */}

      </div>
    );
  }
} // Dashboard

function mapStateToProps(state) {
  return {
    dashboard: state.dashboard,
    events: state.events
  };
}

export default connect(mapStateToProps, { selectDashboardTab })(Dashboard);
