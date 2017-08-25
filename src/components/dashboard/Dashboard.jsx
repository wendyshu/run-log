/*eslint-disable no-unused-vars*/
import React from 'react';
import DashboardAggregateStats from '../dashboardWidgets/DashboardAggregateStats.jsx';
import DashboardShoesStats from '../dashboardWidgets/DashboardShoesStats.jsx';
import DashboardStats from '../dashboardWidgets/DashboardStats.jsx';
import DashboardTabs from './DashboardTabs.jsx';
/*eslint-enable no-unused-vars*/

import moment from 'moment';

import { TAB_7_DAY, TAB_30_DAY, TAB_365_DAY, TAB_ALL } from './constants';
import { connect } from 'react-redux';

class Dashboard extends React.Component {

  tabData() {
    switch (this.props.dashboard.ui.selectedTab) {
    case TAB_7_DAY:
      return {
        statsLabel: 'This Week',
        startMoment: moment().startOf('week')
      };
    case TAB_30_DAY:
      return {
        statsLabel: 'This Month',
        startMoment: moment().startOf('month')
      };
    case TAB_365_DAY:
      return {
        statsLabel: 'This Year',
        startMoment: moment().startOf('year')
      };
    case TAB_ALL:
      return {
        statsLabel: 'Lifetime',
        startMoment: moment(0)
      };
    }
  }

  tabEvents() {
    const start = this.tabData().startMoment;
    return this.props.events.data
      .filter(e => e['@type'] === 'Run')
      .filter(e => moment(e.date).diff(start) >= 0);
  }

  changeShoesEvents() {
    return this.props.events.data
      .filter(e => e['@type'] === 'ChangeShoes');
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
            <DashboardTabs selectedTab={this.props.dashboard.ui.selectedTab}/>
          </div>
        </div> {/* .row */}

        <div className="row">
          <div className="col-md-6">
            <h2><div className="label label-info">Distance</div></h2>
            <div className="widget-stub col-xs-12">(chart)</div>
          </div>
          <div className="col-md-6">
            <h2><div className="label label-info">{this.tabData().statsLabel}</div></h2>
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
            <DashboardShoesStats events={this.changeShoesEvents()} />
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

export default connect(mapStateToProps, {})(Dashboard);
