/*eslint-disable no-unused-vars*/
import React from 'react';

import ChartistGraph from 'react-chartist';
/*eslint-enable no-unused-vars*/

function eventsByType(props, type) {
  return props.events.filter(e => e['@type'] === type);
}

function calculateCounts(props) {
  const running = eventsByType(props, 'Run');
  const crossTraining = eventsByType(props, 'CrossTrain');
  const runCrossTrain = eventsByType(props, 'Run+CrossTrain');
  return [
    {
      value: props.totalDays - props.events.length,
      className: 'slice-none'
    },
    {
      value: crossTraining.length,
      className: 'slice-x-train'
    },
    {
      value: runCrossTrain.length,
      className: 'slice-run-x-train'
    },
    {
      value: running.filter(e => e.category === 'casual').length,
      className: 'slice-casual'
    },
    {
      value: running.filter(e => e.category === 'distance').length,
      className: 'slice-distance'
    },
    {
      value: running.filter(e => e.category === 'speed').length,
      className: 'slice-speed'
    }
  ];
}

function data(props) {
  const counts = calculateCounts(props).filter(p => p.value > 0);
  return {
    series: counts
  };
}

function options() {
  return { showLabel: false };
}

export default (props) => {
  return (
    <div className="row">
      <div className="col-xs-6 pie-chart">
        <ChartistGraph data={data(props)} options={options()} type={'Pie'} />
      </div>
      <div className="col-xs-6 pie-chart-legend">
        <table>
          <tbody>
            <tr>
              <td className="color slice-none"></td>
              <td className="description">No activity</td>
            </tr>
            <tr>
              <td className="color slice-x-train"></td>
              <td className="description">Cross-train</td>
            </tr>
            <tr>
              <td className="color slice-run-x-train"></td>
              <td className="description">Run + train</td>
            </tr>
            <tr>
              <td className="color slice-casual"></td>
              <td className="description">Casual</td>
            </tr>
            <tr>
              <td className="color slice-distance"></td>
              <td className="description">Distance</td>
            </tr>
            <tr>
              <td className="color slice-speed"></td>
              <td className="description">Speed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
