/*eslint-disable no-unused-vars*/
import React from 'react';
import DashboardStats from 'run-log/components/dashboard/stats/DashboardStats';
/*eslint-enable no-unused-vars*/

import { add } from 'run-log/scripts/utils/math';

function calcDistance(events) {
  return events
    .map(e => e.distance)
    .filter(d => !!d) // filter missing distance
    .reduce(add, 0);
}

export default props => {
  const stats = {
    name: 'Total Distance',
    value: `${calcDistance(props.events).toFixed(2)} mi`
  };
  return <DashboardStats stats={stats} />;
};
