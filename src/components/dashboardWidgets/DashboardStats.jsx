/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/

import Optional from '../optional/optional';
import { durationToSeconds } from '../../scripts/utils/dates';
import { add, min } from '../../scripts/utils/math';

function calcFastestPace(events) {
  const filtered = events.filter(e => e.distance && e.duration);
  if (!filtered.length) {
    return undefined;
  }
  return filtered.map(e => durationToSeconds(e.duration) / (60 * e.distance))
    .reduce(min);
}

function calcAveragePace(events) {
  const filtered = events.filter(e => e.distance && e.duration);
  if (!filtered.length) {
    return undefined;
  }
  const distance = filtered.map(e => e.distance).reduce(add);
  const seconds = filtered.map(e => durationToSeconds(e.duration)).reduce(add);
  return 3600 * distance / seconds;
}

function calcDistance(events) {
  return events.map(e => e.distance)
    .filter(d => !!d) // filter missing distance
    .reduce(add, 0);
}

export default (props) => (
  <div className="widget-stats">
    <div className="widget-stat col-xs-4">
      <div className="name">Top Pace</div>
      <div className="value">{Optional(calcFastestPace(props.events)).map(p => p.toFixed(2) + ' mpm').orElse('N/A')}</div>
    </div>
    <div className="widget-stat col-xs-4">
      <div className="name">Avg. Pace</div>
      <div className="value">{Optional(calcAveragePace(props.events)).map(p => p.toFixed(2) + ' mph').orElse('N/A')}</div>
    </div>
    <div className="widget-stat col-xs-4">
      <div className="name">Total Distance</div>
      <div className="value">{calcDistance(props.events).toFixed(2)} mi</div>
    </div>
  </div>
);
