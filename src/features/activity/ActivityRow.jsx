/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/

import { formatDate, formatDuration } from '../../scripts/utils/dates';
import Optional from '../optional/optional';

export default (props) => (
  <tr>
    <td className="data-date">{Optional(props.event.date).map(formatDate).orElse('-')}</td>
    <td className="data-category">{Optional(props.event.category).orElse('-')}</td>
    <td className="data-distance">{Optional(props.event.distance).orElse('-')}</td>
    <td className="data-duration">{Optional(props.event.duration).map(formatDuration).orElse('-')}</td>
    <td className="data-notes">{Optional(props.event.notes).orElse('-')}</td>
    <td className="data-actions">
      <a href="#" className="glyphicon glyphicon-pencil"/>
      <a href="#" className="glyphicon glyphicon glyphicon-trash"/>
    </td>
  </tr>
);
