/*eslint-disable no-unused-vars*/
import React from 'react';
import DashboardStats from 'run-log/components/dashboard/stats/DashboardStats';
/*eslint-enable no-unused-vars*/

import { Option } from 'run-log/components/option/option';
import {
  durationToSeconds,
  secondsToMinuteMiles,
} from 'run-log/scripts/utils/dates';
import { add } from 'run-log/scripts/utils/math';

function calcAveragePace(events) {
  const filtered = events.filter(e => e.run && e.run.distance && e.run.duration);
  if (!filtered.length) {
    return undefined;
  }
  const distance = filtered.map(e => e.run.distance).reduce(add, 0);
  const seconds = filtered
    .map(e => durationToSeconds(e.run.duration))
    .reduce(add, 0);
  // return 3600 * distance / seconds;
  return seconds / distance;
}

export default props => {
  const stats = {
    name: 'Average Pace',
    value: Option(calcAveragePace(props.events))
      .map(p => secondsToMinuteMiles(p) + ' mi')
      .orElse('-'),
  };
  return <DashboardStats stats={stats} />;
};
