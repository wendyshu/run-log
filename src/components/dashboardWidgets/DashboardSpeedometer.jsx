/*eslint-disable no-unused-vars*/
import React from 'react';
import ChartistGraph from 'react-chartist';
/*eslint-enable no-unused-vars*/

import { durationToSeconds } from '../../scripts/utils/dates';
import { add } from '../../scripts/utils/math';

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
  const miles = speeds.map(e => e.distance).reduce(add);
  const hours = events.map(e => durationToSeconds(e.duration)).reduce(add) / 3600;
  return miles / hours;
}

function data(mph) {
  const percentage = 100 * mph / GoalMPH;
  return {
    series: [ percentage, 100.0 - percentage ]
  };
}

export default (props) => {
  const mph = calcMph(props.events);
  return (
    <div className="dashboard-speedometer">
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
