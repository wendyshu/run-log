/*eslint-disable no-unused-vars*/
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
/*eslint-enable no-unused-vars*/

import './featuredRun.scss';

import { Option } from 'run-log/components/option/option';
import { formatDate, formatDuration } from 'run-log/scripts/utils/dates';

function die(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function onlyTheBest(events) {
  const faves = events.filter(e => e.favorite);
  return (faves.length > 0 ? faves : events).filter(e => !!e.run);
}

const random = arr => arr[die(arr.length) - 1];

function selectFeaturedRun(events) {

  const categories = events
    .map(e => e.run.category)
    .reduce((a, n) => (a.includes(n) ? a : [n, ...a]), []);

  // TODO: what if no types?
  const category = random(categories);
  const selected = random(events.filter(e => e.run.category === category));

  switch (category) {
    case 'distance':
      return ['Featured Distance Run', selected];
    case 'speed':
      return ['Featured Speed Run', selected];
    case 'casual':
      return ['Featured Casual Run', selected];
  }
}

function toFeatures(event) {
  return {
    Date: Option(event.date)
      .map(formatDate)
      .orElse('-'),
    Distance: Option(event.run.distance)
      .map(d => d.toFixed(2) + ' mi')
      .orElse('-'),
    Duration: Option(event.run.duration)
      .map(formatDuration)
      .orElse('-'),
  };
}

export default props => {
  const events = onlyTheBest(props.events);

  if (events.length) {
    const [title, event] = selectFeaturedRun(events);
    const features = toFeatures(event);

    return (
      <Jumbotron>
        <h1>{title}</h1>
        <p className="notes">{event.notes}</p>
        <table className="features">
          <tbody>
            {Object.entries(features).map(e => (
              <tr key={e[0]}>
                <th>{e[0]}:</th>
                <td>{e[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Jumbotron>
    );
  } else {
    return null; // No featured run
  }
};
