/*eslint-disable no-unused-vars*/
import React from 'react';

import DashboardAveragePaceStats from './averagePaceStats/DashboardAveragePaceStats';
import DashboardBarChart from './barChart/DashboardBarChart';
import DashboardPieChart from './pieChart/DashboardPieChart';
import DashboardShoesStats from './shoesStats/DashboardShoesStats';
import DashboardSpeedometer from './speedometer/DashboardSpeedometer';
import DashboardTopPaceStats from './topPaceStats/DashboardTopPaceStats';
import DashboardTotalDistanceStats from './totalDistanceStats/DashboardTotalDistanceStats';
import DashboardTabs from './DashboardTabs';
import FeaturedRun from 'run-log/components/featuredRun/FeaturedRun';
/*eslint-enable no-unused-vars*/

import './dashboard.scss';

import moment from 'moment';

import { TAB_7_DAY, TAB_30_DAY, TAB_365_DAY, TAB_ALL } from './constants';
import { connect } from 'react-redux';

class Dashboard extends React.Component {

  tabData(events) {
    var days;
    switch (this.props.dashboard.ui.selectedTab) {
    case TAB_7_DAY:
      days = 7;
      return {
        startMoment: moment().subtract({ days }),
        totalDays: days
      };
    case TAB_30_DAY:
      days = 30;
      return {
        startMoment: moment().subtract({ days }),
        totalDays: days
      };
    case TAB_365_DAY:
      days = 365;
      return {
        startMoment: moment().subtract({ days }),
        totalDays: days
      };
    case TAB_ALL:
      // TODO: calc range using events. Will need min/max/diff in dates.js
      console.log('TODO:', events);
      days = 999;
      return {
        startMoment: moment(0),
        totalDays: days
      };
    }
  }

  filterByTypes(events, types) {
    return events.filter(e => types.includes(e['@type']));
  }

  eventsSince(start) {
    return this.props.events.data
      .filter(e => moment(e.date).diff(start) >= 0);
  }

  changeShoesEvents() {
    return this.filterByTypes(this.props.events.data, ['ChangeShoes']);
  }

  render() {
    const tabData = this.tabData(this.props.events.data);
    const selectedEvents = this.eventsSince(tabData.startMoment);

    return (
      <div className="dashboard">

        <div className="row">
          <div className="col-xs-12">
            <FeaturedRun events={this.filterByTypes(selectedEvents, ['Run'])} />
          </div>
        </div> {/* .row */}

        <div className="row">
          <div className="col-sm-12">
            <DashboardTabs selectedTab={this.props.dashboard.ui.selectedTab}/>
          </div>
        </div> {/* .row */}

        <div className="row">
          <div className="col-md-6">
            <h2>Distance</h2>
            <div className="dashboard-bar-chart">
              <DashboardBarChart
                selectedTab={this.props.dashboard.ui.selectedTab}
                events={this.filterByTypes(selectedEvents, ['Run', 'Run+CrossTrain'])}/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <h2>Speed</h2>
            </div>
            <div className="widget-stats row">
              <DashboardSpeedometer events={selectedEvents} />
              <DashboardAveragePaceStats events={selectedEvents} />
              <DashboardTopPaceStats events={selectedEvents} />
            </div>
          </div>
        </div> {/* .row */}

        <div className="row">
          <div className="col-md-6">
            <h2>Overall</h2>
            <div className="widget-stats">
              <DashboardTotalDistanceStats events={selectedEvents} />
              <div className="col-xs-8">
                <DashboardPieChart totalDays={tabData.totalDays} events={selectedEvents} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <h2>Shoes</h2>
            </div>
            <div className="widget-stats row">
              <DashboardShoesStats events={this.changeShoesEvents()} />
            </div>
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
