/*eslint-disable no-unused-vars*/
import React from 'react';
import ChartistGraph from 'react-chartist';

import DashboardAggregateStats from '../dashboardWidgets/DashboardAggregateStats.jsx';
import DashboardShoesStats from '../dashboardWidgets/DashboardShoesStats.jsx';
import DashboardStats from '../dashboardWidgets/DashboardStats.jsx';
import DashboardTabs from './DashboardTabs.jsx';
import FeaturedRun from '../featuredRun/FeaturedRun.jsx';
/*eslint-enable no-unused-vars*/

import moment from 'moment';

import { TAB_7_DAY, TAB_30_DAY, TAB_365_DAY, TAB_ALL } from './constants';
import { connect } from 'react-redux';
import { add } from '../../scripts/utils/math'; // TODO: move

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

  // TODO: move
  subtractMoment(fromMoment, units, duration) {
    const args = {};
    args[units] = duration;
    return fromMoment.clone().subtract(args);
  }

  // TODO: move
  momentSeries(length, units, duration) {
    const dates = [];

    for (let i = length - 1; i >= 0; i--) {
      const date = this.subtractMoment(moment(), units, i * duration);
      dates.push(date);
    }

    return dates;
  }

  // TODO: move
  barChartDate(events, barOpts, dateLabelFn) {

    const eventsMoments = events.map(e => Object.assign({}, e, { date: moment(e.date) }));
    const dates = this.momentSeries(barOpts.count, barOpts.units, barOpts.length);

    const series = dates.map(endDate => {
      const startDate = this.subtractMoment(endDate, barOpts.units, barOpts.length);
      return eventsMoments.filter(e => e.date.isBetween(startDate, endDate))
        .map(e => e.distance)
        .reduce(add, 0);
    });

    return {
      labels: dates.map(dateLabelFn),
      series: [
        series
      ]
    };
  }

  // TODO: move
  barChartOptions() {
    return {
      axisY: {
        labelInterpolationFnc: function(value) {
          return `${value} mi`;
        }
      }
    };
  }

  // TODO: move
  selectedTabBarChart(selectedTab, tabData) {
    const chartEvents = this.eventsSince(tabData.chartStartMoment);

    switch (selectedTab) {
    case TAB_7_DAY:
      return (<ChartistGraph data={this.barChartDate(chartEvents, { count: 7, units: 'Day', length: 1 }, m => m.format('dd'))} options={this.barChartOptions()} type={'Bar'} />);
    case TAB_30_DAY:
      return (<ChartistGraph data={this.barChartDate(chartEvents, { count: 10, units: 'Day', length: 3 }, m => m.format('MM/DD'))} options={this.barChartOptions()} type={'Bar'} />);
    case TAB_365_DAY:
      return (<ChartistGraph data={this.barChartDate(chartEvents, { count: 12, units: 'Month', length: 1 }, m => m.format('MMM'))} options={this.barChartOptions()} type={'Bar'} />);
    case TAB_ALL:
      return (<ChartistGraph data={this.barChartDate(chartEvents, { count: 8, units: 'Year', length: 1 }, m => m.format('YYYY'))} options={this.barChartOptions()} type={'Bar'} />);
    }
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
            {/* <div className="widget-stub col-xs-12">(chart)</div> */}
            { this.selectedTabBarChart(this.props.dashboard.ui.selectedTab, tabData) }
          </div>
          <div className="col-md-6">
            <h2><div className="label label-info">{this.tabData().statsLabel}</div></h2>
            <DashboardAggregateStats events={periodEvents} />
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
