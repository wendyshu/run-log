/*eslint-disable no-unused-vars*/
import React from 'react';
import BaseEventRow from './BaseEventRow';
/*eslint-enable no-unused-vars*/

import { formatDate, formatDuration } from 'run-log/scripts/utils/dates';
import { Option } from 'run-log/components/option/option';

function getHeartClasses(event) {
  return event.favorite
    ? 'glyphicon glyphicon-heart'
    : 'glyphicon glyphicon-heart-empty';
}

function getAppleClasses(event) {
  return event['@type'] === 'Run'
    ? 'glyphicon glyphicon-apple inactive'
    : 'glyphicon glyphicon-apple';
}

function joinOrElse(strings, defaultVal) {
  if (!!strings.length) {
    return strings.join(', ');
  } else {
    return defaultVal;
  }
}

function getIntervalsRunDetails(event) {
  const vals = [];
  Option(event.run.count)
    .map(c => c + ' intervals')
    .forEach((val) => vals.push(val));
  Option(event.run.intervalDuration)
    .map(formatDuration)
    .forEach((val) => vals.push(val));
  Option(event.run.intervalSpeed)
    .map(s => s + ' mph')
    .forEach((val) => vals.push(val));
  return joinOrElse(vals);
}

function getSteadyStateRunDetails(event) {
  const vals = [];
  Option(event.run.distance)
    .map(d => d + ' mi')
    .forEach((val) => vals.push(val));
  Option(event.run.duration)
    .map(formatDuration)
    .forEach((val) => vals.push(val));
  return joinOrElse(vals);
}

function getRunDetails(event) {
  const type = event.run['@type'];
  switch(type) {
    case 'Intervals':
      return getIntervalsRunDetails(event);
    case 'SteadyStateRun':
      return getSteadyStateRunDetails(event);
    default:
      throw new Error(`Unsupported run type: ${type}`);
  }
}

export default ({ event }) => (
  <BaseEventRow event={event}>
    {({ handleDelete, handleEdit, handleFavorite }) => {
      return (
        <tr className="activity-run">
          <td className="data-date">
            <span className="value">
              {Option(event.date)
                .map(formatDate)
                .orElse('-')}
            </span>
          </td>
          <td className="data-icons">
            <span className="glyphicon glyphicon-road" />
            <span className={getAppleClasses(event)} />
            <span className="glyphicon glyphicon-piggy-bank inactive" />
          </td>
          <td className="data-category">
            <span className="value">{Option(event.run && event.run.category).orElse('-')}</span>
          </td>
          <td className="data-run-details">
            <span className="value">
              {getRunDetails(event)}
            </span>
          </td>
          <td className="data-notes">
            <span className="value">{Option(event.notes).orElse('-')}</span>
          </td>
          <td className="data-actions">
            <a onClick={handleFavorite} className={getHeartClasses(event)} />
            <a onClick={handleEdit} className="glyphicon glyphicon-pencil" />
            <a
              onClick={handleDelete}
              className="glyphicon glyphicon glyphicon-trash"
            />
          </td>
        </tr>
      );
    }}
  </BaseEventRow>
);
