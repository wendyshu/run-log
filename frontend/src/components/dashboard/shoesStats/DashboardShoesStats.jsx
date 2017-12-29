/*eslint-disable no-unused-vars*/
import React from 'react';
import DashboardStats from 'run-log/components/dashboard/stats/DashboardStats';
/*eslint-enable no-unused-vars*/

import { Option, None } from 'run-log/components/option/option';
import { add } from 'run-log/scripts/utils/math';
import moment from 'moment';

function currentShoesEvents(events) {
  const idx = events.findIndex(ele => ele['@type'] === 'ChangeShoes');
  return idx === -1
    ? [events, None()]
    : [events.slice(0, idx), Option(events[idx])];
}

function age(events, shoesEvent) {
  const m = moment(shoesEvent.orElse(events[events.length - 1]).date);
  return moment().diff(m, 'days') === 0 ? 'Today' : m.fromNow(true);
}

function distance(events) {
  return events
    .map(e => e.distance)
    .filter(d => !!d) // filter missing distance
    .reduce(add, 0);
}

function recommendation(dist) {
  if (dist < 350) {
    return 'Keep Going';
  } else if (dist < 550) {
    return 'Monitor Wear';
  } else {
    return 'Change Soon';
  }
}

function stats(allEvents) {
  const [events, shoesEvent] = currentShoesEvents(allEvents);
  const d = distance(events);
  return [
    {
      name: 'Age',
      value: age(events, shoesEvent),
    },
    {
      name: 'Distance',
      value: d.toFixed(2) + ' mi',
    },
    {
      name: 'Recommendation',
      value: recommendation(d),
    },
  ];
}

export default props => {
  return (
    <div>
      {stats(props.events).map(s => <DashboardStats key={s.name} stats={s} />)}
    </div>
  );
};
