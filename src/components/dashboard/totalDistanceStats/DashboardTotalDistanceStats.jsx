/*eslint-disable no-unused-vars*/
import React from 'react';
import DashboardStats from '../stats/DashboardStats.jsx';
/*eslint-enable no-unused-vars*/

import { add } from '../../../scripts/utils/math';

function calcDistance(events) {
  return events.map(e => e.distance)
    .filter(d => !!d) // filter missing distance
    .reduce(add, 0);
}

export default (props) => {
  console.log('DEBUG: ',props);
  const stats = {
    name: 'Total Distance',
    value: `${calcDistance(props.events).toFixed(2)} mi`
  };
  return (
    <DashboardStats stats={stats}/>
  );
};
