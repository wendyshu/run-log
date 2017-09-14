/*eslint-disable no-unused-vars*/
import React from 'react';

import DashboardAggregateStats from '../dashboardWidgets/DashboardAggregateStats.jsx';
import DashboardBarChart from '../dashboardWidgets/DashboardBarChart.jsx';
import DashboardPieChart from '../dashboardWidgets/DashboardPieChart.jsx';
import DashboardShoesStats from '../dashboardWidgets/DashboardShoesStats.jsx';
import DashboardTabs from './DashboardTabs.jsx';
import FeaturedRun from '../featuredRun/FeaturedRun.jsx';
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
        periodStartMoment: moment().startOf('isoWeek'),
        chartStartMoment: moment().subtract({days: 7})
      };
    case TAB_30_DAY:
      return {
        statsLabel: 'This Month',
        periodStartMoment: moment().startOf('month'),
        chartStartMoment: moment().subtract({days: 30})
      };
    case TAB_365_DAY:
      return {
        statsLabel: 'This Year',
        periodStartMoment: moment().startOf('year'),
        chartStartMoment: moment().subtract({days: 365})
      };
    case TAB_ALL:
      return {
        statsLabel: 'Lifetime',
        periodStartMoment: moment(0),
        chartStartMoment: moment(0)
      };
    }
  }

  eventsSince(start) {
    return this.props.events.data
      .filter(e => e['@type'] === 'Run')
      .filter(e => moment(e.date).diff(start) >= 0);
  }

  changeShoesEvents() {
    return this.props.events.data
      .filter(e => e['@type'] === 'ChangeShoes');
  }

  render() {
    const tabData = this.tabData();
    const periodEvents = this.eventsSince(tabData.periodStartMoment);

    return (
      <div className="dashboard">

        <div className="row">
          <div className="col-xs-12">
            <FeaturedRun events={periodEvents} />
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
            <div className="dashboard-bar-chart">
              <DashboardBarChart selectedTab={this.props.dashboard.ui.selectedTab}
                events={this.eventsSince(tabData.chartStartMoment)}/>
            </div>
          </div>
          <div className="col-md-6">
            <DashboardAggregateStats title={this.tabData().statsLabel} events={periodEvents} />
          </div>
        </div> {/* .row */}

        <div className="row">
          <div className="col-md-6">
            <h2><div className="label label-info">Breakdown</div></h2>
            <div className="widget-stats">
              <div className="col-xs-4 pie-chart-wrapper">
                <DashboardPieChart />
              </div>
              <div className="widget-stat widget-stub col-xs-8">
                (chart)
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <DashboardShoesStats title="Shoes" events={this.changeShoesEvents()} />
          </div>
        </div> {/* .row */}

      </div>
    );
  } // render

} // Dashboard

function mapStateToProps(state) {
  return {
    dashboard: state.dashboard,
    events: state.events
  };
}

export default connect(mapStateToProps, {})(Dashboard);
