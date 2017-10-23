/*eslint-disable no-unused-vars*/
import React from 'react';
import ChartistGraph from 'react-chartist';
/*eslint-enable no-unused-vars*/

import { durationToSeconds } from 'run-log/scripts/utils/dates';
import { add, min } from 'run-log/scripts/utils/math';

function options() {
  return  {
    donut: true,
    donutWidth: 40,
    donutSolid: true,
    startAngle: 270,
    total: 200,
    showLabel: false
  };
}

const GoalMPH = 10.0;

function calcMph(events) {
  const speeds = events.filter(e => e.distance && e.duration);
  const miles = speeds.map(e => e.distance).reduce(add, 0);
  const hours = events.map(e => durationToSeconds(e.duration)).reduce(add, 0) / 3600;
  return hours ? miles / hours : 0;
}

function data(mph) {
  const cappedMph = min(mph, GoalMPH);
  const percentage = 100 * cappedMph / GoalMPH;
  return {
    series: [ percentage, 100.0 - percentage ]
  };
}

export default (props) => {
  const mph = calcMph(props.events);
  return (
    <div className="dashboard-speedometer widget-stat-imposter col-xs-4">
      <div className="speed-achieved">{mph.toFixed(2)} mph</div>
      <div className="speed-goal">out of {GoalMPH.toFixed(2)} mph</div>
      <div className="svg-shrinkwrap">
        <ChartistGraph data={data(mph)}
          options={options()}
          type={'Pie'} />
      </div>
    </div>
  );
};
