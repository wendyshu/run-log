/*eslint-disable no-unused-vars*/
import React from 'react';
import DashboardStats from 'run-log/components/dashboard/stats/DashboardStats';
/*eslint-enable no-unused-vars*/

import { totalDistance } from 'run-log/scripts/utils/events';

export default props => {
  const stats = {
    name: 'Total Distance',
    value: `${totalDistance(props.events).toFixed(2)} mi`,
  };
  return <DashboardStats stats={stats} />;
};
