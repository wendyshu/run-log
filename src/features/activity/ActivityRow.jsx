/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/

import { formatDate, formatDuration } from '../../scripts/utils/dates';
import optional from '../../scripts/utils/optional';

export default (props) => (
  <tr>
    <td className="data-date">{optional(props.event.date).map(formatDate).orElse('-')}</td>
    <td className="data-category">{optional(props.event.category).orElse('-')}</td>
    <td className="data-distance">{optional(props.event.distance).orElse('-')}</td>
    <td className="data-duration">{optional(props.event.duration).map(formatDuration).orElse('-')}</td>
    <td className="data-notes">{optional(props.event.notes).orElse('-')}</td>
    <td className="data-actions">
      <a href="#" className="glyphicon glyphicon-pencil"/>
      <a href="#" className="glyphicon glyphicon glyphicon-trash"/>
    </td>
  </tr>
);
