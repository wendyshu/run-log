/*eslint-disable no-unused-vars*/
import React from 'react';

import ChartistGraph from 'react-chartist';
/*eslint-enable no-unused-vars*/

export default class DashboardPieChart extends React.Component {
  data() {
    return {
      labels: ['a', 'b', 'c', 'd', 'e'],
      series: [
        30, 30, 20, 10, 10
      ]
    };
  }

  options() {
    return {};
  }

  render() {
    return (
      <ChartistGraph data={this.data()} options={this.options()} type={'Pie'} />
    );
  } // render
}
