/*eslint-disable no-unused-vars*/
import React from 'react';
import DashboardStats from 'run-log/components/dashboard/stats/DashboardStats';
/*eslint-enable no-unused-vars*/

import { Option } from 'run-log/components/option/option';
import {
  durationToSeconds,
  secondsToMinuteMiles,
} from 'run-log/scripts/utils/dates';
import { min } from 'run-log/scripts/utils/math';

function calcFastestPace(events) {
  const filtered = events.filter(e => e.distance && e.duration);
  if (!filtered.length) {
    return undefined;
  }
  return filtered
    .map(e => durationToSeconds(e.duration) / e.distance)
    .reduce(min);
}

export default props => {
  const stats = {
    name: 'Top Pace',
    value: Option(calcFastestPace(props.events))
      .map(p => secondsToMinuteMiles(p) + ' mi')
      .orElse('-'),
  };
  return <DashboardStats stats={stats} />;
};
