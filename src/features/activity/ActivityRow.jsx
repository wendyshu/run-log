/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/

import { formatDate, formatDuration } from '../../scripts/utils/dates';

export default (props) => (
  <tr>
    <td className="data-date">{formatDate(props.event.date)}</td>
    <td className="data-category">{props.event.category}</td>
    <td className="data-distance">{props.event.distance ? props.event.distance : '-'}</td>
    <td className="data-duration">{props.event.duration ? formatDuration(props.event.duration) : '-'}</td>
    <td className="data-notes">{props.event.notes ? props.event.notes : '-'}</td>
    <td className="data-actions">
      <a href="#" className="glyphicon glyphicon-pencil"/>
      <a href="#" className="glyphicon glyphicon glyphicon-trash"/>
    </td>
  </tr>
);
