/*eslint-disable no-unused-vars*/
import React from 'react';
import DashboardStats from 'run-log/components/dashboard/stats/DashboardStats';
/*eslint-enable no-unused-vars*/

import { Option } from 'run-log/components/option/option';
import { secondsToMinuteMiles } from 'run-log/scripts/utils/dates';
import { averagePace } from 'run-log/scripts/utils/events';

export default props => {
  const stats = {
    name: 'Average Pace',
    value: Option(averagePace(props.events))
      .map(p => secondsToMinuteMiles(p) + ' mi')
      .orElse('-'),
  };
  return <DashboardStats stats={stats} />;
};
