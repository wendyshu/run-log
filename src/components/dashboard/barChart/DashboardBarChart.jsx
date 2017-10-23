/*eslint-disable no-unused-vars*/
import React from 'react';
import ChartistGraph from 'react-chartist';
/*eslint-enable no-unused-vars*/

import moment from 'moment';

import { TAB_7_DAY, TAB_30_DAY, TAB_365_DAY, TAB_ALL } from 'run-log/components/dashboard/constants';
import { add } from 'run-log/scripts/utils/math';

/*
 * Given moment, subtracts time.
 *
 * E.g., fromMoment = moment("2017-01-21"), units = 'Week', duration = 2,
 *   returns moment("2017-01-07").
 */
function subtractMoment(fromMoment, units, duration) {
  const args = {};
  args[units] = duration;
  return fromMoment.clone().subtract(args);
}

/*
 * Returns a series of moments ending in now with specified
 *   length and durations.
 *
 * E.g., length = 5, units = 'Days', duration = 2,
 *   returns [10, 8, 6, 4, 2, 0].map(d => moment().subtract({days: d}))
 */
function momentSeries(length, units, duration, endDate) {
  const dates = [];

  for (let i = length - 1; i >= 0; i--) {
    const date = subtractMoment(endDate, units, i * duration);
    dates.push(date);
  }

  return dates;
}

/*
 * Generates data for bar chart.
 */
function barChartData(events, xLabelFn, barOpts) {

  const eventsMoments = events.map(e => Object.assign({}, e, { date: moment(e.date) }));
  const dates = momentSeries(barOpts.count, barOpts.units, barOpts.length, moment());

  const series = dates.map(endDate => {
    const startDate = subtractMoment(endDate, barOpts.units, barOpts.length);
    return eventsMoments.filter(e => e.date.isBetween(startDate, endDate))
      .map(e => e.distance)
      .reduce(add, 0);
  });

  return {
    labels: dates.map(xLabelFn),
    series: [
      series
    ]
  };
}

/*
 * Common options for all bar charts.
 */
function barChartOptions() {
  return {
    axisY: {
      labelInterpolationFnc: function(value) {
        return `${value} mi`;
      }
    }
  };
}

/*
 * Given selected tabs, returns the parameters needed for barChartData.
 */
function selectedTabBarChartParams(selectedTab) {
  switch (selectedTab) {
  case TAB_7_DAY:
    return {
      barOpts: { count: 7, units: 'Day', length: 1 },
      xLabelFn: m => m.format('dd')
    };
  case TAB_30_DAY:
    return {
      barOpts: { count: 10, units: 'Day', length: 3 },
      xLabelFn: m => m.format('MM/DD')
    };
  case TAB_365_DAY:
    return {
      barOpts: { count: 12, units: 'Month', length: 1 },
      xLabelFn: m => m.format('MMM')
    };
  case TAB_ALL:
    return {
      barOpts: { count: 8, units: 'Year', length: 1 },
      xLabelFn: m => m.format('YYYY')
    };
  }
}

/*
 * Renders a bar chart for 7d, 30d, 365d, or all-time.
 */
export default (props) => {
  const params = selectedTabBarChartParams(props.selectedTab);
  return (<ChartistGraph data={barChartData(props.events, params.xLabelFn, params.barOpts)} options={barChartOptions()} type={'Bar'} />);
};
