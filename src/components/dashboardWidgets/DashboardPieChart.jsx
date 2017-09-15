/*eslint-disable no-unused-vars*/
import React from 'react';

import ChartistGraph from 'react-chartist';
/*eslint-enable no-unused-vars*/

function calculateCounts(props) {
  const crossTraining = props.events.filter(e => e['@type'] === 'CrossTrain');
  const running = props.events.filter(e => e['@type'] === 'Run');
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
    labels: Array(counts.length).fill(' '),
    series: counts
  };
}

function options() {
  return {};
}

export default (props) => {
  return (
    <div className="pie-chart">
      <ChartistGraph data={data(props)} options={options()} type={'Pie'} />
    </div>
  );
};
