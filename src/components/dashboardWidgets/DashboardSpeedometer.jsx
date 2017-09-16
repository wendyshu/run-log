/*eslint-disable no-unused-vars*/
import React from 'react';
import ChartistGraph from 'react-chartist';
/*eslint-enable no-unused-vars*/

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

function data(events) {
  console.log('DEBUG:', events);
  return {
    labels: [ '', ' '],
    series: [
      {
        value: 62.5
      },
      {
        value: 37.5
      }
    ]
  };
}

export default (props) => {
  return (
    <div className="dashboard-speedometer">
      <div className="speed-achieved">6.25 mph</div>
      <div className="speed-goal">out of 10mph</div>
      <div className="svg-shrinkwrap">
        <ChartistGraph data={data(props.events)}
          options={options()}
          type={'Pie'} />
      </div>
    </div>
  );
};
