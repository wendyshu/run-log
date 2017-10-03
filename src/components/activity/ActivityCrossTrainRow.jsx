/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/

import { formatDate } from '../../scripts/utils/dates';
import Optional from '../optional/optional';

export default (props) => (
  <tr className="activity-cross-train">
    <td className="data-date">{Optional(props.event.date).map(formatDate).orElse('-')}</td>
    <td className="data-icons"><span className="glyphicon glyphicon-road inactive"/> <span className="glyphicon glyphicon-apple"/></td>
    <td className="data-category"><span className="value">Cross-training</span></td>
    <td className="data-distance">-</td>
    <td className="data-duration">-</td>
    <td className="data-notes">{Optional(props.event.notes).orElse('-')}</td>
    <td className="data-actions">
      <a href="#" className="glyphicon glyphicon-heart-empty"/>
      <a href="#" className="glyphicon glyphicon-pencil"/>
      <a href="#" className="glyphicon glyphicon glyphicon-trash"/>
    </td>
  </tr>
);
