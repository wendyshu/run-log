/*eslint-disable no-unused-vars*/
import React from 'react';

import ChartistGraph from 'react-chartist';
/*eslint-enable no-unused-vars*/

// TODO: use percentage, not total days
const labelMaker = (totalDays) => (label, abbr) => totalDays <= 7 ? label : abbr;

function calculateCounts(props) {
  const crossTraining = props.events.filter(e => e['@type'] === 'CrossTrain');
  const running = props.events.filter(e => e['@type'] === 'Run');
  const labeler = labelMaker(props.totalDays);
  return [
    {
      name: ' ',
      value: props.totalDays - props.events.length,
      className: 'slice-none'
    },
    {
      name: labeler('x-train', 'x'),
      value: crossTraining.length,
      className: 'slice-x-train'
    },
    {
      name: labeler('casual', 'c'),
      value: running.filter(e => e.category === 'casual').length,
      className: 'slice-casual'
    },
    {
      name: labeler('distance', 'd'),
      value: running.filter(e => e.category === 'distance').length,
      className: 'slice-distance'
    },
    {
      name: labeler('speed', 's'),
      value: running.filter(e => e.category === 'speed').length,
      className: 'slice-speed'
    }
  ];
}

function data(props) {
  const counts = calculateCounts(props).filter(p => p.value > 0);
  return {
    labels: counts.map(p => p.name),
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
