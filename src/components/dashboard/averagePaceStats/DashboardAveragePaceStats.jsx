/*eslint-disable no-unused-vars*/
import React from 'react';
import DashboardStats from '../stats/DashboardStats.jsx';
/*eslint-enable no-unused-vars*/

import Optional from '../../optional/optional';
import { durationToSeconds, secondsToMinuteMiles } from '../../../scripts/utils/dates';
import { add } from '../../../scripts/utils/math';

function calcAveragePace(events) {
  const filtered = events.filter(e => e.distance && e.duration);
  if (!filtered.length) {
    return undefined;
  }
  const distance = filtered.map(e => e.distance).reduce(add, 0);
  const seconds = filtered.map(e => durationToSeconds(e.duration)).reduce(add, 0);
  // return 3600 * distance / seconds;
  return seconds / distance;
}

export default (props) => {
  const stats = {
    name: 'Average Pace',
    value: Optional(calcAveragePace(props.events)).map(p => secondsToMinuteMiles(p) + ' mi').orElse('-')
  };
  return (
    <DashboardStats stats={stats}/>
  );
};
